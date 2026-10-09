import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { publicProducts } from "./data/publicProducts";
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

/*
  Todo el contenido de esta página sale de las fuentes canónicas del producto
  (18 - Product Scope and Customers, 20 - Current Product Status y el brief
  público). Los estados deben seguir el vocabulario aprobado: aplicación web,
  vista previa funcional y exploración.
*/

const coreCapabilities = [
  "Organización",
  "Identidad y sesión",
  "Equipo y roles",
  "Clientes compartidos",
  "Agenda",
  "Formularios",
  "Documentos",
  "Permisos",
];

const hierarchies = [
  {
    key: "lands",
    name: "OwnTerra Lands",
    summary:
      "Inventario de desarrollo y proceso comercial de venta de lotes. Relaciona el plano con la disponibilidad y con todo el seguimiento del cliente.",
    chain: [
      ["01", "Organización", "El tenant que opera"],
      ["02", "Fraccionamiento", "Desarrollo y plano"],
      ["03", "Lote", "Unidad vendible"],
    ],
  },
  {
    key: "properties",
    name: "OwnTerra Properties",
    summary:
      "Activos construidos en operación y comercialización. Una propiedad puede tener cero, una o muchas unidades rentables sin cambiar de modelo.",
    chain: [
      ["01", "Organización", "El tenant que opera"],
      ["02", "Propiedad", "Casa, edificio, plaza, hotel"],
      ["03", "Unidad / Espacio", "Lo que se renta u ocupa"],
    ],
  },
];

const operationFlow = [
  ["01", "El activo", "El lote o la unidad es el punto de partida: ficha técnica, estado, disponibilidad y su lugar en la jerarquía."],
  ["02", "La persona", "Prospecto, cliente, propietario o inquilino queda relacionado con el activo y con el asesor responsable."],
  ["03", "El acuerdo", "Cotización, reserva, contrato o arrendamiento fija las condiciones sin perder de vista el activo ni a la persona."],
  ["04", "El documento", "Cada pieza del expediente queda asociada al mismo contexto y deja de vivir en carpetas sueltas."],
  ["05", "El dinero", "Pagos, cargos y cobranza conservan su origen: una mensualidad de Lands y un cargo de Properties no se confunden."],
];

const platformRules = [
  "Cada registro y cada consulta se resuelven dentro de la organización del usuario. La visibilidad entre organizaciones es un defecto que bloquea liberación.",
  "El modelo de permisos tiene dos niveles: un rol global y un rol por aplicación, con verificación en la ruta y en cada acción.",
  "Core concentra la sesión: las verticales habilitadas no implementan un segundo login ni un segundo almacén de tokens.",
  "Los registros se archivan mediante borrado suave; el histórico no se destruye en silencio.",
];

const statusLegend = [
  {
    key: "implemented",
    label: "Aplicación web",
    body: "El recorrido existe en la aplicación autenticada. Cada liberación debe reverificarse contra el backend y los permisos del entorno objetivo.",
  },
  {
    key: "prototype",
    label: "Vista previa funcional",
    body: "La interfaz es utilizable, pero se apoya en datos demo, locales o en memoria. La persistencia todavía no está completa.",
  },
  {
    key: "exploration",
    label: "Exploración",
    body: "Una dirección de producto sin módulo operativo ni rutas activas. Requiere validación de comprador, alcance y prioridad.",
  },
];

const statusOrder = { implemented: 0, prototype: 1, exploration: 2 };

