import localFont from 'next/font/local';
import './globals.css';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ThemeProvider } from '@/components/theme-provider';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
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
          <ThemeProvider>{children}</ThemeProvider>
        </main>
      </body>
    </html>
  );
}
