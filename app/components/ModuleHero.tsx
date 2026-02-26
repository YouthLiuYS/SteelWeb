import Link from "next/link";
import LangText from "./LangText";
import { LocalizedString } from "@/content/siteData";

type HeroAction = {
  href: string;
  label: LocalizedString;
  variant?: "solid" | "outline";
};

type HeroMetric = {
  value: string;
  label: LocalizedString;
};

type ModuleHeroProps = {
  kicker: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  image?: string;
  imageAlt?: LocalizedString;
  actions?: HeroAction[];
  metrics?: HeroMetric[];
};

const fallbackImageAlt: LocalizedString = {
  zh: "模块页面配图",
  en: "Section visual"
};

export default function ModuleHero({
  kicker,
  title,
  description,
  image,
  imageAlt = fallbackImageAlt,
  actions = [],
  metrics = []
}: ModuleHeroProps) {
  return (
    <section className="module-hero">
      <div className="container module-hero-layout reveal">
        <div className="module-hero-copy">
          <p className="module-kicker">
            <LangText value={kicker} />
          </p>
          <h1 className="module-title">
            <LangText value={title} />
          </h1>
          <p className="module-desc">
            <LangText value={description} />
          </p>

          {actions.length > 0 ? (
            <div className="module-actions">
              {actions.map((action, index) => (
                <Link className={action.variant === "outline" ? "btn btn-outline" : "btn btn-solid"} href={action.href} key={`${action.href}-${index}`}>
                  <LangText value={action.label} />
                </Link>
              ))}
            </div>
          ) : null}

          {metrics.length > 0 ? (
            <div className="module-metrics">
              {metrics.map((item, index) => (
                <article className="module-metric" key={`${item.value}-${index}`}>
                  <p className="module-metric-value">{item.value}</p>
                  <p className="module-metric-label">
                    <LangText value={item.label} />
                  </p>
                </article>
              ))}
            </div>
          ) : null}
        </div>

        {image ? (
          <div className="module-hero-media">
            <img alt={imageAlt.en || imageAlt.zh} loading="lazy" src={image} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
