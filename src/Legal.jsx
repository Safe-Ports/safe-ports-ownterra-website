import { ArrowLeft } from "lucide-react";
import SiteFooter from "./components/SiteFooter";
import { business, landsCurrency, landsTrial, legalUpdatedAt } from "./data/business";
import { asset } from "./lib/url";
import { useHashScroll } from "./lib/useHashScroll";

const operator = `${business.legalName}, con domicilio en ${business.city}, ${business.state}, ${business.country}`;

/*
  Texto base redactado a partir de cómo funciona hoy el cobro en la aplicación
  (Stripe Checkout + Billing Portal con cancelación al final del periodo).
  Debe revisarlo el abogado. El aviso de privacidad integral vive en su propia
  página (aviso-privacidad.html); aquí solo queda el resumen del sitio.
*/
const sections = [
  {
    id: "terminos",
    title: "Términos y condiciones del servicio",
    blocks: [
      ["1. Quién presta el servicio", [
        `${business.brand} es una marca operada por ${operator} (“${business.brand}”, “nosotros”). Al crear una cuenta, iniciar una prueba o contratar un plan aceptas estos términos en nombre propio y de la organización que representas (“el Cliente”).`,
      ]],
      ["2. El servicio", [
        `${business.brand} Lands es un software como servicio para la operación comercial de terrenos: fraccionamientos, lotes, clientes, contratos, cobranza, documentos y reportes. Se ofrece mediante suscripción y se usa a través de una aplicación web.`,
        "La aplicación móvil para vendedores no tiene costo adicional y solo funciona mientras la organización tenga una suscripción de pago activa. La suscripción se contrata y administra únicamente desde la aplicación web; la app móvil no realiza cobros.",
        `${business.brand} Properties y ${business.brand} Construction se muestran en este sitio como vista previa y exploración, respectivamente; no están a la venta ni forman parte de ninguna suscripción hasta que se anuncie lo contrario.`,
      ]],
      ["3. Cuentas y usuarios", [
        "El Cliente es responsable de la veracidad de la información de su cuenta, de los usuarios que invita, de los permisos que les asigna y de mantener sus credenciales en secreto.",
        "La información que el Cliente captura en la plataforma (inventario, clientes, contratos, pagos y documentos) le pertenece. El Cliente es responsable de contar con las autorizaciones necesarias para tratar los datos personales de sus propios clientes y prospectos.",
      ]],
      ["4. Prueba gratuita", [
        `Cada organización nueva cuenta con una prueba de ${landsTrial.days} días sin necesidad de tarjeta. Al terminar la prueba no se realiza ningún cargo automático: para seguir usando el servicio el Cliente debe elegir un plan de pago.`,
      ]],
      ["5. Planes, precios y facturación", [
        `Los precios vigentes se publican en la página de precios de este sitio y dentro de la aplicación. Se expresan en dólares estadounidenses (${landsCurrency}) por mes y pueden causar los impuestos aplicables.`,
        "Las suscripciones se cobran por adelantado y se renuevan automáticamente cada mes con el método de pago registrado, hasta que el Cliente las cancele. Los pagos se procesan a través de Stripe; no almacenamos los datos completos de tarjetas.",
        "Si modificamos el precio de un plan, lo avisaremos por correo con al menos 30 días de anticipación. El nuevo precio aplicará a partir de la siguiente renovación posterior a ese plazo.",
        "El Cliente puede cambiar de plan desde la aplicación. El ajuste correspondiente se muestra en el portal de facturación antes de confirmar el cambio.",
        "Si un cobro de renovación falla, podremos reintentarlo y, si no se regulariza, suspender el acceso hasta que se actualice el método de pago.",
      ]],
      ["6. Uso aceptable", [
        "El Cliente no debe usar el servicio para actividades ilícitas, para vulnerar derechos de terceros, para intentar acceder a información de otras organizaciones ni para interferir con la operación o seguridad de la plataforma.",
        "Podemos suspender una cuenta que incumpla esta sección, notificando al Cliente salvo que exista un riesgo que requiera actuar de inmediato.",
      ]],
      ["7. Disponibilidad y cambios", [
        "Trabajamos para mantener el servicio disponible y seguro, pero no garantizamos que funcione sin interrupciones ni errores. Podemos mejorar, modificar o retirar funciones; si un cambio reduce de forma relevante lo contratado, lo avisaremos con anticipación.",
      ]],
      ["8. Limitación de responsabilidad", [
        `En la medida permitida por la ley, la responsabilidad total de ${business.brand} derivada del servicio se limita al monto que el Cliente haya pagado en los 12 meses anteriores al hecho que la origine. No respondemos por lucro cesante ni por daños indirectos.`,
      ]],
      ["9. Terminación", [
        "El Cliente puede cancelar en cualquier momento conforme a la política de cancelación de esta página. Podemos terminar el servicio por incumplimiento grave de estos términos.",
      ]],
      ["10. Ley aplicable", [
        `Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Para cualquier controversia, las partes se someten a los tribunales competentes de ${business.city}, ${business.state}.`,
      ]],
      ["11. Cambios a estos términos", [
        "Podemos actualizar estos términos. La versión vigente siempre estará publicada en esta página con su fecha de actualización; los cambios relevantes se avisarán por correo.",
      ]],
    ],
  },
  {
    id: "cancelacion",
    title: "Política de cancelación y reembolsos",
    blocks: [
      ["Cancela cuando quieras", [
        "Puedes cancelar tu suscripción en cualquier momento, sin penalización ni plazo forzoso, desde Configuración → Suscripción y facturación dentro de la aplicación. También puedes pedirlo escribiendo a nuestro correo de contacto.",
      ]],
      ["Qué pasa al cancelar", [
        "La cancelación surte efecto al final del periodo que ya pagaste. Hasta esa fecha conservas el acceso completo a tu plan, y la aplicación te muestra el día exacto en que termina.",
        "Después de esa fecha no se vuelve a cobrar. Puedes reactivar tu suscripción cuando quieras eligiendo de nuevo un plan.",
      ]],
      ["Reembolsos", [
        "Los pagos no son reembolsables y no se hacen reembolsos ni créditos por periodos parciales, meses sin uso o funciones no utilizadas.",
        "Excepciones: si detectas un cargo duplicado o un cobro que no corresponde a tu plan, escríbenos dentro de los 30 días siguientes y te reembolsaremos el importe completo del cargo erróneo. También se respetan los reembolsos que exija la legislación aplicable.",
      ]],
      ["Prueba gratuita", [
        `La prueba de ${landsTrial.days} días no requiere tarjeta y no genera cargos, por lo que no es necesario cancelarla.`,
      ]],
    ],
  },
  {
    id: "privacidad",
    title: "Privacidad",
    blocks: [
      ["Responsable", [
        `El responsable del tratamiento de los datos personales es ${operator}. Contacto: ${business.email}.`,
      ]],
      ["Este sitio web", [
        "Este sitio no utiliza cookies de seguimiento ni herramientas de analítica, y no almacena la información que escribes en el formulario de contacto: al enviarlo se prepara un correo en tu propio cliente de correo dirigido a nosotros.",
        "Usamos los datos que nos envíes (nombre, empresa, correo y detalles de tu operación) únicamente para responder tu solicitud y, en su caso, presentarte el servicio.",
      ]],
      ["Aviso de privacidad integral", [
        <>El detalle de finalidades, transferencias y el procedimiento para ejercer tus derechos de acceso, rectificación, cancelación y oposición (ARCO) está en el <a href={asset("/aviso-privacidad.html")}>aviso de privacidad integral</a>.</>,
      ]],
    ],
  },
];

