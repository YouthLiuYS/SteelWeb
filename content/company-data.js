// 公司内容配置：只需修改这里，然后运行 `npm run content:apply` 生成站点数据
// 约定：所有可展示文字都包含 zh/en 两种语言
module.exports = {
  brand: {
    name: { zh: "安平钢盾钢板网", en: "SteelShield Expanded Metal" },
    tagline: { zh: "钢板网制造与定制解决方案", en: "Expanded Metal Manufacturing & Custom Solutions" },
    location: { zh: "中国 河北 安平", en: "Anping, Hebei, China" }
  },
  nav: [
    { id: "about", label: { zh: "公司", en: "Company" } },
    { id: "products", label: { zh: "产品", en: "Products" } },
    { id: "applications", label: { zh: "应用", en: "Applications" } },
    { id: "process", label: { zh: "工艺", en: "Process" } },
    { id: "quality", label: { zh: "质量", en: "Quality" } },
    { id: "contact", label: { zh: "联系", en: "Contact" } }
  ],
  sections: {
    productsTitle: { zh: "产品矩阵", en: "Expanded Metal Portfolio" },
    applicationsTitle: { zh: "应用场景", en: "Where It Works" },
    processTitle: { zh: "生产工艺", en: "Process Control" },
    contactTitle: { zh: "联系与询价", en: "Contact & Quote" }
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
  about: {
    title: { zh: "关于我们", en: "About Us" },
    headline: { zh: "扎根安平的钢板网厂家", en: "Anping-based expanded metal manufacturer" },
    description: {
      zh: "我们专注钢板网生产与深加工，为建筑、工业、安防、筛分等领域提供可靠的网材方案。工厂配置多条冲剪拉伸生产线，支持批量订单与定制。",
      en: "We focus on expanded metal production and fabrication for construction, industrial platforms, security, and screening. Multiple lines support both volume orders and custom work."
    },
    bullets: [
      { zh: "从原材料到成品全流程把控", en: "End-to-end control from raw material to delivery" },
      { zh: "支持镀锌、喷涂、氧化等表面处理", en: "Surface treatments: galvanizing, coating, anodizing" },
      { zh: "小批量打样与大批量交付兼顾", en: "Both sampling and large-scale delivery" }
    ]
  },
  stats: [
    { value: "35+", label: { zh: "常规规格", en: "Standard Sizes" } },
    { value: "300+", label: { zh: "合作客户", en: "Customers Served" } },
    { value: "96%", label: { zh: "准时交付", en: "On-time Delivery" } }
  ],
  products: [
    {
      name: { zh: "重型钢板网", en: "Heavy Expanded Metal" },
      spec: { zh: "用于平台、走道、设备防护", en: "For platforms, walkways, safety guards" },
      use: { zh: "承载力高，适合工业环境", en: "High load capacity for industrial use" }
    },
    {
      name: { zh: "标准菱形钢板网", en: "Standard Diamond Mesh" },
      spec: { zh: "适用于围栏、隔断、装饰", en: "For fencing, partitions, decoration" },
      use: { zh: "性价比高，规格齐全", en: "Cost-effective with complete sizes" }
    },
    {
      name: { zh: "不锈钢钢板网", en: "Stainless Expanded Metal" },
      spec: { zh: "耐腐蚀、耐高温", en: "Corrosion and heat resistant" },
      use: { zh: "适合化工与食品环境", en: "For chemical and food industries" }
    },
    {
      name: { zh: "镀锌钢板网", en: "Galvanized Expanded Metal" },
      spec: { zh: "耐候、防锈，户外更稳定", en: "Weatherproof and rust resistant" },
      use: { zh: "适合室外结构与围栏", en: "Ideal for outdoor structures" }
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
