import React from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, delay = 0 }) => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay,
      },
    },
  };
  return (
    <motion.section
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
};