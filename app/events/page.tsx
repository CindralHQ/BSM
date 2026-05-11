"use client";

import { X } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { useLocale } from "@/components/LocaleProvider";
import { resolveIcon } from "@/lib/content";

type CalendarEvent = {
  day: number;
  eventIndex: number;
  time: string;
  venue: string;
};

const calendarMonths = [
  {
    key: "may-2026",
    date: new Date(2026, 4, 1),
    events: [
      { day: 6, eventIndex: 1, time: "6:30 PM", venue: "Community hall" },
      { day: 18, eventIndex: 2, time: "10:00 AM", venue: "Seva desk" }
    ]
  },
  {
    key: "june-2026",
    date: new Date(2026, 5, 1),
    events: [
      { day: 9, eventIndex: 0, time: "7:00 PM", venue: "Main hall" },
      { day: 22, eventIndex: 3, time: "5:00 PM", venue: "Hall office" }
    ]
  },
  {
    key: "july-2026",
    date: new Date(2026, 6, 1),
    events: [
      { day: 4, eventIndex: 0, time: "7:00 PM", venue: "Main hall" },
      { day: 11, eventIndex: 1, time: "6:30 PM", venue: "Lecture room" },
      { day: 18, eventIndex: 2, time: "9:30 AM", venue: "Seva desk" },
      { day: 25, eventIndex: 3, time: "5:00 PM", venue: "Hall office" }
    ]
  }
] satisfies { key: string; date: Date; events: CalendarEvent[] }[];

export default function EventsPage() {
  const { content, locale, t } = useLocale();
  const weekdays = [
    t("daySun"),
    t("dayMon"),
    t("dayTue"),
    t("dayWed"),
    t("dayThu"),
    t("dayFri"),
    t("daySat")
  ];

  const monthFormatter = new Intl.DateTimeFormat(locale === "mr" ? "mr-IN" : "en-IN", {
    month: "long",
    year: "numeric"
  });

  return (
    <>
      <PageHero title={t("navEvents")} intro={t("homeEventsIntro")} />
      <section className="calendar-section">
        <div className="calendar-header">
          <div>
            <p className="eyebrow">{t("navEvents")}</p>
            <h2>{t("calendarTitle")}</h2>
          </div>
          <span className="badge">{t("placeholderBadge")}</span>
        </div>

        <div className="calendar-tabs">
          {calendarMonths.map((month, index) => (
            <input
              defaultChecked={index === 0}
              id={`month-${month.key}`}
              key={month.key}
              name="event-month"
              type="radio"
            />
          ))}
          <div className="calendar-tab-list">
            {calendarMonths.map((month) => (
              <label htmlFor={`month-${month.key}`} key={month.key}>
                {monthFormatter.format(month.date)}
              </label>
            ))}
          </div>

          {calendarMonths.map((month) => {
            const daysInMonth = new Date(month.date.getFullYear(), month.date.getMonth() + 1, 0).getDate();
            const firstDay = month.date.getDay();

            return (
              <div className="month-panel" key={month.key}>
                <div className="calendar-grid" aria-label={t("calendarLabel")}>
                  {weekdays.map((day) => (
                    <strong key={day}>{day}</strong>
                  ))}
                  {Array.from({ length: firstDay }, (_, index) => (
                    <span className="calendar-empty" key={`empty-${month.key}-${index}`} />
                  ))}
                  {Array.from({ length: daysInMonth }, (_, index) => {
                    const day = index + 1;
                    const events = month.events.filter((event) => event.day === day);
                    return (
                      <div className={events.length ? "calendar-day has-event" : "calendar-day"} key={day}>
                        <span>{day}</span>
                        {events.map((event) => {
                          const eventContent = content.events[event.eventIndex];
                          const modalId = `${month.key}-${event.day}-${event.eventIndex}`;
                          return (
                            <div className="calendar-event" key={modalId}>
                              <input id={modalId} type="checkbox" />
                              <label htmlFor={modalId}>{eventContent.title}</label>
                              <div className="modal-backdrop">
                                <article className="event-modal" role="dialog" aria-modal="true" aria-labelledby={`${modalId}-title`}>
                                  <label className="modal-close" htmlFor={modalId} aria-label={t("calendarClose")}>
                                    <X size={18} />
                                  </label>
                                  <p className="eyebrow">{monthFormatter.format(month.date)}</p>
                                  <h2 id={`${modalId}-title`}>{eventContent.title}</h2>
                                  <p>{eventContent.meta}</p>
                                  <dl>
                                    <div>
                                      <dt>{t("calendarTimeLabel")}</dt>
                                      <dd>{event.time}</dd>
                                    </div>
                                    <div>
                                      <dt>{t("calendarVenueLabel")}</dt>
                                      <dd>{event.venue}</dd>
                                    </div>
                                  </dl>
                                </article>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="grid two">
        {content.events.map((event) => {
          const Icon = resolveIcon(event.icon);
          return (
            <article className="publication-card reveal" key={event.title}>
              <Icon size={24} />
              <h2>{event.title}</h2>
              <p>{event.meta}</p>
              <span className="badge">{t("placeholderBadge")}</span>
            </article>
          );
        })}
      </section>
    </>
  );
}
