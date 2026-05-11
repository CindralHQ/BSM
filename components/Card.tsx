"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";

type CardProps = {
  title: string;
  body: string;
  meta?: string;
  href?: string;
  icon?: LucideIcon;
};

export function Card({ title, body, meta, href, icon: Icon }: CardProps) {
  const { t } = useLocale();

  const inner = (
    <>
      {Icon ? (
        <span className="icon-pill">
          <Icon size={20} />
        </span>
      ) : null}
      {meta ? <p className="card-meta">{meta}</p> : null}
      <h3>{title}</h3>
      <p>{body}</p>
      {href ? <span className="text-link">{t("ctaRead")}</span> : null}
    </>
  );

  if (href) {
    return (
      <Link className="card card-link" href={href}>
        {inner}
      </Link>
    );
  }

  return <article className="card">{inner}</article>;
}
