'use client';

// Imports
// -----------------------------------------------------------------
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { FEATURE_FLAGS } from '@/constants/feature-flags';
// -----------------------------------------------------------------

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute='class'
      defaultTheme={FEATURE_FLAGS.themeControls.defaultTheme} // From lib/feature-flags
      enableSystem={FEATURE_FLAGS.themeControls.enableSystem} // From lib/feature-flags
    >
      {children}
    </NextThemesProvider>
  );
}
