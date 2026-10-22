/*
  Aviso de privacidad integral, transcrito del documento aprobado
  (aviso-privacidad-ownterra-v2, versión 2.1). No reescribir la redacción aquí:
  cualquier cambio de texto sale primero del documento legal.

  Formato de cada bloque:
    "texto"                      → párrafo
    { ul: [...] } / { ol: [...] } → lista
  Dentro del texto, **así** marca negritas y [[anexo-a|texto]] un enlace interno
  a un ancla de esta misma página (sustituye los marcadores de URL del documento).
*/
export const privacyVersion = "2.1";
export const privacyUpdatedAt = "17 de octubre de 2026";

const CONTACT = "safeports.contacto@gmail.com";

export const privacySections = [
  {
    id: "responsable",
    title: "1. Identidad y domicilio del responsable",
    blocks: [
      "**Safe Ports**, nombre comercial de Fernando Estrada, persona física con actividad empresarial, titular de la plataforma **OwnTerra** (\"OwnTerra\"), con domicilio para oír y recibir notificaciones en Vallarta 500, Torre 2F, Depto. 8, Av. Principal, C.P. 48315, Puerto Vallarta, Jalisco, México, es responsable del tratamiento de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), su Reglamento y demás normatividad aplicable.",
      `Contacto para privacidad y derechos ARCO: **${CONTACT}**`,
    ],
  },
  {
    id: "que-es",
    title: "2. Qué es OwnTerra",
    blocks: [
      "OwnTerra es un software inmobiliario por suscripción mensual (SaaS), disponible en web y aplicación móvil con una misma cuenta, con dos productos: Lands (venta de terrenos y lotes) y Properties (administración de inmuebles y condominios). Sus clientes (\"clientes de la plataforma\") son personas físicas u organizaciones, como inmobiliarias, fraccionadoras, administradoras de condominios y negocios de renta, que usan la plataforma para su propia operación.",
    ],
  },
  {
    id: "calidad",
    title: "3. Calidad con la que OwnTerra trata los datos",
    blocks: [
      {
        ul: [
          "**Como responsable,** OwnTerra trata: (a) los datos de los clientes de la plataforma y de los colaboradores que invitan, relativos al registro, acceso, seguridad, suscripción y cobro; (b) los datos de prospectos y visitantes del sitio web que llenan el formulario; y (c) las credenciales y registros de acceso de quienes tienen una cuenta de portal (propietarios, inquilinos, residentes y proveedores).",
          "**Como encargado,** OwnTerra trata, por cuenta e instrucciones de cada cliente, los datos que este registra para su operación: compradores, arrendatarios, inquilinos, residentes, propietarios, proveedores, trabajadores de terceros y los documentos relacionados. **Frente a esos datos el cliente es el responsable** y debe contar con su propio aviso de privacidad y con el consentimiento que corresponda. Si usted es titular de esos datos y desea ejercer sus derechos, puede dirigirse al cliente o al contacto indicado arriba; OwnTerra canalizará su solicitud.",
        ],
      },
    ],
  },
  {
    id: "datos",
    title: "4. Datos personales que se tratan",
    blocks: [
      {
        ul: [
          "**Identificación:** nombre completo, RFC, número de identificación oficial, foto de perfil.",
          "**Contacto:** correo electrónico, teléfono, domicilio.",
          "**Patrimoniales y financieros:** monto del contrato, enganche, tasa de interés, mensualidades, método de pago, comprobantes, finiquitos o liquidaciones, saldos, adeudos y porcentaje de propiedad de cada unidad.",
          "**Acceso y uso:** correo y contraseña, bitácora de actividad, dirección IP y registros de acceso.",
          "**Agenda y soporte:** citas de la agenda y conversaciones con el bot de soporte.",
          "**Documentos cargados por los clientes:** identificaciones oficiales, comprobantes y contratos firmados, que pueden incluir firmas. El cliente decide su contenido.",
          "**En Properties:** firma y foto en la recepción de paquetería, votos en asambleas y datos de cuentas de portal.",
          "**Pagos de suscripción:** los datos de tarjeta los recibe directamente Stripe; OwnTerra solo conserva identificadores, plan y estado del pago.",
        ],
      },
      "**No se solicitan datos personales sensibles** (salud, biométricos, origen étnico, religión, entre otros). Los clientes que diseñen formularios públicos no deben solicitarlos.",
    ],
  },
  {
    id: "obtencion",
    title: "5. Cómo se obtienen",
    blocks: [
      {
        ul: [
          "Directamente de usted: formularios del sitio y de la aplicación, uso de la plataforma, y medios informales como WhatsApp o correo.",
          "Indirectamente: los datos de compradores, inquilinos, residentes y trabajadores de terceros los carga el cliente de la plataforma.",
          "Opcionalmente, si el usuario conecta su cuenta de Google Calendar: su correo de Google y un permiso de acceso cifrado para crear o borrar eventos.",
        ],
      },
    ],
  },
  {
    id: "finalidades",
    title: "6. Finalidades",
    blocks: [
      "Los datos se utilizan para:",
      {
        ol: [
          "Relacionar el inmueble con la persona correspondiente y gestionar la documentación de una compra, venta, renta o administración.",
          "Crear y operar cuentas, dar acceso a la plataforma y a la aplicación, y brindar soporte, incluido el soporte con inteligencia artificial.",
          "Cobrar la suscripción y enviar correos de verificación, recuperación de contraseña y recordatorios de pago.",
          "Seguridad, auditoría de accesos y monitoreo de errores.",
          "Dar seguimiento a prospectos que dejan sus datos en el formulario.",
          "Cumplir obligaciones legales.",
        ],
      },
      `**Finalidades secundarias (no necesarias para el servicio):** respecto de los datos que OwnTerra trata como responsable (sección 3), y de forma disociada, anonimizada o agregada siempre que sea posible, utilizamos la información para construir y mantener las bases de datos propias de OwnTerra y para desarrollar, entrenar y mejorar herramientas de inteligencia artificial y funciones de la plataforma, de modo que nuestros servicios sean cada vez más precisos y útiles. Esto no incluye los datos que sus clientes capturan por cuenta propia en la plataforma (sección 3, OwnTerra como encargado), salvo que el cliente así lo instruya o se obtenga el consentimiento correspondiente. Si usted no desea que sus datos se usen para estas finalidades secundarias, puede manifestarlo en cualquier momento, incluso al registrarse, escribiendo a ${CONTACT}, sin que ello afecte la contratación ni el uso de la plataforma.`,
    ],
  },
  {
    id: "transferencias",
    title: "7. Remisiones y transferencias",
    blocks: [
      "OwnTerra se apoya en proveedores que tratan datos por su cuenta (remisiones) y, en algunos casos, en terceros que reciben datos para sus propias funciones (transferencias). La lista vigente, con proveedor, finalidad y ubicación, está en el [[anexo-a|Anexo A]] y se publica en esta misma página; se actualiza sin modificar este aviso cuando cambia un proveedor dentro de la misma categoría. Por categoría:",
      {
        ul: [
          "**Infraestructura y almacenamiento** (base de datos, servidor de aplicación, archivos): Supabase (Estados Unidos), Hetzner (Finlandia, Unión Europea) y Cloudflare (infraestructura global).",
          "**Servicios operativos:** correo transaccional (Resend), inteligencia artificial del bot de soporte (Google Gemini), calendario opcional (Google Calendar), monitoreo de errores (Sentry) y alojamiento del sitio público (GitHub Pages).",
          "**Cobro de suscripciones:** Stripe (Estados Unidos), que recibe los datos de pago y puede tratarlos para sus propias obligaciones de prevención de fraude y cumplimiento. Es una transferencia necesaria para la relación contractual.",
          "**Contador y personal técnico** con acceso al sistema, en México; y **autoridades** cuando la ley lo exija.",
          "**Apple y Google** distribuyen las aplicaciones móviles y tratan sus datos conforme a sus propios avisos.",
        ],
      },
      "Varios de estos proveedores almacenan o procesan datos fuera de México. Las remisiones no requieren su consentimiento; las transferencias que lo requieran se recabarán al aceptar este aviso. OwnTerra no vende sus datos.",
    ],
  },
  {
    id: "cookies",
    title: "8. Cookies y almacenamiento local",
    blocks: [
      "La plataforma web guarda su sesión y algunas preferencias en el almacenamiento local del navegador (localStorage), y la aplicación móvil guarda la sesión en el teléfono. Son cookies y almacenamiento estrictamente necesarios para el funcionamiento. No se usan cookies de rastreo ni de terceros, Google Analytics, píxeles, publicidad personalizada ni geolocalización. Puede borrarlos desde su navegador o dispositivo, lo que cerrará su sesión.",
      {
        ul: [
          "**Monitoreo de errores:** Sentry puede recibir la dirección IP y el identificador de usuario cuando ocurre un error, solo para diagnóstico.",
          "**Sitio público:** GitHub Pages registra la dirección IP de los visitantes.",
          "**Notificaciones:** la aplicación puede programar recordatorios de agenda que muestren en la pantalla bloqueada el nombre de un cliente y la hora de una cita. Puede desactivarlas en su dispositivo.",
          "**Desbloqueo biométrico:** es opcional y lo verifica su propio teléfono; la aplicación solo recibe una respuesta de sí o no y nunca recibe ni guarda su huella o rostro.",
        ],
      },
    ],
  },
  {
    id: "documentos",
    title: "9. Documentos y enlaces públicos",
    blocks: [
      "Los clientes deciden qué documentos suben y no deben cargar datos que no necesiten. Las cotizaciones pueden compartirse por enlace público o por WhatsApp: cualquier persona con el enlace podrá abrirlas.",
    ],
  },
  {
    id: "conservacion",
    title: "10. Conservación",
    blocks: [
      "Los datos de cuenta se conservan mientras la suscripción esté activa y hasta 60 días después de cancelarla, periodo en que el cliente puede exportarlos; después se eliminan. Los respaldos se rotan en un máximo de 30 días. Los datos de prospectos se conservan hasta 18 meses. La información de pagos y facturación se conserva 5 años por obligaciones fiscales. Si la ley exige un plazo mayor, se conserva por ese plazo.",
    ],
  },
  {
    id: "arco",
    title: "11. Derechos ARCO, revocación y limitación de uso",
    blocks: [
      `Usted puede **Acceder**, **Rectificar**, **Cancelar** u **Oponerse** al tratamiento de sus datos, revocar su consentimiento y limitar su uso o divulgación. Envíe su solicitud a **${CONTACT}** con: (i) su nombre y medio de respuesta; (ii) documentos que acrediten su identidad o representación; (iii) descripción clara de los datos y del derecho; y (iv) elementos que faciliten localizarlos.`,
      "OwnTerra responderá en un máximo de 20 días hábiles y, si procede, la hará efectiva en los 15 días hábiles siguientes. Si los datos fueron capturados por un cliente de la plataforma, su solicitud se canalizará al cliente, que es el responsable, y OwnTerra le dará el apoyo técnico necesario. La cancelación puede estar sujeta a conservar datos por obligaciones legales.",
    ],
  },
  {
    id: "seguridad",
    title: "12. Seguridad",
    blocks: [
      "OwnTerra mantiene medidas de seguridad administrativas, técnicas y físicas para proteger sus datos contra daño, pérdida, alteración, destrucción o acceso, uso o tratamiento no autorizado.",
    ],
  },
  {
    id: "cambios",
    title: "13. Cambios al aviso",
    blocks: [
      "Las modificaciones se publicarán en el sitio web y la aplicación. Si cambian las finalidades, la identidad del responsable o las transferencias de forma que requiera su consentimiento, se lo haremos saber antes de que surtan efectos.",
    ],
  },
  {
    id: "autoridad",
    title: "14. Autoridad",
    blocks: [
      "Si considera vulnerado su derecho a la protección de datos, puede acudir ante la autoridad competente en la materia (actualmente la Secretaría Anticorrupción y Buen Gobierno).",
    ],
  },
  {
    id: "consentimiento",
    title: "15. Consentimiento",
    blocks: [
      "Al marcar la casilla \"He leído y acepto\" al registrarse, usted manifiesta haber leído este aviso y otorga su consentimiento expreso para el tratamiento de sus datos patrimoniales y financieros y para las transferencias que lo requieran. La casilla no aparece marcada por defecto. Para las finalidades secundarias descritas en la sección 6 no se requiere casilla alguna; usted puede oponerse en cualquier momento conforme a ese apartado y a la sección 11.",
    ],
  },
];

