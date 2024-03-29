import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '../styles/globals.css';
import { cn } from '@/lib/utils';
import Providers from '@/components/providers';
import { Toaster } from 'sonner';
import Header from '@/components/layout/Header';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(montserrat.className, 'relative', { 'debug-screens': process.env.NODE_ENV === 'development' })}>
        <Providers>
          <Header />
          <div className="mt-14">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
