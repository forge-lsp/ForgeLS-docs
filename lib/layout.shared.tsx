import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { uiTranslations } from 'fumadocs-ui/i18n';
import { i18n } from '@/lib/i18n';

export const translations = i18n.translations().extend(uiTranslations());

export function baseOptions(locale: string = i18n.defaultLanguage): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2 font-semibold">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="ForgeLS" className="size-6 rounded-md" />
          ForgeLS
        </span>
      ),
      url: `/${locale}`,
    },
    githubUrl: 'https://github.com/forge-lsp/ForgeLS',
    // light mode only: no theme switch
    themeSwitch: { enabled: false },
  };
}
