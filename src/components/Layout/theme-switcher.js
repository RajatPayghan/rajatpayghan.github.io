import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from '@/constants/icons';
import { useIsMobile } from '../hooks/useIsMobile';

export default function ThemeSwitcherButtonIcon() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isMobile = useIsMobile();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // ⛔ Prevent mismatched rendering on the server

  return (
    <a>
      <div
        className='scale-90 cursor-pointer mb-16 md:mb-8'
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {resolvedTheme === 'light' ? (
          <div className='flex gap-1 items-center text-xs'>
            {isMobile ? (
              <span>Light Side</span>
            ) : (
              <span>Let there be Light (Side)</span>
            )}
            <Sun />
          </div>
        ) : (
          <div className='flex gap-1 items-center text-xs'>
            {isMobile ? (
              <span>Dark Side</span>
            ) : (
              <span>Welcome to the Dark Side</span>
            )}
            <Moon />
          </div>
        )}
      </div>
    </a>
  );
}
