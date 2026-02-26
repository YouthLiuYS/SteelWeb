import Link from "next/link";
import { notFound } from "next/navigation";
import LangText from "../../components/LangText";
import ModuleHero from "../../components/ModuleHero";
import PageShell from "../../components/PageShell";
import { LocalizedString } from "@/content/siteData";
import { getCategoryBySlug, getProductBySlug, productCatalog } from "@/content/productCatalog";

type ProductDetailPageProps = {
  params: {
    slug: string;
  };
};

const pageKicker: LocalizedString = { zh: "产品详情", en: "Product Details" };
const quoteLabel: LocalizedString = { zh: "立即询价", en: "Request Quote" };
const categoryLabel: LocalizedString = { zh: "所属分类", en: "Category" };
const highlightLabel: LocalizedString = { zh: "产品特点", en: "Highlights" };
const appLabel: LocalizedString = { zh: "应用场景", en: "Applications" };
const materialLabel: LocalizedString = { zh: "材质建议", en: "Materials" };
const finishLabel: LocalizedString = { zh: "表面处理", en: "Finishes" };
const specLabel: LocalizedString = { zh: "规格参数", en: "Specifications" };
const relatedLabel: LocalizedString = { zh: "同类产品", en: "Related Products" };
const backLabel: LocalizedString = { zh: "返回产品中心", en: "Back to Product Center" };

export const dynamicParams = false;

export function generateStaticParams() {
  return productCatalog.map((product) => ({ slug: product.slug }));
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.categorySlug);
  const relatedProducts = productCatalog.filter((item) => item.categorySlug === product.categorySlug && item.slug !== product.slug).slice(0, 3);

  return (
    <PageShell>
      <ModuleHero
        actions={[
          { href: "/contact/", label: quoteLabel },
          { href: `/products/category/${product.categorySlug}/`, label: { zh: "查看分类", en: "View Category" }, variant: "outline" }
        ]}
        description={product.summary}
        image={product.image}
        kicker={pageKicker}
        title={product.name}
      />

      <section className="section section-light product-detail-section">
        <div className="container reveal">
          <Link className="back-link" href="/products/">
            <LangText value={backLabel} />
          </Link>

          <div className="detail-layout">
            <article className="detail-main">
              <img alt={product.name.en || product.name.zh} className="detail-image" loading="lazy" src={product.image ?? "images/product-placeholder.svg"} />

              <div className="detail-block">
                <p className="detail-meta">
                  <strong>
                    <LangText value={categoryLabel} />:
                  </strong>{" "}
                  <LangText value={category?.name ?? { zh: "产品", en: "Product" }} />
                </p>
                <p className="detail-meta">
                  <strong>
                    <LangText value={product.spec} />
                  </strong>
                </p>
                <p className="muted">
                  <LangText value={product.use} />
                </p>
              </div>

              <div className="detail-grid-cards">
                <article className="detail-card">
                  <h3>
                    <LangText value={highlightLabel} />
                  </h3>
                  <ul className="dot-list">
                    {product.highlights.map((item, index) => (
                      <li key={`${item.zh}-${index}`}>
                        <LangText value={item} />
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="detail-card">
                  <h3>
                    <LangText value={appLabel} />
                  </h3>
                  <ul className="dot-list">
                    {product.applications.map((item, index) => (
                      <li key={`${item.zh}-${index}`}>
                        <LangText value={item} />
                      </li>
                    ))}
                  </ul>
                </article>
              </div>

              <article className="detail-card">
                <h3>
                  <LangText value={specLabel} />
                </h3>
                <div className="spec-table">
                  {product.metrics.map((metric, index) => (
                    <div className="spec-row" key={`${metric.label.zh}-${index}`}>
                      <p className="spec-key">
                        <LangText value={metric.label} />
                      </p>
                      <p className="spec-value">
                        <LangText value={metric.value} />
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </article>

            <aside className="detail-side">
              <article className="detail-card">
                <h3>
                  <LangText value={materialLabel} />
                </h3>
                <ul className="dot-list">
                  {product.materials.map((item, index) => (
                    <li key={`${item.zh}-${index}`}>
                      <LangText value={item} />
                    </li>
                  ))}
                </ul>
              </article>

              <article className="detail-card">
                <h3>
                  <LangText value={finishLabel} />
                </h3>
                <ul className="dot-list">
                  {product.finishes.map((item, index) => (
                    <li key={`${item.zh}-${index}`}>
                      <LangText value={item} />
                    </li>
                  ))}
                </ul>
              </article>

              <article className="detail-card">
                <h3>
                  <LangText value={relatedLabel} />
                </h3>
                <div className="related-links">
                  {relatedProducts.map((item) => (
                    <Link className="quick-link" href={`/products/${item.slug}/`} key={item.slug}>
                      <LangText value={item.name} />
                    </Link>
                  ))}
                </div>
                <Link className="btn btn-solid btn-block" href="/contact/">
                  <LangText value={quoteLabel} />
                </Link>
              </article>
            </aside>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
