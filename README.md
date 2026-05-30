# AI Code Style Advisor

El AI Code Style Advisor es una aplicación web independiente de última generación que actúa como un consultor experto para desarrolladores frontend. Permite analizar, optimizar y refactorizar componentes de React para alinearlos con los estándares y mejores prácticas de los sistemas de diseño más populares del mercado.

El proyecto cuenta con una interfaz inmersiva inspirada en consolas de control militar e interfaces tácticas Cyberpunk Sci-Fi (HUD), fusionando el arte generativo técnico con modelos tridimensionales interactivos.

---

## Diseño Estético HUD & Arte Generativo

La interfaz ha sido diseñada meticulosamente para ofrecer una experiencia visual de ciencia ficción inmersiva y premium:

*   **Visualizador 3D Interactivo**: Integra un modelo en tiempo real de una Mantis Religiosa obtenido por microtomografía (CT Scan) renderizado en nube de puntos (Point Cloud) vía Sketchfab, aportando un elemento de arte biotecnológico generativo.
*   **Overlay Geométrico Dinámico**: Un lienzo de fondo vectorial (SVG) que renderiza rejillas de radar y círculos concéntricos de polaridad técnica.
*   **Efectos Visuales Retro-Futuristas**: Animación de scanlines dinámicas en toda la pantalla e iluminación ambiental mediante gradientes radiales difusos de color morado neón.
*   **Micro-animaciones Premium**: Transiciones de escala tridimensionales (scale(1.015)) y elevaciones sutiles (translateY(-2px)) con sombreado de brillo violeta cuando pasas el cursor sobre los paneles de control.
*   **Barras de Desplazamiento Temáticas**: Scrollbars minimalistas integradas en la paleta de colores violeta/morado cyberpunk.

---

## Funcionalidades Clave

1.  **Entrada y Validación de Código**: Espacio de trabajo dedicado con tipografía monoespaciada para pegar componentes React.
2.  **Selector de Sistema de Diseño Objetivo**:
    *   **Tailwind CSS**: Estilos basados en clases de utilidad rápidas.
    *   **Material UI**: Adopción de la librería y filosofía de Google.
    *   **Bootstrap**: Adaptación responsiva tradicional y limpia.
    *   **Shadcn/UI**: Integración premium de componentes accesibles construidos sobre Radix y Tailwind.
3.  **Procesamiento Seguro con IA**:
    *   Conexión directa mediante Next.js API Routes a la API de Groq usando el modelo ultra rápido llama-3.1-8b-instant.
    *   La comunicación se realiza del lado del servidor para proteger al 100% tu clave de API (GROQ_API_KEY) y evitar problemas de CORS en el navegador.
4.  **Entrega Dual de Resultados**:
    *   **Código Refactorizado**: Renderizado instantáneo listo para copiar y pegar.
    *   **Explicaciones Estructuradas**: Desglose dinámico en español de cada cambio y mejora aplicada al componente.

---

## Guía de Desarrollo

### Requisitos Previos
*   Node.js instalado en tu sistema.
*   Una clave de API gratuita de Groq.

### Instalación y Ejecución Local

1.  Clona o descarga este repositorio en tu máquina.
2.  Instala las dependencias necesarias:
    ```bash
    npm install
    ```
3.  Crea un archivo `.env.local` en la raíz del proyecto y agrega tu clave de Groq:
    ```env
    GROQ_API_KEY=tu_clave_api_de_groq_aqui
    ```
4.  Inicia el servidor de desarrollo de Next.js:
    ```bash
    npm run dev
    ```
5.  Abre tu navegador y entra en la siguiente dirección para experimentar la interfaz:
    [http://localhost:9002/ai-code-advisor.html](http://localhost:9002/ai-code-advisor.html)

---

## Estructura del Proyecto

*   `ai-code-advisor.html`: Archivo frontend del asesor en la raíz del proyecto para edición directa.
*   `public/`: Carpeta que contiene la copia estática servida por Next.js (`ai-code-advisor.html`).
*   `src/app/api/refactor/route.ts`: API endpoint del backend que procesa la solicitud de IA mediante Groq.
*   `src/app/`: Estructura del layout y páginas generales de Next.js.
