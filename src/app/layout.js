import localFont from "next/font/local";
import "./globals.css";
import { MenuContent } from "@/components/menu-content";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Rajat Payghan",
  description: "The portfolio of Rajat Payghan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {/* The Main Area */}
        <main className="h-screen bg-white"> 
          {/*  */}
          <div className="lg:flex h-screen">
            {/* Container for Left Menu */}
            <div className="relative lg:flex bg-neutral-50 min-h-screen p-4" suppressHydrationWarning>
              <MenuContent />
            </div>
            <div className="flex flex-1 justify-center max-h-screen" suppressHydrationWarning>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
