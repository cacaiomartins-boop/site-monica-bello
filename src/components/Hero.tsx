import { clinic, hero } from "../data/clinic";
import { waLink } from "./Header";
import { WhatsAppIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-gradient-to-b from-rose-100 to-rose-50">
      <div className="container-x grid items-center gap-10 py-12 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:py-20">
        <div>
          <p className="eyebrow">
            {clinic.title} <span className="whitespace-nowrap">· {clinic.crp}</span>
          </p>
          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.08] text-wine-800 sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="lead mt-5">{hero.text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WhatsAppIcon /> {clinic.cta}
            </a>
            <a href="#sobre" className="btn-ghost">
              {hero.secondary}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 rounded-[2rem] border border-gold-400/60" aria-hidden="true" />
          <img
            src={clinic.images.portrait}
            srcSet={clinic.images.portraitSet}
            sizes="(min-width: 768px) 448px, 90vw"
            alt="Monica Bello, psicóloga e psicanalista"
            width={988}
            height={988}
            className="relative aspect-square w-full rounded-[1.6rem] object-cover shadow-xl shadow-wine-900/15"
            {...{ fetchpriority: "high" }}
          />
        </div>
      </div>
    </section>
  );
}