export default function Hub() {
  const verticals = [...publicProducts].sort(
    (a, b) => statusOrder[a.status] - statusOrder[b.status],
  );

  return (
    <div className="lx-site">
      <header className="lx-nav">
        <Brand />
        <a className="lxh-back" href={asset("/")}><ArrowLeft /><span>Volver al sitio</span></a>
      </header>

      <main id="top">
        <section className="lxh-hero lx-shell">
          <p className="lx-eyebrow">El ecosistema</p>
          <h1 className="lxh-title">Una sola plataforma para el activo, su gente y <em>su dinero.</em></h1>
          <p className="lxh-intro">
            Own Terra conecta el activo, las personas, la relación comercial, los documentos y el
            evento financiero, para que los equipos dejen de reconstruir el mismo contexto en hojas
            de cálculo y conversaciones sueltas. Es una plataforma de producto, no un conjunto de
            aplicaciones sin relación.
          </p>
        </section>

        {/* Diagrama: verticales sobre Core, con Finanzas leyendo de forma transversal. */}
        <section className="lx-section lx-shell" id="arquitectura">
          <header className="lx-sectionHead">
            <small className="lx-label">Cómo está construido</small>
            <h2 className="lx-h2">Core sostiene todo lo demás.</h2>
            <p className="lx-lead">
              Core es el plano compartido de control: concentra identidad y servicios reutilizables
              y nunca se convierte en otra vertical de negocio. Encima operan las verticales de
              dominio. Finanzas lee de forma transversal sin borrar el origen de cada movimiento.
            </p>
          </header>

          <div className="lxh-stack">
            <div className="lxh-layer">
              <div className="lxh-layerTag">
                <small>Verticales</small>
                <span>Cada una opera su propio dominio</span>
              </div>
              <div className="lxh-verticals">
                {verticals.map((v) => (
                  <a key={v.key} className={`lxh-vert is-${v.status}`} href={asset(v.landing)}>
                    <div className="lxh-vertTop">
                      <img src={asset(v.icon)} alt="" />
                      <span className="lxh-vertStatus">{v.statusLabel.es}</span>
                    </div>
                    <h3 className="lxh-vertName">{v.name.replace("OwnTerra ", "")}</h3>
                    <p className="lxh-vertDesc">{v.description.es}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="lxh-connector is-up" aria-hidden="true" />

            <div className="lxh-layer lxh-cross">
              <div className="lxh-layerTag">
                <small>Transversal</small>
                <span>En evolución</span>
              </div>
              <div className="lxh-crossRow">
                <img src={asset("/icons/app-finanzas.png")} alt="" />
                <h3>Finanzas</h3>
                <p>
                  Consolida cobranza, pagos y reportes entre verticales conservando la procedencia
                  de cada transacción. Las reglas contables, la conciliación y el cierre de periodo
                  todavía requieren validación con el responsable financiero.
                </p>
              </div>
            </div>

            <div className="lxh-connector is-up" aria-hidden="true" />

            <div className="lxh-layer lxh-core">
              <div className="lxh-layerTag">
                <small>Plano compartido</small>
                <span>Una sola sesión para las aplicaciones habilitadas</span>
              </div>
              <h3 className="lxh-coreName">OwnTerra Core</h3>
              <p className="lxh-coreLead">
                Core es dueño de la organización, la sesión, las personas, los permisos, la agenda,
                los clientes compartidos, los documentos, los formularios y el contexto que cruza
                las verticales. También resuelve el catálogo de aplicaciones y el cambio entre ellas.
              </p>
              <div className="lxh-coreItems">
                {coreCapabilities.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </div>
        </section>

        {/* Las dos jerarquías de inventario. */}
        <section className="lx-section lx-shell">
          <header className="lx-sectionHead">
            <small className="lx-label">El inventario</small>
            <h2 className="lx-h2">Dos jerarquías, la misma organización.</h2>
            <p className="lx-lead">
              Lands y Properties resuelven inventarios distintos, pero ambos cuelgan de la misma
              organización y comparten clientes, equipo, documentos y permisos de Core.
            </p>
          </header>
          <div className="lxh-hier">
            {hierarchies.map((h) => (
              <div key={h.key} className="lxh-hierCol">
                <small className="lx-label">{h.key === "lands" ? "Venta de tierra" : "Operación de inmuebles"}</small>
                <h3>{h.name}</h3>
                <p>{h.summary}</p>
                <div className="lxh-chain">
                  {h.chain.map(([num, label, note]) => (
                    <div key={num} className="lxh-chainStep">
                      <small>{num}</small>
                      <b>{label}</b>
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* La cadena que mantiene el contexto. */}
        <section className="lx-section lx-shell">
          <header className="lx-sectionHead">
            <small className="lx-label">Cómo se conecta la operación</small>
            <h2 className="lx-h2">El contexto no se rompe entre un paso y el siguiente.</h2>
            <p className="lx-lead">
              Esta es la cadena que las verticales conservan de principio a fin. Cada eslabón
              mantiene su relación con el anterior, y por eso un reporte puede volver hasta la
              evidencia que lo originó.
            </p>
          </header>
          <div className="lxh-flow">
            {operationFlow.map(([num, title, body]) => (
              <article key={num} className="lxh-flowStep">
                <span className="lxh-flowNum">{num}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Reglas de plataforma. */}
        <section className="lx-section lx-shell">
          <div className="lxh-rules">
            <div>
              <small className="lx-label">Reglas de la plataforma</small>
              <h2 className="lx-h2">Aislamiento por organización, siempre.</h2>
              <p className="lx-lead">
                Estas reglas no son configurables por cliente: definen cómo se comporta el
                ecosistema completo.
              </p>
            </div>
            <ul className="lxh-ruleList">
              {platformRules.map((rule) => <li key={rule}><Check />{rule}</li>)}
            </ul>
          </div>
        </section>

        {/* Vocabulario de estados. */}
        <section className="lx-section lx-shell">
          <header className="lx-sectionHead">
            <small className="lx-label">Cómo leer los estados</small>
            <h2 className="lx-h2">Qué significa cada etiqueta.</h2>
            <p className="lx-lead">
              Usamos el mismo vocabulario en el sitio, en las demos y en cualquier conversación
              comercial, para que el alcance quede claro antes y no después.
            </p>
          </header>
          <div className="lxh-legend">
            {statusLegend.map((item) => (
              <div key={item.key} className={`lxh-legendItem is-${item.key}`}>
                <h3>{item.label}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Aplicaciones. */}
        <section className="lx-section lx-shell" id="aplicaciones">
          <header className="lx-sectionHead">
            <small className="lx-label">Las aplicaciones</small>
            <h2 className="lx-h2">Empieza por la operación que necesitas resolver.</h2>
          </header>
          <div className="lxh-apps">
            {verticals.map((app) => (
              <article key={app.key} className={`lxh-app is-${app.status}`}>
                <a className="lxh-appMedia" href={asset(app.landing)} aria-label={`${app.cta.es}: ${app.name}`}>
                  <video autoPlay muted loop playsInline preload="metadata" poster={asset(app.poster)} aria-hidden="true">
                    <source src={asset(app.video)} type="video/mp4" />
                  </video>
                </a>
                <div className="lxh-appBody">
                  <div className="lxh-appTop">
                    <img src={asset(app.icon)} alt="" />
                    <span className="lxh-vertStatus">{app.statusLabel.es}</span>
                  </div>
                  <h3 className="lxh-appName">{app.name}</h3>
                  <p className="lxh-appHandle">{app.handle}</p>
                  <p className="lxh-appDesc">{app.description.es}</p>
                  <a className="lx-link" href={asset(app.landing)}>{app.cta.es}<ArrowRight /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="lx-section lx-shell">
          <div className="lx-band">
            <div>
              <small className="lx-label">Conversemos</small>
              <h2>¿Tu operación mezcla venta y administración?</h2>
              <p>
                Lands y Properties comparten Core, así que una organización puede operar ambas sin
                duplicar clientes, equipo ni documentos. Cuéntanos qué necesitas ordenar.
              </p>
            </div>
            <a className="lx-btn" href={asset("/#contact")}>Solicitar demo<ArrowRight /></a>
          </div>
          <div className="lxh-foot">
            <span>Own Terra · Ecosistema operativo para empresas inmobiliarias</span>
            <a className="lx-help" href="mailto:safeports.contacto@gmail.com">¿Dudas? Escríbenos<ArrowRight /></a>
          </div>
        </section>
      </main>

      <SiteFooter brand={<Brand />} tagline="Una plataforma de producto, no un conjunto de aplicaciones sin relación" />
    </div>
  );
}
