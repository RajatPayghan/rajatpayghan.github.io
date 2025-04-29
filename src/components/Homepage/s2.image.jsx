import React, { useRef } from 'react';
import useShaderImageEffect from '@/components/hooks/useImageShaderEffect';
import '../css/shader.css';
import { useState, useEffect } from 'react';
import { NumberTicker } from '../Support/count-ticker';

export default function HomeImage({ delay }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const [grayscale, setGrayscale] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGrayscale(false);
    }, delay); // after 1 second

    return () => clearTimeout(timer);
  }, []);

  useShaderImageEffect(containerRef, imageRef);

  return (
    <div
      className={`relative w-full sm:h-96 h-80 transition-all duration-700 ${
        grayscale ? 'grayscale' : 'grayscale-0'
      }`}
    >
      {/* Image container */}
      <div
        ref={containerRef}
        id='imageContainer'
        className={`absolute inset-0 w-full h-full rounded-lg transition-all duration-700 ${
          grayscale ? 'grayscale' : 'grayscale-0'
        }`}
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
        className={`pointer-events-none absolute inset-0 w-full h-full flex items-end justify-end transition-all duration-700 ${
          grayscale ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <NumberTicker value={100} className='font-mono text-3xl text-white' />
      </div>
    </div>
  );
}
