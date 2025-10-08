import { Star, Home, Settings } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Simple Start',
    desc: 'Start fast with a minimal, elegant layout that gets out of the way.'
  },
  {
    icon: Star,
    title: 'Polished UI',
    desc: 'Beautiful typography, subtle gradients, and accessible defaults.'
  },
  {
    icon: Settings,
    title: 'Developer Friendly',
    desc: 'Vite hot reload, React, and Tailwind for a smooth developer experience.'
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-emerald-400/40 transition">
              <f.icon className="h-6 w-6 text-emerald-400" />
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
