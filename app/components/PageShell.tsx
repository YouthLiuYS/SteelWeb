import { ReactNode } from "react";
import CardGlow from "./CardGlow";
import ScrollProgress from "./ScrollProgress";
import TopBar from "./sections/TopBar";
import SiteHeader from "./SiteHeader";

type PageShellProps = {
  children: ReactNode;
  isHome?: boolean;
};

export default function PageShell({ children, isHome = false }: PageShellProps) {
  return (
    <div className="page">
      <ScrollProgress />
      <CardGlow />
      <TopBar />
      <SiteHeader isHome={isHome} />
      <main>{children}</main>
    </div>
  );
}
