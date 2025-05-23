import { ThemeProvider } from '@/components/Layout/theme-provider';

import '@/styles/globals.css';
import '@/styles/font-control.css';
import ScrollManager from '@/components/Layout/scroll-manager';
import Footer from '@/components/Footer/footer';
import GlowingGridBackground from '@/components/Background/glowing-grid';
import { cn } from '@/constants/utils';

export const metadata = {
  title: 'Rajat Payghan',
  description: 'The portfolio of Rajat Payghan',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ScrollManager>
          <ThemeProvider>
            <div className={cn('app-shell')}>
              <main
                id='scroll-container'
                className='scroll-controller centerize-controller'
              >
                <div className='width-controller spacing-padding-controller'>
                  <GlowingGridBackground />
                  {children}
                  <Footer className='z-20' />
                </div>
              </main>
            </div>
          </ThemeProvider>
        </ScrollManager>
      </body>
    </html>
  );
}
