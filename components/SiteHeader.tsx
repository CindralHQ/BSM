"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { aboutLinks, navItems, resourceLinks } from "@/lib/content";
import { useLocale } from "@/components/LocaleProvider";
import { dictionary } from "@/lib/i18n";

type LabelKey = keyof typeof dictionary.en;

export function SiteHeader() {
  const { t } = useLocale();
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isNavOpen);

    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [isNavOpen]);

  const closeNav = () => setIsNavOpen(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" onClick={closeNav}>
        <span className="brand-mark">BSM</span>
        <span>{t("shortName")}</span>
      </Link>
      <button
        aria-controls="primary-navigation"
        aria-expanded={isNavOpen}
        aria-label={isNavOpen ? "Close navigation" : "Open navigation"}
        className="nav-toggle-label"
        onClick={() => setIsNavOpen((open) => !open)}
        type="button"
      >
        {isNavOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav
        className={isNavOpen ? "nav-links open" : "nav-links"}
        id="primary-navigation"
        aria-label="Primary navigation"
      >
        <Link href="/" onClick={closeNav}>
          {t("navHome")}
        </Link>
        <div className="nav-group">
          <span>
            {t("navAbout")} <ChevronDown size={14} />
          </span>
          <div className="nav-menu">
            {aboutLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeNav}>
                {t(item.labelKey as LabelKey)}
              </Link>
            ))}
          </div>
        </div>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={closeNav}>
            {t(item.labelKey as LabelKey)}
          </Link>
        ))}
        <div className="nav-group">
          <span>
            {t("navResources")} <ChevronDown size={14} />
          </span>
          <div className="nav-menu">
            {resourceLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeNav}>
                {t(item.labelKey as LabelKey)}
              </Link>
            ))}
          </div>
        </div>
        <Link href="/contact" onClick={closeNav}>
          {t("navContact")}
        </Link>
      </nav>
      <button
        aria-label="Close navigation"
        className={isNavOpen ? "nav-backdrop open" : "nav-backdrop"}
        onClick={closeNav}
        type="button"
      />
    </header>
  );
}
