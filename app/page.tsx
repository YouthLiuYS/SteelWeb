import Link from "next/link";
import LangText from "./components/LangText";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ProductsSection from "./components/sections/ProductsSection";
import WhyChooseSection from "./components/sections/WhyChooseSection";
import NewsSection from "./components/sections/NewsSection";
import QuoteSection from "./components/sections/QuoteSection";
import PageShell from "./components/PageShell";
import { LocalizedString, siteData } from "@/content/siteData";

const fallbackLabel: LocalizedString = { zh: "", en: "" };

function getNavLabel(id: string) {
  return siteData.nav.find((item) => item.id === id)?.label ?? fallbackLabel;
}

const qualityMoreLabel: LocalizedString = { zh: "进入质量页面", en: "Open Quality Page" };

export default function Home() {
  return (
    <PageShell isHome>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseSection />
      <NewsSection />

      <section className="section section-dark quality-section" id="quality">
        <div className="container quality-layout reveal">
          <div className="quality-copy">
            <div className="section-head">
              <p className="section-kicker light">
                <LangText value={getNavLabel("quality")} />
              </p>
              <h2 className="section-title-light">
                <LangText value={siteData.quality.title} />
              </h2>
            </div>
            <p className="section-desc light-desc">
              <LangText value={siteData.quality.description} />
            </p>
            <ul className="quality-list">
              {siteData.quality.items.map((item, index) => (
                <li key={`${item.zh}-${index}`}>
                  <span aria-hidden="true" className="quality-check" />
                  <LangText value={item} />
                </li>
              ))}
            </ul>
            <Link className="section-link-btn light" href="/quality/">
              <LangText value={qualityMoreLabel} />
            </Link>
          </div>

          <aside className="quality-panel">
            <h3>
              <LangText value={siteData.quality.badgeTitle} />
            </h3>
            <p className="muted-light">
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
    </PageShell>
  );
}
