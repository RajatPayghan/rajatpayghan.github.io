import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from '@/lib/icons';

export default function ThemeSwitcherButtonIcon() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // ⛔ Prevent mismatched rendering on the server

  return (
    <a>
      <div
        className='scale-90 cursor-pointer'
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        {resolvedTheme === 'dark' ? <Sun /> : <Moon />}
      </div>
    </a>
  );
}
