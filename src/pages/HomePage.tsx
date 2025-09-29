import React from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import { Typewriter } from '@/components/Typewriter';
export function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="text-left max-w-7xl mx-auto">
        <h1 className="font-mono text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter">
          {portfolioData.name}
        </h1>
        <Typewriter 
          text={portfolioData.tagline} 
          className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-4"
        />
      </div>
    </div>
  );
}