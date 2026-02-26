import LangText from "../LangText";
import { LocalizedString, siteData } from "@/content/siteData";

const fallbackLabel: LocalizedString = { zh: "", en: "" };
const moreLabel: LocalizedString = { zh: "更多", en: "Read More" };

function getNavLabel(id: string) {
  return siteData.nav.find((item) => item.id === id)?.label ?? fallbackLabel;
}

export default function NewsSection() {
  return (
    <section className="section section-light" id="news">
      <div className="container reveal">
        <div className="section-head">
          <p className="section-kicker">
            <LangText value={getNavLabel("news")} />
          </p>
          <h2>
            <LangText value={siteData.sections.newsTitle} />
          </h2>
        </div>

        <div className="news-grid">
          {siteData.news.map((item, index) => (
            <article className="news-card" key={`${item.title.zh}-${index}`}>
              <a className="news-media" href={item.href}>
                <img alt={item.title.en || item.title.zh} loading="lazy" src={item.image ?? "images/news-placeholder.svg"} />
              </a>
              <div className="news-body">
                <p className="news-date">{item.date}</p>
                <h3>
                  <LangText value={item.title} />
                </h3>
                <p className="muted">
                  <LangText value={item.excerpt} />
                </p>
                <a className="news-link" href={item.href}>
                  <LangText value={moreLabel} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
