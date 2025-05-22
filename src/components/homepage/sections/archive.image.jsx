// Imports
// -----------------------------------------------------------------
import React, { useRef } from 'react';
import { useState, useEffect } from 'react';

import useShaderImageEffect from '@/components/hooks/useImageShaderEffect';
import { cn } from '@/constants/utils';
import { NumberTicker } from '@/components/homepage/count-ticker';

import '@/styles/shader.css';
import { FEATURE_FLAGS } from '@/constants/feature-flags';
const TRANSITION_ACTIVE = FEATURE_FLAGS.loading.loadingActive;
// -----------------------------------------------------------------

export default function HomeImage({ delay }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const [isLoading, setisLoading] = useState(true);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(false);
    }, delay); // after 1 second
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Animate to right after mount
    const timeout = setTimeout(() => {
      setPosition(100);
    }, 100); // slight delay to allow initial render

    return () => clearTimeout(timeout);
  }, []);

  useShaderImageEffect(containerRef, imageRef);

  return (
    <div
      className={cn(
        `relative w-full sm:h-96 h-80`,
        `${
          TRANSITION_ACTIVE ? 'transition-all duration-700' : 'transition-none'
        }`,
        `${isLoading ? 'grayscale' : 'grayscale-0'}`,
        `${isLoading ? 'scale-105' : 'scale-100'}`,
        `${isLoading ? '-top-16' : 'top-0'}`,
        `${isLoading ? 'md:-top-16' : 'md:top-0'}`
      )}
    >
      {/* Image container */}
      <div
        ref={containerRef}
        id='imageContainer'
        className={cn(
          'absolute inset-0 w-full h-full rounded-lg',
          'transition-all duration-700',
          ` ${isLoading ? 'isLoading' : 'isLoading-0'}`
        )}
      >
        <img
          ref={imageRef}
          src='/assets/profile.avif'
          alt='Profile'
          className='w-full h-full object-cover opacity-0'
        />
      </div>

      {/* NumberTicker container */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0 w-full h-full',
          'transition-opacity duration-700',
          `${isLoading ? 'opacity-100' : 'opacity-0'}`
        )}
      >
        <NumberTicker
          value={100}
          className={cn(
            'font-mono text-4xl text-white',
            'transition-all ease-in-out  duration-700 absolute bottom-0'
          )}
          style={{
            right: `${100 - position}%`,
            transitionProperty: 'right',
            transitionDuration: `${delay + 200}ms`,
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        />
      </div>
    </div>
  );
}
