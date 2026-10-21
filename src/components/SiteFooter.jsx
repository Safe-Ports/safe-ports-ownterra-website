import { business } from "../data/business";
import { asset } from "../lib/url";

const copy = {
  es: {
    operated: `${business.brand} es una marca operada por ${business.legalName}.`,
    links: [["Precios", asset("/lands.html#precios")], ["Términos", asset("/legal.html#terminos")], ["Cancelación y reembolsos", asset("/legal.html#cancelacion")], ["Aviso de privacidad", asset("/aviso-privacidad.html")]],
  },
  en: {
    operated: `${business.brand} is a brand operated by ${business.legalName}.`,
    links: [["Pricing", asset("/lands.html#precios")], ["Terms", asset("/legal.html#terminos")], ["Cancellation and refunds", asset("/legal.html#cancelacion")], ["Privacy notice", asset("/aviso-privacidad.html")]],
  },
};

/* Pie común: Stripe verifica que el sitio muestre quién opera el negocio,
   cómo contactarlo y dónde están precios y políticas. */
export default function SiteFooter({ brand, tagline, lang = "es" }) {
  const t = copy[lang];
  return (
    <footer className="lx-footer lx-siteFooter">
      <div className="lx-siteFooterTop">
        {brand}
        <span>© 2026</span>
        {tagline && <p>{tagline}</p>}
      </div>
      <nav className="lx-siteFooterLinks" aria-label="Legal">
        {t.links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <address className="lx-siteFooterId">
        <span>{t.operated}</span>
        <span>{business.city}, {business.state}, {business.country}</span>
        <a href={`mailto:${business.email}`}>{business.email}</a>
      </address>
    </footer>
  );
}
