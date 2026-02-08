"use client";

import LangText from "./components/LangText";
import LanguageToggle from "./components/LanguageToggle";
import { siteData } from "@/content/siteData";

const fallbackLabel = { zh: "", en: "" };

function getNavLabel(id: string) {
  return siteData.nav.find((item) => item.id === id)?.label ?? fallbackLabel;
}

export default function Home() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">
            <span className="logo-mark" aria-hidden="true" />
            <div className="logo-text">
              <div className="logo-name">
                <LangText value={siteData.brand.name} />
              </div>
              <div className="logo-tagline">
                <LangText value={siteData.brand.tagline} />
              </div>
            </div>
          </div>
          <nav className="nav">
            {siteData.nav.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                <LangText value={item.label} />
              </a>
            ))}
          </nav>
          <LanguageToggle />
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-line" aria-hidden="true" />
                <LangText value={siteData.brand.location} />
              </div>
              <h1>
                <LangText value={siteData.hero.title} />
              </h1>
              <p className="hero-subtitle">
                <LangText value={siteData.hero.subtitle} />
              </p>
              <div className="hero-actions">
                <a className="btn primary" href="#contact">
                  <LangText value={siteData.hero.primaryCta} />
                </a>
                <a className="btn ghost" href="#products">
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
            <div className="hero-panel">
              <div className="panel-grid">
                {siteData.hero.highlights.map((item) => (
                  <div key={item.value} className="panel-item">
                    <div className="panel-value">{item.value}</div>
                    <div className="panel-label">
                      <LangText value={item.label} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="panel-accent">
                <div className="panel-title">
                  <LangText value={siteData.cta.title} />
                </div>
                <div className="panel-desc">
                  <LangText value={siteData.cta.description} />
                </div>
                <a className="btn primary" href="#contact">
                  <LangText value={siteData.cta.button} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container split">
            <div className="split-main">
              <div className="section-title">
                <span className="section-kicker">
                  <LangText value={siteData.about.title} />
                </span>
                <h2>
                  <LangText value={siteData.about.headline} />
                </h2>
              </div>
              <p className="section-desc">
                <LangText value={siteData.about.description} />
              </p>
              <ul className="feature-list">
                {siteData.about.bullets.map((item, index) => (
                  <li key={`${item.zh}-${index}`}>
                    <span className="check" aria-hidden="true" />
                    <LangText value={item} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="split-side">
              <div className="stats-grid">
                {siteData.stats.map((stat) => (
                  <div key={stat.value} className="stat-card">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">
                      <LangText value={stat.label} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="quality-chip">
                <LangText value={siteData.quality.title} />
              </div>
            </div>
          </div>
        </section>

        <section className="section surface" id="products">
          <div className="container">
            <div className="section-title">
              <span className="section-kicker">
                <LangText value={getNavLabel("products")} />
              </span>
              <h2>
                <LangText value={siteData.sections.productsTitle} />
              </h2>
            </div>
            <div className="cards-grid">
              {siteData.products.map((product) => (
                <article key={product.name.zh} className="card">
                  <h3>
                    <LangText value={product.name} />
                  </h3>
                  <p className="muted">
                    <LangText value={product.spec} />
                  </p>
                  <p>
                    <LangText value={product.use} />
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="applications">
          <div className="container">
            <div className="section-title">
              <span className="section-kicker">
                <LangText value={getNavLabel("applications")} />
              </span>
              <h2>
                <LangText value={siteData.sections.applicationsTitle} />
              </h2>
            </div>
            <div className="cards-grid">
              {siteData.applications.map((app) => (
                <article key={app.title.zh} className="card outline">
                  <h3>
                    <LangText value={app.title} />
                  </h3>
                  <p className="muted">
                    <LangText value={app.desc} />
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section surface" id="process">
          <div className="container">
            <div className="section-title">
              <span className="section-kicker">
                <LangText value={getNavLabel("process")} />
              </span>
              <h2>
                <LangText value={siteData.sections.processTitle} />
              </h2>
            </div>
            <div className="steps-grid">
              {siteData.process.map((step, index) => (
                <div key={step.step.zh} className="step-card">
                  <div className="step-index">{String(index + 1).padStart(2, "0")}</div>
                  <h3>
                    <LangText value={step.step} />
                  </h3>
                  <p className="muted">
                    <LangText value={step.detail} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="quality">
          <div className="container split">
            <div className="split-main">
              <div className="section-title">
                <span className="section-kicker">
                  <LangText value={getNavLabel("quality")} />
                </span>
                <h2>
                  <LangText value={siteData.quality.title} />
                </h2>
              </div>
              <p className="section-desc">
                <LangText value={siteData.quality.description} />
              </p>
              <ul className="feature-list">
                {siteData.quality.items.map((item, index) => (
                  <li key={`${item.zh}-${index}`}>
                    <span className="check" aria-hidden="true" />
                    <LangText value={item} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="split-side">
              <div className="certificate-panel">
                <div className="certificate-title">
                  <LangText value={siteData.quality.badgeTitle} />
                </div>
                <p className="muted">
                  <LangText value={siteData.quality.badgeNote} />
                </p>
                <div className="badge-grid">
                  {siteData.quality.badges.map((badge) => (
                    <span key={badge} className="badge">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section surface" id="contact">
          <div className="container split">
            <div className="split-main contact-card">
              <div className="section-title">
                <span className="section-kicker">
                  <LangText value={getNavLabel("contact")} />
                </span>
                <h2>
                  <LangText value={siteData.sections.contactTitle} />
                </h2>
              </div>
              <p className="section-desc">
                <LangText value={siteData.cta.description} />
              </p>
              <div className="contact-grid">
                <div>
                  <div className="contact-label">
                    <LangText value={siteData.labels.phone} />
                  </div>
                  <a href={`tel:${siteData.contact.phone}`} className="contact-value">
                    {siteData.contact.phone}
                  </a>
                </div>
                <div>
                  <div className="contact-label">
                    <LangText value={siteData.labels.email} />
                  </div>
                  <a href={`mailto:${siteData.contact.email}`} className="contact-value">
                    {siteData.contact.email}
                  </a>
                </div>
                <div>
                  <div className="contact-label">
                    <LangText value={siteData.labels.address} />
                  </div>
                  <div className="contact-value">
                    <LangText value={siteData.contact.address} />
                  </div>
                </div>
                <div>
                  <div className="contact-label">
                    <LangText value={siteData.labels.hours} />
                  </div>
                  <div className="contact-value">
                    <LangText value={siteData.contact.hours} />
                  </div>
                </div>
              </div>
            </div>
            <div className="split-side">
              <div className="cta-panel">
                <h3>
                  <LangText value={siteData.cta.title} />
                </h3>
                <p>
                  <LangText value={siteData.cta.description} />
                </p>
                <a className="btn primary full" href={`tel:${siteData.contact.phone}`}>
                  <LangText value={siteData.cta.button} />
                </a>
                <p className="muted small">
                  <LangText value={siteData.cta.note} />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="logo-name">
              <LangText value={siteData.brand.name} />
            </div>
            <div className="logo-tagline">
              <LangText value={siteData.brand.tagline} />
            </div>
          </div>
          <div className="footer-meta">
            <LangText value={siteData.footer.copyright} />
          </div>
        </div>
      </footer>
    </div>
  );
}
