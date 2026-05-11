"use client";

import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { aboutLinks, navItems, resourceLinks } from "@/lib/content";
import { useLocale } from "@/components/LocaleProvider";
import { dictionary } from "@/lib/i18n";

type LabelKey = keyof typeof dictionary.en;

export function SiteHeader() {
  const { t } = useLocale();

  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand-mark">BSM</span>
        <span>{t("shortName")}</span>
      </Link>
      <input className="nav-toggle" id="nav-toggle" type="checkbox" />
      <label className="nav-toggle-label" htmlFor="nav-toggle" aria-label="Open navigation">
        <Menu size={22} />
      </label>
      <nav className="nav-links" aria-label="Primary navigation">
        <Link href="/">{t("navHome")}</Link>
        <div className="nav-group">
          <span>
            {t("navAbout")} <ChevronDown size={14} />
          </span>
          <div className="nav-menu">
            {aboutLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {t(item.labelKey as LabelKey)}
              </Link>
            ))}
          </div>
        </div>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {t(item.labelKey as LabelKey)}
          </Link>
        ))}
        <div className="nav-group">
          <span>
            {t("navResources")} <ChevronDown size={14} />
          </span>
          <div className="nav-menu">
            {resourceLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {t(item.labelKey as LabelKey)}
              </Link>
            ))}
          </div>
        </div>
        <Link href="/contact">{t("navContact")}</Link>
      </nav>
      <label className="nav-backdrop" htmlFor="nav-toggle" aria-label="Close navigation" />
    </header>
  );
}
