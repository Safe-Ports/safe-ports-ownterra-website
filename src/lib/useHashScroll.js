import { useEffect } from "react";

/**
 * Lleva a la sección del `#ancla` de la URL al cargar la página.
 *
 * El navegador intenta saltar al ancla antes de que React pinte las secciones,
 * así que un enlace como `aviso-privacidad.html#cookies` abría arriba. Se
 * repite al cargar las fuentes porque cambian la altura del texto.
 */
export function useHashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const jump = () => document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" });
    jump();
    document.fonts?.ready.then(jump);
  }, []);
}
