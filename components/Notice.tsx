"use client";

import { useLocale } from "@/components/LocaleProvider";

export function Notice() {
  const { t } = useLocale();
  return (
    <aside className="notice">
      <strong>{t("statusDemo")}:</strong> {t("demoNotice")}
    </aside>
  );
}
