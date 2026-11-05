import { about, clinic } from "../data/clinic";
import { CheckIcon } from "./Icons";

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container-x grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <figure className="mx-auto w-full max-w-xs md:max-w-sm">
          <img
            src={clinic.images.space}
            alt="Monica Bello, psicóloga, sentada segurando uma xícara"
            width={672}
            height={840}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[1.6rem] object-cover shadow-xl shadow-wine-900/15"
          />
          <figcaption className="mt-3 text-center text-sm text-ink/60">{about.caption}</figcaption>
        </figure>

        <div>
          <p className="eyebrow">Quem sou</p>
          <h2 className="h2">{about.title}</h2>
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((p) => (
              <p key={p} className="lead">
                {p}
              </p>
            ))}
          </div>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {about.credentials.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-[0.95rem] text-ink/85">
                <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
