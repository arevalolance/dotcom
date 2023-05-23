import { MainNav } from '@/components/main-nav';
import './globals.css';
import { Inter } from 'next/font/google';
import { SiteHeader } from '@/components/site-header';
import { TailwindIndicator } from '@/components/tailwind-indicator';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Lance Arevalo',
  description: 'Work in Progress',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <TailwindIndicator />
      </body>
    </html>
  );
}
