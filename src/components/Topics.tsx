import { topics } from "../data/clinic";

export default function Topics() {
  return (
    <section id="para-quem" className="section bg-rose-100">
      <div className="container-x">
        <p className="eyebrow">{topics.eyebrow}</p>
        <h2 className="h2 max-w-3xl">{topics.title}</h2>
        <p className="lead mt-5">{topics.intro}</p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {topics.items.map((t, i) => (
            <li
              key={t}
              className="flex items-center gap-4 rounded-2xl border border-gold-400/30 bg-rose-50 px-5 py-4 text-ink/90"
            >
              <span className="font-serif text-2xl font-semibold text-gold-500">{String(i + 1).padStart(2, "0")}</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
