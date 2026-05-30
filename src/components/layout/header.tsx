"use client";

import React from 'react';
import Link from 'next/link';
import { Sparkles, Code2 } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl mx-auto items-center justify-between px-4 sm:px-6">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2.5">
            <div className="bg-primary/10 p-2 rounded-lg border border-primary/20">
              <Code2 className="h-5 w-5 text-primary animate-pulse" />
            </div>
            <span className="font-bold font-headline text-lg tracking-tight inline-block uppercase bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              AI Style Advisor
            </span>
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 bg-secondary/30 px-3 py-1 rounded-full border border-secondary text-xs text-muted-foreground font-medium">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Powered by Groq IA</span>
          </div>
        </div>
      </div>
    </header>
  );
}