export const providersAnnex = {
  id: "anexo-a",
  title: "Anexo A — Proveedores y terceros",
  subtitle: "Versión 2.0 · 13 de octubre de 2026 · Se actualiza sin modificar el aviso integral",
  columns: ["Proveedor", "Categoría", "Finalidad", "Ubicación", "Carácter"],
  rows: [
    ["Supabase", "Base de datos", "Almacenamiento de la información de la plataforma", "Global", "Remisión"],
    ["Hetzner", "Servidor de aplicación", "Ejecución de la plataforma", "Global", "Remisión"],
    ["Cloudflare", "Archivos y red", "Almacenamiento de contratos y comprobantes", "Infraestructura global", "Remisión"],
    ["Resend", "Correo transaccional", "Verificación, recuperación de contraseña y recordatorios de pago", "Según configuración del proveedor", "Remisión"],
    ["Google Gemini", "Inteligencia artificial", "Soporte mediante bot", "Global", "Remisión"],
    ["Google Calendar", "Calendario (opcional)", "Crear o borrar eventos si el usuario conecta su cuenta", "Global", "Remisión, por decisión del usuario"],
    ["Sentry", "Monitoreo de errores", "Diagnóstico técnico", "Según configuración del proveedor", "Remisión"],
    ["GitHub Pages", "Alojamiento web", "Sitio público", "Global", "Remisión"],
    ["Stripe", "Pagos", "Cobro de la suscripción", "Global", "Transferencia necesaria para el contrato"],
    ["Apple y Google", "Tiendas de apps", "Distribución de las aplicaciones móviles", "Global", "Responsables propios"],
    ["Contador y personal técnico", "Servicios profesionales", "Contabilidad, operación y soporte", "México", "Remisión"],
    ["Autoridades", "—", "Cumplimiento de mandato legal", "México", "Transferencia legal"],
  ],
};

