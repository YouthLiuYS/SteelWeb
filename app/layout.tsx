import "./globals.css";
import { siteData } from "@/content/siteData";

export const metadata = {
  title: siteData.seo.title.zh,
  description: siteData.seo.description.zh,
  keywords: siteData.seo.keywords.zh
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" data-lang="zh">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
