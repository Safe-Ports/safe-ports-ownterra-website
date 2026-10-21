import { ArrowLeft } from "lucide-react";
import SiteFooter from "./components/SiteFooter";
import { asset } from "./lib/url";

const Brand = () => (
  <a className="lx-brand" href={asset("/")}>
    <span className="lx-brandMark">
      <img className="lx-markInk" src={asset("/brand/ownterra-mark-ink.svg")} alt="" />
      <img className="lx-markLight" src={asset("/brand/ownterra-mark-light.svg")} alt="" />
    </span>
    <b>Own Terra</b>
  </a>
);

/* GitHub Pages sirve este archivo para cualquier ruta que no exista: sin él
   aparecía la pantalla genérica "There isn't a GitHub Pages site here". */
export default function NotFound() {
  return (
    <div className="lx-site">
      <header className="lx-nav">
        <Brand />
        <nav className="lxp-nav">
          <a className="lxp-back" href={asset("/")}><ArrowLeft /><span>Inicio</span></a>
        </nav>
      </header>

      <main className="lx-shell lxl-main lxn-main">
        <small className="lx-label">Error 404</small>
        <h1 className="lx-h2">Esta página no existe.</h1>
        <p className="lx-lead">Puede que el enlace sea antiguo o que la dirección tenga un error.</p>
        <nav className="lxn-links" aria-label="Páginas principales">
          <a className="lx-navCta" href={asset("/")}>Ir al inicio</a>
          <a href={asset("/lands.html")}>Own Terra Lands</a>
          <a href={asset("/properties.html")}>Own Terra Properties</a>
          <a href={asset("/legal.html")}>Legal</a>
        </nav>
      </main>

      <SiteFooter brand={<Brand />} />
    </div>
  );
}
