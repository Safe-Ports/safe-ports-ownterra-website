/*
  Fuente única de la identidad comercial, los planes publicados y la fecha de
  los documentos legales. Footer, precios y página legal derivan de aquí.

  - `operator` es quien opera la marca de cara al público (pie de página).
  - `legalName` debe coincidir exactamente con el nombre registrado en Stripe
    y en el RFC; Stripe compara el sitio contra ese dato. Solo aparece dentro
    de los textos legales (términos y aviso de privacidad), detrás de `operator`.
  - Los montos de `landsPlans` replican los de la aplicación
    (safe-port-own-terra-front/src/components/shared/PricingPlans.jsx). El cobro
    real lo define Stripe: si cambian ahí, actualizar aquí también.
*/
export const business = {
  brand: "Own Terra",
  operator: "Safe Ports",
  legalName: "Fernando Estrada",
  city: "Puerto Vallarta",
  state: "Jalisco",
  country: "México",
  email: "safeports.contacto@gmail.com",
};

export const legalUpdatedAt = "26 de octubre de 2026";

export const landsTrial = {
  days: 14,
  name: "Prueba",
  highlights: ["Todo ilimitado durante la prueba", "Sin tarjeta de crédito", "Al terminar eliges el plan que necesitas"],
};

export const landsCurrency = "MXN";

// Precios de Lands en producción (Stripe Live, MXN). El tope de lotes es por
// organización, no por fraccionamiento. El almacenamiento publicado es el que
// ofrecemos: 5, 15 y 25 GB.
export const landsPlans = [
  {
    key: "estandar",
    name: "Estándar",
    price: 2000,
    tagline: "Para inmobiliarias que arrancan.",
    highlights: ["5 usuarios del equipo", "3 fraccionamientos · 25 lotes en total", "5 formularios · 2 calculadoras", "Reportes y dashboard ilimitados", "5 GB de documentos · Bot de soporte"],
  },
  {
    key: "crecimiento",
    name: "Crecimiento",
    price: 5000,
    recommended: true,
    tagline: "Para desarrolladoras en expansión.",
    highlights: ["10 usuarios del equipo", "5 fraccionamientos · 50 lotes en total", "Formularios y calculadoras ilimitados", "Reportes y dashboard ilimitados", "15 GB de documentos · Bot prioritario"],
  },
  {
    key: "profesional",
    name: "Profesional",
    price: 8000,
    tagline: "Para grupos y constructoras.",
    highlights: ["Usuarios y fraccionamientos ilimitados", "250 lotes en total", "Formularios y calculadoras ilimitados", "Reportes y dashboard ilimitados", "25 GB de documentos · Bot dedicado"],
  },
];

export const landsAddon = { label: "Paquete de +100 lotes", price: 200 };
