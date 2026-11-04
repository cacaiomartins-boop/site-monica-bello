import { steps } from "../data/clinic";

export default function Steps() {
  return (
    <section id="como-funciona" className="section">
      <div className="container-x">
        <p className="eyebrow">{steps.eyebrow}</p>
        <h2 className="h2 max-w-3xl">{steps.title}</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.items.map((s, i) => (
            <li key={s.title} className="rounded-3xl border border-wine-800/10 bg-white/60 p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-wine-800 font-serif text-xl font-semibold text-gold-300">
                {i + 1}
              </span>
              <h3 className="mt-5 font-serif text-2xl font-semibold text-wine-800">{s.title}</h3>
              <p className="mt-2 text-ink/75">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 rounded-3xl bg-wine-800 p-7 text-rose-50 md:flex md:items-center md:justify-between md:gap-10 md:p-10">
          <h3 className="font-serif text-2xl font-semibold text-gold-300 md:max-w-xs md:text-3xl">{steps.abroad.title}</h3>
          <p className="mt-3 max-w-xl text-rose-100/85 md:mt-0">{steps.abroad.text}</p>
        </div>
      </div>
    </section>
  );
}
