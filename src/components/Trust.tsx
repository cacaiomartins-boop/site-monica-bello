import { trust } from "../data/clinic";

export default function Trust() {
  return (
    <section aria-label="Destaques" className="bg-wine-800 text-rose-50">
      <div className="container-x grid gap-6 py-7 sm:grid-cols-3">
        {trust.map((t) => {
          const body = (
            <>
              <p className="font-serif text-3xl font-semibold text-gold-300">{t.value}</p>
              <p className="text-sm text-rose-100/80">{t.label}</p>
            </>
          );
          return t.href ? (
            <a key={t.value} href={t.href} target="_blank" rel="noopener noreferrer" className="text-center hover:opacity-90">
              {body}
            </a>
          ) : (
            <div key={t.value} className="text-center">
              {body}
            </div>
          );
        })}
      </div>
    </section>
  );
}
