import Link from "next/link";
import LangText from "../components/LangText";
import ModuleHero from "../components/ModuleHero";
import PageShell from "../components/PageShell";
import { LocalizedString, siteData } from "@/content/siteData";

const pageKicker: LocalizedString = { zh: "选择我们", en: "Why Choose Us" };
const trustTitle: LocalizedString = { zh: "交付与质量数据", en: "Delivery & Quality Metrics" };
const casesTitle: LocalizedString = { zh: "典型项目案例", en: "Representative Projects" };
const quoteLabel: LocalizedString = { zh: "立即咨询", en: "Contact Now" };
const productsLabel: LocalizedString = { zh: "进入产品中心", en: "Browse Products" };

export default function WhyPage() {
  return (
    <PageShell>
      <ModuleHero
        actions={[
          { href: "/products/", label: productsLabel },
          { href: "/contact/", label: quoteLabel, variant: "outline" }
        ]}
        description={siteData.cta.description}
        image="images/case-1.svg"
        kicker={pageKicker}
        metrics={siteData.trust.map((item) => ({ value: item.value, label: item.label }))}
        title={siteData.whyChoose.headline}
      />

      <section className="section section-dark why-page-section">
        <div className="container reveal">
          <div className="why-grid">
            {siteData.whyChoose.items.map((item, index) => (
              <article className="why-card" key={`${item.title.zh}-${index}`}>
                <p className="why-icon">{item.icon ?? String(index + 1).padStart(2, "0")}</p>
                <h3>
                  <LangText value={item.title} />
                </h3>
                <p className="muted-light">
                  <LangText value={item.desc} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container info-grid reveal">
          <article className="info-card">
            <div className="section-head">
              <p className="section-kicker">
                <LangText value={trustTitle} />
              </p>
              <h2>
                <LangText value={trustTitle} />
              </h2>
            </div>
            <div className="trust-grid">
              {siteData.trust.map((item, index) => (
                <article className="trust-card" key={`${item.value}-${index}`}>
                  <p className="trust-value">{item.value}</p>
                  <p className="trust-label">
                    <LangText value={item.label} />
                  </p>
                  <p className="muted">
                    <LangText value={item.note} />
                  </p>
                </article>
              ))}
            </div>
          </article>

          <article className="info-card">
            <div className="section-head">
              <p className="section-kicker">
                <LangText value={casesTitle} />
              </p>
              <h2>
                <LangText value={casesTitle} />
              </h2>
            </div>

            <div className="case-list">
              {siteData.cases.map((item, index) => (
                <article className="case-inline" key={`${item.title.zh}-${index}`}>
                  <img alt={item.title.en || item.title.zh} loading="lazy" src={item.image ?? "images/case-1.svg"} />
                  <div>
                    <h3>
                      <LangText value={item.title} />
                    </h3>
                    <p className="muted">
                      <LangText value={item.spec} />
                    </p>
                    <p className="case-result">
                      <LangText value={item.result} />
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <Link className="btn btn-solid" href="/contact/">
              <LangText value={quoteLabel} />
            </Link>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
