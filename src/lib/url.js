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

/**
 * Liga a la aplicación de Own Terra (VITE_OWN_TERRA_URL), o `null` si el
 * despliegue no la configura. Con `registro` la app abre directo el alta de
 * cuenta en lugar del inicio de sesión.
 */
export function appLink(path = "/", { registro = false } = {}) {
  const base = import.meta.env.VITE_OWN_TERRA_URL?.trim();
  if (!base) return null;
  const url = new URL(String(path).replace(/^\//, ""), `${base.replace(/\/+$/, "")}/`);
  if (registro) url.searchParams.set("registro", "1");
  return url.toString();
}
