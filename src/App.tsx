import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/Header';
import { CommandPalette } from '@/components/CommandPalette';
import AnimatedGridBackground from '@/components/AnimatedGridBackground';
import { Toaster } from '@/components/ui/sonner';
function App() {
  return (
    <div className="bg-brutal-white min-h-screen font-sans relative">
      <AnimatedGridBackground />
      <Header />
      <main className="relative z-10">
        <Outlet />
      </main>
      <CommandPalette />
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#F5F5F5',
            border: '2px solid #000',
            borderRadius: '0',
            fontFamily: 'JetBrains Mono, monospace',
            color: '#000',
          },
        }}
      />
    </div>
  );
}
export default App;