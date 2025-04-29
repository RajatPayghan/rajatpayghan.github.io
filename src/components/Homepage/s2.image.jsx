import React, { useRef } from 'react';
import useShaderImageEffect from '@/components/hooks/useImageShaderEffect';
import '../css/shader.css';
import { useState, useEffect } from 'react';
import { NumberTicker } from '../Support/count-ticker';
import { cn } from '@/lib/utils';

export default function HomeImage({ delay }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoading(false);
    }, delay); // after 1 second
    return () => clearTimeout(timer);
  }, []);

  useShaderImageEffect(containerRef, imageRef);

  return (
    <div
      className={cn(
        `relative w-full sm:h-96 h-80`,
        `transition-all duration-700`,
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
          'pointer-events-none absolute inset-0 w-full h-full ',
          'flex items-end justify-end',
          'transition-all duration-700 ',
          `${isLoading ? 'opacity-100' : 'opacity-0'}`
        )}
      >
        <NumberTicker value={100} className='font-mono text-3xl text-white' />
      </div>
    </div>
  );
}
