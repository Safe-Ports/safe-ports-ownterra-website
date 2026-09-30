import { useEffect, useState } from "react";
import { ArrowRight, Check, LogIn, Menu, ShieldCheck, X } from "lucide-react";
import { getPublicProduct, publicProducts } from "./data/publicProducts";
import SiteFooter from "./components/SiteFooter";
import { asset } from "./lib/url";

const text = {
  es: {
    locale: "English",
    nav: ["El ciclo", "Ecosistema", "Cómo funciona", "Precios", "Acceso"],
    contact: "Solicitar demo",
    access: "Ingresar a Own Terra",
    accessPending: "Solicitar acceso",
    eyebrow: "From land to living.",
    title: "Todo el ciclo inmobiliario.",
    accent: "Una sola plataforma.",
    intro: "Desde el terreno hasta la propiedad terminada. Own Terra conecta adquisición, ventas, construcción, administración, renta y comercialización en un solo ecosistema.",
    primary: "Ver el ciclo completo",
    secondary: "Solicitar demo",
    built: "Para equipos de",
    sectors: ["Lotificación", "Construcción", "Administración", "Rentas", "Comercialización"],
    cycleTag: "El ciclo completo",
    cycleTitle: "Un activo, seis momentos, un solo sistema.",
    cycleBody: "Own Terra es la infraestructura digital que acompaña un activo inmobiliario durante todo su ciclo de vida. Cada etapa muestra su estado real de producto, no la intención.",
    cycleStages: [
      ["01", "Terreno", "Adquisición, lotificación y comercialización de tierra.", "lands"],
      ["02", "Construcción", "Proyecto, avance de obra, costos y documentos.", "construction"],
      ["03", "Propiedad", "Inventario, unidades y entrega del activo construido.", "properties"],
      ["04", "Operación", "Administración, cuotas, servicios y amenidades.", "properties"],
      ["05", "Renta", "Contratos, inquilinos y cobranza recurrente.", "properties"],
      ["06", "Venta", "Comercialización y portales de la propiedad terminada.", "properties"],
    ],
    mobileTag: "En el teléfono",
    mobileTitle: "La operación no se queda en la oficina.",
    mobileBody: "El asesor revisa inventario, agenda y clientes desde el mismo ecosistema, con la sesión y los permisos de su organización. Lo que cambia en campo ya está en el escritorio.",
    mobileState: "Cliente móvil en beta",
    mobileNote: "La aplicación móvil acompaña a Lands y todavía no está publicada en App Store ni en Google Play. El acceso se coordina con tu organización.",
    mobileCta: "Solicitar acceso a la beta",
    mobileShots: ["Inicio y pendientes del día", "Track de lotes", "Proyectos y planos"],
    cycleBaseTag: "Capa transversal",
    cycleBase: ["Clientes", "Documentos", "Finanzas", "Comunicación", "Datos"],
    serviceTag: "El ecosistema",
    serviceTitle: "Una plataforma compartida, dos verticales principales.",
    serviceNote: "Lands y Properties comparten organización, sesión, clientes, permisos y servicios de Core. Finanzas es una vista transversal en evolución; Construction permanece como exploración.",
    workTag: "Cómo funciona",
    workTitle: "El activo y su operación conservan el mismo contexto.",
    workBody: "Core concentra identidad, organización, equipo, agenda, clientes, formularios y documentos. Lands y Properties añaden sus flujos de dominio, mientras Finanzas conserva la procedencia de cada movimiento.",
    bullets: [
      "Lands conecta fraccionamientos, lotes, clientes, contratos y cobranza",
      "Properties usa la jerarquía Organización → Propiedad → Unidad/Espacio",
      "Una sola sesión y permisos por aplicación",
      "Estados de producto transparentes: aplicación, vista previa o exploración",
    ],
    build: "Solicitar una demo",
    ready: "ESTADO REAL DEL PRODUCTO",
    cards: [
      ["Core compartido", "Organización, identidad, equipo, agenda, clientes y documentos en un contexto común."],
      ["Lands", "Flujo comercial de terrenos desde el inventario hasta contratos, pagos y reportes."],
      ["Properties", "Vista previa funcional para portafolios, comunidades, rentas y operación por unidad."],
    ],
    cardTags: ["CORE", "APLICACIÓN WEB", "VISTA PREVIA"],
    why: "Principios del producto",
    whyTitle: "Claridad sobre acceso, alcance y madurez.",
    principles: [
      ["01", "Aislamiento por organización", "Los datos y permisos se resuelven dentro del contexto de la organización del usuario."],
      ["02", "Una sola identidad", "Core comparte sesión, clientes y servicios comunes entre las verticales habilitadas."],
      ["03", "Inventario con contexto", "Cada flujo conserva la relación entre activo, cliente, documento y evento financiero."],
      ["04", "Alcance transparente", "Las vistas demo y los conceptos exploratorios se identifican antes de una conversación comercial."],
    ],
    discoverTag: "Explora el ecosistema",
    discoverTitle: "Empieza por la operación que necesitas resolver.",
    discoverBody: "Elige Lands si vendes terrenos y lotes, o Properties si administras, operas o rentas inmuebles.",
    discoverCta: "Comparar soluciones",
    accessTag: "Acceso para clientes",
    accessTitle: "Tu organización, aplicaciones y permisos en una sola sesión.",
    accessBody: "Los clientes con una cuenta asignada ingresan a la aplicación autenticada. El sitio público no almacena datos operativos ni funciona como portal.",
    accessSecure: "Acceso controlado por organización, aplicación, rol y permisos",
    accessHelp: "¿Necesitas ayuda para entrar?",
    contactTitle: "Cuéntanos qué operación necesitas ordenar.",
    contactBody: "Comparte el tipo y tamaño de tu operación, las herramientas que utilizas y tu principal problema. Te contactaremos para revisar si Own Terra encaja.",
    labels: ["Nombre", "Empresa", "Correo", "Tipo de operación", "Tamaño del inventario o portafolio", "Herramientas actuales", "Principal problema operativo"],
    operationOptions: ["Selecciona una opción", "Venta de terrenos o lotes", "Administración de propiedades", "Comunidades o condominios", "Rentas de largo plazo", "Hospedaje", "Operación mixta"],
    sizeOptions: ["Selecciona un rango", "1–20 activos", "21–100 activos", "101–500 activos", "Más de 500 activos", "Aún por definir"],
    send: "Preparar correo",
    emailCta: "Escríbenos directamente",
    footer: "Ecosistema operativo para empresas inmobiliarias",
  },
  en: {
    locale: "Español",
    nav: ["The cycle", "Ecosystem", "How it works", "Pricing", "Sign in"],
    contact: "Request a demo",
    access: "Open Own Terra",
    accessPending: "Request access",
    eyebrow: "From land to living.",
    title: "The whole real-estate cycle.",
    accent: "One single platform.",
    intro: "From raw land to the finished property. Own Terra connects acquisition, sales, construction, administration, rental, and commercialization in one ecosystem.",
    primary: "See the full cycle",
    secondary: "Request a demo",
    built: "For teams in",
    sectors: ["Land subdivision", "Construction", "Management", "Rentals", "Commercialization"],
    cycleTag: "The full cycle",
    cycleTitle: "One asset, six moments, one system.",
    cycleBody: "Own Terra is the digital infrastructure that follows a real-estate asset through its entire life cycle. Each stage shows its real product state, not the intention.",
    cycleStages: [
      ["01", "Land", "Acquisition, subdivision, and land sales.", "lands"],
      ["02", "Construction", "Project, site progress, costs, and documents.", "construction"],
      ["03", "Property", "Inventory, units, and handover of the built asset.", "properties"],
      ["04", "Operations", "Administration, dues, services, and amenities.", "properties"],
      ["05", "Rental", "Leases, tenants, and recurring collection.", "properties"],
      ["06", "Sale", "Commercialization and portals for the finished property.", "properties"],
    ],
    mobileTag: "On the phone",
    mobileTitle: "The operation does not stay at the office.",
    mobileBody: "Advisors check inventory, calendar, and clients from the same ecosystem, with their organization's session and permissions. What changes in the field is already on the desktop.",
    mobileState: "Mobile client in beta",
    mobileNote: "The mobile app accompanies Lands and is not published on the App Store or Google Play yet. Access is arranged with your organization.",
    mobileCta: "Request beta access",
    mobileShots: ["Home and daily tasks", "Lot tracking", "Projects and site plans"],
    cycleBaseTag: "Cross-cutting layer",
    cycleBase: ["Clients", "Documents", "Finance", "Communication", "Data"],
    serviceTag: "The ecosystem",
    serviceTitle: "One shared platform, two main verticals.",
    serviceNote: "Lands and Properties share organization, session, clients, permissions, and Core services. Finance is an evolving cross-platform view; Construction remains exploratory.",
    workTag: "How it works",
    workTitle: "The asset and its operation keep the same context.",
    workBody: "Core owns identity, organization, team, calendar, clients, forms, and documents. Lands and Properties add domain workflows, while Finance preserves the source of each transaction.",
    bullets: [
      "Lands connects developments, lots, clients, contracts, and collections",
      "Properties uses Organization → Property → Unit/Space",
      "One session with application-level permissions",
      "Transparent product states: application, preview, or exploration",
    ],
    build: "Request a demo",
    ready: "CURRENT PRODUCT STATUS",
    cards: [
      ["Shared Core", "Organization, identity, team, calendar, clients, and documents in one shared context."],
      ["Lands", "Land-sales workflow from inventory through contracts, payments, and reporting."],
      ["Properties", "Functional preview for portfolios, communities, rentals, and unit-level operations."],
    ],
    cardTags: ["CORE", "WEB APPLICATION", "FUNCTIONAL PREVIEW"],
    why: "Product principles",
    whyTitle: "Clarity about access, scope, and maturity.",
    principles: [
      ["01", "Organization isolation", "Data and permissions are resolved inside the user's organization context."],
      ["02", "One identity", "Core shares session, clients, and common services across enabled verticals."],
      ["03", "Contextual inventory", "Each workflow preserves the connection among asset, client, document, and financial event."],
      ["04", "Transparent scope", "Demo views and exploratory concepts are identified before a commercial conversation."],
    ],
    discoverTag: "Explore the ecosystem",
    discoverTitle: "Start with the operation you need to solve.",
    discoverBody: "Choose Lands if you sell land and lots, or Properties if you manage, operate, or rent properties.",
    discoverCta: "Compare solutions",
    accessTag: "Customer access",
    accessTitle: "Your organization, applications, and permissions in one session.",
    accessBody: "Customers with an assigned account sign in to the authenticated application. This public site does not store operational data or act as a customer portal.",
    accessSecure: "Access controlled by organization, application, role, and permissions",
    accessHelp: "Need help signing in?",
    contactTitle: "Tell us which operation you need to organize.",
    contactBody: "Share your operation type and size, the tools you use, and your main challenge. We will contact you to assess whether Own Terra is a fit.",
    labels: ["Name", "Company", "Email", "Operation type", "Inventory or portfolio size", "Current tools", "Main operational challenge"],
    operationOptions: ["Select an option", "Land or lot sales", "Property management", "Communities or condominiums", "Long-term rentals", "Hospitality", "Mixed operation"],
    sizeOptions: ["Select a range", "1–20 assets", "21–100 assets", "101–500 assets", "More than 500 assets", "Not defined yet"],
    send: "Prepare email",
    emailCta: "Email us directly",
    footer: "Operating ecosystem for real-estate businesses",
  },
};


