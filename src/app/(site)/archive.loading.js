'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loading() {
  return (
    <div className='fixed flex items-center justify-center left-0 top-0 h-screen w-screen z-50 bg-neutral-50 dark:bg-neutral-950 font-instrument'>
      <div className='flex flex-col items-center gap-6'>
        <div className='text-center text-neutral-700 dark:text-neutral-300 animate-pulse'>
          <p className='text-lg md:text-4xl'>Rajat Payghan</p>
        </div>
      </div>
    </div>
  );
}
