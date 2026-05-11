"use client";

import { ScrollText } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { useLocale } from "@/components/LocaleProvider";

export default function ReportsPage() {
  const { content, t } = useLocale();

  return (
    <>
      <PageHero title={t("reportsTitle")} intro={t("reportsIntro")} />
      <section className="grid three">
        {content.reports.map((report) => (
          <article className="publication-card reveal" key={report.title}>
            <ScrollText size={24} />
            <p className="card-meta">{report.year}</p>
            <h2>{report.title}</h2>
            <p>{report.summary}</p>
            <span className="badge">{report.status}</span>
          </article>
        ))}
      </section>
    </>
  );
}