const Brand = () => (
  <a className="lx-brand" href="#top">
    <span className="lx-brandMark">
      <img className="lx-markInk" src={asset("/brand/ownterra-mark-ink.png")} alt="" />
      <img className="lx-markLight" src={asset("/brand/ownterra-mark-light.png")} alt="" />
    </span>
    <b>Own Terra</b>
  </a>
);

/* Observa los bloques y los deja aparecer una sola vez al entrar en pantalla. */
function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);
}

/* La barra va encima del video hasta que el usuario deja atrás la portada. */
function useNavOverCover() {
  const [over, setOver] = useState(true);
  useEffect(() => {
    const onScroll = () => setOver(window.scrollY < window.innerHeight * 0.78);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return over;
}

export default function App() {
  const [lang, setLang] = useState("es");
  const [menu, setMenu] = useState(false);
  const t = text[lang];
  const configuredAppUrl = import.meta.env.VITE_OWN_TERRA_URL?.trim();
  const navOver = useNavOverCover();
  useReveal();


  function submit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Demo Own Terra · ${data.get("company") || data.get("name")}`);
    const body = encodeURIComponent([
      data.get("challenge"),
      "",
      `${t.labels[0]}: ${data.get("name")}`,
      `${t.labels[1]}: ${data.get("company") || "—"}`,
      `${t.labels[2]}: ${data.get("email")}`,
      `${t.labels[3]}: ${data.get("operation")}`,
      `${t.labels[4]}: ${data.get("portfolioSize")}`,
      `${t.labels[5]}: ${data.get("tools") || "—"}`,
    ].join("\n"));
    window.location.href = `mailto:safeports.contacto@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="lx-site">
      <header className={`lx-nav${navOver && !menu ? " is-over" : ""}`}>
        <Brand />
        <button
          className="lx-menu"
          onClick={() => setMenu(!menu)}
          aria-label={lang === "es" ? "Menú" : "Menu"}
          aria-expanded={menu}
        >
          {menu ? <X /> : <Menu />}
        </button>
        <nav className={menu ? "lx-links is-open" : "lx-links"}>
          {t.nav.map((item, index) => (
            <a
              key={item}
              href={["#ciclo", "#services", "#work", asset("/lands.html#precios"), "#client-access"][index]}
              onClick={() => setMenu(false)}
            >
              {item}
            </a>
          ))}
          <button className="lx-lang" onClick={() => setLang(lang === "es" ? "en" : "es")}>{t.locale}</button>
          <a className="lx-navCta" href="#contact">{t.contact}</a>
        </nav>
      </header>

      <main id="top">
        {/* Portada a sangre: imagen real de inmuebles, no una pantalla de producto. */}
        <section className="lx-cover">
          <div className="lx-coverMedia">
            {/* Fotografía limpia: el video de marca trae texto y logotipo
                incrustados y competía con el titular. */}
            <picture>
              <source srcSet={asset("/hero-residence.webp")} type="image/webp" />
              <img src={asset("/hero-residence.jpg")} alt="" fetchPriority="high" />
            </picture>
          </div>
          <div className="lx-coverInner lx-gutter">
            <p className="lx-coverEyebrow">{t.eyebrow}</p>
            <h1 className="lx-coverTitle">{t.title}<em>{t.accent}</em></h1>
            <p className="lx-coverIntro">{t.intro}</p>
            <div className="lx-coverActions">
              <a className="lx-btn lx-btn--solid" href="#ciclo">{t.primary}<ArrowRight /></a>
              <a className="lx-btn lx-btn--line" href="#contact">{t.secondary}</a>
            </div>
          </div>
          <div className="lx-coverStrip lx-gutter">
            <small>{t.built}</small>
            {t.sectors.map((item) => <span key={item}>{item}</span>)}
          </div>
        </section>

        {/* Apertura: un párrafo grande y desplazado, con rótulo fijo al margen. */}
        <section className="lx-shell" id="services">
          <div className="lx-opener reveal">
            <p className="lx-openerLabel">{t.serviceTag}</p>
            <p className="lx-openerText">
              {t.serviceTitle} <b>{t.serviceNote}</b>
            </p>
          </div>
        </section>

        {/* El ciclo completo: de la tierra a la vida. Cada etapa declara su
            estado real, para no presentar como disponible lo que aún no lo es. */}
        <section className="lx-cycle lx-bleed" id="ciclo">
          <div className="lx-gutter reveal">
            <div className="lx-cycleHead">
              <div>
                <small className="lx-label">{t.cycleTag}</small>
                <h2>{t.cycleTitle}</h2>
              </div>
              <p>{t.cycleBody}</p>
            </div>

            <div className="lx-cycleTrack">
              {t.cycleStages.map(([num, name, desc, productKey]) => {
                const product = getPublicProduct(productKey);
                return (
                  <article key={num} className={`lx-stage is-${product.status}`}>
                    <span className="lx-stageNum">{num}</span>
                    <h3 className="lx-stageName">{name}</h3>
                    <p className="lx-stageDesc">{desc}</p>
                    <span className="lx-stageState">{product.statusShort[lang]}</span>
                  </article>
                );
              })}
            </div>

            <div className="lx-cycleBase">
              <small>{t.cycleBaseTag}</small>
              {t.cycleBase.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>

        {/* La app móvil: capturas reales del simulador. Sin insignias de tienda,
            porque todavía no está publicada. */}
        <section className="lx-mobile lx-bleed" id="movil">
          <div className="lx-mobileGrid lx-gutter reveal">
            <div className="lx-mobileCopy">
              <small className="lx-label">{t.mobileTag}</small>
              <h2>{t.mobileTitle}</h2>
              <p>{t.mobileBody}</p>
              <span className="lx-mobileState">{t.mobileState}</span>
              <p className="lx-mobileNote">{t.mobileNote}</p>
              <div className="lx-mobileActions">
                <a className="lx-btn lx-btn--solid" href="#contact">{t.mobileCta}<ArrowRight /></a>
              </div>
            </div>
            <div className="lx-phones">
              {[["/app/mobile-proyectos.jpg", 2], ["/app/mobile-inicio.jpg", 0], ["/app/mobile-lotes.jpg", 1]].map(([src, i]) => (
                <div key={src} className="lx-phone">
                  <div className="lx-phoneScreen">
                    <img src={asset(src)} alt={t.mobileShots[i]} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cada producto ocupa el ancho completo; la imagen llega al borde. */}
        <section className="lx-bleed">
          {publicProducts.map((product, index) => (
            <article key={product.key} className={`lx-feature status-${product.status} reveal`}>
              <a
                className="lx-featureMedia"
                href={asset(product.landing)}
                aria-label={`${product.cta[lang]}: ${product.name}`}
              >
                <video autoPlay muted loop playsInline preload="metadata" poster={asset(product.poster)} aria-hidden="true">
                  <source src={asset(product.video)} type="video/mp4" />
                </video>
              </a>
              <div className="lx-featureCopy">
                <span className="lx-featureIndex">0{index + 1}</span>
                <div className="lx-featureMeta">
                  <span className="lx-status">{product.statusLabel[lang]}</span>
                  <span>{product.handle}</span>
                </div>
                <h3 className="lx-featureName">{product.name}</h3>
                <p className="lx-featureDesc">{product.description[lang]}</p>
                <div className="lx-tags">
                  {product.tags[lang].map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a className="lx-link" href={asset(product.landing)}>{product.cta[lang]}<ArrowRight /></a>
              </div>
            </article>
          ))}
        </section>

        {/* Declaración: puro tipo sobre fondo oscuro, para cortar el ritmo. */}
        <section className="lx-statement lx-bleed">
          <div className="lx-statementInner lx-gutter reveal">
            <p className="lx-statementLabel">{t.discoverTag}</p>
            <p className="lx-statementText">{t.discoverTitle}</p>
            <div className="lx-statementFoot">
              {t.cards.map(([title, body]) => (
                <p key={title}><b>{title}</b>{body}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Flujo con imagen que se sale del contenedor y tarjeta superpuesta. */}
        <section className="lx-shell" id="work">
          <div className="lx-process reveal">
            <div className="lx-processCopy">
              <small className="lx-label">{t.workTag}</small>
              <h2>{t.workTitle}</h2>
              <p className="lx-lead">{t.workBody}</p>
              <ul className="lx-processList">
                {t.bullets.map((item, index) => (
                  <li key={item}><em>0{index + 1}</em><span>{item}</span></li>
                ))}
              </ul>
              <div className="lx-processActions">
                <a className="lx-btn lx-btn--line" href="#contact">{t.build}<ArrowRight /></a>
                <a className="lx-link" href={asset("/hub.html")}>{t.discoverCta}<ArrowRight /></a>
              </div>
            </div>
            <div className="lx-processMedia">
              {/* No usar la captura del panel general: corresponde a una versión
                  anterior y muestra dos etiquetas de producto ya retiradas. */}
              <div className="lx-processFrame">
                <img src={asset("/app/fraccionamiento.jpg")} alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Principios como lista editorial: numeral grande en el margen. */}
        <section className="lx-shell" id="principles">
          <div className="lx-creed">
            <div className="lx-creedHead reveal">
              <div>
                <small className="lx-label">{t.why}</small>
                <h2>{t.whyTitle}</h2>
              </div>
            </div>
            {t.principles.map(([number, title, body]) => (
              <div key={number} className="lx-creedItem reveal">
                <span className="lx-creedNum">{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Acceso: imagen que sangra por la izquierda con las apps superpuestas. */}
        <section className="lx-shell" id="client-access">
          <div className="lx-entry reveal">
            <div className="lx-entryMedia">
              <img src={asset("/app/ecosistema.jpg")} alt="" loading="lazy" />
            </div>
            <div>
              <small className="lx-label">{t.accessTag}</small>
              <h2 className="lx-h2">{t.accessTitle}</h2>
              <p className="lx-lead">{t.accessBody}</p>
              <p className="lx-note"><ShieldCheck />{t.accessSecure}</p>
              <div className="lx-accessActions">
                <a
                  className={`lx-btn ${configuredAppUrl ? "lx-btn--ink" : "lx-btn--off"}`}
                  href={configuredAppUrl || "#contact"}
                  target={configuredAppUrl ? "_blank" : undefined}
                  rel={configuredAppUrl ? "noreferrer" : undefined}
                >
                  {configuredAppUrl ? t.access : t.accessPending}
                  <LogIn />
                </a>
                <a className="lx-help" href="mailto:safeports.contacto@gmail.com">
                  {t.accessHelp}<ArrowRight />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Cierre a sangre sobre fondo oscuro. */}
        <section className="lx-close lx-bleed" id="contact">
          <div className="lx-closeGrid lx-gutter reveal">
            <div className="lx-closeAside">
              <small className="lx-label">{t.contact}</small>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactBody}</p>
              <a className="lx-closeMail" href="mailto:safeports.contacto@gmail.com">{t.emailCta}</a>
              <span className="lx-closePlace">México</span>
            </div>
            <form className="lx-form" onSubmit={submit}>
              <div className="lx-row">
                <label className="lx-field"><span>{t.labels[0]}</span><input required name="name" autoComplete="name" /></label>
                <label className="lx-field"><span>{t.labels[1]}</span><input name="company" autoComplete="organization" /></label>
              </div>
              <label className="lx-field"><span>{t.labels[2]}</span><input required type="email" name="email" autoComplete="email" /></label>
              <div className="lx-row">
                <label className="lx-field">
                  <span>{t.labels[3]}</span>
                  <select required name="operation" defaultValue="">
                    <option value="" disabled>{t.operationOptions[0]}</option>
                    {t.operationOptions.slice(1).map((option) => <option key={option}>{option}</option>)}
                  </select>
                </label>
                <label className="lx-field">
                  <span>{t.labels[4]}</span>
                  <select required name="portfolioSize" defaultValue="">
                    <option value="" disabled>{t.sizeOptions[0]}</option>
                    {t.sizeOptions.slice(1).map((option) => <option key={option}>{option}</option>)}
                  </select>
                </label>
              </div>
              <label className="lx-field"><span>{t.labels[5]}</span><input name="tools" /></label>
              <label className="lx-field"><span>{t.labels[6]}</span><textarea required name="challenge" rows="5" /></label>
              <button className="lx-btn lx-btn--solid">{t.send}<ArrowRight /></button>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter brand={<Brand />} tagline={t.footer} lang={lang} />
    </div>
  );
}
