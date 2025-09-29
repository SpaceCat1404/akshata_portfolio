import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
}
export const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 50, className }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, text, speed]);
  return (
    <p className={cn("relative", className)}>
      <span className="text-brutal-purple mr-2">&gt;</span>
      {displayedText}
      <motion.span
        className="inline-block w-3 h-8 sm:h-10 bg-brutal-green ml-1"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </p>
  );
};