import LangText from "../LangText";
import LanguageToggle from "../LanguageToggle";
import { siteData } from "@/content/siteData";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-left">
          <span className="top-pill">
            <LangText value={siteData.topBar.companyShort} />
          </span>
          <a className="top-email" href={`mailto:${siteData.topBar.email}`}>
            {siteData.topBar.email}
          </a>
        </div>
        <LanguageToggle />
      </div>
    </div>
  );
}
