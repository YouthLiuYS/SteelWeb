import Link from "next/link";
import LangText from "../components/LangText";
import ModuleHero from "../components/ModuleHero";
import PageShell from "../components/PageShell";
import { LocalizedString, siteData } from "@/content/siteData";

const pageKicker: LocalizedString = { zh: "关于我们", en: "About Us" };
const processLabel: LocalizedString = { zh: "生产流程", en: "Production Process" };
const scenarioLabel: LocalizedString = { zh: "应用场景", en: "Applications" };
const quoteLabel: LocalizedString = { zh: "获取报价", en: "Request Quote" };
const productsLabel: LocalizedString = { zh: "查看产品", en: "View Products" };
const processTitle: LocalizedString = { zh: "工厂从原料到交付全流程透明", en: "Transparent Production from Raw Material to Delivery" };
const scenarioTitle: LocalizedString = { zh: "服务行业覆盖", en: "Industries We Serve" };

export default function AboutPage() {
  return (
    <PageShell>
      <ModuleHero
        actions={[
          { href: "/products/", label: productsLabel },
          { href: "/contact/", label: quoteLabel, variant: "outline" }
        ]}
        description={siteData.about.description}
        image="images/about-factory.svg"
        kicker={pageKicker}
        metrics={siteData.stats}
        title={siteData.about.headline}
      />

      <section className="section section-light">
        <div className="container info-grid reveal">
          <article className="info-card">
            <div className="section-head">
              <p className="section-kicker">
                <LangText value={processLabel} />
              </p>
              <h2>
                <LangText value={processTitle} />
              </h2>
            </div>

            <ul className="process-list">
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
          </article>

          <article className="info-card">
            <div className="section-head">
              <p className="section-kicker">
                <LangText value={scenarioLabel} />
              </p>
              <h2>
                <LangText value={scenarioTitle} />
              </h2>
            </div>

            <div className="badge-grid">
              {siteData.applications.map((item, index) => (
                <article className="badge-card" key={`${item.title.zh}-${index}`}>
                  <h3>
                    <LangText value={item.title} />
                  </h3>
                  <p className="muted">
                    <LangText value={item.desc} />
                  </p>
                </article>
              ))}
            </div>

            <div className="inline-actions">
              <Link className="btn btn-solid" href="/products/">
                <LangText value={productsLabel} />
              </Link>
              <Link className="btn btn-outline soft-outline" href="/contact/">
                <LangText value={quoteLabel} />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
