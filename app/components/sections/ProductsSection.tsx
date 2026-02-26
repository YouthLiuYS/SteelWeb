import Link from "next/link";
import LangText from "../LangText";
import { LocalizedString, siteData } from "@/content/siteData";
import { featuredProducts } from "@/content/productCatalog";

const fallbackLabel: LocalizedString = { zh: "", en: "" };
const moreLabel: LocalizedString = { zh: "查看详情", en: "View Details" };
const sectionMoreLabel: LocalizedString = { zh: "进入产品页面", en: "Open Product Page" };

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
          <div className="section-head-row">
            <h2>
              <LangText value={siteData.sections.productsTitle} />
            </h2>
            <Link className="section-link-btn" href="/products/">
              <LangText value={sectionMoreLabel} />
            </Link>
          </div>
        </div>

        <div className="products-grid">
          {featuredProducts.map((product) => (
            <article className="product-tile" key={product.slug}>
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
                <Link className="product-link" href={`/products/${product.slug}/`}>
                  <LangText value={moreLabel} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
