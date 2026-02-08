import { LocalizedString } from "@/content/siteData";

type LangTextProps = {
  value: LocalizedString;
};

export default function LangText({ value }: LangTextProps) {
  return (
    <>
      <span className="lang-zh">{value.zh}</span>
      <span className="lang-en">{value.en}</span>
    </>
  );
}
