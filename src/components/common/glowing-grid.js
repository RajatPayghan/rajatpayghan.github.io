'use client';
import { useEffect, useRef, useState } from 'react';

export default function GlowingGridBackground() {
  const ref = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className='fixed inset-0 pointer-events-none'>
      {/* Grid layer */}
      <div
        ref={ref}
        className='absolute inset-0'
        style={{
          backgroundColor: 'transparent',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%230c0c0c' stroke-width='1'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Glow only on grid via blend mask */}
      <div
        className='absolute inset-0'
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23ffffff' stroke-width='1'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '32px 32px',
          maskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%)`,
          WebkitMaskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%)`,
          mixBlendMode: 'overlay',
          opacity: 0.6,
        }}
      />
    </div>
  );
}
