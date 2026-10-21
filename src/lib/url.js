/**
 * Resuelve una ruta interna contra la base del despliegue.
 *
 * El sitio se publica en GitHub Pages como project page, así que vive bajo
 * `/safe-ports-ownterra-website/` y no en la raíz del dominio. Un `href="/lands.html"`
 * absoluto apunta al dominio raíz y devuelve 404; toda ruta interna —páginas,
 * anclas e imágenes— tiene que pasar por aquí.
 */
export const asset = (path = "/") =>
  `${import.meta.env.BASE_URL}${String(path).replace(/^\//, "")}`;
