// 公司内容配置：只需修改这里，然后运行 `npm run content:apply` 生成站点数据
// 约定：所有可展示文字都包含 zh/en 两种语言
module.exports = {
  brand: {
    name: { zh: "安平钢盾钢板网", en: "SteelShield Expanded Metal" },
    tagline: { zh: "钢板网制造与定制解决方案", en: "Expanded Metal Manufacturing & Custom Solutions" },
    location: { zh: "中国 河北 安平", en: "Anping, Hebei, China" }
  },
  topBar: {
    companyShort: { zh: "安平钢盾钢板网有限公司", en: "SteelShield Expanded Metal Co., Ltd." },
    email: "info@yourmesh.com"
  },
  nav: [
    { id: "about", label: { zh: "关于我们", en: "About" } },
    { id: "products", label: { zh: "产品中心", en: "Products" } },
    { id: "why", label: { zh: "选择我们", en: "Why Us" } },
    { id: "news", label: { zh: "新闻资讯", en: "News" } },
    { id: "quality", label: { zh: "质量控制", en: "Quality" } },
    { id: "quote", label: { zh: "联系我们", en: "Contact" } }
  ],
  sections: {
    aboutTitle: { zh: "关于我们", en: "About Us" },
    productsTitle: { zh: "产品中心", en: "Hot Products" },
    applicationsTitle: { zh: "应用场景", en: "Where It Works" },
    processTitle: { zh: "生产工艺", en: "Process Control" },
    casesTitle: { zh: "典型交付案例", en: "Representative Delivery Cases" },
    whyChooseTitle: { zh: "为什么选择我们", en: "Why Choose Us" },
    newsTitle: { zh: "新闻资讯", en: "Our News" },
    contactTitle: { zh: "在线询价与联系方式", en: "Quote Request & Contact" }
  },
  labels: {
    phone: { zh: "电话", en: "Phone" },
    email: { zh: "邮箱", en: "Email" },
    address: { zh: "地址", en: "Address" },
    hours: { zh: "时间", en: "Hours" }
  },
  hero: {
    title: { zh: "专注钢板网制造与定制", en: "Focused on Expanded Metal Manufacturing" },
    subtitle: {
      zh: "从选材到表面处理，一站式交付。支持多规格、多材质、快速出货。",
      en: "From material selection to surface treatment, we deliver end-to-end. Multiple specs, materials, and fast lead times."
    },
    points: [
      { zh: "支持钢、铝、不锈钢等多材质", en: "Supports steel, aluminum, stainless materials" },
      { zh: "支持非标规格与打样", en: "Custom sizes and rapid sampling" },
      { zh: "严格质检与可追溯生产", en: "Strict QC and traceable production" }
    ],
    primaryCta: { zh: "获取报价", en: "Get a Quote" },
    secondaryCta: { zh: "查看产品", en: "View Products" },
    highlights: [
      { value: "8+年", label: { zh: "行业经验", en: "Years Experience" } },
      { value: "120T", label: { zh: "月产能", en: "Monthly Capacity" } },
      { value: "7天", label: { zh: "快速交付", en: "Fast Delivery" } }
    ]
  },
  heroSlides: [
    {
      eyebrow: { zh: "专业钢板网生产厂家", en: "Professional Expanded Metal Manufacturer" },
      title: { zh: "重型钢板网\n平台与走道方案", en: "Heavy Expanded Metal\nFor Platforms & Walkways" },
      subtitle: {
        zh: "支持承载类工业项目，按图定制网孔、节距与表面处理。",
        en: "Engineered for load-bearing projects with custom mesh opening, pitch, and surface treatment."
      },
      ctaPrimary: { zh: "获取方案", en: "Get Solution" },
      ctaPrimaryHref: "#quote",
      ctaSecondary: { zh: "查看产品", en: "View Products" },
      ctaSecondaryHref: "#products",
      bgImage: "images/hero-slide-1.svg"
    },
    {
      eyebrow: { zh: "质量稳定 可追溯交付", en: "Stable Quality & Traceable Delivery" },
      title: { zh: "不锈钢与镀锌\n多材质供货", en: "Stainless & Galvanized\nMulti-material Supply" },
      subtitle: {
        zh: "覆盖建筑、安防、筛分与工业平台，批量与定制并行。",
        en: "Serving facade, security, screening, and industrial platform applications with both volume and custom orders."
      },
      ctaPrimary: { zh: "立即询价", en: "Request Quote" },
      ctaPrimaryHref: "#quote",
      ctaSecondary: { zh: "质量控制", en: "Quality Control" },
      ctaSecondaryHref: "#quality",
      bgImage: "images/hero-slide-2.svg"
    },
    {
      eyebrow: { zh: "安平源头工厂", en: "Source Factory in Anping" },
      title: { zh: "交期可控\n支持OEM项目", en: "Reliable Lead Time\nOEM Projects Supported" },
      subtitle: {
        zh: "从原材料到出厂复检全流程管控，支持图纸打样与批量交付。",
        en: "Full process control from raw material to final inspection, with drawing-based sampling and batch delivery."
      },
      ctaPrimary: { zh: "联系工厂", en: "Contact Factory" },
      ctaPrimaryHref: "#quote",
      ctaSecondary: { zh: "关于我们", en: "About Us" },
      ctaSecondaryHref: "#about",
      bgImage: "images/hero-slide-3.svg"
    }
  ],
  trust: [
    {
      value: "120T/月",
      label: { zh: "月稳定产能", en: "Stable Monthly Capacity" },
      note: { zh: "多条生产线协同交付", en: "Multi-line production for stable supply" }
    },
    {
      value: "7-12天",
      label: { zh: "常规交付周期", en: "Typical Lead Time" },
      note: { zh: "标准规格快速出货", en: "Fast dispatch for standard specifications" }
    },
    {
      value: "100%",
      label: { zh: "关键尺寸全检", en: "Critical Dimension Inspection" },
      note: { zh: "批次追溯与出厂复检", en: "Traceable batches with final inspection" }
    }
  ],
  about: {
    title: { zh: "关于我们", en: "About Us" },
    headline: { zh: "扎根安平的钢板网厂家", en: "Anping-based expanded metal manufacturer" },
    description: {
      zh: "我们专注钢板网生产与深加工，为建筑、工业、安防、筛分等领域提供可靠网材方案。工厂配置多条冲剪拉伸生产线，支持批量订单与定制。",
      en: "We focus on expanded metal production and fabrication for construction, industrial platforms, security, and screening. Multiple lines support both volume orders and custom work."
    },
    bullets: [
      { zh: "从原材料到成品全流程把控", en: "End-to-end control from raw material to delivery" },
      { zh: "支持镀锌、喷涂、氧化等表面处理", en: "Surface treatments: galvanizing, coating, anodizing" },
      { zh: "小批量打样与大批量交付兼顾", en: "Both sampling and large-scale delivery" }
    ]
  },
  whyChoose: {
    title: { zh: "Quality First", en: "Quality First" },
    headline: { zh: "为什么选择我们", en: "Why Choose Us" },
    items: [
      {
        title: { zh: "技术实力", en: "Technical Strength" },
        desc: { zh: "多条冲剪拉伸线，支持多材质与多孔型定制。", en: "Multiple production lines support custom materials and mesh patterns." },
        icon: "01"
      },
      {
        title: { zh: "质量控制", en: "Quality Control" },
        desc: { zh: "关键尺寸全检，批次追溯，出厂前复检。", en: "Full inspection on key dimensions with traceable batch records." },
        icon: "02"
      },
      {
        title: { zh: "交付保障", en: "Reliable Delivery" },
        desc: { zh: "标准规格快速排产，定制订单透明进度。", en: "Fast production for standard specs and transparent lead-time for custom orders." },
        icon: "03"
      },
      {
        title: { zh: "服务支持", en: "Service Support" },
        desc: { zh: "支持图纸打样、参数建议与项目技术对接。", en: "Support for drawing-based sampling and engineering consultation." },
        icon: "04"
      }
    ]
  },
  news: [
    {
      title: { zh: "不锈钢方孔网在过滤中的应用", en: "Stainless Wire Mesh in Filtration Applications" },
      excerpt: {
        zh: "介绍方孔网在化工与食品过滤场景中的选材和孔径建议。",
        en: "A quick guide on material and aperture selection for chemical and food filtration scenarios."
      },
      href: "#quote",
      image: "images/news-1.svg",
      date: "2026-01-12"
    },
    {
      title: { zh: "钢板网平台项目交付案例", en: "Delivery Case: Expanded Metal Platform" },
      excerpt: {
        zh: "从方案确认到交付验收，完整展示承载类项目执行流程。",
        en: "From solution confirmation to acceptance, a full delivery walkthrough for load-bearing projects."
      },
      href: "#products",
      image: "images/news-2.svg",
      date: "2025-12-28"
    },
    {
      title: { zh: "如何选择镀锌或不锈钢钢板网", en: "How to Choose Galvanized vs Stainless Mesh" },
      excerpt: {
        zh: "对比户外耐候与耐腐蚀环境下两类材质的适用边界。",
        en: "Comparison of galvanized and stainless options for outdoor weathering and corrosion environments."
      },
      href: "#quality",
      image: "images/news-3.svg",
      date: "2025-11-19"
    }
  ],
  stats: [
    { value: "35+", label: { zh: "常规规格", en: "Standard Sizes" } },
    { value: "300+", label: { zh: "合作客户", en: "Customers Served" } },
    { value: "96%", label: { zh: "准时交付", en: "On-time Delivery" } }
  ],
  products: [
    {
      name: { zh: "重型钢板网", en: "Heavy Expanded Metal" },
      spec: { zh: "用于平台、走道、设备防护", en: "For platforms, walkways, safety guards" },
      use: { zh: "承载力高，适合工业环境", en: "High load capacity for industrial use" },
      image: "images/product-1.svg"
    },
    {
      name: { zh: "标准菱形钢板网", en: "Standard Diamond Mesh" },
      spec: { zh: "适用于围栏、隔断、装饰", en: "For fencing, partitions, decoration" },
      use: { zh: "性价比高，规格齐全", en: "Cost-effective with complete sizes" },
      image: "images/product-2.svg"
    },
    {
      name: { zh: "不锈钢钢板网", en: "Stainless Expanded Metal" },
      spec: { zh: "耐腐蚀、耐高温", en: "Corrosion and heat resistant" },
      use: { zh: "适合化工与食品环境", en: "For chemical and food industries" },
      image: "images/product-3.svg"
    },
    {
      name: { zh: "镀锌钢板网", en: "Galvanized Expanded Metal" },
      spec: { zh: "耐候、防锈，户外更稳定", en: "Weatherproof and rust resistant" },
      use: { zh: "适合室外结构与围栏", en: "Ideal for outdoor structures" },
      image: "images/product-4.svg"
    }
  ],
  applications: [
    {
      title: { zh: "建筑幕墙与装饰", en: "Facade & Architecture" },
      desc: { zh: "可定制颜色与孔型，兼顾通透与遮蔽", en: "Custom patterns for transparency and shading" }
    },
    {
      title: { zh: "工业平台与走道", en: "Industrial Platforms" },
      desc: { zh: "高承载、防滑，适合车间与设备通道", en: "High load and anti-slip for workshops" }
    },
    {
      title: { zh: "安防围栏与隔离", en: "Security Fencing" },
      desc: { zh: "结构稳定，耐冲击，适合厂区围护", en: "Stable, impact resistant for perimeter" }
    },
    {
      title: { zh: "筛分与过滤", en: "Screening & Filtration" },
      desc: { zh: "孔型均匀，适合筛分、通风与过滤", en: "Uniform openings for screening and airflow" }
    }
  ],
  cases: [
    {
      title: { zh: "重型平台钢板网项目", en: "Heavy Platform Mesh Project" },
      industry: { zh: "工业平台", en: "Industrial Platform" },
      spec: { zh: "6mm 厚 Q235，定制网孔与防滑压平", en: "6mm Q235 with custom opening and anti-slip flattening" },
      result: { zh: "25 吨订单 10 天交付，现场安装一次通过", en: "25-ton order delivered in 10 days with first-pass installation" },
      image: "images/case-1.svg"
    },
    {
      title: { zh: "化工车间防护围栏", en: "Chemical Plant Safety Fencing" },
      industry: { zh: "安防围护", en: "Safety Perimeter" },
      spec: { zh: "304 不锈钢钢板网，耐腐蚀处理", en: "304 stainless expanded metal with corrosion-resistant finish" },
      result: { zh: "连续运行环境下稳定使用，维护成本显著下降", en: "Stable performance in continuous operation with lower maintenance cost" },
      image: "images/case-2.svg"
    },
    {
      title: { zh: "建筑幕墙装饰网项目", en: "Architectural Facade Mesh Project" },
      industry: { zh: "建筑装饰", en: "Architectural Facade" },
      spec: { zh: "铝板网喷涂定制色，满足通风与遮阳需求", en: "Coated aluminum mesh in custom color for airflow and shading" },
      result: { zh: "外立面质感提升，兼顾透光与私密性", en: "Improved facade texture while balancing light and privacy" },
      image: "images/case-3.svg"
    }
  ],
  process: [
    {
      step: { zh: "选材与检验", en: "Material Selection" },
      detail: { zh: "钢卷入厂检验与材质确认", en: "Incoming material check and verification" }
    },
    {
      step: { zh: "冲剪拉伸", en: "Cut & Expand" },
      detail: { zh: "精准控制网孔与节距", en: "Precise control of mesh opening" }
    },
    {
      step: { zh: "平整与定型", en: "Flattening" },
      detail: { zh: "平整处理确保尺寸稳定", en: "Flattening ensures dimensional stability" }
    },
    {
      step: { zh: "表面处理", en: "Surface Treatment" },
      detail: { zh: "镀锌、喷涂、氧化等工艺", en: "Galvanizing, coating, anodizing" }
    },
    {
      step: { zh: "质检与包装", en: "Quality Check" },
      detail: { zh: "尺寸、强度、外观多维度检测", en: "Inspection for size, strength, appearance" }
    }
  ],
  quality: {
    title: { zh: "质量与交付", en: "Quality & Delivery" },
    description: {
      zh: "我们建立了从原料到成品的质量追溯体系，保证批次一致性与交付稳定性。",
      en: "We maintain full traceability from raw material to shipment for consistent quality."
    },
    items: [
      { zh: "原材料批次追溯", en: "Raw material batch traceability" },
      { zh: "关键尺寸全检", en: "Full inspection on key dimensions" },
      { zh: "表面处理耐腐测试", en: "Corrosion resistance tests" },
      { zh: "出厂前复检与包装保护", en: "Final inspection and protective packing" }
    ],
    badgeTitle: { zh: "质量认证", en: "QC / ISO / SGS" },
    badgeNote: { zh: "证书展示占位", en: "Certification samples placeholder" },
    badges: ["ISO 9001", "RoHS", "EN 10204", "ASTM A36"]
  },
  contact: {
    phone: "400-000-0000",
    email: "info@yourmesh.com",
    address: { zh: "河北省衡水市安平县工业园区（示例地址）", en: "Industrial Park, Anping, Hebei (Sample Address)" },
    hours: { zh: "工作日 8:30 - 18:00", en: "Mon-Fri 8:30 - 18:00" }
  },
  cta: {
    title: { zh: "把规格交给我们", en: "Send Us Your Specifications" },
    description: {
      zh: "提供尺寸、材质、表面处理要求，我们将快速报价并给出交付计划。",
      en: "Share size, material, and surface requirements. We will respond with pricing and lead time."
    },
    button: { zh: "立即咨询", en: "Contact Us" },
    note: { zh: "支持图纸与OEM项目", en: "Support for custom drawings and OEM projects." }
  },
  quoteForm: {
    provider: "formspree",
    endpoint: "YOUR_FORMSPREE_ENDPOINT",
    subject: { zh: "官网询价线索", en: "Website Quote Request" },
    successNote: {
      zh: "提交后我们会在 1 个工作日内联系您，请保持电话或邮箱畅通。",
      en: "We will contact you within 1 business day after submission."
    }
  },
  footer: {
    copyright: {
      zh: "© 2026 安平钢盾钢板网有限公司（示例）",
      en: "© 2026 SteelShield Expanded Metal Co., Ltd. (Sample)"
    }
  },
  seo: {
    title: { zh: "钢板网厂家 | 安平钢盾钢板网", en: "Expanded Metal Manufacturer | SteelShield" },
    description: {
      zh: "钢板网厂家，提供重型钢板网、镀锌钢板网、不锈钢钢板网等多规格定制。",
      en: "Expanded metal manufacturer offering heavy, galvanized and stainless steel mesh with custom sizes."
    },
    keywords: {
      zh: "钢板网,钢板网厂家,镀锌钢板网,不锈钢钢板网,重型钢板网",
      en: "expanded metal, steel mesh manufacturer, galvanized expanded metal, stainless expanded metal"
    }
  }
};
