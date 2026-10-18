import Link from 'next/link';
import { Tabs, Tab } from 'fumadocs-ui/components/tabs';
import { i18n } from '@/lib/i18n';

const copy = {
  en: {
    announcement: 'v0.2.0-beta — Solidity support in beta',
    titleA: 'The language server',
    titleB: 'for smart contracts.',
    lead: 'ForgeLS speaks Language Server Protocol over stdio. Diagnostics, hover, completion, and goto-definition for Solidity — in any LSP-capable editor, with zero editor plugins.',
    getStarted: 'Get Started',
    github: 'GitHub',
    installLabel: 'Install',
    editorsTitle: 'Works with your editor',
    editorsBody: 'Any LSP client. No editor-specific plugin required.',
    featuresTitle: 'Everything an LSP should do',
    features: [
      { n: '01', t: 'Diagnostics that keep up', d: 'Debounced publish on every keystroke, cleared when the file closes. UTF-16 positions your editor understands.' },
      { n: '02', t: 'Hover and goto-definition', d: 'Types, NatSpec docs, and jump-to-declaration — including symbols imported from other files.' },
      { n: '03', t: 'Completion everywhere', d: 'Contract members, in-scope symbols, builtin types, and cross-file exports with origin hints.' },
      { n: '04', t: 'Multi-file project index', d: 'Imports rebuild the project index on open and change. Dependents refresh when a target edits.' },
      { n: '05', t: 'Foundry-aware remappings', d: 'Reads foundry.toml remappings and libs layout, so forge-std imports resolve out of the box.' },
      { n: '06', t: 'Multi-root workspaces', d: 'Strict LSP lifecycle across workspace folders. Stale roots are evicted, never haunt you.' },
    ],
    codeTitle: 'Configured in code, not clicks',
    codeBody: 'One binary, one optional TOML file. Point your editor at forgels over stdio and you are done.',
    openTitle: 'Built in the open',
    openBody: 'ForgeLS is MIT/Apache-2.0 Rust, developed as a workspace of small focused crates. Solidity today, Noir and Cairo next.',
    openCta: 'Star on GitHub',
    footerDocs: 'Docs',
    footerProject: 'Project',
    switchLabel: 'Language:',
  },
  id: {
    announcement: 'v0.2.0-beta — Dukungan Solidity dalam beta',
    titleA: 'Language server',
    titleB: 'untuk smart contract.',
    lead: 'ForgeLS berbicara Language Server Protocol lewat stdio. Diagnostics, hover, completion, dan goto-definition untuk Solidity — di editor apa pun yang mendukung LSP, tanpa plugin khusus.',
    getStarted: 'Mulai',
    github: 'GitHub',
    installLabel: 'Instal',
    editorsTitle: 'Cocok dengan editormu',
    editorsBody: 'Klien LSP apa pun. Tanpa plugin khusus editor.',
    featuresTitle: 'Semua yang seharusnya dilakukan LSP',
    features: [
      { n: '01', t: 'Diagnostics yang mengimbangi', d: 'Publish debounce di setiap ketikan, dibersihkan saat file ditutup. Posisi UTF-16 yang dimengerti editor.' },
      { n: '02', t: 'Hover dan goto-definition', d: 'Tipe, docs NatSpec, dan lompat-ke-deklarasi — termasuk simbol yang diimpor dari file lain.' },
      { n: '03', t: 'Completion di mana saja', d: 'Member contract, simbol dalam scope, tipe builtin, dan export lintas file dengan petunjuk asal.' },
      { n: '04', t: 'Indeks proyek multi-file', d: 'Import membangun ulang indeks proyek saat dibuka dan diubah. Dependen di-refresh saat target diedit.' },
      { n: '05', t: 'Memahami remapping Foundry', d: 'Membaca remapping dan layout libs foundry.toml, sehingga import forge-std langsung terpecahkan.' },
      { n: '06', t: 'Workspace multi-root', d: 'Lifecycle LSP ketat lintas folder workspace. Root basi dikeluarkan, tidak pernah menghantui.' },
    ],
    codeTitle: 'Dikonfigurasi di kode, bukan klik',
    codeBody: 'Satu binary, satu file TOML opsional. Arahkan editor ke forgels lewat stdio dan selesai.',
    openTitle: 'Dibangun terbuka',
    openBody: 'ForgeLS adalah Rust MIT/Apache-2.0, dikembangkan sebagai workspace crate kecil yang fokus. Solidity hari ini, Noir dan Cairo berikutnya.',
    openCta: 'Beri bintang di GitHub',
    footerDocs: 'Docs',
    footerProject: 'Proyek',
    switchLabel: 'Bahasa:',
  },
} as const;

