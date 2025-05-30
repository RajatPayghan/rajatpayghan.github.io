'use client';
// Imports
// -----------------------------------------------------------------
import React, { useRef } from 'react';

import useShaderImageEffect from '@/components/Hooks/useImageShaderEffect';
import { cn } from '@/constants/utils';

import '@/styles/shader.css';
// -----------------------------------------------------------------

export default function HomeImageNoload() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useShaderImageEffect(containerRef, imageRef);

  return (
    <div
      ref={containerRef}
      id='imageContainer'
      className={cn(
        'inset-0 w-full h-full rounded-lg',
        'transition-all duration-700'
      )}
    >
      {/* Image container */}
      <img
        ref={imageRef}
        src='/assets/misc-images/profile.avif'
        alt='Profile'
        className='w-full h-full object-cover opacity-0'
      />
    </div>
  );
}
