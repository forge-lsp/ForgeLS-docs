import Link from 'next/link';
import { i18n } from '@/lib/i18n';

const copy = {
  en: {
    badge: 'v0.2.0-beta',
    title: 'ForgeLS: language server for smart contracts',
    lead: 'A Language Server Protocol server for smart contract languages. It runs over stdio and speaks to any LSP-capable editor. Solidity is supported in beta, Noir and Cairo are on the way.',
    getStarted: 'Get started',
    readDocs: 'Read the docs',
    installTitle: 'Installation',
    installBody: 'Install with Cargo and point your editor at the forgels binary.',
    quickstartTitle: 'Quickstart',
    quickstartBody: 'Open a Solidity file and get diagnostics, hover, completion, and goto-definition.',
    configTitle: 'Configuration',
    configBody: 'Tune diagnostics, log levels, and Foundry remappings with forgels.toml.',
    switchLabel: 'Language:',
  },
  id: {
    badge: 'v0.2.0-beta',
    title: 'ForgeLS: language server untuk smart contract',
    lead: 'Server Language Server Protocol untuk bahasa smart contract. Berjalan lewat stdio dan terhubung ke editor apa pun yang mendukung LSP. Solidity didukung dalam beta, Noir dan Cairo menyusul.',
    getStarted: 'Mulai',
    readDocs: 'Baca dokumentasi',
    installTitle: 'Instalasi',
    installBody: 'Instal dengan Cargo lalu arahkan editor ke binary forgels.',
    quickstartTitle: 'Mulai cepat',
    quickstartBody: 'Buka file Solidity dan dapatkan diagnostics, hover, completion, dan goto-definition.',
    configTitle: 'Konfigurasi',
    configBody: 'Atur diagnostics, level log, dan remapping Foundry lewat forgels.toml.',
    switchLabel: 'Bahasa:',
  },
} as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = copy[lang as keyof typeof copy] ?? copy.en;
  const base = lang === i18n.defaultLanguage ? '/docs' : `/${lang}/docs`;

  return (
    <main className="landing">
      <span className="badge">{t.badge}</span>
      <h1>{t.title}</h1>
      <p className="lead">{t.lead}</p>
      <div className="actions">
        <Link className="btn btn-primary" href={base}>
          {t.getStarted}
        </Link>
        <Link className="btn" href={`${base}/installation`}>
          {t.readDocs}
        </Link>
      </div>
      <pre>
        <code>cargo install --path crates/forgels</code>
      </pre>
      <div className="cards">
        <Link className="card" href={`${base}/installation`}>
          <h3>{t.installTitle}</h3>
          <p>{t.installBody}</p>
        </Link>
        <Link className="card" href={`${base}/quickstart`}>
          <h3>{t.quickstartTitle}</h3>
          <p>{t.quickstartBody}</p>
        </Link>
        <Link className="card" href={`${base}/configuration`}>
          <h3>{t.configTitle}</h3>
          <p>{t.configBody}</p>
        </Link>
      </div>
      <div className="lang-switch">
        {t.switchLabel}{' '}
        {i18n.languages.map((l) => (
          <Link key={l} href={l === i18n.defaultLanguage ? '/' : `/${l}`}>
            {l === 'en' ? 'English' : 'Indonesia'}
          </Link>
        ))}
      </div>
    </main>
  );
}
