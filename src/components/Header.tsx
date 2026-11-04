import { useState } from "react";
import { clinic, nav } from "../data/clinic";
import { WhatsAppIcon } from "./Icons";

export const waLink = `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(clinic.whatsappMessage)}`;

export default function Header({ items = nav, logoHref = "#topo" }: { items?: { href: string; label: string }[]; logoHref?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-wine-800/10 bg-rose-50/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a href={logoHref} className="font-script text-4xl leading-none text-wine-800">
          {clinic.shortName}
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {items.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-ink/80 hover:text-gold-600">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary hidden !py-2.5 sm:inline-flex">
            <WhatsAppIcon /> {clinic.cta}
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-wine-800 lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-wine-800/10 bg-rose-50 lg:hidden" aria-label="Menu móvel">
          <div className="container-x flex flex-col py-3">
            {items.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-base font-medium text-ink/85">
                {n.label}
              </a>
            ))}
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary mt-2">
              <WhatsAppIcon /> {clinic.cta}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
