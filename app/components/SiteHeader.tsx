import Link from "next/link";
import LangText from "./LangText";
import { LocalizedString, siteData } from "@/content/siteData";
import { productCategories } from "@/content/productCatalog";

type SiteHeaderProps = {
  isHome?: boolean;
};

const allProductsLabel: LocalizedString = { zh: "全部产品", en: "All Products" };

const navPageHrefs: Record<string, string> = {
  about: "/about/",
  products: "/products/",
  why: "/why/",
  news: "/news/",
  quality: "/quality/",
  quote: "/contact/"
};

function getNavHref(id: string, isHome: boolean) {
  if (id === "products") {
    return navPageHrefs.products;
  }

  return isHome ? `#${id}` : navPageHrefs[id] ?? "/";
}

export default function SiteHeader({ isHome = false }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="logo" href="/">
          <span className="logo-mark" aria-hidden="true" />
          <span className="logo-text">
            <strong className="logo-name">
              <LangText value={siteData.brand.name} />
            </strong>
            <span className="logo-tagline">
              <LangText value={siteData.brand.tagline} />
            </span>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary navigation">
          {siteData.nav.map((item) => {
            if (item.id !== "products") {
              return (
                <Link href={getNavHref(item.id, isHome)} key={item.id}>
                  <LangText value={item.label} />
                </Link>
              );
            }

            return (
              <details className="nav-dropdown" key={item.id}>
                <summary className="nav-dropdown-trigger">
                  <LangText value={item.label} />
                  <span aria-hidden="true" className="nav-caret">
                    ▾
                  </span>
                </summary>

                <div className="nav-dropdown-menu" role="menu">
                  <Link className="nav-dropdown-item" href={navPageHrefs.products} role="menuitem">
                    <LangText value={allProductsLabel} />
                  </Link>
                  {productCategories.map((category) => (
                    <Link
                      className="nav-dropdown-item"
                      href={`/products/category/${category.slug}/`}
                      key={category.slug}
                      role="menuitem"
                    >
                      <LangText value={category.name} />
                    </Link>
                  ))}
                </div>
              </details>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
