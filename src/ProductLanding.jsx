import { ArrowLeft, ArrowRight, Check, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import SiteFooter from "./components/SiteFooter";
import { landsAddon, landsCurrency, landsPlans, landsTrial } from "./data/business";
import { getPublicProduct } from "./data/publicProducts";
import { asset } from "./lib/url";

const productDetails = {
  lands: {
    eyebrow: "Operación comercial de terrenos",
    title: "Del plano al contrato, sin perder el control.",
    intro: "Lands reúne en un solo lugar la información que necesitas para comercializar terrenos, ya seas una persona independiente, un asesor, una organización o un negocio con equipo: fraccionamientos, planos, lotes, disponibilidad, clientes, citas, cotizaciones, contratos, pagos, documentos y reportes.",
    appPath: "/dashboard",
    canOpenApp: true,
    transparency: `Aplicación web disponible por suscripción mensual, con prueba gratuita de ${landsTrial.days} días sin tarjeta.`,
    pricing: true,
    scopeTitle: "Un alcance completo para vender y operar terrenos.",
    outcomes: ["Una fuente confiable para tu inventario", "Cada oportunidad conectada con su lote", "Más visibilidad para decidir y cobrar a tiempo"],
    audienceTitle: "Diseñado para quienes comercializan terrenos.",
    audienceBody: "Lands se adapta a distintas formas de trabajar: desde una persona que gestiona sus propios lotes hasta una organización con varios proyectos y colaboradores. Todos pueden trabajar con la misma información y un proceso más ordenado.",
    audience: [
      ["Personas y agentes independientes", "Organiza tus lotes, clientes, citas, cotizaciones y documentos desde un mismo lugar."],
      ["Negocios y organizaciones", "Controla proyectos, etapas, precios y disponibilidad mientras tu operación crece."],
      ["Equipos comerciales", "Comparte información y da seguimiento a clientes sin perder el contexto del lote."],
    ],
    features: [
      ["Inventario y planos", "Organiza cada fraccionamiento y sus lotes con superficies, precios, estatus, disponibilidad y referencia visual del plano."],
      ["Comercialización conectada", "Relaciona clientes, asesores, citas y cotizaciones con el lote correcto para que cada oportunidad tenga contexto y seguimiento."],
      ["Cotización y cierre", "Lleva la conversación comercial desde la selección del lote hasta la cotización y el avance del cierre."],
      ["Contratos y pagos", "Consulta la información relacionada con contratos, planes de pago, vencimientos y cobranza sin separar la operación del expediente."],
      ["Documentos en contexto", "Centraliza los documentos de cada operación para que el equipo encuentre lo que necesita cuando lo necesita."],
      ["Reportes para decidir", "Obtén una lectura más clara del inventario, la actividad comercial y el estado de tus operaciones para actuar con oportunidad."],
    ],
    shots: [["/app/fraccionamiento.jpg", "Inventario y plano del fraccionamiento"], ["/app/track-lotes.jpg", "Seguimiento de lotes y cierres"], ["/app/clientes.jpg", "Clientes conectados al core"], ["/app/dashboard.jpg", "Panel comercial"]],
    galleryLabel: "EL PRODUCTO EN ACCIÓN",
    galleryTitle: "Vistas del flujo comercial de Lands.",
    galleryBody: "Estas capturas muestran interfaces presentes en la aplicación web; la información visible es demostrativa.",
  },
  properties: {
    eyebrow: "Administración y operación de inmuebles",
    title: "Una sola operación para cada propiedad, unidad y persona.",
    intro: "Properties centraliza el portafolio y las operaciones alrededor de inmuebles existentes: propietarios, propiedades, unidades, comunidades, rentas, ventas, servicios, documentos y seguimiento, desde una misma plataforma.",
    appPath: "/properties",
    canOpenApp: true,
    transparency: "Vista previa funcional. El núcleo de propietarios, propiedades, unidades, imágenes y permisos está en prototipo frontend; comunidades, rentas, ventas, hospitalidad, servicios, portales y reportes se muestran como capacidades en desarrollo y gran parte usa datos demo o locales.",
    scopeTitle: "Una base común para administrar y operar inmuebles.",
    outcomes: ["Un portafolio conectado con sus personas", "Contexto por propiedad, unidad y operación", "Una base para administrar, rentar y comercializar"],
    audienceTitle: "Para quienes administran, rentan u operan inmuebles.",
    audienceBody: "Properties está pensado para personas y organizaciones con una o muchas propiedades: administradores independientes, empresas de administración, propietarios, family offices, operadores de renta, comunidades y equipos que comercializan inmuebles terminados.",
    audience: [
      ["Administradores y administradoras", "Coordina propiedades, unidades, personas, incidencias y documentos con una vista ordenada de la operación."],
      ["Propietarios y portafolios", "Relaciona tus activos, unidades y responsables para consultar el estado de cada inmueble con mayor claridad."],
      ["Rentas, comunidades y ventas", "Prepara una operación conectada para administrar comunidades, rentar unidades o comercializar propiedades construidas."],
    ],
    features: [
      ["Portafolio conectado", "Relaciona propietarios, propiedades, unidades, imágenes, documentos y actividad bajo la estructura Organización → Propiedad → Unidad/Espacio."],
      ["Comunidades", "Organiza directorios, cargos, comunicados, amenidades, votaciones, accesos y paquetería alrededor de una comunidad."],
      ["Rentas y ocupación", "Da contexto a disponibilidad, prospectos, inquilinos, contratos, cobros, renovaciones e inspecciones por propiedad y unidad."],
      ["Venta de inmuebles", "Prepara publicaciones, prospectos, visitas, ofertas y seguimiento comercial para propiedades ya construidas."],
      ["Servicios y mantenimiento", "Conecta tickets, proveedores, servicios, utilidades y evidencias con el inmueble donde ocurre cada situación."],
      ["Portales y reportes", "Construye experiencias con permisos para propietarios, residentes, inquilinos, comités, proveedores y personas con acceso de consulta."],
    ],
    shots: [["/screenshots/properties-today.jpg", "Inicio del día y pendientes"], ["/screenshots/properties-portfolio.jpg", "Comunidades del portafolio"], ["/screenshots/properties-operations.jpg", "Cuotas, cargos y adeudos"], ["/screenshots/properties-reports.jpg", "Reporte de la comunidad"], ["/screenshots/properties-community-feed.jpg", "Muro y avisos de la comunidad"], ["/screenshots/properties-votes.jpg", "Comité y votaciones"], ["/screenshots/properties-tickets.jpg", "Tickets de mantenimiento"], ["/screenshots/properties-access.jpg", "Visitas con QR y caseta"]],
    galleryLabel: "VISTA PREVIA CONECTADA",
    galleryTitle: "Así se organiza la experiencia de Properties.",
    galleryBody: "Estas pantallas sirven para validar el producto; no representan todavía una integración productiva completa.",
  },
  construction: {
    eyebrow: "Exploración de producto",
    title: "Una dirección de producto aún por validar.",
    intro: "Construction explora cómo conectar estructura de obra, presupuestos y avance. No es una vertical operativa de Own Terra y no tiene rutas activas en la aplicación autenticada.",
    canOpenApp: false,
    transparency: "Concepto exploratorio. El comprador, alcance, reglas operativas, integración y prioridad de implementación todavía requieren aprobación.",
    scopeTitle: "Una exploración de producto por validar.",
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

const money = (amount) => `$${amount} ${landsCurrency}`;

/* Planes publicados de Lands. Montos y límites vienen de data/business.js. */
function Pricing({ trialHref, external }) {
  return (
    <section className="lxp-section lx-shell" id="precios">
      <header className="lxp-sectionHead">
        <small className="lx-label">Planes y precios</small>
        <h2 className="lx-h2">Elige el plan de tu inmobiliaria.</h2>
        <p className="lx-lead">Suscripción mensual en {landsCurrency}, más impuestos aplicables. Cambia de plan o cancela cuando quieras; conservas el acceso hasta el final del periodo pagado.</p>
      </header>
      <div className="lxp-plans">
        <article className="lxp-plan lxp-plan--trial">
          <h3>{landsTrial.name}</h3>
          <p className="lxp-planTag">{landsTrial.days} días para conocer Lands.</p>
          <p className="lxp-planPrice"><b>Gratis</b></p>
          <ul>{landsTrial.highlights.map((item) => <li key={item}><Check />{item}</li>)}</ul>
          <a className="lx-btn lx-btn--line" href={trialHref} {...external}>Empezar prueba</a>
        </article>
        {landsPlans.map((plan) => (
          <article key={plan.key} className={`lxp-plan${plan.recommended ? " is-rec" : ""}`}>
            {plan.recommended && <span className="lxp-planRibbon">Recomendado</span>}
            <h3>{plan.name}</h3>
            <p className="lxp-planTag">{plan.tagline}</p>
            <p className="lxp-planPrice"><b>{money(plan.price)}</b><span>/mes</span></p>
            <ul>{plan.highlights.map((item) => <li key={item}><Check />{item}</li>)}</ul>
          </article>
        ))}
      </div>
      <p className="lxp-planNote">
        La app móvil para vendedores no tiene costo adicional: se incluye con cualquier plan de pago activo (acceso anticipado, aún no publicada en tiendas). {landsAddon.label}: {money(landsAddon.price)}, disponible en cualquier plan. Los pagos se procesan de forma segura con Stripe.{" "}
        Consulta los <a href={asset("/legal.html#terminos")}>términos</a> y la <a href={asset("/legal.html#cancelacion")}>política de cancelación y reembolsos</a>.
      </p>
    </section>
  );
}

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
            <h2 className="lx-h2">{details.scopeTitle}</h2>
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

        {details.audience && (
          <section className="lxp-section lx-shell lxp-audience">
            <header className="lxp-sectionHead">
              <small className="lx-label">Para quién es Lands</small>
              <h2 className="lx-h2">{details.audienceTitle}</h2>
              <p className="lx-lead">{details.audienceBody}</p>
            </header>
            <div className="lxp-audienceGrid">
              {details.audience.map(([title, body], index) => (
                <article key={title} className="lxp-audienceCard">
                  <span className="lxp-featureNum">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {details.pricing && <Pricing trialHref={appBase || asset("/#contact")} external={appBase ? { target: "_blank", rel: "noreferrer" } : {}} />}

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

      <SiteFooter brand={<Brand />} tagline={`${product.name} · ${product.statusLabel.es} en Own Terra`} />
    </div>
  );
}
