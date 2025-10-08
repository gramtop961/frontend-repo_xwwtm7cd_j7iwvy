import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_60%)] pointer-events-none"></div>
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
          <Rocket className="h-3.5 w-3.5 text-emerald-400" />
          <span>Welcome to your Hello World landing page</span>
        </div>
        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold tracking-tight">
          Hello, World!
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/70">
          A crisp, modern starter you can build on. Powered by Vite, React, and Tailwind CSS.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#features" className="inline-flex items-center rounded-md bg-emerald-500 px-6 py-3 font-medium text-slate-900 hover:bg-emerald-400 transition">
            Explore Features
          </a>
          <a href="https://github.com/vitejs/vite" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md border border-white/15 px-6 py-3 font-medium text-white hover:bg-white/10 transition">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
