import Link from "next/link";
import LangText from "../LangText";
import { LocalizedString, siteData } from "@/content/siteData";

const fallbackLabel: LocalizedString = { zh: "", en: "" };
const nameLabel: LocalizedString = { zh: "您的姓名", en: "Your Name" };
const contactLabel: LocalizedString = { zh: "联系方式（手机或邮箱）", en: "Contact (Phone or Email)" };
const requirementLabel: LocalizedString = { zh: "需求描述", en: "Requirement Details" };
const attachmentLabel: LocalizedString = { zh: "附件链接（可选）", en: "Attachment URL (Optional)" };
const submitLabel: LocalizedString = { zh: "提交询价", en: "Submit Quote Request" };
const directLabel: LocalizedString = { zh: "联系方式", en: "Direct Contact" };
const moreLabel: LocalizedString = { zh: "进入联系页面", en: "Open Contact Page" };
const endpointWarning: LocalizedString = {
  zh: "请先在 content/company-data.js 中配置 quoteForm.endpoint 后再启用提交。",
  en: "Set quoteForm.endpoint in content/company-data.js before enabling submissions."
};

function getNavLabel(id: string) {
  return siteData.nav.find((item) => item.id === id)?.label ?? fallbackLabel;
}

function isEndpointReady(endpoint: string) {
  const placeholderPattern = /(your_formspree_endpoint|your-form-id|example\.com)/i;
  return endpoint.length > 0 && !placeholderPattern.test(endpoint);
}

function buildWhatsAppHref(value: string) {
  const digits = value.replace(/[^\d]/g, "");
  return digits ? `https://wa.me/${digits}` : "";
}

type QuoteSectionProps = {
  showPageLink?: boolean;
};

export default function QuoteSection({ showPageLink = true }: QuoteSectionProps) {
  const endpoint = (siteData.quoteForm.endpoint ?? "").trim();
  const canSubmit = isEndpointReady(endpoint);
  const subject = `${siteData.quoteForm.subject.zh} / ${siteData.quoteForm.subject.en}`;
  const whatsappHref = buildWhatsAppHref(siteData.contact.whatsapp);

  return (
    <section className="section section-light quote-section" id="quote">
      <div className="container quote-layout reveal">
        <article className="quote-panel">
          <div className="section-head">
            <p className="section-kicker">
              <LangText value={getNavLabel("quote")} />
            </p>
            <div className="section-head-row">
              <h2>
                <LangText value={siteData.sections.contactTitle} />
              </h2>
              {showPageLink ? (
                <Link className="section-link-btn" href="/contact/">
                  <LangText value={moreLabel} />
                </Link>
              ) : null}
            </div>
          </div>

          <p className="section-desc">
            <LangText value={siteData.cta.description} />
          </p>

          <form action={canSubmit ? endpoint : undefined} className="quote-form" method="POST">
            <input name="_subject" type="hidden" value={subject} />

            <label className="field">
              <span className="field-label">
                <LangText value={nameLabel} />
              </span>
              <input name="name" required type="text" />
            </label>

            <label className="field">
              <span className="field-label">
                <LangText value={contactLabel} />
              </span>
              <input name="contact" required type="text" />
            </label>

            <label className="field">
              <span className="field-label">
                <LangText value={requirementLabel} />
              </span>
              <textarea name="requirement" required rows={5} />
            </label>

            <label className="field">
              <span className="field-label">
                <LangText value={attachmentLabel} />
              </span>
              <input name="attachment" type="url" />
            </label>

            <button className="btn btn-solid btn-block" disabled={!canSubmit} type="submit">
              <LangText value={submitLabel} />
            </button>
          </form>

          <p className={canSubmit ? "form-tip" : "form-warning"}>
            <LangText value={canSubmit ? siteData.quoteForm.successNote : endpointWarning} />
          </p>
        </article>

        <aside className="contact-panel">
          <h3>
            <LangText value={directLabel} />
          </h3>
          <div className="contact-group">
            <div>
              <p className="contact-label">
                <LangText value={siteData.labels.phone} />
              </p>
              <a className="contact-value" href={`tel:${siteData.contact.phone}`}>
                {siteData.contact.phone}
              </a>
            </div>
            <div>
              <p className="contact-label">
                <LangText value={siteData.labels.email} />
              </p>
              <a className="contact-value" href={`mailto:${siteData.contact.email}`}>
                {siteData.contact.email}
              </a>
            </div>
            <div>
              <p className="contact-label">
                <LangText value={siteData.labels.address} />
              </p>
              <p className="contact-value">
                <LangText value={siteData.contact.address} />
              </p>
            </div>
            <div>
              <p className="contact-label">
                <LangText value={siteData.labels.hours} />
              </p>
              <p className="contact-value">
                <LangText value={siteData.contact.hours} />
              </p>
            </div>
            <div>
              <p className="contact-label">
                <LangText value={siteData.labels.wechat} />
              </p>
              <p className="contact-value">{siteData.contact.wechat}</p>
            </div>
            <div>
              <p className="contact-label">
                <LangText value={siteData.labels.whatsapp} />
              </p>
              {whatsappHref ? (
                <a className="contact-value" href={whatsappHref} rel="noopener noreferrer" target="_blank">
                  {siteData.contact.whatsapp}
                </a>
              ) : (
                <p className="contact-value">{siteData.contact.whatsapp}</p>
              )}
            </div>
          </div>
          <a className="btn btn-outline btn-block" href={`tel:${siteData.contact.phone}`}>
            <LangText value={siteData.cta.button} />
          </a>
        </aside>
      </div>
    </section>
  );
}
