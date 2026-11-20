/*
  Fuente única de la identidad comercial, los planes publicados y la fecha de
  los documentos legales. Footer, precios y página legal derivan de aquí.

  - `operator` es quien opera la marca de cara al público (pie de página).
  - `legalName` debe coincidir exactamente con el nombre registrado en Stripe
    y en el RFC; Stripe compara el sitio contra ese dato. Solo aparece dentro
    de los textos legales (términos y aviso de privacidad), detrás de `operator`.
  - Los montos de `landsPlans` y `landsPackages` replican los de la aplicación
    (safe-port-own-terra-front/src/services/landsPricing.js). El cobro real lo
    define Stripe: si cambian ahí, actualizar aquí también.
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

// Precios de Lands (MXN, más IVA). El tope de lotes es por organización, no por
// fraccionamiento. Galería principal: prueba + Estándar + Empresarial; arriba
// de `landsLargeOperationLots` se cotiza (estimado en la calculadora de la app:
// Empresarial + paquetes extra con descuento por volumen).
export const landsPlans = [
  {
    key: "estandar",
    name: "Estándar",
    price: 6000,
    recommended: true,
    tagline: "Para inmobiliarias y desarrolladoras en operación.",
    highlights: ["10 usuarios del equipo", "250 lotes en total", "Formularios y calculadoras ilimitados", "Reportes y dashboard ilimitados", "15 GB de documentos · Bot prioritario"],
  },
  {
    key: "empresarial",
    name: "Empresarial",
    price: 8000,
    tagline: "Para grupos y constructoras.",
    highlights: ["Usuarios y fraccionamientos ilimitados", "500 lotes en total", "Formularios y calculadoras ilimitados", "Reportes y dashboard ilimitados", "25 GB de documentos · Bot dedicado"],
  },
];

// Paquetes extra de 50 lotes sobre el Empresarial (operación grande).
export const landsPackages = { size: 50, price: 100 };

export const landsLargeOperationLots = 600;

// Operación grande: Empresarial + paquetes extra; a partir de este número de
// lotes cada paquete lleva descuento (precio graduado, igual que en la app).
export const landsLargePackagePrice = 80;
