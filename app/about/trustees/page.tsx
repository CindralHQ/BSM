"use client";

import { PageHero } from "@/components/PageHero";
import { ProfileGrid } from "@/components/ProfileGrid";
import { useLocale } from "@/components/LocaleProvider";

export default function TrusteesPage() {
  const { content, t } = useLocale();

  return (
    <>
      <PageHero title={t("trusteesTitle")} intro={t("trusteesIntro")} eyebrow={t("navAbout")} />
      <ProfileGrid profiles={content.trustees} />
    </>
  );
}