export const simplifiedNotice = {
  id: "anexo-b",
  title: "Anexo B — Aviso de privacidad simplificado",
  subtitle: "Resumen de este aviso en una sola lectura",
  blocks: [
    "**Responsable:** Safe Ports (Fernando Estrada), operador de OwnTerra, con domicilio para oír y recibir notificaciones en Vallarta 500, Torre 2F, Depto. 8, Av. Principal, C.P. 48315, Puerto Vallarta, Jalisco, México.",
    "**Finalidades:** crear y operar su cuenta, relacionar inmuebles con personas y gestionar su documentación, cobrar la suscripción, enviar correos operativos, brindar soporte y dar seguridad. Adicionalmente, y salvo que usted se oponga, usamos sus datos de forma disociada o agregada para construir nuestras bases de datos y desarrollar y mejorar herramientas de inteligencia artificial. No usamos sus datos para publicidad.",
    "**Datos:** identificación, contacto, patrimoniales y financieros, y datos de acceso. No pedimos datos sensibles.",
    "**Transferencias:** compartimos datos con proveedores de infraestructura y servicios, algunos fuera de México (Estados Unidos y Unión Europea), y con Stripe para el cobro, necesario para el servicio.",
    `**Derechos ARCO y revocación:** escriba a ${CONTACT}. Consulte el [[top|aviso integral]] en esta página.`,
  ],
  footnote: "Cuando un cliente de la plataforma captura datos de sus compradores, inquilinos o residentes, es ese cliente quien debe mostrar su propio aviso y recabar el consentimiento.",
};