const editors = ['VS Code', 'Neovim', 'Zed', 'Emacs', 'Helix', 'Sublime Text'];

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = copy[lang as keyof typeof copy] ?? copy.en;
  const base = lang === i18n.defaultLanguage ? '/docs' : `/${lang}/docs`;

  return (
    <main className="min-h-screen bg-fd-background text-fd-foreground">
      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-fd-border bg-fd-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4">
          <Link href={lang === i18n.defaultLanguage ? '/' : `/${lang}`} className="inline-flex items-center gap-2 font-semibold">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="ForgeLS" className="size-6 rounded-md" />
            ForgeLS
          </Link>
          <nav className="hidden items-center gap-5 text-sm text-fd-muted-foreground sm:flex">
            <Link href={base} className="transition-colors hover:text-fd-foreground">Docs</Link>
            <Link href={`${base}/installation`} className="transition-colors hover:text-fd-foreground">{t.installLabel}</Link>
            <Link href={`${base}/quickstart`} className="transition-colors hover:text-fd-foreground">Quickstart</Link>
          </nav>
          <div className="ms-auto flex items-center gap-2">
            <Link
              href="https://github.com/forge-lsp/ForgeLS"
              className="rounded-md px-3 py-1.5 text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground"
            >
              {t.github}
            </Link>
            <Link
              href={`${base}/installation`}
              className="rounded-md bg-fd-primary px-4 py-1.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.getStarted}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-4 pt-20 pb-12 text-center sm:pt-28">
        <Link
          href={base}
          className="inline-flex items-center gap-1.5 rounded-full border border-fd-border bg-fd-muted px-3.5 py-1 text-[13px] text-fd-muted-foreground transition-colors hover:text-fd-foreground"
        >
          {t.announcement}
          <span aria-hidden="true">→</span>
        </Link>
        <h1 className="pt-5 text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
          {t.titleA}
          <br />
          <span className="text-blue-500 dark:text-blue-400">{t.titleB}</span>
        </h1>
        <p className="mx-auto max-w-2xl pt-5 text-base text-pretty text-fd-muted-foreground sm:text-lg">{t.lead}</p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-7">
          <Link
            href={`${base}/installation`}
            className="rounded-lg bg-fd-primary px-5 py-2.5 text-[15px] font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.getStarted}
          </Link>
          <Link
            href="https://github.com/forge-lsp/ForgeLS"
            className="rounded-lg border border-fd-border px-5 py-2.5 text-[15px] font-medium transition-colors hover:bg-fd-accent"
          >
            {t.github}
          </Link>
        </div>
        <div className="mx-auto mt-8 max-w-xl overflow-hidden rounded-xl border border-fd-border bg-fd-card text-start">
          <div className="border-b border-fd-border px-4 py-2 text-xs text-fd-muted-foreground">terminal</div>
          <pre className="overflow-x-auto p-4 font-mono text-sm">
            <code>
              <span className="text-fd-muted-foreground">$ </span>cargo install --path crates/forgels
            </code>
          </pre>
        </div>
      </section>

      {/* Editors */}
      <section className="mx-auto max-w-6xl px-4 py-14 text-center">
        <p className="text-sm font-medium text-fd-muted-foreground">{t.editorsTitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-5 text-lg font-semibold text-fd-muted-foreground">
          {editors.map((e) => (
            <span key={e} className="transition-colors hover:text-fd-foreground">{e}</span>
          ))}
        </div>
        <p className="pt-3 text-sm text-fd-muted-foreground">{t.editorsBody}</p>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">{t.featuresTitle}</h2>
        <div className="grid gap-4 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.map((f) => (
            <Link
              key={f.n}
              href={base}
              className="group rounded-xl border border-fd-border bg-fd-card p-5 transition-colors hover:border-blue-500/50"
            >
              <div className="font-mono text-sm text-blue-500 dark:text-blue-400">{f.n}</div>
              <h3 className="pt-2 font-medium">{f.t}</h3>
              <p className="pt-1.5 text-sm text-fd-muted-foreground">{f.d}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Code */}
      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">{t.codeTitle}</h2>
        <p className="mx-auto max-w-2xl pt-3 text-center text-fd-muted-foreground">{t.codeBody}</p>
        <div className="pt-8">
          <Tabs items={['Counter.sol', 'forgels.toml', 'editor']}>
            <Tab value="Counter.sol">
              <pre className="overflow-x-auto rounded-xl border border-fd-border bg-fd-card p-4 font-mono text-sm">
                <code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 public total;

    function add(uint256 amount) public {
        total += amount;
    }
}`}</code>
              </pre>
            </Tab>
            <Tab value="forgels.toml">
              <pre className="overflow-x-auto rounded-xl border border-fd-border bg-fd-card p-4 font-mono text-sm">
                <code>{`publish_delay_ms = 200
