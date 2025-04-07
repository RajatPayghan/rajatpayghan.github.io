import React, { useRef } from 'react';
import useShaderImageEffect from '@/components/hooks/useImageShaderEffect';
import '../css/shader.css';

export default function HomeImage() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useShaderImageEffect(containerRef, imageRef);

  return (
    <div
      ref={containerRef}
      id='imageContainer'
      className='w-full sm:h-96 h-80 rounded-lg'
    >
      <img
        ref={imageRef}
        src='/assets/profile.avif'
        alt='Profile'
        className='opacity-0'
      />
    </div>
  );
}
