"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { Logo } from "./ui";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/90 backdrop-blur" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight">
          <Logo /> Squadbits
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#achievements"
            className="hidden rounded-sm bg-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#6a90ff] sm:block"
          >
            Our track record
          </a>
          <button
            ref={toggleRef}
            className="flex size-11 items-center justify-center lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100dvh - 4rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-bg lg:hidden"
          >
            <ul className="px-5 pt-4">
              {navLinks.map((l) => (
                <li key={l.href} className="border-b border-line">
                  <a href={l.href} onClick={() => setOpen(false)} className="block py-5 font-display text-2xl font-semibold">
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-6">
                <a
                  href="#achievements"
                  onClick={() => setOpen(false)}
                  className="block rounded-sm bg-blue px-4 py-4 text-center font-semibold"
                >
                  Our track record
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
