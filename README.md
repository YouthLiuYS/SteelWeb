# 钢板网厂家官网（Next.js 静态站）

## 快速开始
1. 安装依赖：
   `npm install`
2. 编辑公司信息：
   `content/company-data.js`
3. 生成网站内容：
   `npm run content:apply`
4. 本地开发：
   `npm run dev`

## 构建与部署
1. 生成静态站点：
   `npm run build`
2. 产物在 `out/` 目录，可直接部署到 GitHub Pages。

## 内容替换
只需要修改 `content/company-data.js` 中的中文/英文文本、联系方式、产品信息，
然后执行 `npm run content:apply` 即可更新网站内容。
