import Link from "next/link";
import LangText from "../components/LangText";
import ModuleHero from "../components/ModuleHero";
import PageShell from "../components/PageShell";
import QuoteSection from "../components/sections/QuoteSection";
import { LocalizedString, siteData } from "@/content/siteData";

const pageKicker: LocalizedString = { zh: "联系我们", en: "Contact" };
const pageTitle: LocalizedString = { zh: "快速获取报价与交付建议", en: "Get Fast Quotation and Delivery Advice" };
const pageDesc: LocalizedString = {
  zh: "提交尺寸、材质和数量后，我们会在 1 个工作日内回复价格与交期建议。",
  en: "Share size, material, and quantity. We will reply with pricing and lead-time advice within 1 business day."
};
const productsLabel: LocalizedString = { zh: "浏览产品中心", en: "Browse Products" };
const mediaTitle: LocalizedString = { zh: "社交与企业渠道", en: "Social & Business Channels" };
const directLabel: LocalizedString = { zh: "直联沟通", en: "Direct" };
const quickContactLabel: LocalizedString = { zh: "快速联系", en: "Quick Contact" };
const aboutLabel: LocalizedString = { zh: "关于我们", en: "About Us" };

function buildWhatsAppHref(value: string) {
  const digits = value.replace(/[^\d]/g, "");
  return digits ? `https://wa.me/${digits}` : "";
}

export default function ContactPage() {
  const whatsappHref = buildWhatsAppHref(siteData.contact.whatsapp);

  return (
    <PageShell>
      <ModuleHero
        actions={[{ href: "/products/", label: productsLabel }]}
        description={pageDesc}
        image="images/hero-slide-3.svg"
        kicker={pageKicker}
        title={pageTitle}
      />

      <QuoteSection showPageLink={false} />

      <section className="section section-light">
        <div className="container info-grid reveal">
          <article className="info-card compact-card">
            <div className="section-head">
              <p className="section-kicker">
                <LangText value={mediaTitle} />
              </p>
              <h2>
                <LangText value={mediaTitle} />
              </h2>
            </div>

            <ul className="footer-social-list">
              {siteData.socialLinks.map((item, index) => (
                <li key={`${item.handle}-${index}`}>
                  <a className="social-link light-version" href={item.url} rel="noopener noreferrer" target="_blank">
                    <div className="social-qr-wrap">
                      <img alt={item.platform.en || item.platform.zh} className="social-qr" loading="lazy" src={item.qrImage || "images/qr-placeholder.svg"} />
                    </div>
                    <div className="social-copy">
                      <span className="social-platform dark">
                        <LangText value={item.platform} />
                      </span>
                      <span className="social-handle dark">{item.handle}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article className="info-card compact-card">
            <div className="section-head">
              <p className="section-kicker">
                <LangText value={directLabel} />
              </p>
              <h2>
                <LangText value={quickContactLabel} />
              </h2>
            </div>

            <div className="quick-links">
              <a className="quick-link" href={`tel:${siteData.contact.phone}`}>
                {siteData.contact.phone}
              </a>
              <a className="quick-link" href={`mailto:${siteData.contact.email}`}>
                {siteData.contact.email}
              </a>
              {whatsappHref ? (
                <a className="quick-link" href={whatsappHref} rel="noopener noreferrer" target="_blank">
                  {siteData.contact.whatsapp}
                </a>
              ) : (
                <span className="quick-link">{siteData.contact.whatsapp}</span>
              )}
              <Link className="quick-link" href="/about/">
                <LangText value={aboutLabel} />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