const Brand = () => (
  <a className="lx-brand" href={asset("/")}>
    <span className="lx-brandMark">
      <img className="lx-markInk" src={asset("/brand/ownterra-mark-ink.svg")} alt="" />
      <img className="lx-markLight" src={asset("/brand/ownterra-mark-light.svg")} alt="" />
    </span>
    <b>Own Terra</b>
  </a>
);

export default function Legal() {
  useHashScroll();
  return (
    <div className="lx-site">
      <header className="lx-nav">
        <Brand />
        <nav className="lxp-nav">
          <a className="lxp-back" href={asset("/")}><ArrowLeft /><span>Inicio</span></a>
          <a className="lx-navCta" href={asset("/lands.html#precios")}>Ver precios</a>
        </nav>
      </header>

      <main className="lx-shell lxl-main">
        <header className="lxl-head">
          <small className="lx-label">Legal</small>
          <h1 className="lx-h2">Términos, cancelación y privacidad</h1>
          <p className="lx-lead">Última actualización: {legalUpdatedAt}.</p>
          <nav className="lxl-toc" aria-label="Contenido">
            {sections.map(({ id, title }) => <a key={id} href={`#${id}`}>{title}</a>)}
          </nav>
        </header>

        {sections.map(({ id, title, blocks }) => (
          <section key={id} id={id} className="lxl-section">
            <h2>{title}</h2>
            {blocks.map(([heading, paragraphs]) => (
              <div key={heading} className="lxl-block">
                <h3>{heading}</h3>
                {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            ))}
          </section>
        ))}
      </main>

      <SiteFooter brand={<Brand />} />
    </div>
  );
}
