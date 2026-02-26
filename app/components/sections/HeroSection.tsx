import LangText from "../LangText";
import { siteData } from "@/content/siteData";

export default function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="container hero-layout reveal">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            <LangText value={siteData.brand.location} />
          </p>
          <h1>
            <LangText value={siteData.hero.title} />
          </h1>
          <p className="hero-subtitle">
            <LangText value={siteData.hero.subtitle} />
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#quote">
              <LangText value={siteData.hero.primaryCta} />
            </a>
            <a className="btn btn-ghost" href="#products">
              <LangText value={siteData.hero.secondaryCta} />
            </a>
          </div>
          <ul className="hero-points">
            {siteData.hero.points.map((point, index) => (
              <li key={`${point.zh}-${index}`}>
                <span className="dot" aria-hidden="true" />
                <LangText value={point} />
              </li>
            ))}
          </ul>
        </div>

        <aside className="hero-panel">
          <div className="hero-panel-grid">
            {siteData.hero.highlights.map((item) => (
              <article className="hero-kpi" key={item.value}>
                <p className="hero-kpi-value">{item.value}</p>
                <p className="hero-kpi-label">
                  <LangText value={item.label} />
                </p>
              </article>
            ))}
          </div>

          <div className="hero-panel-cta">
            <h3>
              <LangText value={siteData.cta.title} />
            </h3>
            <p>
              <LangText value={siteData.cta.description} />
            </p>
            <a className="text-link" href="#quote">
              <LangText value={siteData.cta.button} />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
