'use client';

// Imports
// -----------------------------------------------------------------
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { FEATURE_FLAGS } from '@/lib/feature-flags';
// -----------------------------------------------------------------

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute='class'
      defaultTheme={FEATURE_FLAGS.darkMode.defaultTheme} // From lib/feature-flags
      enableSystem={FEATURE_FLAGS.darkMode.enableSystem} // From lib/feature-flags
    >
      {children}
    </NextThemesProvider>
  );
}
