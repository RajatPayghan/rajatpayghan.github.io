// Import Order
// - Built-in or core Node.js modules (not relevant here).
// - Third-party packages (e.g., React, Next.js utilities).
// - Alias imports or absolute imports from project paths (e.g., @/lib/...).
// - Relative imports (e.g., ./globals.css).
// - Side-effect imports (e.g., global styles) at the end (sometimes at the top depending on the style guide).

// Imports
// -----------------------------------------------------------------

import { ThemeProvider } from '@/components/layout/theme-provider';
import Dock from '@/components/layout/dock';
import { DOCK_ITEMS } from '@/lib/constants';

import './globals.css';
import ScrollManager from '@/components/layout/scroll-manager';
// -----------------------------------------------------------------

export const metadata = {
  title: 'Rajat Payghan',
  description: 'The portfolio of Rajat Payghan',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <ScrollManager>
          <ThemeProvider>
            <div className='app-shell'>
              <main id='scroll-container' className='scrollable-content'>
                {children}
              </main>
            </div>
          </ThemeProvider>
        </ScrollManager>
      </body>
    </html>
  );
}
