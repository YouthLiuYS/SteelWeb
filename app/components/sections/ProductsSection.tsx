import LangText from "../LangText";
import { LocalizedString, siteData } from "@/content/siteData";

const fallbackLabel: LocalizedString = { zh: "", en: "" };
const moreLabel: LocalizedString = { zh: "更多详情", en: "More Details" };

function getNavLabel(id: string) {
  return siteData.nav.find((item) => item.id === id)?.label ?? fallbackLabel;
}

export default function ProductsSection() {
  return (
    <section className="section section-light products-section" id="products">
      <div className="container reveal">
        <div className="section-head">
          <p className="section-kicker">
            <LangText value={getNavLabel("products")} />
          </p>
          <h2>
            <LangText value={siteData.sections.productsTitle} />
          </h2>
        </div>

        <div className="products-grid">
          {siteData.products.map((product, index) => (
            <article className="product-tile" key={`${product.name.zh}-${index}`}>
              <div className="product-media">
                <img alt={product.name.en || product.name.zh} loading="lazy" src={product.image ?? "images/product-placeholder.svg"} />
                <div className="product-overlay" aria-hidden="true" />
              </div>
              <div className="product-content">
                <h3>
                  <LangText value={product.name} />
                </h3>
                <p className="muted">
                  <LangText value={product.spec} />
                </p>
                <p>
                  <LangText value={product.use} />
                </p>
                <a className="product-link" href="#quote">
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
