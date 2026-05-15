import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { LocaleProvider } from "@/components/LocaleProvider";
import { FloatingActions } from "@/components/FloatingActions";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.organization.siteName,
  description: "Demo website for Bramhan Seva Mandal, Nerul"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LocaleProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <FloatingActions />
        </LocaleProvider>
      </body>
    </html>
  );
}
