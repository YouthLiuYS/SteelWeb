import "./globals.css";
import { Teko, Noto_Sans_SC } from "next/font/google";
import { siteData } from "@/content/siteData";

const teko = Teko({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const noto = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: siteData.seo.title.zh,
  description: siteData.seo.description.zh,
  keywords: siteData.seo.keywords.zh
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" data-lang="zh">
      <body className={`${teko.variable} ${noto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
