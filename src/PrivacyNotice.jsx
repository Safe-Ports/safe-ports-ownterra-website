import { ArrowLeft } from "lucide-react";
import SiteFooter from "./components/SiteFooter";
import { privacySections, privacyUpdatedAt, privacyVersion, providersAnnex, simplifiedNotice } from "./data/privacyNotice";
import { asset } from "./lib/url";

const Brand = () => (
  <a className="lx-brand" href={asset("/")}>
    <span className="lx-brandMark">
      <img className="lx-markInk" src={asset("/brand/ownterra-mark-ink.svg")} alt="" />
      <img className="lx-markLight" src={asset("/brand/ownterra-mark-light.svg")} alt="" />
    </span>
    <b>Own Terra</b>
  </a>
);

/* **negritas** y [[ancla|texto]] → enlace a un ancla de esta página. */
function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*|\[\[[^\]]+\]\])/g).filter(Boolean).map((part, i) => {
    if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("[[")) {
      const [anchor, label] = part.slice(2, -2).split("|");
      return <a key={i} href={`#${anchor}`}>{label}</a>;
    }
    return part;
  });
}

function Block({ block }) {
  if (typeof block === "string") return <p><Rich text={block} /></p>;
  const List = block.ol ? "ol" : "ul";
  return (
    <List className="lxa-list">
      {(block.ol || block.ul).map((item) => <li key={item}><Rich text={item} /></li>)}
    </List>
  );
}

const toc = [...privacySections, providersAnnex, simplifiedNotice];

export default function PrivacyNotice() {
  return (
    <div className="lx-site">
      <header className="lx-nav">
        <Brand />
        <nav className="lxp-nav">
          <a className="lxp-back" href={asset("/legal.html")}><ArrowLeft /><span>Legal</span></a>
          <a className="lx-navCta" href={asset("/lands.html#precios")}>Ver precios</a>
        </nav>
      </header>

      <main className="lx-shell lxl-main" id="top">
        <header className="lxl-head">
          <small className="lx-label">Privacidad</small>
          <h1 className="lx-h2">Aviso de privacidad integral</h1>
          <p className="lx-lead">Versión {privacyVersion} · Última actualización: {privacyUpdatedAt}.</p>
          <nav className="lxl-toc lxa-toc" aria-label="Contenido">
            {toc.map(({ id, title }) => <a key={id} href={`#${id}`}>{title}</a>)}
          </nav>
        </header>

        {privacySections.map(({ id, title, blocks }) => (
          <section key={id} id={id} className="lxl-section">
            <h2>{title}</h2>
            <div className="lxl-block">{blocks.map((block, i) => <Block key={i} block={block} />)}</div>
          </section>
        ))}

        <section id={providersAnnex.id} className="lxl-section">
          <h2>{providersAnnex.title}</h2>
          <p className="lxa-sub">{providersAnnex.subtitle}</p>
          <div className="lxa-tableWrap">
            <table className="lxa-table">
              <thead><tr>{providersAnnex.columns.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
              <tbody>
                {providersAnnex.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => i === 0
                      ? <th key={i} scope="row">{cell}</th>
                      : <td key={i} data-label={providersAnnex.columns[i]}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id={simplifiedNotice.id} className="lxl-section">
          <h2>{simplifiedNotice.title}</h2>
          <p className="lxa-sub">{simplifiedNotice.subtitle}</p>
          <div className="lxl-block">
            {simplifiedNotice.blocks.map((block) => <Block key={block} block={block} />)}
            <ul className="lxa-checks" aria-label="Casillas de consentimiento">
              {simplifiedNotice.checks.map((item) => <li key={item}><span aria-hidden="true" />{item}</li>)}
            </ul>
            <p>{simplifiedNotice.footnote}</p>
          </div>
        </section>
      </main>

      <SiteFooter brand={<Brand />} />
    </div>
  );
}
