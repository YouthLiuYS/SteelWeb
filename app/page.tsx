"use client";

import LangText from "./components/LangText";
import LanguageToggle from "./components/LanguageToggle";
import HeroSection from "./components/sections/HeroSection";
import TrustStrip from "./components/sections/TrustStrip";
import CasesSection from "./components/sections/CasesSection";
import QuoteSection from "./components/sections/QuoteSection";
import { LocalizedString, siteData } from "@/content/siteData";

const fallbackLabel: LocalizedString = { zh: "", en: "" };

function getNavLabel(id: string) {
  return siteData.nav.find((item) => item.id === id)?.label ?? fallbackLabel;
}

export default function Home() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="#top">
            <span className="logo-mark" aria-hidden="true" />
            <span className="logo-text">
              <strong className="logo-name">
                <LangText value={siteData.brand.name} />
              </strong>
              <span className="logo-tagline">
                <LangText value={siteData.brand.tagline} />
              </span>
            </span>
          </a>

          <nav className="nav" aria-label="Primary navigation">
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
        <HeroSection />
        <TrustStrip />

        <section className="section" id="products">
          <div className="container">
            <div className="section-head reveal">
              <p className="section-kicker">
                <LangText value={getNavLabel("products")} />
              </p>
              <h2>
                <LangText value={siteData.sections.productsTitle} />
              </h2>
            </div>

            <div className="product-grid reveal">
              {siteData.products.map((product) => (
                <article className="product-card" key={product.name.zh}>
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

        <section className="section section-surface" id="process">
          <div className="container">
            <div className="section-head reveal">
              <p className="section-kicker">
                <LangText value={getNavLabel("process")} />
              </p>
              <h2>
                <LangText value={siteData.sections.processTitle} />
              </h2>
            </div>

            <div className="process-grid reveal">
              {siteData.process.map((step, index) => (
                <article className="process-card" key={step.step.zh}>
                  <p className="process-index">{String(index + 1).padStart(2, "0")}</p>
                  <h3>
                    <LangText value={step.step} />
                  </h3>
                  <p className="muted">
                    <LangText value={step.detail} />
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CasesSection />

        <section className="section" id="quality">
          <div className="container quality-layout reveal">
            <div className="quality-copy">
              <div className="section-head">
                <p className="section-kicker">
                  <LangText value={getNavLabel("quality")} />
                </p>
                <h2>
                  <LangText value={siteData.quality.title} />
                </h2>
              </div>
              <p className="section-desc">
                <LangText value={siteData.quality.description} />
              </p>
              <ul className="quality-list">
                {siteData.quality.items.map((item, index) => (
                  <li key={`${item.zh}-${index}`}>
                    <span className="quality-check" aria-hidden="true" />
                    <LangText value={item} />
                  </li>
                ))}
              </ul>
            </div>

            <aside className="quality-panel">
              <h3>
                <LangText value={siteData.quality.badgeTitle} />
              </h3>
              <p className="muted">
                <LangText value={siteData.quality.badgeNote} />
              </p>
              <div className="quality-badges">
                {siteData.quality.badges.map((badge) => (
                  <span className="quality-badge" key={badge}>
                    {badge}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <QuoteSection />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <p className="logo-name">
              <LangText value={siteData.brand.name} />
            </p>
            <p className="logo-tagline">
              <LangText value={siteData.brand.tagline} />
            </p>
          </div>
          <p className="footer-meta">
            <LangText value={siteData.footer.copyright} />
          </p>
        </div>
      </footer>
    </div>
  );
}
