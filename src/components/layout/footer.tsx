import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-card py-6 z-10 relative">
      <div className="container max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} AI Style Advisor. Creado para desarrolladores.
        </p>
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/noomesk" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/angie-paola-plazas-a008202a0/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
