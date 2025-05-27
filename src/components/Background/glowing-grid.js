'use client';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes'; // ✅ Added for theme detection
import { FEATURE_FLAGS } from '@/constants/feature-flags';
import { useIsMobile } from '../Hooks/useIsMobile';
import { usePathname } from 'next/navigation';

export default function GlowingGridBackground() {
  const headPath = usePathname().split('/')[1];
  const ref = useRef(null);
  const isDesktop = !useIsMobile();
  const [mousePos, setMousePos] = useState({ x: -9999, y: -9999 });
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure this runs once after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Set up mouse tracking
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

  if (!mounted || !resolvedTheme) {
    return null;
  }

  const gridStrokeColour = resolvedTheme === 'dark' ? '141414' : 'f4f4f4';
  const glowStrokeColour = resolvedTheme === 'dark' ? '777777' : '777777';
  const opacity = resolvedTheme === 'dark' ? 0.75 : 1;

  return (
    <>
      {FEATURE_FLAGS.showGlowBG && isDesktop && (
        <div className='fixed inset-0 pointer-events-none'>
          {/* Grid layer */}
          <div
            ref={ref}
            className='absolute inset-0'
            style={{
              backgroundColor: 'transparent',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23${gridStrokeColour}' stroke-width='1'%3E%3Ccircle cx='16' cy='16' r='1' /%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
              backgroundSize: '32px 32px',
            }}
          />

          {/* Glow layer : HIDE ON ALL EXCEPT HOME */}

          {headPath === '' && (
            <div
              className='absolute inset-0'
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23${glowStrokeColour}' stroke-width='1'%3E%3Ccircle cx='16' cy='16' r='1' /%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '32px 32px',
                maskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%)`,
                WebkitMaskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 20%)`,
                mixBlendMode: 'overlay',
                opacity: `${opacity}`,
              }}
            />
          )}
        </div>
      )}
    </>
  );
}
