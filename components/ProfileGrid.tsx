"use client";

import { useLocale } from "@/components/LocaleProvider";

type Profile = {
  name: string;
  role: string;
  note: string;
};

export function ProfileGrid({ profiles }: { profiles: readonly Profile[] }) {
  const { t } = useLocale();

  return (
    <section className="grid profile-grid">
      {profiles.map((profile, index) => (
        <article className="profile-card reveal" key={`${profile.role}-${index}`}>
          <div className="avatar">{profile.name.slice(0, 1)}</div>
          <p className="badge">{t("placeholderBadge")}</p>
          <h2>{profile.name}</h2>
          <p className="role">{profile.role}</p>
          <p>{profile.note}</p>
        </article>
      ))}
    </section>
  );
}
