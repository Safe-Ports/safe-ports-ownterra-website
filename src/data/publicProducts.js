/*
  Fuente única del estado público de cada vertical.

  Para lanzar una vertical:
    1. Cambiar aquí `status`, `statusLabel` y `statusShort`.
    2. Actualizar la aserción de tests/site-content.test.mjs, que falla a
       propósito si el catálogo y el estado auditado dejan de coincidir.
    3. Reescribir el texto de transparencia de esa vertical en
       ProductLanding.jsx (`transparency`), que es prosa y no se deriva.
    4. Sustituir sus capturas en public/ por pantallas reales de la aplicación.

  Todo lo demás (portada, ciclo, hub y tarjetas) deriva de este archivo, así
  que no quedan etiquetas contradictorias sueltas.

  Estados: implemented (recorrido real en la aplicación autenticada),
  prototype (interfaz utilizable con datos demo o locales) y
  exploration (dirección de producto sin módulo operativo).
*/
export const publicProducts = [
  {
    key: "lands",
    name: "OwnTerra Lands",
    handle: "terra.lands",
    status: "implemented",
    statusLabel: { es: "Aplicación web", en: "Web application" },
    statusShort: { es: "Aplicación web", en: "Web app" },
    description: {
      es: "Inventario y comercialización de terrenos: fraccionamientos, planos, lotes, clientes, contratos, cobranza, documentos y reportes.",
      en: "Land inventory and sales: developments, maps, lots, clients, contracts, collections, documents, and reporting.",
    },
    tags: {
      es: ["Fraccionamientos", "Lotes", "Contratos y cobranza"],
      en: ["Developments", "Lots", "Contracts and collections"],
    },
    cta: { es: "Conocer Lands", en: "Explore Lands" },
    icon: "/brand/lands-mark-color.svg",
    accent: "#4fe8cd",
    glow: "rgba(111,175,107,.30)",
    landing: "/lands.html",
    video: "/videos/own-terra-demo.mp4",
    poster: "/videos/own-terra-demo-poster.jpg",
  },
  {
    key: "properties",
    name: "OwnTerra Properties",
    handle: "terra.properties",
    status: "prototype",
    statusLabel: { es: "Vista previa funcional", en: "Functional preview" },
    statusShort: { es: "Vista previa", en: "Preview" },
    description: {
      es: "Portafolio, propietarios, propiedades, unidades, comunidades, rentas y operación. La experiencia actual es un prototipo funcional con datos demo o locales.",
      en: "Portfolio, owners, properties, units, communities, rentals, and operations. The current experience is a functional preview using demo or local data.",
    },
    tags: {
      es: ["Propietarios", "Propiedades", "Unidades"],
      en: ["Owners", "Properties", "Units"],
    },
    cta: { es: "Ver vista previa", en: "See the preview" },
    icon: "/brand/properties-mark-color.svg",
    accent: "#7c9dff",
    glow: "rgba(84,124,197,.30)",
    landing: "/properties.html",
    video: "/videos/ownterra_properties.mp4",
    poster: "/videos/ownterra-properties-poster.jpg",
  },
  {
    key: "construction",
    name: "OwnTerra Construction",
    handle: "terra.construction",
    status: "exploration",
    statusLabel: { es: "Exploración", en: "Exploration" },
    statusShort: { es: "Exploración", en: "Exploration" },
    description: {
      es: "Concepto de seguimiento de obra. Aún no es una vertical operativa ni tiene rutas activas dentro de la aplicación autenticada.",
      en: "Construction-tracking concept. It is not yet an operational vertical and has no active routes in the authenticated application.",
    },
    tags: {
      es: ["Concepto", "Sin módulo operativo", "Por validar"],
      en: ["Concept", "No operational module", "To be validated"],
    },
    cta: { es: "Conocer la exploración", en: "View the exploration" },
    icon: "/brand/construction-mark-color.svg",
    accent: "#e8bd3f",
    glow: "rgba(232,189,63,.28)",
    landing: "/construction.html",
    video: "/videos/own-terra-Constructions.mp4",
    poster: "/videos/own-terra-construction-poster.jpg",
  },
];

export function getPublicProduct(key) {
  return publicProducts.find((product) => product.key === key);
}
