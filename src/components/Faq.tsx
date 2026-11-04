import { faq } from "../data/clinic";

export default function Faq({ items = faq.items }: { items?: { q: string; a: string }[] }) {
  return (
    <section id="duvidas" className="section">
      <div className="container-x max-w-3xl">
        <p className="eyebrow">Perguntas</p>
        <h2 className="h2">{faq.title}</h2>
        <div className="mt-8 divide-y divide-wine-800/15 border-y border-wine-800/15">
          {items.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl font-semibold text-wine-800 [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="text-2xl text-gold-500 transition group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-ink/75">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
