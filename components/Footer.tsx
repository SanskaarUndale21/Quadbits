import { Logo } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span className="flex items-center gap-2.5 font-display text-base font-bold text-ink">
          <Logo size={22} /> Squadbits
        </span>
        <p>Four co-founders. Multiple disciplines. One execution-driven team.</p>
        <p>© {new Date().getFullYear()} Squadbits</p>
      </div>
    </footer>
  );
}
