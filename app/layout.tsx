import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: {
    default: 'ForgeLS Docs',
    template: '%s | ForgeLS Docs',
  },
  description: 'Documentation for ForgeLS, the language server for smart contract languages.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
