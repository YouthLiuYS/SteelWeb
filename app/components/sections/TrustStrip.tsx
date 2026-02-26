import LangText from "../LangText";
import { siteData } from "@/content/siteData";

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Trust indicators">
      <div className="container trust-grid reveal">
        {siteData.trust.map((item) => (
          <article className="trust-card" key={item.value}>
            <p className="trust-value">{item.value}</p>
            <p className="trust-label">
              <LangText value={item.label} />
            </p>
            <p className="trust-note">
              <LangText value={item.note} />
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
