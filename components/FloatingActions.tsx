"use client";

import { Languages, MessageCircle } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";
import { getWhatsappUrl } from "@/lib/siteConfig";

export function FloatingActions() {
  const { locale, setLocale, t } = useLocale();
  const nextLocale = locale === "en" ? "mr" : "en";

  return (
    <div className="floating-actions" aria-label="Quick actions">
      <button
        className="fab"
        onClick={() => setLocale(nextLocale)}
        type="button"
        aria-label={t("languageLabel")}
        title={locale === "en" ? t("languageMarathi") : t("languageEnglish")}
      >
        <Languages size={21} />
        <span>{locale === "en" ? "मर" : "EN"}</span>
      </button>
      <a className="fab whatsapp-fab" href={getWhatsappUrl()} aria-label="WhatsApp" title="WhatsApp">
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
