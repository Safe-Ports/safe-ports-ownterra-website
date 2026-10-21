import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { publicProducts } from "../src/data/publicProducts.js";

const projectFiles = [
  "src/App.jsx",
  "src/Hub.jsx",
  "src/ProductLanding.jsx",
  "src/Legal.jsx",
  "src/PrivacyNotice.jsx",
  "src/components/SiteFooter.jsx",
  "index.html",
  "hub.html",
  "lands.html",
  "properties.html",
  "construction.html",
  "legal.html",
  "aviso-privacidad.html",
];

test("public product catalog matches the audited frontend states", () => {
  assert.deepEqual(
    Object.fromEntries(publicProducts.map(({ key, status }) => [key, status])),
    {
      lands: "implemented",
      properties: "prototype",
      construction: "exploration",
    },
  );
});

test("active website surfaces do not restore retired or unsupported claims", async () => {
  const source = (await Promise.all(projectFiles.map((file) => readFile(file, "utf8")))).join("\n");
  for (const forbidden of [
    /Neighborhoods/i,
    /Own Terra Homes/i,
    /PRODUCTO LISTO/i,
    /PRODUCT READY/i,
    /ownterra-app-dev/i,
    /dev\.own-terra/i,
    /Construction[^\n]{0,80}(Activo|Active)/i,
  ]) {
    assert.doesNotMatch(source, forbidden);
  }
});

test("preview and exploration disclosures remain explicit", async () => {
  const properties = await readFile("properties.html", "utf8");
  const construction = await readFile("construction.html", "utf8");
  const productLanding = await readFile("src/ProductLanding.jsx", "utf8");

  assert.match(properties, /Vista previa funcional/);
  assert.match(construction, /Exploración/);
  assert.match(construction, /No es una vertical operativa/);
  assert.doesNotMatch(productLanding, /construction:[\s\S]*?appPath:\s*["']/);
});

test("every public page declares the branded social image", async () => {
  for (const file of projectFiles.filter((name) => name.endsWith(".html"))) {
    const html = await readFile(file, "utf8");
    assert.match(html, /property="og:image" content="%VITE_SITE_URL%\/og\.png"/);
    assert.match(html, /name="twitter:image" content="%VITE_SITE_URL%\/og\.png"/);
  }
});

test("internal links resolve against the deployment base", async () => {
  // El sitio se publica como project page bajo /safe-ports-website/, así que un
  // href absoluto apunta a la raíz del dominio y devuelve 404. Toda ruta interna
  // debe pasar por asset() de src/lib/url.js.
  for (const file of projectFiles.filter((name) => name.endsWith(".jsx"))) {
    const source = await readFile(file, "utf8");
    assert.doesNotMatch(
      source,
      /(?:href|src)="\/(?!\/)/,
      `${file} usa una ruta interna absoluta; envuélvela en asset().`,
    );
    assert.doesNotMatch(
      source,
      /(?:href|src)=\{(?:product|app|v)\.landing\}/,
      `${file} enlaza landing sin asset().`,
    );
    // Rutas internas en literales sueltos (p. ej. `const href = "/#contact"`),
    // que no aparecen como atributo y se escapan de la comprobación anterior.
    const literals = source.match(/"\/(?:#|[a-z0-9-]+\.html)[^"]*"/g) ?? [];
    for (const literal of literals) {
      assert.match(
        source,
        new RegExp(`asset\\(\\s*${literal.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`),
        `${file} usa la ruta interna ${literal} sin asset().`,
      );
    }
  }
});

test("Stripe review surfaces stay published", async () => {
  // Stripe revisa que el sitio muestre precios, términos, política de
  // cancelación y reembolsos, privacidad y quién opera el negocio.
  const legal = await readFile("src/Legal.jsx", "utf8");
  for (const id of ["terminos", "cancelacion", "privacidad"]) {
    assert.match(legal, new RegExp(`id: "${id}"`));
  }
  const footer = await readFile("src/components/SiteFooter.jsx", "utf8");
  assert.match(footer, /business\.legalName/);
  assert.match(footer, /legal\.html#cancelacion/);
  const productLanding = await readFile("src/ProductLanding.jsx", "utf8");
  assert.match(productLanding, /id="precios"/);
  for (const file of ["src/App.jsx", "src/Hub.jsx", "src/ProductLanding.jsx", "src/Legal.jsx", "src/PrivacyNotice.jsx"]) {
    assert.match(await readFile(file, "utf8"), /<SiteFooter/, `${file} no usa el pie común.`);
  }
});

test("privacy notice is published and linked", async () => {
  // LFPDPPP: el aviso integral debe estar publicado con responsable, domicilio,
  // derechos ARCO y el anexo de proveedores, y el pie debe llevar a él.
  const notice = await readFile("src/data/privacyNotice.js", "utf8");
  for (const id of ["responsable", "finalidades", "transferencias", "arco", "consentimiento", "anexo-a", "anexo-b"]) {
    assert.match(notice, new RegExp(`id: "${id}"`), `falta la sección ${id}`);
  }
  assert.match(notice, /Vallarta 500/);
  assert.match(notice, /safeports\.contacto@gmail\.com/);
  assert.doesNotMatch(notice, /\[URL\]/, "quedó un [URL] sin sustituir");
  const footer = await readFile("src/components/SiteFooter.jsx", "utf8");
  assert.match(footer, /aviso-privacidad\.html/);
  const vite = await readFile("vite.config.js", "utf8");
  assert.match(vite, /aviso-privacidad\.html/);
});
