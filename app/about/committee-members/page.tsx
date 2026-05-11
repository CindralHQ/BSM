"use client";

import { PageHero } from "@/components/PageHero";
import { ProfileGrid } from "@/components/ProfileGrid";
import { useLocale } from "@/components/LocaleProvider";

export default function CommitteeMembersPage() {
  const { content, t } = useLocale();

  return (
    <>
      <PageHero title={t("committeeTitle")} intro={t("committeeIntro")} eyebrow={t("navAbout")} />
      <ProfileGrid profiles={content.committeeMembers} />
    </>
  );
}
