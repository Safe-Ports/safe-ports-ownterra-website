/*
  Fuente única de la identidad comercial, los planes publicados y la fecha de
  los documentos legales. Footer, precios y página legal derivan de aquí.

  - `legalName` debe coincidir exactamente con el nombre registrado en Stripe
    y en el RFC; Stripe compara el sitio contra ese dato.
  - Los montos de `landsPlans` replican los de la aplicación
    (safe-port-own-terra-front/src/components/shared/PricingPlans.jsx). El cobro
    real lo define Stripe: si cambian ahí, actualizar aquí también.
*/
export const business = {
  brand: "Own Terra",
  legalName: "Fernando Estrada",
  city: "Puerto Vallarta",
  state: "Jalisco",
  country: "México",
  email: "safeports.contacto@gmail.com",
};

export const legalUpdatedAt = "30 de septiembre de 2026";

export const landsTrial = {
  days: 14,
  name: "Prueba",
  highlights: ["Todo ilimitado durante la prueba", "Sin tarjeta de crédito", "Al terminar eliges el plan que necesitas"],
};

export const landsCurrency = "USD";

export const landsPlans = [
  {
    key: "estandar",
    name: "Estándar",
    price: 99,
    tagline: "Para inmobiliarias que arrancan.",
    highlights: ["5 usuarios del equipo", "3 fraccionamientos · 25 lotes c/u", "5 formularios · 2 calculadoras", "Reportes y dashboard ilimitados", "10 GB de documentos · Bot de soporte"],
  },
  {
    key: "crecimiento",
    name: "Crecimiento",
    price: 149,
    recommended: true,
    tagline: "Para desarrolladoras en expansión.",
    highlights: ["10 usuarios del equipo", "5 fraccionamientos · 50 lotes c/u", "Formularios y calculadoras ilimitados", "Reportes y dashboard ilimitados", "50 GB de documentos · Bot prioritario"],
  },
  {
    key: "profesional",
    name: "Profesional",
    price: 249,
    tagline: "Para grupos y constructoras.",
    highlights: ["Usuarios y fraccionamientos ilimitados", "250 lotes por fraccionamiento", "Formularios y calculadoras ilimitados", "Reportes y dashboard ilimitados", "100 GB de documentos · Bot dedicado"],
  },
];

export const landsAddon = { label: "Paquete de +100 lotes", price: 10 };
