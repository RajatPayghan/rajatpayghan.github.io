// Import Order
// - Built-in or core Node.js modules (not relevant here).
// - Third-party packages (e.g., React, Next.js utilities).
// - Alias imports or absolute imports from project paths (e.g., @/lib/...).
// - Relative imports (e.g., ./globals.css).
// - Side-effect imports (e.g., global styles) at the end (sometimes at the top depending on the style guide).

// Imports
// -----------------------------------------------------------------
import localFont from 'next/font/local';

import { ThemeProvider } from '@/components/layout/theme-provider';
import { Dock } from '@/components/layout/dock';
import { DOCK_ITEMS } from '@/lib/constants';
import { FEATURE_FLAGS } from '@/lib/feature-flags';

import './globals.css';
// -----------------------------------------------------------------

const geistSans = localFont({
  src: '../../assets/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../../assets/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: 'Rajat Payghan',
  description: 'The portfolio of Rajat Payghan',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <main className='h-screen overflow-y-auto flex flex-1 bg-white dark:bg-neutral-950'>
          <ThemeProvider>
            {children}
            {FEATURE_FLAGS.enableDock && ( // From lib/feature-flags
              <Dock
                items={DOCK_ITEMS}
                panelHeight={70}
                baseItemSize={50}
                magnification={58}
              />
            )}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
