import React from 'react';
import { cn } from '@/constants/utils';
import '@/styles/globals.css';

export default function Shade() {
  return (
    <>
      <div
        // Bottom Shade
        className={cn(
          'pointer-events-none',
          'fixed bottom-0 left-0 right-0 h-[8vh] md:h-[10vh]', // Positioning
          'bg-gradient-to-t from-white/100 to-white/0 dark:from-neutral-950/100 dark:to-neutral-950/0' // Colour
        )}
      />
      <div
        // Top Shade
        className={cn(
          'pointer-events-none',
          'fixed top-0 left-0 right-0 h-[8vh] md:h-[10vh]', // Positioning
          'bg-gradient-to-b from-white/100 to-white/0 dark:from-neutral-950/100 dark:to-neutral-950/0' // Colour
        )}
      />
    </>
  );
}
