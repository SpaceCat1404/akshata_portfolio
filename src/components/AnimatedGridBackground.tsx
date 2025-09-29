import React from 'react';
import { cn } from '@/lib/utils';
const AnimatedGridBackground: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn("fixed top-0 left-0 w-full h-full -z-10 overflow-hidden", className)}>
      <div
        className="absolute inset-0 bg-brutal-white"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0000001a 1px, transparent 1px),
            linear-gradient(to bottom, #0000001a 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};
export default AnimatedGridBackground;