import Link from "next/link";
import LangText from "../components/LangText";
import ModuleHero from "../components/ModuleHero";
import PageShell from "../components/PageShell";
import { LocalizedString } from "@/content/siteData";
import { productCatalog, productCategories } from "@/content/productCatalog";

const pageKicker: LocalizedString = { zh: "产品中心", en: "Product Center" };
const pageTitle: LocalizedString = { zh: "钢板网产品与分类总览", en: "Expanded Metal Product Catalog" };
const pageDesc: LocalizedString = {
  zh: "按应用场景与材质快速筛选产品，支持规格定制、打样和批量交付。",
  en: "Browse products by application and material. Custom sizing, sampling, and mass delivery are supported."
};
const categoryTitle: LocalizedString = { zh: "产品分类", en: "Categories" };
const allProductTitle: LocalizedString = { zh: "全部产品", en: "All Products" };
const detailLabel: LocalizedString = { zh: "产品详情", en: "Details" };
const quoteLabel: LocalizedString = { zh: "立即询价", en: "Get Quote" };
const viewCategoryLabel: LocalizedString = { zh: "查看分类", en: "View Category" };

const categoryMap = new Map(productCategories.map((category) => [category.slug, category]));

export default function ProductsPage() {
  return (
    <PageShell>
      <ModuleHero
        actions={[{ href: "/contact/", label: quoteLabel }]}
        description={pageDesc}
        image="images/product-1.svg"
        kicker={pageKicker}
        metrics={[
          {
            value: String(productCategories.length),
            label: { zh: "产品类别", en: "Categories" }
          },
          {
            value: String(productCatalog.length),
            label: { zh: "产品型号", en: "Product Types" }
          }
        ]}
        title={pageTitle}
      />

      <section className="section section-light">
        <div className="container reveal">
          <div className="section-head">
            <p className="section-kicker">
              <LangText value={categoryTitle} />
            </p>
            <h2>
              <LangText value={categoryTitle} />
            </h2>
          </div>

          <div className="category-grid">
            {productCategories.map((category) => (
              <article className="category-card" key={category.slug}>
                <img alt={category.name.en || category.name.zh} loading="lazy" src={category.heroImage ?? "images/product-placeholder.svg"} />
                <div className="category-card-body">
                  <h3>
                    <LangText value={category.name} />
                  </h3>
                  <p className="muted">
                    <LangText value={category.description} />
                  </p>
                  <Link className="product-link" href={`/products/category/${category.slug}/`}>
                    <LangText value={viewCategoryLabel} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light catalog-section">
        <div className="container reveal">
          <div className="section-head">
            <p className="section-kicker">
              <LangText value={allProductTitle} />
            </p>
            <h2>
              <LangText value={allProductTitle} />
            </h2>
          </div>

          <div className="products-grid extended-grid">
            {productCatalog.map((product) => {
              const category = categoryMap.get(product.categorySlug);

              return (
                <article className="product-tile" key={product.slug}>
                  <div className="product-media">
                    <img alt={product.name.en || product.name.zh} loading="lazy" src={product.image ?? "images/product-placeholder.svg"} />
                    <div className="product-overlay" aria-hidden="true" />
                  </div>
                  <div className="product-content">
                    <p className="product-category-tag">
                      <LangText value={category?.name ?? { zh: "产品", en: "Product" }} />
                    </p>
                    <h3>
                      <LangText value={product.name} />
                    </h3>
                    <p className="muted">
                      <LangText value={product.spec} />
                    </p>
                    <p>
                      <LangText value={product.use} />
                    </p>
                    <div className="inline-actions">
                      <Link className="product-link" href={`/products/${product.slug}/`}>
                        <LangText value={detailLabel} />
                      </Link>
                      <Link className="product-link" href="/contact/">
                        <LangText value={quoteLabel} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
