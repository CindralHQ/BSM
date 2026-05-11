"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { footerItems } from "@/lib/content";
import { useLocale } from "@/components/LocaleProvider";
import { dictionary } from "@/lib/i18n";

type LabelKey = keyof typeof dictionary.en;

export function SiteFooter() {
  const { t } = useLocale();
  const mapSrc =
    "https://www.google.com/maps?q=11%2C%20Dr%20D%20Y%20Patil%20Vidyanagar%2C%20Besides%20SBOA%20Public%20School%2C%20Sector%205%2C%20Nerul%2C%20Navi%20Mumbai%2C%20Maharashtra%20400706&output=embed";

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
          <p>{t("footerAddress")}</p>
          <Link className="footer-direction" href="https://maps.app.goo.gl/6roBY37x9ruzi4238">
            {t("ctaDirections")}
          </Link>
          <div className="footer-map">
            <iframe
              aria-label={t("footerMapTitle")}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={mapSrc}
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
          <Link href="#" aria-label={t("footerFacebook")}>
            <Facebook size={19} />
          </Link>
          <Link href="#" aria-label={t("footerInstagram")}>
            <Instagram size={19} />
          </Link>
          <Link href="#" aria-label={t("footerYoutube")}>
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
