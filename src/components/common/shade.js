import React from 'react';
import { cn } from '@/lib/utils';

export default function Shade() {
  return (
    <>
      <div
        className={cn(
          'pointer-events-none',
          'fixed bottom-0 left-0 right-0 h-[8vh] md:h-[10vh] z-20', // Positioning
          'bg-gradient-to-t from-white/100 to-white/0 dark:from-neutral-950/100 dark:to-neutral-950/0' // Colour
        )}
      />
      <div
        className={cn(
          'pointer-events-none',
          'fixed top-0 left-0 right-0 h-[8vh] md:h-[10vh] z-20', // Positioning
          'bg-gradient-to-b from-white/100 to-white/0 dark:from-neutral-950/100 dark:to-neutral-950/0' // Colour
        )}
      />
    </>
  );
}
