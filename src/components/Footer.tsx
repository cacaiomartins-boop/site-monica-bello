import { clinic } from "../data/clinic";
import { InstagramIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-wine-900 py-10 text-rose-100/80">
      <div className="container-x flex flex-col items-center gap-4 text-center text-sm md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-script text-3xl leading-none text-rose-50">{clinic.name}</p>
          <p>
            {clinic.title} · {clinic.crp}
          </p>
          <p>Atendimento online · {clinic.city}</p>
        </div>
        <div className="flex items-center gap-5">
          <a href={clinic.instagram} target="_blank" rel="noopener noreferrer" className="-my-3 inline-flex items-center gap-2 py-3 hover:text-gold-300">
            <InstagramIcon /> {clinic.instagramHandle}
          </a>
          <a href={clinic.doctoralia} target="_blank" rel="noopener noreferrer" className="-my-3 py-3 hover:text-gold-300">
            Doctoralia
          </a>
        </div>
      </div>
      <p className="container-x mt-6 text-center text-xs text-rose-100/50">
        © {new Date().getFullYear()} {clinic.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