log_level = "warn"`}</code>
              </pre>
            </Tab>
            <Tab value="editor">
              <pre className="overflow-x-auto rounded-xl border border-fd-border bg-fd-card p-4 font-mono text-sm">
                <code>{`command:   forgels
transport:  stdio
language:   solidity (*.sol)`}</code>
              </pre>
            </Tab>
          </Tabs>
        </div>
      </section>

      {/* Open source */}
      <section className="mx-auto max-w-4xl px-4 py-14 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t.openTitle}</h2>
        <p className="mx-auto max-w-2xl pt-3 text-fd-muted-foreground">{t.openBody}</p>
        <Link
          href="https://github.com/forge-lsp/ForgeLS"
          className="mt-6 inline-block rounded-lg border border-fd-border px-5 py-2.5 text-[15px] font-medium transition-colors hover:bg-fd-accent"
        >
          {t.openCta}
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-fd-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row">
          <div className="flex items-center gap-2 font-semibold">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="ForgeLS" className="size-6 rounded-md" />
            ForgeLS
          </div>
          <nav className="flex gap-12 text-sm sm:ms-auto">
            <div className="flex flex-col gap-2.5">
              <span className="font-medium">{t.footerDocs}</span>
              <Link href={base} className="text-fd-muted-foreground hover:text-fd-foreground">Docs</Link>
              <Link href={`${base}/installation`} className="text-fd-muted-foreground hover:text-fd-foreground">{t.installLabel}</Link>
              <Link href={`${base}/configuration`} className="text-fd-muted-foreground hover:text-fd-foreground">Configuration</Link>
            </div>
            <div className="flex flex-col gap-2.5">
              <span className="font-medium">{t.footerProject}</span>
              <Link href="https://github.com/forge-lsp/ForgeLS" className="text-fd-muted-foreground hover:text-fd-foreground">{t.github}</Link>
              <Link href="https://github.com/forge-lsp/ForgeLS-docs" className="text-fd-muted-foreground hover:text-fd-foreground">Docs repo</Link>
            </div>
          </nav>
        </div>
        <div className="border-t border-fd-border">
          <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4 text-sm text-fd-muted-foreground">
            {t.switchLabel}
            {i18n.languages.map((l) => (
              <Link key={l} href={l === i18n.defaultLanguage ? '/' : `/${l}`} className="hover:text-fd-foreground">
                {l === 'en' ? 'English' : 'Indonesia'}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
