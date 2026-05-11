"use client";

import { BookOpen } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { useLocale } from "@/components/LocaleProvider";

export default function MagazinePage() {
  const { content, t } = useLocale();

  return (
    <>
      <PageHero title={t("magazineTitle")} intro={t("magazineIntro")} />
      <section className="grid three">
        {content.magazines.map((issue) => (
          <article className="publication-card reveal" key={issue.title}>
            <BookOpen size={24} />
            <p className="card-meta">{issue.period}</p>
            <h2>{issue.title}</h2>
            <p>{issue.summary}</p>
            <span className="badge">{issue.status}</span>
          </article>
        ))}
      </section>
    </>
  );
}
