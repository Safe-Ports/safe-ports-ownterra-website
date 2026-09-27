import { ArrowLeft, ArrowRight, Check, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { getPublicProduct } from "./data/publicProducts";
import { asset } from "./lib/url";

const productDetails = {
  lands: {
    eyebrow: "Operación comercial de terrenos",
    title: "Del plano al contrato, sin perder el control.",
    intro: "Conecta fraccionamientos, lotes, disponibilidad, clientes, citas, cotizaciones, contratos, pagos, documentos y reportes para equipos que venden tierra.",
    appPath: "/dashboard",
    canOpenApp: true,
    transparency: "Aplicación web implementada. Los recorridos críticos deben verificarse contra el backend y los permisos de cada organización antes de cada release.",
    outcomes: ["Inventario organizado por fraccionamiento", "Seguimiento comercial conectado al lote", "Contratos, cobranza y documentos relacionados"],
    features: [
      ["Inventario visual", "Organiza fraccionamientos y lotes con estatus, superficies, precios, disponibilidad y referencia de plano."],
      ["Clientes y seguimiento", "Relaciona clientes, asesores, citas y oportunidades con el inventario comercial."],
      ["Contratos y cobranza", "Conecta la operación con contratos, planes de pago, documentos, vencimientos y reportes."],
    ],
    shots: [["/app/fraccionamiento.jpg", "Inventario y plano del fraccionamiento"], ["/app/track-lotes.jpg", "Seguimiento de lotes y cierres"], ["/app/clientes.jpg", "Clientes conectados al core"], ["/app/dashboard.jpg", "Panel comercial"]],
    galleryLabel: "EL PRODUCTO EN ACCIÓN",
    galleryTitle: "Vistas del flujo comercial de Lands.",
    galleryBody: "Estas capturas muestran interfaces presentes en la aplicación web; la información visible es demostrativa.",
  },
  properties: {
    eyebrow: "Administración y operación de inmuebles",
    title: "Una jerarquía para cada propiedad y sus unidades.",
    intro: "Properties parte de Organización → Propiedad → Unidad/Espacio para representar una casa, edificio, comunidad, plaza, hotel, oficina, bodega o inmueble mixto.",
    appPath: "/properties",
    canOpenApp: false,
    transparency: "Vista previa funcional. Propietarios, propiedades, unidades, comunidades, rentas, portales y monitoreo usan principalmente datos demo, locales o en memoria; la persistencia backend aún está incompleta.",
    outcomes: ["Portafolio relacionado con propietarios", "Estados por propiedad y unidad", "Rutas de comunidad, renta y operación"],
    features: [
      ["Portafolio base", "Explora propietarios, propiedades, imágenes y unidades sin perder sus relaciones jerárquicas."],
      ["Comunidades y rentas", "Previsualiza cargos, servicios, amenidades, publicaciones, prospectos, contratos y operación de hospedaje."],
      ["Operación por unidad", "Previsualiza estados, tickets, accesos, proveedores, servicios y monitoreo dentro del mismo contexto."],
    ],
    shots: [["/screenshots/properties-operations.jpg", "Vista previa de operación"], ["/screenshots/properties-portfolio.jpg", "Vista previa del portafolio"]],
    galleryLabel: "VISTA PREVIA FUNCIONAL",
    galleryTitle: "Así se organiza la experiencia de Properties.",
    galleryBody: "Estas pantallas sirven para validar el producto; no representan todavía una integración productiva completa.",
  },
  construction: {
    eyebrow: "Exploración de producto",
    title: "Una dirección de producto aún por validar.",
    intro: "Construction explora cómo conectar estructura de obra, presupuestos y avance. No es una vertical operativa de Own Terra y no tiene rutas activas en la aplicación autenticada.",
    canOpenApp: false,
    transparency: "Concepto exploratorio. El comprador, alcance, reglas operativas, integración y prioridad de implementación todavía requieren aprobación.",
    outcomes: ["Concepto, no producto activo", "Sin módulo operativo autenticado", "Alcance y prioridad por validar"],
    features: [
      ["Estructura de obra", "Hipótesis para organizar proyectos, fases, partidas y conceptos dentro de una futura experiencia."],
      ["Costos y cuantificación", "Dirección conceptual para generadores, insumos, rendimientos y presupuestos; no es una capacidad disponible."],
      ["Avance y reportes", "Exploración visual de seguimiento de costos y avance, pendiente de definición y validación."],
    ],
    shots: [["/screenshots/construction-budget.jpg", "Concepto de presupuesto"], ["/screenshots/construction-progress.jpg", "Concepto de avance"]],
    galleryLabel: "CONCEPTO VISUAL",
    galleryTitle: "Una exploración, no una promesa de disponibilidad.",
    galleryBody: "Estas imágenes comunican una posible dirección. No corresponden a un módulo activo en la aplicación.",
  },
};


const Brand = () => (
  <a className="lx-brand" href={asset("/")}>
    <span className="lx-brandMark">
      <img className="lx-markInk" src={asset("/brand/ownterra-mark-ink.svg")} alt="" />
      <img className="lx-markLight" src={asset("/brand/ownterra-mark-light.svg")} alt="" />
    </span>
    <b>Own Terra</b>
  </a>
);

const featureIcons = [Layers3, Sparkles, ShieldCheck];

export default function ProductLanding({ productKey }) {
  const product = getPublicProduct(productKey);
  const details = productDetails[productKey];
  const appBase = import.meta.env.VITE_OWN_TERRA_URL?.trim();
  const appUrl = appBase && details.appPath
    ? new URL(details.appPath.replace(/^\//, ""), `${appBase.replace(/\/+$/, "")}/`).toString()
    : null;
  const canOpenApp = details.canOpenApp && appUrl;
  const primaryHref = canOpenApp ? appUrl : asset("/#contact");
  const primaryLabel = canOpenApp ? "Abrir aplicación" : "Solicitar demo";
  const external = canOpenApp ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <div className={`lx-site status-${product.status}`}>
      <header className="lx-nav">
        <Brand />
        <nav className="lxp-nav">
          <a className="lxp-back" href={asset("/hub.html")}><ArrowLeft /><span>Ecosistema</span></a>
          <a className="lx-navCta" href={primaryHref} {...external}>{primaryLabel}</a>
        </nav>
      </header>

      <main>
        <section className="lxp-hero lx-shell">
          <div>
            <div className="lxp-identity">
              <img src={asset(product.icon)} alt="" />
              <span>{product.handle}</span>
            </div>
            <div className="lxp-statusRow">
              <p className="lxp-eyebrow">{details.eyebrow}</p>
              <span className="lxp-status">{product.statusLabel.es}</span>
            </div>
            <h1 className="lxp-title">{details.title}</h1>
            <p className="lxp-intro">{details.intro}</p>
            <div className="lxp-actions">
              <a className="lx-btn lx-btn--solid" href={primaryHref} {...external}>
                {primaryLabel}<ArrowRight />
              </a>
              <a className="lx-btn lx-btn--line" href="#funciones">Conocer alcance</a>
            </div>
            <p className="lxp-note"><ShieldCheck />{details.transparency}</p>
          </div>
          <div className="lxp-media">
            <video autoPlay muted loop playsInline preload="metadata" poster={asset(product.poster)}>
              <source src={asset(product.video)} type="video/mp4" />
            </video>
          </div>
        </section>

        <section className="lxp-outcomes lx-shell">
          {details.outcomes.map((item) => (
            <div key={item} className="lxp-outcome"><Check /><span>{item}</span></div>
          ))}
        </section>

        <section className="lxp-section lx-shell" id="funciones">
          <header className="lxp-sectionHead">
            <small className="lx-label">Alcance actual</small>
            <h2 className="lx-h2">Qué representa hoy esta experiencia.</h2>
          </header>
          <div className="lxp-features">
            {details.features.map(([title, body], index) => {
              const Icon = featureIcons[index] ?? ShieldCheck;
              return (
                <article key={title} className="lxp-feature">
                  <span className="lxp-featureNum">0{index + 1}</span>
                  <Icon />
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="lxp-section lx-shell">
          <header className="lxp-sectionHead">
            <small className="lx-label">{details.galleryLabel}</small>
            <h2 className="lx-h2">{details.galleryTitle}</h2>
            <p className="lx-lead">{details.galleryBody}</p>
          </header>
          <div className="lxp-gallery">
            {details.shots.map(([src, label]) => (
              <figure key={src}>
                <img src={asset(src)} alt={`${label} de ${product.name}`} loading="lazy" />
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="lxp-section lx-shell">
          <div className="lx-band">
            <div>
              <div className="lxp-final">
                <img src={asset(product.icon)} alt="" />
                <span className="lxp-finalMeta">{product.statusLabel.es} · {product.handle}</span>
              </div>
              <h2>
                {product.status === "implemented"
                  ? `Conoce ${product.name} con tu operación.`
                  : `Conversemos sobre ${product.name} y su alcance actual.`}
              </h2>
            </div>
            <a className="lx-btn" href={primaryHref} {...external}>{primaryLabel}<ArrowRight /></a>
          </div>
        </section>
      </main>

      <footer className="lx-footer">
        <Brand />
        <span>© 2026</span>
        <p>{product.name} · {product.statusLabel.es} en Own Terra</p>
      </footer>
    </div>
  );
}
