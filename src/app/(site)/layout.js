import { ThemeProvider } from '@/components/Layout/theme-provider';

import '@/styles/globals.css';
import '@/styles/font-control.css';
import Footer from '@/components/Footer/footer';
import GlowingGridBackground from '@/components/Background/glowing-grid';
import { cn } from '@/constants/utils';
import { Suspense } from 'react';
import Loading from './loading';
import Dock from '@/components/Dock';

export const metadata = {
  title: 'Rajat Payghan',
  description: 'The portfolio of Rajat Payghan',
};

export default async function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Suspense fallback={<Loading />}>
            <div className={cn('app-shell')}>
              <main
                id='scroll-container'
                className='scroll-controller centerize-controller'
              >
                <div className='width-controller spacing-padding-controller'>
                  <GlowingGridBackground />
                  {children}
                  <Footer />
                </div>
                {/* <Dock /> */}
              </main>
            </div>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
