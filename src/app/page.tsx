import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { AiAdvisorSection } from '@/components/sections/ai-advisor';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Luces de gradiente decorativas de fondo premium */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <Header />
      <main className="flex-grow flex items-center justify-center py-12 px-4 z-10">
        <AiAdvisorSection />
      </main>
      <Footer />
    </div>
  );
}
