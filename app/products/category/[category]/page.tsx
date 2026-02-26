import Link from "next/link";
import { notFound } from "next/navigation";
import LangText from "../../../components/LangText";
import ModuleHero from "../../../components/ModuleHero";
import PageShell from "../../../components/PageShell";
import { LocalizedString } from "@/content/siteData";
import { getCategoryBySlug, getProductsByCategory, productCategories } from "@/content/productCatalog";

type CategoryPageProps = {
  params: {
    category: string;
  };
};

const pageKicker: LocalizedString = { zh: "产品分类", en: "Category" };
const allProductsLabel: LocalizedString = { zh: "返回全部产品", en: "Back to All Products" };
const detailLabel: LocalizedString = { zh: "查看详情", en: "View Details" };
const quoteLabel: LocalizedString = { zh: "提交询价", en: "Send Inquiry" };

export const dynamicParams = false;

export function generateStaticParams() {
  return productCategories.map((category) => ({ category: category.slug }));
}

export default function ProductCategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.category);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(params.category);

  return (
    <PageShell>
      <ModuleHero
        actions={[
          { href: "/products/", label: allProductsLabel },
          { href: "/contact/", label: quoteLabel, variant: "outline" }
        ]}
        description={category.description}
        image={category.heroImage}
        kicker={pageKicker}
        metrics={[
          {
            value: String(products.length),
            label: { zh: "分类产品", en: "Products" }
          }
        ]}
        title={category.name}
      />

      <section className="section section-light">
        <div className="container reveal">
          <div className="inline-actions">
            <Link className="btn btn-outline soft-outline" href="/products/">
              <LangText value={allProductsLabel} />
            </Link>
          </div>

          <div className="products-grid extended-grid">
            {products.map((product) => (
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
                    <LangText value={product.summary} />
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
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
