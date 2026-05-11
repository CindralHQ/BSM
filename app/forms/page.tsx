"use client";

import { FileText } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { useLocale } from "@/components/LocaleProvider";

export default function FormsPage() {
  const { content, t } = useLocale();

  return (
    <>
      <PageHero title={t("formsTitle")} intro={t("formsIntro")} />
      <section className="grid two">
        {content.forms.map((form) => (
          <article className="form-card reveal" key={form.title}>
            <FileText size={24} />
            <h2>{form.title}</h2>
            <p>{form.purpose}</p>
            <dl>
              <div>
                <dt>{t("formsLanguage")}</dt>
                <dd>{form.language}</dd>
              </div>
              <div>
                <dt>{t("formsUpdated")}</dt>
                <dd>{form.updated}</dd>
              </div>
            </dl>
            <div className="button-row">
              <button className="button button-disabled" type="button" disabled>
                {t("ctaView")}
              </button>
              <button className="button button-ghost button-disabled" type="button" disabled>
                {t("ctaDownload")}
              </button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
