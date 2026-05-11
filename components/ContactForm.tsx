"use client";

import { FormEvent, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";

const tabs = [
  { id: "inquiry", labelKey: "tabInquiry" },
  { id: "membership", labelKey: "tabMembership" },
  { id: "hall", labelKey: "tabHall" },
  { id: "seva", labelKey: "tabSeva" }
] as const;

type TabId = (typeof tabs)[number]["id"];

export function ContactForm() {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<TabId>("inquiry");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
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
              setSubmitted(false);
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
          <span>{t("fieldContact")}</span>
          <input name="contact" required />
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

        <button className="button" type="submit">
          {t("ctaSubmit")}
        </button>

        {submitted ? (
          <div className="success-box" role="status">
            <h2>{t("successTitle")}</h2>
            <p>{t("successBody")}</p>
          </div>
        ) : null}
      </form>
    </section>
  );
}
