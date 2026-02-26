import { LocalizedString } from "./siteData";

export type ProductCategory = {
  slug: string;
  name: LocalizedString;
  description: LocalizedString;
  heroImage?: string;
};

export type ProductMetric = {
  label: LocalizedString;
  value: LocalizedString;
};

export type ProductDetail = {
  slug: string;
  categorySlug: string;
  name: LocalizedString;
  spec: LocalizedString;
  use: LocalizedString;
  summary: LocalizedString;
  image?: string;
  highlights: LocalizedString[];
  applications: LocalizedString[];
  materials: LocalizedString[];
  finishes: LocalizedString[];
  metrics: ProductMetric[];
};

export const productCategories: ProductCategory[] = [
  {
    slug: "heavy-duty",
    name: {
      zh: "重载工业系列",
      en: "Heavy Duty Series"
    },
    description: {
      zh: "面向平台、走道和设备防护的高承载钢板网产品。",
      en: "Load-bearing expanded metal for platforms, walkways, and equipment protection."
    },
    heroImage: "images/product-1.svg"
  },
  {
    slug: "architectural",
    name: {
      zh: "建筑装饰系列",
      en: "Architectural Series"
    },
    description: {
      zh: "用于幕墙、吊顶、隔断与立面视觉设计的装饰型产品。",
      en: "Decorative solutions for facades, ceilings, partitions, and visual design."
    },
    heroImage: "images/product-2.svg"
  },
  {
    slug: "safety",
    name: {
      zh: "围护防护系列",
      en: "Safety & Fencing Series"
    },
    description: {
      zh: "适配厂区围栏、设备防护和户外耐候场景的防护型产品。",
      en: "Safety-focused products for fencing, guards, and outdoor weather-resistant scenarios."
    },
    heroImage: "images/product-4.svg"
  },
  {
    slug: "stainless-filter",
    name: {
      zh: "不锈耐腐系列",
      en: "Stainless & Corrosion Resistant"
    },
    description: {
      zh: "针对耐腐蚀、耐高温及筛分过滤环境设计的高性能产品。",
      en: "High-performance options for corrosion resistance, high temperature, and filtration."
    },
    heroImage: "images/product-3.svg"
  }
];

const mmLabel: LocalizedString = { zh: "厚度", en: "Thickness" };
const swdLabel: LocalizedString = { zh: "短节距", en: "SWD" };
const lwdLabel: LocalizedString = { zh: "长节距", en: "LWD" };
const widthLabel: LocalizedString = { zh: "常规宽度", en: "Width" };

