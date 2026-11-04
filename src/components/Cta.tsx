import { clinic, cta } from "../data/clinic";
import { waLink } from "./Header";
import { WhatsAppIcon } from "./Icons";

export default function Cta() {
  return (
    <section className="bg-wine-800 py-16 text-center text-rose-50 md:py-24">
      <div className="container-x max-w-3xl">
        <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-gold-300 md:text-5xl">{cta.title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-rose-100/85">{cta.text}</p>
        <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-gold mt-8">
          <WhatsAppIcon /> {clinic.cta}
        </a>
        <p className="mt-4 text-sm text-rose-100/70">{clinic.whatsappLabel}</p>
      </div>
    </section>
  );
}
