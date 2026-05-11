"use client";

import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { useLocale } from "@/components/LocaleProvider";

export default function ContactPage() {
  const { t } = useLocale();

  return (
    <>
      <PageHero title={t("contactTitle")} intro={t("contactIntro")} />
      <ContactForm />
    </>
  );
}
