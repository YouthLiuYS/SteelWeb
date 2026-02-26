import Link from "next/link";
import LangText from "../components/LangText";
import ModuleHero from "../components/ModuleHero";
import PageShell from "../components/PageShell";
import { LocalizedString, siteData } from "@/content/siteData";

const pageKicker: LocalizedString = { zh: "新闻资讯", en: "News" };
const pageTitle: LocalizedString = { zh: "行业动态与技术文章", en: "Industry Updates & Technical Articles" };
const pageDesc: LocalizedString = {
  zh: "围绕钢板网选型、项目交付与质量控制，持续更新实用内容，帮助客户更快做出采购决策。",
  en: "We publish practical updates on selection, project delivery, and quality control to support better purchasing decisions."
};
const quoteLabel: LocalizedString = { zh: "咨询项目", en: "Discuss Your Project" };
const productsLabel: LocalizedString = { zh: "查看产品中心", en: "View Product Center" };
const moreLabel: LocalizedString = { zh: "继续阅读", en: "Continue" };
const quickTitle: LocalizedString = { zh: "快速入口", en: "Quick Links" };

function resolveNewsHref(href: string) {
  const mapping: Record<string, string> = {
    "#quote": "/contact/",
    "#products": "/products/",
    "#quality": "/quality/"
  };

  return mapping[href] ?? href;
}

export default function NewsPage() {
  return (
    <PageShell>
      <ModuleHero
        actions={[
          { href: "/products/", label: productsLabel },
          { href: "/contact/", label: quoteLabel, variant: "outline" }
        ]}
        description={pageDesc}
        image="images/news-1.svg"
        kicker={pageKicker}
        title={pageTitle}
      />

      <section className="section section-light">
        <div className="container info-grid reveal news-page-grid">
          <article className="info-card">
            <div className="news-grid">
              {siteData.news.map((item, index) => {
                const href = resolveNewsHref(item.href);
                const isInternal = href.startsWith("/") || href.startsWith("#");

                return (
                  <article className="news-card" key={`${item.title.zh}-${index}`}>
                    {isInternal ? (
                      <Link className="news-media" href={href}>
                        <img alt={item.title.en || item.title.zh} loading="lazy" src={item.image ?? "images/news-placeholder.svg"} />
                      </Link>
                    ) : (
                      <a className="news-media" href={href} rel="noopener noreferrer" target="_blank">
                        <img alt={item.title.en || item.title.zh} loading="lazy" src={item.image ?? "images/news-placeholder.svg"} />
                      </a>
                    )}

                    <div className="news-body">
                      <p className="news-date">{item.date}</p>
                      <h3>
                        <LangText value={item.title} />
                      </h3>
                      <p className="muted">
                        <LangText value={item.excerpt} />
                      </p>

                      {isInternal ? (
                        <Link className="news-link" href={href}>
                          <LangText value={moreLabel} />
                        </Link>
                      ) : (
                        <a className="news-link" href={href} rel="noopener noreferrer" target="_blank">
                          <LangText value={moreLabel} />
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </article>

          <aside className="info-card compact-card">
            <div className="section-head">
              <p className="section-kicker">
                <LangText value={quickTitle} />
              </p>
              <h2>
                <LangText value={quickTitle} />
              </h2>
            </div>

            <div className="quick-links">
              <Link className="quick-link" href="/products/">
                <LangText value={productsLabel} />
              </Link>
              <Link className="quick-link" href="/quality/">
                质量控制 / Quality
              </Link>
              <Link className="quick-link" href="/contact/">
                <LangText value={quoteLabel} />
              </Link>
              <Link className="quick-link" href="/about/">
                关于我们 / About Us
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </PageShell>
  );
}
