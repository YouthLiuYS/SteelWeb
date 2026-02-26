import Link from "next/link";
import LangText from "../LangText";
import { LocalizedString, siteData } from "@/content/siteData";

const fallbackLabel: LocalizedString = { zh: "", en: "" };
const moreLabel: LocalizedString = { zh: "进入优势页面", en: "Open Why Us Page" };

function getNavLabel(id: string) {
  return siteData.nav.find((item) => item.id === id)?.label ?? fallbackLabel;
}

export default function WhyChooseSection() {
  return (
    <section className="section section-dark why-section" id="why">
      <div className="container reveal">
        <div className="section-head center">
          <p className="section-kicker light">
            <LangText value={getNavLabel("why")} />
          </p>
          <div className="section-head-row center-row">
            <h2 className="section-title-light">
              <LangText value={siteData.whyChoose.headline} />
            </h2>
            <Link className="section-link-btn light" href="/why/">
              <LangText value={moreLabel} />
            </Link>
          </div>
          <p className="section-desc light-desc">
            <LangText value={siteData.cta.description} />
          </p>
        </div>

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
  );
}