export const productCatalog: ProductDetail[] = [
  {
    slug: "heavy-expanded-metal",
    categorySlug: "heavy-duty",
    name: {
      zh: "重型钢板网",
      en: "Heavy Expanded Metal"
    },
    spec: {
      zh: "用于平台、走道、设备防护",
      en: "For platforms, walkways, safety guards"
    },
    use: {
      zh: "承载力高，适合工业环境",
      en: "High load capacity for industrial use"
    },
    summary: {
      zh: "重型钢板网采用高强度板材拉伸成型，适合对承载、耐冲击要求较高的工业项目。",
      en: "Heavy expanded metal is formed from high-strength sheet for demanding load-bearing and impact-resistant projects."
    },
    image: "images/product-1.svg",
    highlights: [
      {
        zh: "可做防滑压平与折边加工",
        en: "Supports anti-slip flattening and edge folding"
      },
      {
        zh: "支持大板幅与焊接框架配套",
        en: "Available in large panel formats with frame assembly"
      },
      {
        zh: "适配平台踏步、检修走道",
        en: "Suitable for catwalks, stairs, and maintenance routes"
      }
    ],
    applications: [
      {
        zh: "工业平台",
        en: "Industrial platforms"
      },
      {
        zh: "能源项目设备防护",
        en: "Energy project guards"
      },
      {
        zh: "重载车间通道",
        en: "Heavy-duty workshop walkways"
      }
    ],
    materials: [
      { zh: "Q235 低碳钢", en: "Q235 mild steel" },
      { zh: "Q355 高强钢", en: "Q355 high-strength steel" }
    ],
    finishes: [
      { zh: "热镀锌", en: "Hot-dip galvanized" },
      { zh: "防锈底漆", en: "Anti-rust primer" }
    ],
    metrics: [
      {
        label: mmLabel,
        value: { zh: "3.0-8.0 mm", en: "3.0-8.0 mm" }
      },
      {
        label: swdLabel,
        value: { zh: "25-60 mm", en: "25-60 mm" }
      },
      {
        label: lwdLabel,
        value: { zh: "50-150 mm", en: "50-150 mm" }
      },
      {
        label: widthLabel,
        value: { zh: "1000/1250/1500 mm", en: "1000/1250/1500 mm" }
      }
    ]
  },
  {
    slug: "flattened-walkway-mesh",
    categorySlug: "heavy-duty",
    name: {
      zh: "压平走道钢板网",
      en: "Flattened Walkway Mesh"
    },
    spec: {
      zh: "平整防滑，适合人员通行区域",
      en: "Flattened anti-slip mesh for walkways"
    },
    use: {
      zh: "脚感稳定，便于安装固定",
      en: "Stable stepping surface and easy installation"
    },
    summary: {
      zh: "通过压平工艺提高接触面积和舒适度，在保证承载的同时提升通行安全性。",
      en: "Flattening increases contact area and comfort while maintaining structural load capacity."
    },
    image: "images/product-1.svg",
    highlights: [
      {
        zh: "表面更平整，适合频繁通行",
        en: "Flatter surface for frequent traffic"
      },
      {
        zh: "可做折边与冲孔安装孔位",
        en: "Supports folded edges and fixing holes"
      },
      {
        zh: "可与踏步板总成配套",
        en: "Can be supplied as stair tread assembly"
      }
    ],
    applications: [
      { zh: "车间走道", en: "Workshop aisles" },
      { zh: "设备检修平台", en: "Maintenance platforms" },
      { zh: "物流分拣线", en: "Sorting lines" }
    ],
    materials: [
      { zh: "Q235 低碳钢", en: "Q235 mild steel" },
      { zh: "不锈钢 304", en: "Stainless steel 304" }
    ],
    finishes: [
      { zh: "镀锌", en: "Galvanized" },
      { zh: "喷涂", en: "Powder coated" }
    ],
    metrics: [
      {
        label: mmLabel,
        value: { zh: "2.5-5.0 mm", en: "2.5-5.0 mm" }
      },
      {
        label: swdLabel,
        value: { zh: "20-45 mm", en: "20-45 mm" }
      },
      {
        label: lwdLabel,
        value: { zh: "40-120 mm", en: "40-120 mm" }
      },
      {
        label: widthLabel,
        value: { zh: "1000-1500 mm", en: "1000-1500 mm" }
      }
    ]
  },
  {
    slug: "standard-diamond-mesh",
    categorySlug: "architectural",
    name: {
      zh: "标准菱形钢板网",
      en: "Standard Diamond Mesh"
    },
    spec: {
      zh: "适用于围栏、隔断、装饰",
      en: "For fencing, partitions, decoration"
    },
    use: {
      zh: "性价比高，规格齐全",
      en: "Cost-effective with complete sizes"
    },
    summary: {
      zh: "通用型菱形钢板网，可快速匹配建筑及工业围护项目，交付周期短。",
      en: "General-purpose diamond mesh for fast deployment across building and industrial enclosure projects."
    },
    image: "images/product-2.svg",
    highlights: [
      { zh: "标准库存规格覆盖广", en: "Broad stock size coverage" },
      { zh: "可焊接、折弯、裁切", en: "Weldable, bendable, and cuttable" },
      { zh: "适合工程批量采购", en: "Suitable for project-scale procurement" }
    ],
    applications: [
      { zh: "建筑围护", en: "Building enclosure" },
      { zh: "机房隔断", en: "Equipment partitions" },
      { zh: "市政护栏", en: "Municipal fencing" }
    ],
    materials: [
      { zh: "低碳钢", en: "Mild steel" },
      { zh: "铝板", en: "Aluminum" }
    ],
    finishes: [
      { zh: "喷塑", en: "Powder coating" },
      { zh: "电镀锌", en: "Electro-galvanized" }
    ],
    metrics: [
      {
        label: mmLabel,
        value: { zh: "1.5-4.0 mm", en: "1.5-4.0 mm" }
      },
      {
        label: swdLabel,
        value: { zh: "10-40 mm", en: "10-40 mm" }
      },
      {
        label: lwdLabel,
        value: { zh: "20-90 mm", en: "20-90 mm" }
      },
      {
        label: widthLabel,
        value: { zh: "1000/1220 mm", en: "1000/1220 mm" }
      }
    ]
  },
  {
    slug: "decorative-aluminum-mesh",
    categorySlug: "architectural",
    name: {
      zh: "铝板装饰钢板网",
      en: "Decorative Aluminum Mesh"
    },
    spec: {
      zh: "幕墙与吊顶视觉用网",
      en: "Architectural mesh for facade and ceiling"
    },
    use: {
      zh: "轻量化，支持定制色",
      en: "Lightweight with custom color options"
    },
    summary: {
      zh: "铝板装饰网兼具视觉通透与遮阳性能，常用于建筑外立面与商业空间。",
      en: "Decorative aluminum mesh balances visual openness and shading for facades and commercial interiors."
    },
    image: "images/product-2.svg",
    highlights: [
      { zh: "可选阳极氧化与氟碳喷涂", en: "Anodized or PVDF finishes available" },
      { zh: "支持异形裁切与背框安装", en: "Supports custom cuts and framed installation" },
      { zh: "兼顾透光、通风与美观", en: "Balances lighting, airflow, and aesthetics" }
    ],
    applications: [
      { zh: "建筑幕墙", en: "Building facades" },
      { zh: "商业中庭吊顶", en: "Atrium ceilings" },
      { zh: "公共空间隔断", en: "Public-space partitions" }
    ],
    materials: [
      { zh: "铝合金 3003", en: "Aluminum 3003" },
      { zh: "铝镁合金 5052", en: "Aluminum 5052" }
    ],
    finishes: [
      { zh: "阳极氧化", en: "Anodized" },
      { zh: "氟碳喷涂", en: "PVDF coated" }
    ],
    metrics: [
      {
        label: mmLabel,
        value: { zh: "1.0-3.0 mm", en: "1.0-3.0 mm" }
      },
      {
        label: swdLabel,
        value: { zh: "8-35 mm", en: "8-35 mm" }
      },
      {
        label: lwdLabel,
        value: { zh: "16-70 mm", en: "16-70 mm" }
      },
      {
        label: widthLabel,
        value: { zh: "1000/1220/1500 mm", en: "1000/1220/1500 mm" }
      }
    ]
  },
  {
    slug: "stainless-expanded-metal",
    categorySlug: "stainless-filter",
    name: {
      zh: "不锈钢钢板网",
      en: "Stainless Expanded Metal"
    },
    spec: {
      zh: "耐腐蚀、耐高温",
      en: "Corrosion and heat resistant"
    },
    use: {
      zh: "适合化工与食品环境",
      en: "For chemical and food industries"
    },
    summary: {
      zh: "不锈钢系列适用于高洁净或高腐蚀场景，长期使用稳定，维护成本低。",
      en: "Stainless options provide long-term stability in hygienic and corrosive environments."
    },
    image: "images/product-3.svg",
    highlights: [
      { zh: "耐酸碱与湿热环境", en: "Resistant to acid, alkali, and humidity" },
      { zh: "可做细孔型筛分网", en: "Supports fine aperture screening" },
      { zh: "支持食品接触场景", en: "Suitable for food-contact applications" }
    ],
    applications: [
      { zh: "化工过滤", en: "Chemical filtration" },
      { zh: "食品加工防护", en: "Food processing guards" },
      { zh: "海工设备通风", en: "Marine equipment ventilation" }
    ],
    materials: [
      { zh: "304 不锈钢", en: "Stainless steel 304" },
      { zh: "316L 不锈钢", en: "Stainless steel 316L" }
    ],
    finishes: [
      { zh: "酸洗钝化", en: "Pickled and passivated" },
      { zh: "电解抛光", en: "Electropolished" }
    ],
    metrics: [
      {
        label: mmLabel,
        value: { zh: "0.8-4.0 mm", en: "0.8-4.0 mm" }
      },
      {
        label: swdLabel,
        value: { zh: "5-25 mm", en: "5-25 mm" }
      },
      {
        label: lwdLabel,
        value: { zh: "10-50 mm", en: "10-50 mm" }
      },
      {
        label: widthLabel,
        value: { zh: "1000/1220 mm", en: "1000/1220 mm" }
      }
    ]
  },
  {
    slug: "galvanized-expanded-metal",
    categorySlug: "safety",
    name: {
      zh: "镀锌钢板网",
      en: "Galvanized Expanded Metal"
    },
    spec: {
      zh: "耐候、防锈，户外更稳定",
      en: "Weatherproof and rust resistant"
    },
    use: {
      zh: "适合室外结构与围栏",
      en: "Ideal for outdoor structures"
    },
    summary: {
      zh: "镀锌工艺有效提升耐候能力，常用于长期暴露在室外的围护和防护结构。",
      en: "Galvanized expanded metal improves outdoor durability for fencing and protective structures."
    },
    image: "images/product-4.svg",
    highlights: [
      { zh: "热镀锌层附着稳定", en: "Stable hot-dip zinc coating" },
      { zh: "适配围栏立柱系统", en: "Compatible with fence post systems" },
      { zh: "维护周期长", en: "Long maintenance cycle" }
    ],
    applications: [
      { zh: "厂区围栏", en: "Factory fencing" },
      { zh: "道路隔离", en: "Roadway separation" },
      { zh: "设备外防护", en: "Equipment exterior protection" }
    ],
    materials: [
      { zh: "Q235 低碳钢", en: "Q235 mild steel" }
    ],
    finishes: [
      { zh: "热镀锌", en: "Hot-dip galvanized" },
      { zh: "锌铝镁涂层", en: "Zn-Al-Mg coating" }
    ],
    metrics: [
      {
        label: mmLabel,
        value: { zh: "1.5-4.5 mm", en: "1.5-4.5 mm" }
      },
      {
        label: swdLabel,
        value: { zh: "12-40 mm", en: "12-40 mm" }
      },
      {
        label: lwdLabel,
        value: { zh: "24-90 mm", en: "24-90 mm" }
      },
      {
        label: widthLabel,
        value: { zh: "1000-1500 mm", en: "1000-1500 mm" }
      }
    ]
  },
  {
    slug: "security-fence-mesh",
    categorySlug: "safety",
    name: {
      zh: "防护围栏钢板网",
      en: "Security Fence Mesh"
    },
    spec: {
      zh: "抗冲击防护，适合厂区安防",
      en: "Impact-resistant mesh for site security"
    },
    use: {
      zh: "结构稳定，支持模块化安装",
      en: "Stable structure with modular installation"
    },
    summary: {
      zh: "用于设备围护与周界防护，兼具通风可视性与防护强度。",
      en: "Designed for equipment enclosures and perimeter security with airflow and visibility."
    },
    image: "images/product-4.svg",
    highlights: [
      { zh: "抗冲击性能稳定", en: "Reliable impact performance" },
      { zh: "支持防拆连接件", en: "Supports tamper-resistant fasteners" },
      { zh: "可配门禁与监控系统", en: "Integrates with access and CCTV systems" }
    ],
    applications: [
      { zh: "仓储园区", en: "Warehouse parks" },
      { zh: "智能制造车间", en: "Smart manufacturing workshops" },
      { zh: "市政周界防护", en: "Municipal perimeter protection" }
    ],
    materials: [
      { zh: "低碳钢", en: "Mild steel" },
      { zh: "镀锌钢", en: "Galvanized steel" }
    ],
    finishes: [
      { zh: "静电喷涂", en: "Powder coated" },
      { zh: "防腐底漆", en: "Anti-corrosion primer" }
    ],
    metrics: [
      {
        label: mmLabel,
        value: { zh: "2.0-4.5 mm", en: "2.0-4.5 mm" }
      },
      {
        label: swdLabel,
        value: { zh: "15-35 mm", en: "15-35 mm" }
      },
      {
        label: lwdLabel,
        value: { zh: "30-80 mm", en: "30-80 mm" }
      },
      {
        label: widthLabel,
        value: { zh: "1000/1250 mm", en: "1000/1250 mm" }
      }
    ]
  },
  {
    slug: "micro-opening-filter-mesh",
    categorySlug: "stainless-filter",
    name: {
      zh: "微孔过滤钢板网",
      en: "Micro Opening Filter Mesh"
    },
    spec: {
      zh: "细孔高精度筛分与防护",
      en: "Fine openings for precision screening"
    },
    use: {
      zh: "孔型均匀，适合过滤与通风",
      en: "Uniform openings for filtration and airflow"
    },
    summary: {
      zh: "微孔过滤钢板网提供稳定孔径控制，适用于筛分、过滤和防护组合场景。",
      en: "Micro opening mesh offers consistent aperture control for filtration, screening, and protection."
    },
    image: "images/product-3.svg",
    highlights: [
      { zh: "孔径公差控制严格", en: "Tight aperture tolerance control" },
      { zh: "可做卷材与片材供货", en: "Available in coils and sheets" },
      { zh: "支持清洗回用", en: "Supports cleaning and reuse" }
    ],
    applications: [
      { zh: "粉体筛分", en: "Powder screening" },
      { zh: "空气过滤保护", en: "Air filtration protection" },
      { zh: "机械防护罩", en: "Machine guards" }
    ],
    materials: [
      { zh: "304 不锈钢", en: "Stainless steel 304" },
      { zh: "316L 不锈钢", en: "Stainless steel 316L" },
      { zh: "铝材", en: "Aluminum" }
    ],
    finishes: [
      { zh: "本色", en: "Mill finish" },
      { zh: "喷涂", en: "Coated" }
    ],
    metrics: [
      {
        label: mmLabel,
        value: { zh: "0.6-2.5 mm", en: "0.6-2.5 mm" }
      },
      {
        label: swdLabel,
        value: { zh: "2-12 mm", en: "2-12 mm" }
      },
      {
        label: lwdLabel,
        value: { zh: "4-24 mm", en: "4-24 mm" }
      },
      {
        label: widthLabel,
        value: { zh: "1000/1220 mm", en: "1000/1220 mm" }
      }
    ]
  }
];

export const featuredProductSlugs = [
  "heavy-expanded-metal",
  "standard-diamond-mesh",
  "stainless-expanded-metal",
  "galvanized-expanded-metal"
] as const;

export function getCategoryBySlug(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function getProductBySlug(slug: string) {
  return productCatalog.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return productCatalog.filter((product) => product.categorySlug === categorySlug);
}

export const featuredProducts = featuredProductSlugs
  .map((slug) => getProductBySlug(slug))
  .filter((product): product is ProductDetail => Boolean(product));
