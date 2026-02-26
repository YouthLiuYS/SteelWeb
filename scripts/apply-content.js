const fs = require("fs");
const path = require("path");

const dataPath = path.resolve(__dirname, "..", "content", "company-data.js");
const outputPath = path.resolve(__dirname, "..", "src", "content", "siteData.ts");

function isLocalizedString(value) {
  return value && typeof value.zh === "string" && typeof value.en === "string";
}

function requireField(value, label) {
  if (!value) {
    throw new Error(`缺少必填字段: ${label}`);
  }
}

function validate(data) {
  requireField(data.brand, "brand");
  requireField(data.brand.name, "brand.name");
  requireField(data.topBar, "topBar");
  requireField(data.topBar.companyShort, "topBar.companyShort");
  requireField(data.topBar.email, "topBar.email");
  requireField(data.hero, "hero");
  requireField(data.hero.title, "hero.title");
  requireField(data.heroSlides, "heroSlides");
  requireField(data.heroSlides.length, "heroSlides.length");
  requireField(data.contact, "contact");
  requireField(data.contact.phone || data.contact.email, "contact.phone/contact.email");
  requireField(data.sections, "sections");
  requireField(data.labels, "labels");
  requireField(data.cta, "cta");
  requireField(data.quality, "quality");
  requireField(data.whyChoose, "whyChoose");
  requireField(data.whyChoose.title, "whyChoose.title");
  requireField(data.whyChoose.items, "whyChoose.items");
  requireField(data.news, "news");
  requireField(data.news.length, "news.length");
  requireField(data.trust, "trust");
  requireField(data.cases, "cases");
  requireField(data.quoteForm, "quoteForm");
  requireField(data.quoteForm.provider, "quoteForm.provider");
  requireField(data.quoteForm.endpoint, "quoteForm.endpoint");

  if (!isLocalizedString(data.brand.name)) {
    throw new Error("brand.name 必须包含 zh/en");
  }
  if (!isLocalizedString(data.hero.title)) {
    throw new Error("hero.title 必须包含 zh/en");
  }
  if (data.quoteForm.provider !== "formspree") {
    throw new Error('quoteForm.provider 目前仅支持 "formspree"');
  }
}

function buildTypeDefs() {
  return `export type Locale = "zh" | "en";
export type LocalizedString = { zh: string; en: string };

export type NavItem = { id: string; label: LocalizedString };
export type StatItem = { value: string; label: LocalizedString };
export type ProductItem = { name: LocalizedString; spec: LocalizedString; use: LocalizedString; image?: string };
export type ApplicationItem = { title: LocalizedString; desc: LocalizedString };
export type ProcessItem = { step: LocalizedString; detail: LocalizedString };
export type TrustItem = { value: string; label: LocalizedString; note: LocalizedString };
export type HeroSlideItem = {
  eyebrow: LocalizedString;
  title: LocalizedString;
  subtitle: LocalizedString;
  ctaPrimary: LocalizedString;
  ctaPrimaryHref: string;
  ctaSecondary?: LocalizedString;
  ctaSecondaryHref?: string;
  bgImage: string;
};
export type CaseItem = {
  title: LocalizedString;
  industry: LocalizedString;
  spec: LocalizedString;
  result: LocalizedString;
  image?: string;
};
export type WhyChooseItem = {
  title: LocalizedString;
  desc: LocalizedString;
  icon?: string;
};
export type NewsItem = {
  title: LocalizedString;
  excerpt: LocalizedString;
  href: string;
  image?: string;
  date: string;
};
export type QuoteFormConfig = {
  provider: "formspree";
  endpoint: string;
  subject: LocalizedString;
  successNote: LocalizedString;
};

export type SiteData = {
  brand: {
    name: LocalizedString;
    tagline: LocalizedString;
    location: LocalizedString;
  };
  topBar: {
    companyShort: LocalizedString;
    email: string;
  };
  nav: NavItem[];
  sections: {
    aboutTitle: LocalizedString;
    productsTitle: LocalizedString;
    applicationsTitle: LocalizedString;
    processTitle: LocalizedString;
    casesTitle: LocalizedString;
    whyChooseTitle: LocalizedString;
    newsTitle: LocalizedString;
    contactTitle: LocalizedString;
  };
  labels: {
    phone: LocalizedString;
    email: LocalizedString;
    address: LocalizedString;
    hours: LocalizedString;
  };
  hero: {
    title: LocalizedString;
    subtitle: LocalizedString;
    points: LocalizedString[];
    primaryCta: LocalizedString;
    secondaryCta: LocalizedString;
    highlights: { value: string; label: LocalizedString }[];
  };
  heroSlides: HeroSlideItem[];
  trust: TrustItem[];
  about: {
    title: LocalizedString;
    headline: LocalizedString;
    description: LocalizedString;
    bullets: LocalizedString[];
  };
  whyChoose: {
    title: LocalizedString;
    headline: LocalizedString;
    items: WhyChooseItem[];
  };
  news: NewsItem[];
  stats: StatItem[];
  products: ProductItem[];
  applications: ApplicationItem[];
  cases: CaseItem[];
  process: ProcessItem[];
  quality: {
    title: LocalizedString;
    description: LocalizedString;
    items: LocalizedString[];
    badgeTitle: LocalizedString;
    badgeNote: LocalizedString;
    badges: string[];
  };
  contact: {
    phone: string;
    email: string;
    address: LocalizedString;
    hours: LocalizedString;
  };
  cta: {
    title: LocalizedString;
    description: LocalizedString;
    button: LocalizedString;
    note: LocalizedString;
  };
  quoteForm: QuoteFormConfig;
  footer: {
    copyright: LocalizedString;
  };
  seo: {
    title: LocalizedString;
    description: LocalizedString;
    keywords: LocalizedString;
  };
};`;
}

function generateFile(data) {
  const header = `/* eslint-disable */
// 此文件由 scripts/apply-content.js 自动生成，请勿手动编辑。`;
  const typeDefs = buildTypeDefs();
  const content = JSON.stringify(data, null, 2);

  return `${header}

${typeDefs}

export const siteData: SiteData = ${content};
`;
}

function main() {
  if (!fs.existsSync(dataPath)) {
    throw new Error("找不到 content/company-data.js");
  }

  const data = require(dataPath);
  validate(data);

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, generateFile(data), "utf8");

  console.log("已生成内容文件:", outputPath);
}

try {
  main();
} catch (error) {
  console.error(error.message || error);
  process.exit(1);
}
