"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bell, CalendarDays, HeartHandshake, UserPlus } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";
import { resolveIcon } from "@/lib/content";

export default function HomePage() {
  const { content, t } = useLocale();

  return (
    <>
      <section className="hero home-hero">
        <div className="hero-copy reveal">
          <h1>{t("heroTitle")}</h1>
          <p>{t("heroBody")}</p>
          <div className="button-row">
            <Link className="button" href="#about-bsm">
              {t("heroPrimary")} <ArrowRight size={18} />
            </Link>
            <Link className="button button-ghost" href="/contact">
              {t("heroSecondary")}
            </Link>
          </div>
        </div>
        <div className="hero-image reveal">
          <Image src="/hero-building.jpg" alt="" fill priority sizes="(max-width: 960px) 100vw, 42vw" />
        </div>
      </section>

      <section className="split-section home-about" id="about-bsm">
        <div>
          <p className="eyebrow">{t("siteName")}</p>
          <h2>{t("homeAboutTitle")}</h2>
          <div className="home-stat-row" aria-label="Institution highlights">
            <span>1961</span>
            <span>Seva</span>
            <span>Nerul</span>
          </div>
        </div>
        <div className="about-copy">
          <p>{t("homeAboutBodyOne")}</p>
          <p>{t("homeAboutBodyTwo")}</p>
          <p>{t("homeAboutBodyThree")}</p>
        </div>
      </section>

      <section className="announcements-section">
        <div className="section-heading">
          <p className="eyebrow">{t("announcementsTitle")}</p>
          <h2>{t("announcementsTitle")}</h2>
          <p>{t("announcementsIntro")}</p>
        </div>
        <div className="announcements-grid">
          {[
            [t("announcementOneTitle"), t("announcementOneBody")],
            [t("announcementTwoTitle"), t("announcementTwoBody")],
            [t("announcementThreeTitle"), t("announcementThreeBody")]
          ].map(([title, body], index) => (
            <article className="announcement-card reveal" key={title}>
              <span className="announcement-icon">{index === 2 ? <CalendarDays size={18} /> : <Bell size={18} />}</span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section activities-section">
        <div className="section-heading">
          <p className="eyebrow">{t("homeActivitiesTitle")}</p>
          <h2>{t("homeActivitiesTitle")}</h2>
          <p>{t("homeActivitiesIntro")}</p>
        </div>
        <div className="grid four">
          {content.activities.map((activity) => {
            const Icon = resolveIcon(activity.icon);
            return (
              <article className="card activity-card reveal" key={activity.title}>
                <span className="icon-pill">
                  <Icon size={20} />
                </span>
                <h3>{activity.title}</h3>
                <p>{activity.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section soft-band home-events-preview">
        <div className="section-heading">
          <p className="eyebrow">{t("homeEventsTitle")}</p>
          <h2>{t("homeEventsTitle")}</h2>
          <p>{t("homeEventsIntro")}</p>
        </div>
        <div className="event-row">
          {content.events.map((event) => {
            const Icon = resolveIcon(event.icon);
            return (
              <article className="event-item" key={event.title}>
                <Icon size={18} />
                <div>
                  <h3>{event.title}</h3>
                  <p>{event.meta}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section action-section">
        <article className="action-panel reveal">
          <UserPlus size={28} />
          <div>
            <p className="eyebrow">{t("homeMembershipTitle")}</p>
            <h2>{t("homeMembershipTitle")}</h2>
            <p>{t("homeMembershipBody")}</p>
            <Link className="button button-ghost" href="/contact">
              {t("homeMembershipCta")}
            </Link>
          </div>
        </article>
        <article className="action-panel reveal">
          <HeartHandshake size={28} />
          <div>
            <p className="eyebrow">{t("homeVolunteerTitle")}</p>
            <h2>{t("homeVolunteerTitle")}</h2>
            <p>{t("homeVolunteerBody")}</p>
            <Link className="button button-ghost" href="/contact">
              {t("homeVolunteerCta")}
            </Link>
          </div>
        </article>
      </section>

      <section className="location-section contact-strip">
        <div>
          <p className="eyebrow">{t("homeContactTitle")}</p>
          <h2>{t("homeContactTitle")}</h2>
          <p>{t("homeContactBody")}</p>
        </div>
        <Link className="button" href="/contact">
          {t("ctaContact")}
        </Link>
      </section>
    </>
  );
}
