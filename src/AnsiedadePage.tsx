import Header, { waLink } from "./components/Header";
import Steps from "./components/Steps";
import Reviews from "./components/Reviews";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { CheckIcon, WhatsAppIcon } from "./components/Icons";
import { ansiedade, clinic, landingNav } from "./data/clinic";

export default function AnsiedadePage() {
  return (
    <>
      <Header items={landingNav} logoHref="/" />
      <main>
        <section id="topo" className="bg-gradient-to-b from-rose-100 to-rose-50">
          <div className="container-x grid items-center gap-10 py-12 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:py-20">
            <div>
              <p className="eyebrow">{ansiedade.eyebrow}</p>
              <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.08] text-wine-800 sm:text-5xl lg:text-6xl">
                {ansiedade.title}
              </h1>
              <p className="lead mt-5">{ansiedade.text}</p>
              <ul className="mt-6 space-y-2">
                {ansiedade.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-ink/85">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                    {p}
                  </li>
                ))}
              </ul>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 w-full sm:w-auto">
                <WhatsAppIcon /> {clinic.cta}
              </a>
            </div>
            <figure className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-3 rounded-[2rem] border border-gold-400/60" aria-hidden="true" />
              <img
                src={clinic.images.portrait}
            srcSet={clinic.images.portraitSet}
            sizes="(min-width: 768px) 448px, 90vw"
                alt="Monica Bello, psicóloga e psicanalista"
                width={988}
                height={988}
                className="relative aspect-square w-full rounded-[1.6rem] object-cover shadow-xl shadow-wine-900/15"
              />
              <figcaption className="relative mt-4 text-center text-sm text-ink/70">
                <strong className="font-script text-3xl font-normal text-wine-800">{clinic.name}</strong>
                <br />
                {clinic.title} · {clinic.crp}
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="sinais" className="section">
          <div className="container-x">
            <h2 className="h2 max-w-3xl">{ansiedade.signs.title}</h2>
            <p className="lead mt-5">{ansiedade.signs.intro}</p>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {ansiedade.signs.items.map((s) => (
                <li key={s} className="flex items-start gap-3 rounded-2xl border border-gold-400/30 bg-white/60 px-5 py-4">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="como-ajuda" className="section bg-rose-100">
          <div className="container-x">
            <h2 className="h2 max-w-3xl">{ansiedade.help.title}</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {ansiedade.help.items.map((h) => (
                <div key={h.title} className="rounded-3xl border border-gold-400/30 bg-rose-50 p-7">
                  <h3 className="font-serif text-2xl font-semibold text-wine-800">{h.title}</h3>
                  <p className="mt-2 text-ink/75">{h.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-col items-center gap-5 rounded-3xl bg-wine-800 p-7 text-center text-rose-50 md:flex-row md:text-left">
              <div className="md:flex-1">
                <h3 className="font-serif text-2xl font-semibold text-gold-300">{ansiedade.about.title}</h3>
                <p className="mt-2 text-rose-100/85">{ansiedade.about.text}</p>
              </div>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-gold">
                <WhatsAppIcon /> {clinic.cta}
              </a>
            </div>
          </div>
        </section>

        <Steps />
        <Reviews showEbook={false} />
        <Faq items={ansiedade.faq} />
        <Cta />
        <MapSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
