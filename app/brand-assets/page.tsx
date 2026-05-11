"use client";

import { FileText } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { useLocale } from "@/components/LocaleProvider";

export default function BrandAssetsPage() {
  const { t } = useLocale();

  return (
    <>
      <PageHero title={t("brandAssetsTitle")} intro={t("brandAssetsIntro")} />
      <section className="grid three">
        {["brandLogoPackage", "brandColorPalette", "brandLetterhead"].map((item) => (
          <article className="form-card reveal" key={item}>
            <FileText size={24} />
            <h2>{t(item as "brandLogoPackage" | "brandColorPalette" | "brandLetterhead")}</h2>
            <p>{t("productionTodo")}</p>
            <span className="badge">{t("placeholderBadge")}</span>
          </article>
        ))}
      </section>
    </>
  );
}
