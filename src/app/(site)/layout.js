import { ThemeProvider } from '@/components/layout/theme-provider';

import './globals.css';
import ScrollManager from '@/components/layout/scroll-manager';
import Footer from '@/components/layout/footer';

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
            <div className='app-shell'>
              <main
                id='scroll-container'
                className='scroll-controller centerize-controller'
              >
                <div className='width-controller spacing-padding-controller'>
                  {children}
                  <Footer />
                </div>
              </main>
            </div>
          </ThemeProvider>
        </ScrollManager>
      </body>
    </html>
  );
}
