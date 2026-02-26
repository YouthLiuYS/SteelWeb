import LangText from "../LangText";
import { LocalizedString, siteData } from "@/content/siteData";

const fallbackLabel: LocalizedString = { zh: "", en: "" };
const industryLabel: LocalizedString = { zh: "行业", en: "Industry" };
const specLabel: LocalizedString = { zh: "规格", en: "Specification" };
const resultLabel: LocalizedString = { zh: "结果", en: "Result" };
const placeholderLabel: LocalizedString = { zh: "待替换项目图片", en: "Project image placeholder" };

function getNavLabel(id: string) {
  return siteData.nav.find((item) => item.id === id)?.label ?? fallbackLabel;
}

export default function CasesSection() {
  return (
    <section className="section cases-section" id="cases">
      <div className="container">
        <div className="section-head reveal">
          <p className="section-kicker">
            <LangText value={getNavLabel("cases")} />
          </p>
          <h2>
            <LangText value={siteData.sections.casesTitle} />
          </h2>
        </div>

        <div className="cases-grid reveal">
          {siteData.cases.map((item, index) => {
            const imageSource = (item.image ?? "").trim();

            return (
              <article className="case-card" key={`${item.title.zh}-${index}`}>
                <div className="case-media">
                  {imageSource ? (
                    <img src={imageSource} alt={item.title.en || item.title.zh} loading="lazy" />
                  ) : (
                    <div className="case-placeholder">
                      <span>
                        <LangText value={placeholderLabel} />
                      </span>
                    </div>
                  )}
                </div>

                <div className="case-body">
                  <h3>
                    <LangText value={item.title} />
                  </h3>

                  <div className="case-meta">
                    <div className="case-meta-item">
                      <p className="case-meta-label">
                        <LangText value={industryLabel} />
                      </p>
                      <p>
                        <LangText value={item.industry} />
                      </p>
                    </div>
                    <div className="case-meta-item">
                      <p className="case-meta-label">
                        <LangText value={specLabel} />
                      </p>
                      <p>
                        <LangText value={item.spec} />
                      </p>
                    </div>
                    <div className="case-meta-item">
                      <p className="case-meta-label">
                        <LangText value={resultLabel} />
                      </p>
                      <p>
                        <LangText value={item.result} />
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
