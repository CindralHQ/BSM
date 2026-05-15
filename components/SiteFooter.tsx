"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { footerItems } from "@/lib/content";
import { useLocale } from "@/components/LocaleProvider";
import { dictionary } from "@/lib/i18n";
import { siteConfig } from "@/lib/siteConfig";

type LabelKey = keyof typeof dictionary.en;

export function SiteFooter() {
  const { locale, t } = useLocale();

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>{t("siteName")}</h2>
          <p>{t("footerLine")}</p>
          <p className="small-text">{t("footerReplace")}</p>
        </div>
        <div className="footer-address">
          <h3>{t("footerAddressTitle")}</h3>
          <p>{siteConfig.organization.address[locale]}</p>
          {siteConfig.contact.phone ? <p>{siteConfig.contact.phone}</p> : null}
          {siteConfig.contact.email ? (
            <p>
              <Link href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</Link>
            </p>
          ) : null}
          <Link className="footer-direction" href={siteConfig.contact.directionsUrl}>
            {t("ctaDirections")}
          </Link>
          <div className="footer-map">
            <iframe
              aria-label={t("footerMapTitle")}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={siteConfig.contact.mapEmbedUrl}
              title={t("footerMapTitle")}
            />
          </div>
        </div>
        <div className="footer-link-group">
          <h3>{t("footerLinksTitle")}</h3>
          <nav aria-label="Footer navigation">
            {footerItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {t(item.labelKey as LabelKey)}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="footer-meta">
        <div className="social-links" aria-label={t("footerSocialTitle")}>
          <Link href={siteConfig.social.facebookUrl || "#"} aria-label={t("footerFacebook")}>
            <Facebook size={19} />
          </Link>
          <Link href={siteConfig.social.instagramUrl || "#"} aria-label={t("footerInstagram")}>
            <Instagram size={19} />
          </Link>
          <Link href={siteConfig.social.youtubeUrl || "#"} aria-label={t("footerYoutube")}>
            <Youtube size={19} />
          </Link>
        </div>
        <p className="developer-credit">
          {t("footerDeveloperPrefix")}{" "}
          <Link href="https://cindral.org">{t("footerDeveloperName")}</Link>
        </p>
      </div>
    </footer>
  );
}
