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
  requireField(data.hero, "hero");
  requireField(data.hero.title, "hero.title");
  requireField(data.contact, "contact");
  requireField(data.contact.phone || data.contact.email, "contact.phone/contact.email");
  requireField(data.sections, "sections");
  requireField(data.labels, "labels");
  requireField(data.cta, "cta");
  requireField(data.quality, "quality");

  if (!isLocalizedString(data.brand.name)) {
    throw new Error("brand.name 必须包含 zh/en");
  }
  if (!isLocalizedString(data.hero.title)) {
    throw new Error("hero.title 必须包含 zh/en");
  }
}

function buildTypeDefs() {
  return `export type Locale = "zh" | "en";
export type LocalizedString = { zh: string; en: string };

export type NavItem = { id: string; label: LocalizedString };
export type StatItem = { value: string; label: LocalizedString };
export type ProductItem = { name: LocalizedString; spec: LocalizedString; use: LocalizedString };
export type ApplicationItem = { title: LocalizedString; desc: LocalizedString };
export type ProcessItem = { step: LocalizedString; detail: LocalizedString };

export type SiteData = {
  brand: {
    name: LocalizedString;
    tagline: LocalizedString;
    location: LocalizedString;
  };
  nav: NavItem[];
  sections: {
    productsTitle: LocalizedString;
    applicationsTitle: LocalizedString;
    processTitle: LocalizedString;
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
  about: {
    title: LocalizedString;
    headline: LocalizedString;
    description: LocalizedString;
    bullets: LocalizedString[];
  };
  stats: StatItem[];
  products: ProductItem[];
  applications: ApplicationItem[];
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
