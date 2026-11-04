import { clinic, ebook, reviews } from "../data/clinic";
import { StarIcon } from "./Icons";

export default function Reviews({ showEbook = true }: { showEbook?: boolean }) {
  return (
    <section id="depoimentos" className="section bg-rose-100">
      <div className="container-x">
        <p className="eyebrow">{reviews.eyebrow}</p>
        <h2 className="h2 max-w-3xl">{reviews.title}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.items.map((r) => (
            <figure key={r.text} className="rounded-3xl border border-gold-400/30 bg-rose-50 p-7">
              <div className="flex gap-1 text-gold-500" aria-label="5 de 5 estrelas">
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <blockquote className="mt-4 font-serif text-xl leading-snug text-wine-800">“{r.text}”</blockquote>
              <figcaption className="mt-4 text-sm text-ink/60">Paciente</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-5 text-sm text-ink/60">
          {reviews.source}.{" "}
          <a href={clinic.doctoralia} target="_blank" rel="noopener noreferrer" className="font-medium text-gold-600 underline underline-offset-4">
            Ver perfil
          </a>
        </p>

        {showEbook && (
          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl border border-wine-800/15 bg-rose-50 p-7 md:flex-row md:items-center">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-wine-800">{ebook.title}</h3>
              <p className="mt-1 text-ink/75">{ebook.text}</p>
            </div>
            <a href={clinic.ebook} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              {ebook.cta}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
