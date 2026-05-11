"use client";

import { PageHero } from "@/components/PageHero";
import { useLocale } from "@/components/LocaleProvider";

export default function HistoryPage() {
  const { t } = useLocale();

  return (
    <>
      <PageHero title={t("aboutHistoryTitle")} intro={t("aboutHistoryIntro")} eyebrow={t("navAbout")} />
      <section className="content-panel history-panel reveal">
        {t("aboutHistoryBody")
          .split("\n\n")
          .map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
      </section>
    </>
  );
}
