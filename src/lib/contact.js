import { useEffect, useRef } from "react";

/*
  Envío del formulario de demo a core-back (POST /api/v1/public/contact).

  - VITE_CONTACT_API_URL: URL completa del endpoint. Sin ella, el formulario
    vuelve a preparar el correo en la app del visitante.
  - VITE_TURNSTILE_SITE_KEY: llave pública de Cloudflare Turnstile. Con ella se
    muestra el captcha y su token viaja con la solicitud; el backend lo exige
    cuando tiene la llave secreta.

  Los límites (por IP, tope diario y honeypot) los aplica el backend; aquí solo
  se traduce la respuesta a un estado de la interfaz.
*/
export const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL?.trim() || "";
export const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim() || "";

const TURNSTILE_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

/** Devuelve "sent", "limited" o "error". */
export async function sendContactRequest(data) {
  const payload = {
    name: data.get("name") || "",
    company: data.get("company") || "",
    email: data.get("email") || "",
    operation: data.get("operation") || "",
    portfolio_size: data.get("portfolioSize") || "",
    tools: data.get("tools") || "",
    challenge: data.get("challenge") || "",
    website: data.get("website") || "",
    turnstile_token: data.get("cf-turnstile-response") || "",
  };
  try {
    const response = await fetch(contactApiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (response.ok) return "sent";
    return response.status === 429 ? "limited" : "error";
  } catch {
    return "error";
  }
}

/** Monta el widget de Turnstile en el elemento que recibe la ref. */
export function useTurnstile() {
  const ref = useRef(null);
  useEffect(() => {
    if (!turnstileSiteKey || !contactApiUrl) return undefined;
    let widgetId;
    const render = () => {
      if (ref.current && window.turnstile && widgetId == null) {
        widgetId = window.turnstile.render(ref.current, { sitekey: turnstileSiteKey, theme: "dark" });
      }
    };
    let script = document.querySelector(`script[src="${TURNSTILE_SRC}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = TURNSTILE_SRC;
      script.async = true;
      document.head.append(script);
    }
    if (window.turnstile) render();
    else script.addEventListener("load", render);
    return () => {
      script.removeEventListener("load", render);
      if (widgetId != null) window.turnstile?.remove(widgetId);
    };
  }, []);
  return ref;
}
