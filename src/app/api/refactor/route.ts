import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { code, style } = await req.json();

    if (!code || !style) {
      return NextResponse.json({ error: 'Faltan el código o el estilo.' }, { status: 400 });
    }

    const systemPrompt = `Actúa como un experto en React y el sistema de diseño "${style}".
Tu única tarea es analizar el código de usuario que te proporcionarán y devolver un objeto JSON con dos claves: "styledCodeSnippet" y "explanation".
- "styledCodeSnippet": El código original, pero refactorizado para seguir las mejores prácticas de ${style}.
- "explanation": Una explicación en español de los cambios realizados.

Ejemplo de la respuesta exacta que debes dar:
{
  "styledCodeSnippet": "function MiComponente() { return <div className='p-4'>Hola</div>; }",
  "explanation": "Se usó la clase 'p-4' de Tailwind para añadir padding."
}

No escribas nada más que el objeto JSON. Sin saludos, sin explicaciones, sin bloques de código markdown.`;

    const userPrompt = `Analiza y mejora este código usando ${style}:
\`\`\`tsx
${code}
\`\`\`

Ahora, responde únicamente con el objeto JSON solicitado.`;

    const apiKey = process.env.GROQ_API_KEY || process.env.NEXT_PUBLIC_GROQ_API_KEY;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.1,
        max_tokens: 4096,
      }),
    });

    if (!response.ok) {
      throw new Error('Error al contactar la API de Groq');
    }

    const data = await response.json();
    const rawResponse = data.choices[0].message.content;

    // Limpieza de formato markdown de bloques de código json
    let cleanResponse = rawResponse.replace(/```json|```/g, '').trim();

    // Buscamos el primer '{' y el último '}' en caso de que la IA haya agregado texto de relleno
    const firstBrace = cleanResponse.indexOf('{');
    const lastBrace = cleanResponse.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace !== -1) {
      cleanResponse = cleanResponse.substring(firstBrace, lastBrace + 1);
    }

    // Intentamos parsear para validar que sea JSON válido
    let parsedResponse;
    try {
      parsedResponse = JSON.parse(cleanResponse);
    } catch (directParseError) {
      // Si falla, escapamos los saltos de línea reales que estén dentro de las cadenas de texto JSON
      const escapedResponse = escapeNewlinesInJSONStrings(cleanResponse);
      try {
        parsedResponse = JSON.parse(escapedResponse);
      } catch (escapedParseError) {
        console.error("Error al parsear el JSON de Groq:", rawResponse);
        return NextResponse.json({ error: 'La IA devolvió una respuesta que no es un JSON válido.' }, { status: 500 });
      }
    }

    return NextResponse.json(parsedResponse);

  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message || 'Error del servidor al refactorizar.' }, { status: 500 });
  }
}

function escapeNewlinesInJSONStrings(jsonStr: string): string {
  let result = '';
  let inString = false;
  let isEscaped = false;

  for (let i = 0; i < jsonStr.length; i++) {
    const char = jsonStr[i];

    if (char === '"' && !isEscaped) {
      inString = !inString;
    }

    if (char === '\n' && inString) {
      result += '\\n';
    } else if (char === '\r' && inString) {
      result += '\\r';
    } else {
      result += char;
    }

    if (char === '\\' && !isEscaped) {
      isEscaped = true;
    } else {
      isEscaped = false;
    }
  }

  return result;
}
