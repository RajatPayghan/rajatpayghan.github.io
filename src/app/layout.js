import { ThemeProvider } from '@/components/Layout/theme-provider';

import '@/styles/globals.css';
import '@/styles/font-control.css';
import Footer from '@/components/Footer/v2.footer';
import GlowingGridBackground from '@/components/Background/glowing-grid';
import { cn } from '@/constants/utils';
import Dock from '@/components/Dock';
import Shade from '@/components/Background/shade';
import SmoothCursor from '@/components/SmoothCursor';
import { FEATURE_FLAGS } from '@/constants/feature-flags';

export const metadata = {
  title: 'Rajat Payghan',
  description: 'The portfolio of Rajat Payghan',
};

export default async function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <div className={cn('app-shell')}>
            <main id='scroll-container' className='container-wrapper'>
              <div className='container-inner'>
                <GlowingGridBackground />
                {children}
                <Footer />
                {FEATURE_FLAGS.showHomepageShade && <Shade />}
                {FEATURE_FLAGS.enableSmoothCursor && <SmoothCursor />}
              </div>
              {FEATURE_FLAGS.enableDock && <Dock />}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
