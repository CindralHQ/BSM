"use client";

import { FormEvent, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { siteConfig, type EnquiryFormConfig } from "@/lib/siteConfig";

const tabs = [
  { id: "inquiry", labelKey: "tabInquiry" },
  { id: "membership", labelKey: "tabMembership" },
  { id: "hall", labelKey: "tabHall" },
  { id: "seva", labelKey: "tabSeva" }
] as const;

type TabId = (typeof tabs)[number]["id"];

export function ContactForm() {
  const { locale, t } = useLocale();
  const [activeTab, setActiveTab] = useState<TabId>("inquiry");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const googleFormData = new URLSearchParams();
    const { entries, formResponseUrl }: EnquiryFormConfig = siteConfig.googleForms[activeTab];

    const addEntry = (entryId: string, value: FormDataEntryValue | string | null) => {
      if (entryId && value) {
        googleFormData.append(entryId, value.toString());
      }
    };

    addEntry(entries.name, formData.get("name"));
    addEntry(entries.phone, formData.get("phone"));
    addEntry(entries.email, formData.get("email"));
    addEntry(entries.membership ?? "", formData.get("membership"));
    addEntry(entries.eventType ?? "", formData.get("eventType"));
    addEntry(entries.eventDate ?? "", formData.get("eventDate"));
    addEntry(entries.guestCount ?? "", formData.get("guestCount"));
    addEntry(entries.sevaInterest ?? "", formData.get("sevaInterest"));
    addEntry(entries.message, formData.get("message"));
    addEntry(entries.locale, locale);
    addEntry(entries.submittedFrom, window.location.href);

    if (!formResponseUrl || Array.from(googleFormData.keys()).length === 0) {
      setStatus("error");
      return;
    }

    try {
      await fetch(formResponseUrl, {
        body: googleFormData,
        method: "POST",
        mode: "no-cors"
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact-shell">
      <div className="tab-list" role="tablist" aria-label="Contact form tabs">
        {tabs.map((tab) => (
          <button
            aria-selected={activeTab === tab.id}
            className={activeTab === tab.id ? "tab active" : "tab"}
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              setStatus("idle");
            }}
            role="tab"
            type="button"
          >
            {t(tab.labelKey)}
          </button>
        ))}
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          <span>{t("fieldName")}</span>
          <input name="name" required />
        </label>
        <label>
          <span>{t("fieldPhone")}</span>
          <input name="phone" required type="tel" />
        </label>
        <label>
          <span>{t("fieldEmail")}</span>
          <input name="email" required type="email" />
        </label>

        {activeTab === "membership" ? (
          <label>
            <span>{t("fieldMemberType")}</span>
            <input name="membership" />
          </label>
        ) : null}

        {activeTab === "hall" ? (
          <div className="form-grid">
            <label>
              <span>{t("fieldEventType")}</span>
              <input name="eventType" />
            </label>
            <label>
              <span>{t("fieldEventDate")}</span>
              <input name="eventDate" type="date" />
            </label>
            <label>
              <span>{t("fieldGuestCount")}</span>
              <input min="1" name="guestCount" type="number" />
            </label>
          </div>
        ) : null}

        {activeTab === "seva" ? (
          <label>
            <span>{t("fieldSevaInterest")}</span>
            <input name="sevaInterest" />
          </label>
        ) : null}

        <label>
          <span>{t("fieldMessage")}</span>
          <textarea name="message" required rows={5} />
        </label>

        <button className="button" disabled={status === "submitting"} type="submit">
          {status === "submitting" ? t("ctaSubmitting") : t("ctaSubmit")}
        </button>

        {status === "success" ? (
          <div className="success-box" role="status">
            <h2>{t("successTitle")}</h2>
            <p>{t("successBody")}</p>
          </div>
        ) : null}

        {status === "error" ? (
          <div className="error-box" role="alert">
            <h2>{t("errorTitle")}</h2>
            <p>{t("errorBody")}</p>
          </div>
        ) : null}
      </form>
    </section>
  );
}
