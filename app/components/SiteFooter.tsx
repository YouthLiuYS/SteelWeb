import LangText from "./LangText";
import { LocalizedString, siteData } from "@/content/siteData";

const contactTitle: LocalizedString = { zh: "联系方式", en: "Contact" };
const socialTitle: LocalizedString = { zh: "社交媒体", en: "Social Media" };

function buildWhatsAppHref(value: string) {
  const digits = value.replace(/[^\d]/g, "");
  return digits ? `https://wa.me/${digits}` : "";
}

export default function SiteFooter() {
  const whatsappHref = buildWhatsAppHref(siteData.contact.whatsapp);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section className="footer-brand">
          <p className="footer-brand-name">
            <LangText value={siteData.brand.name} />
          </p>
          <p className="footer-brand-tagline">
            <LangText value={siteData.brand.tagline} />
          </p>
          <p className="footer-brand-location">
            <LangText value={siteData.brand.location} />
          </p>
        </section>

        <section className="footer-col">
          <h3 className="footer-title">
            <LangText value={contactTitle} />
          </h3>
          <ul className="footer-list">
            <li>
              <strong>
                <LangText value={siteData.labels.phone} />
              </strong>
              <a className="footer-link" href={`tel:${siteData.contact.phone}`}>
                {siteData.contact.phone}
              </a>
            </li>
            <li>
              <strong>
                <LangText value={siteData.labels.email} />
              </strong>
              <a className="footer-link" href={`mailto:${siteData.contact.email}`}>
                {siteData.contact.email}
              </a>
            </li>
            <li>
              <strong>
                <LangText value={siteData.labels.wechat} />
              </strong>
              <span>{siteData.contact.wechat}</span>
            </li>
            <li>
              <strong>
                <LangText value={siteData.labels.whatsapp} />
              </strong>
              {whatsappHref ? (
                <a className="footer-link" href={whatsappHref} rel="noopener noreferrer" target="_blank">
                  {siteData.contact.whatsapp}
                </a>
              ) : (
                <span>{siteData.contact.whatsapp}</span>
              )}
            </li>
            <li>
              <strong>
                <LangText value={siteData.labels.address} />
              </strong>
              <span>
                <LangText value={siteData.contact.address} />
              </span>
            </li>
            <li>
              <strong>
                <LangText value={siteData.labels.hours} />
              </strong>
              <span>
                <LangText value={siteData.contact.hours} />
              </span>
            </li>
          </ul>
        </section>

        <section className="footer-col">
          <h3 className="footer-title">
            <LangText value={socialTitle} />
          </h3>
          <ul className="footer-social-list">
            {siteData.socialLinks.map((item, index) => (
              <li key={`${item.handle}-${index}`}>
                <a className="social-link" href={item.url} rel="noopener noreferrer" target="_blank">
                  <span className="social-platform">
                    <LangText value={item.platform} />
                  </span>
                  <span className="social-handle">{item.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="container footer-bottom">
        <p className="footer-meta">
          <LangText value={siteData.footer.copyright} />
        </p>
      </div>
    </footer>
  );
}
