import './globals.css';
import type { ReactNode } from 'react';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata = {
  title: {
    default: 'ForgeLS Docs',
    template: '%s | ForgeLS Docs',
  },
  description: 'Documentation for ForgeLS, the language server for smart contract languages.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="bg-fd-background text-fd-foreground antialiased">{children}</body>
    </html>
  );
}
