import Link from "next/link";
import LangText from "../components/LangText";
import ModuleHero from "../components/ModuleHero";
import PageShell from "../components/PageShell";
import { LocalizedString, siteData } from "@/content/siteData";

const pageKicker: LocalizedString = { zh: "质量控制", en: "Quality Control" };
const pageTitle: LocalizedString = { zh: "质量与交付保障体系", en: "Quality and Delivery Assurance" };
const processLabel: LocalizedString = { zh: "质量节点", en: "QC Stages" };
const certLabel: LocalizedString = { zh: "认证与标准", en: "Certifications" };
const quoteLabel: LocalizedString = { zh: "提交需求", en: "Send Requirements" };
const productLabel: LocalizedString = { zh: "查看产品", en: "View Products" };

export default function QualityPage() {
  return (
    <PageShell>
      <ModuleHero
        actions={[
          { href: "/products/", label: productLabel },
          { href: "/contact/", label: quoteLabel, variant: "outline" }
        ]}
        description={siteData.quality.description}
        image="images/hero-slide-2.svg"
        kicker={pageKicker}
        metrics={siteData.trust.map((item) => ({ value: item.value, label: item.label }))}
        title={pageTitle}
      />

      <section className="section section-dark quality-page-section">
        <div className="container info-grid reveal">
          <article className="quality-copy">
            <div className="section-head">
              <p className="section-kicker light">
                <LangText value={processLabel} />
              </p>
              <h2 className="section-title-light">
                <LangText value={siteData.quality.title} />
              </h2>
            </div>

            <ul className="quality-list">
              {siteData.quality.items.map((item, index) => (
                <li key={`${item.zh}-${index}`}>
                  <span aria-hidden="true" className="quality-check" />
                  <LangText value={item} />
                </li>
              ))}
            </ul>
          </article>

          <aside className="quality-panel">
            <div className="section-head">
              <p className="section-kicker light">
                <LangText value={certLabel} />
              </p>
              <h2 className="section-title-light">
                <LangText value={siteData.quality.badgeTitle} />
              </h2>
            </div>
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

      <section className="section section-light">
        <div className="container reveal">
          <div className="section-head">
            <p className="section-kicker">
              <LangText value={processLabel} />
            </p>
            <h2>
              生产工艺与检验节点 / Process & Inspection
            </h2>
          </div>

          <ul className="process-list columns-2">
            {siteData.process.map((item, index) => (
              <li className="process-item" key={`${item.step.zh}-${index}`}>
                <p className="process-step">
                  {String(index + 1).padStart(2, "0")}
                  <span>
                    <LangText value={item.step} />
                  </span>
                </p>
                <p className="muted">
                  <LangText value={item.detail} />
                </p>
              </li>
            ))}
          </ul>

          <div className="inline-actions">
            <Link className="btn btn-solid" href="/contact/">
              <LangText value={quoteLabel} />
            </Link>
            <Link className="btn btn-outline soft-outline" href="/products/">
              <LangText value={productLabel} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
