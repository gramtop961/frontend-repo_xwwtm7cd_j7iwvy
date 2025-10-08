export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-white/60">
        <p>&copy; {new Date().getFullYear()} HelloWorld. Built with Vite + React + Tailwind.</p>
      </div>
    </footer>
  );
}
