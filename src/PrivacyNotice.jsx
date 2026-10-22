import { useEffect, useState } from "react";
import { ArrowLeft, ChevronDown } from "lucide-react";
import SiteFooter from "./components/SiteFooter";
import { privacySections, privacyUpdatedAt, privacyVersion, providersAnnex, simplifiedNotice } from "./data/privacyNotice";
import { asset } from "./lib/url";
import { useHashScroll } from "./lib/useHashScroll";

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

/* Sección visible ahora, para resaltarla en el índice lateral. */
function useActiveSection() {
  const [active, setActive] = useState(toc[0].id);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length) setActive(visible[0].target.id);
    }, { rootMargin: "-90px 0px -70% 0px" });
    toc.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  return active;
}

function Toc({ active, onPick }) {
  return (
    <nav className="lxa-tocList" aria-label="Contenido">
      {toc.map(({ id, title }) => (
        <a key={id} href={`#${id}`} className={id === active ? "is-active" : undefined}
          aria-current={id === active ? "location" : undefined} onClick={onPick}>{title}</a>
      ))}
    </nav>
  );
}

export default function PrivacyNotice() {
  useHashScroll();
  const active = useActiveSection();
  const [tocOpen, setTocOpen] = useState(false);
  return (
    <div className="lx-site">
      <header className="lx-nav">
        <Brand />
        <nav className="lxp-nav">
          <a className="lxp-back" href={asset("/legal.html")}><ArrowLeft /><span>Legal</span></a>
          <a className="lx-navCta" href={asset("/lands.html#precios")}>Ver precios</a>
        </nav>
      </header>

      <main className="lx-shell lxa-main" id="top">
        <header className="lxa-head">
          <small className="lx-label">Privacidad</small>
          <h1>Aviso de privacidad</h1>
          <p className="lxa-updated">Vigente desde el {privacyUpdatedAt} · Versión {privacyVersion}</p>
        </header>

        <div className="lxa-layout">
          <aside className="lxa-side">
            <button type="button" className="lxa-tocToggle" aria-expanded={tocOpen} onClick={() => setTocOpen((v) => !v)}>
              <span>Contenido</span><ChevronDown />
            </button>
            <div className={`lxa-tocPanel${tocOpen ? " is-open" : ""}`}>
              <Toc active={active} onPick={() => setTocOpen(false)} />
            </div>
          </aside>

          <article className="lxa-doc">
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
                <p>{simplifiedNotice.footnote}</p>
              </div>
            </section>

            <p className="lxa-meta">Versión {privacyVersion} · Última actualización: {privacyUpdatedAt}</p>
          </article>
        </div>
      </main>

      <SiteFooter brand={<Brand />} />
    </div>
  );
}
