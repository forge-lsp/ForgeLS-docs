import { RootProvider } from 'fumadocs-ui/provider/next';
import { i18nProvider } from 'fumadocs-ui/i18n';
import { translations } from '@/lib/layout.shared';
import { i18n } from '@/lib/i18n';

import type { ReactNode } from 'react';

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return (
    <RootProvider
      i18n={i18nProvider(translations, lang)}
      theme={{ forcedTheme: 'light' }}
    >
      <div className="flex flex-col min-h-screen">{children}</div>
    </RootProvider>
  );
}
