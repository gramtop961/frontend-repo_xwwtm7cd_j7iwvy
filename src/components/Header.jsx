export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          HelloWorld
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#cta" className="hover:text-white transition">Get Started</a>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer" className="hover:text-white transition">Docs</a>
        </nav>
        <a id="cta" href="#features" className="ml-6 inline-flex items-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-emerald-400 transition">
          Get Started
        </a>
      </div>
    </header>
  );
}
