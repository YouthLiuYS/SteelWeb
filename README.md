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
### GitHub Pages
1. 生成静态站点：
   `npm run build`
2. 产物在 `out/` 目录，可直接部署到 GitHub Pages。
3. 网站访问地址：
   `https://youthliuys.github.io/SteelWeb/`

### Gitee Pages（推荐给中国大陆访问）
1. 在 Gitee 创建仓库（建议仓库名与路径一致，例如 `SteelWeb`）。
2. 执行一键发布：
   `GITEE_REMOTE_URL=https://gitee.com/<用户名>/<仓库名>.git GITEE_BRANCH=gitee-pages SITE_BASE_PATH=/SteelWeb npm run deploy:gitee`
3. 打开 Gitee 仓库的 Pages 设置，选择发布分支为 `gitee-pages`。
4. 如果你使用自定义域名并希望部署在根路径，可将 `SITE_BASE_PATH` 设为空：
   `SITE_BASE_PATH=`

### basePath 说明
1. 本项目支持通过环境变量 `SITE_BASE_PATH` 控制静态资源路径。
2. 项目页部署时，`SITE_BASE_PATH` 需等于访问路径前缀（例如 `/SteelWeb`）。
3. 根路径部署时，`SITE_BASE_PATH` 设为空字符串。

## 内容替换
只需要修改 `content/company-data.js` 中的中文/英文文本、联系方式、产品信息，
然后执行 `npm run content:apply` 即可更新网站内容。
