'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute='class'
      defaultTheme='light' // this makes dark the default
      enableSystem={false} // ignore system preference
    >
      {children}
    </NextThemesProvider>
  );
}
