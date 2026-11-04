import { clinic, location } from "../data/clinic";
import { waLink } from "./Header";
import { WhatsAppIcon } from "./Icons";

const query = encodeURIComponent(clinic.addressFull);

export default function MapSection() {
  return (
    <section id="localizacao" className="section">
      <div className="container-x grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <p className="eyebrow">{location.eyebrow}</p>
          <h2 className="h2">{location.title}</h2>
          <p className="lead mt-5">{location.text}</p>

          <address className="mt-6 not-italic">
            <p className="font-serif text-2xl font-semibold text-wine-800">{clinic.address}</p>
            <p className="text-ink/75">Piracicaba, SP</p>
          </address>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WhatsAppIcon /> {clinic.cta}
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${query}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-gold-400/40 shadow-xl shadow-wine-900/10">
          <iframe
            title={`Mapa: ${clinic.addressFull}`}
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            className="h-80 w-full md:h-[28rem]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
