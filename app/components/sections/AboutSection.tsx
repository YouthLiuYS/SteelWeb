import Link from "next/link";
import LangText from "../LangText";
import { LocalizedString, siteData } from "@/content/siteData";

const fallbackLabel: LocalizedString = { zh: "", en: "" };
const imageAlt: LocalizedString = { zh: "工厂与生产示意图", en: "Factory and production visual" };
const moreLabel: LocalizedString = { zh: "进入关于页面", en: "Open About Page" };

function getNavLabel(id: string) {
  return siteData.nav.find((item) => item.id === id)?.label ?? fallbackLabel;
}

export default function AboutSection() {
  return (
    <section className="section section-light" id="about">
      <div className="container about-layout reveal">
        <div className="about-copy">
          <div className="section-head">
            <p className="section-kicker">
              <LangText value={getNavLabel("about")} />
            </p>
            <div className="section-head-row">
              <h2>
                <LangText value={siteData.about.headline} />
              </h2>
              <Link className="section-link-btn" href="/about/">
                <LangText value={moreLabel} />
              </Link>
            </div>
          </div>
          <p className="section-desc about-desc">
            <LangText value={siteData.about.description} />
          </p>
          <ul className="about-list">
            {siteData.about.bullets.map((item, index) => (
              <li key={`${item.zh}-${index}`}>
                <span aria-hidden="true" className="about-check" />
                <LangText value={item} />
              </li>
            ))}
          </ul>
        </div>

        <div className="about-media">
          <img alt={imageAlt.en} src="images/about-factory.svg" />
          <div className="about-media-card">
            {siteData.stats.map((item) => (
              <article className="mini-stat" key={item.value}>
                <p className="mini-stat-value">{item.value}</p>
                <p className="mini-stat-label">
                  <LangText value={item.label} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
