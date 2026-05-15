import type { Locale } from "@/lib/i18n";

type LocalizedText = Record<Locale, string>;
export type EnquiryFormEntries = {
  name: string;
  phone: string;
  email: string;
  message: string;
  locale: string;
  submittedFrom: string;
  membership?: string;
  eventType?: string;
  eventDate?: string;
  guestCount?: string;
  sevaInterest?: string;
};

export type EnquiryFormConfig = {
  formResponseUrl: string;
  entries: EnquiryFormEntries;
};

const commonGoogleFormEntries = {
  name: "",
  phone: "",
  email: "",
  message: "",
  locale: "",
  submittedFrom: ""
} satisfies EnquiryFormEntries;

export const siteConfig = {
  organization: {
    siteName: "Bramhan Seva Mandal, Nerul",
    shortName: "BSM Nerul",
    address: {
      en: "11, Dr D Y Patil Vidyanagar, Besides SBOA Public School, Sector 5, Nerul, Navi Mumbai, Maharashtra 400706",
      mr: "११, डॉ. डी. वाय. पाटील विद्यानगर, एसबीओए पब्लिक स्कूल जवळ, सेक्टर ५, नेरुळ, नवी मुंबई, महाराष्ट्र ४००७०६"
    } satisfies LocalizedText
  },
  contact: {
    phone: "",
    email: "",
    whatsappNumber: "91-7304070829",
    whatsappMessage: "Namaskar, I would like to enquire about Bramhan Seva Mandal, Nerul.",
    directionsUrl: "https://maps.app.goo.gl/6roBY37x9ruzi4238",
    mapEmbedUrl:
      ""
  },
  social: {
    facebookUrl: "",
    instagramUrl: "",
    youtubeUrl: ""
  },
  googleForms: {
    inquiry: {
      formResponseUrl: "",
      entries: commonGoogleFormEntries
    },
    membership: {
      formResponseUrl: "",
      entries: {
        ...commonGoogleFormEntries,
        membership: ""
      }
    },
    hall: {
      formResponseUrl: "",
      entries: {
        ...commonGoogleFormEntries,
        eventType: "",
        eventDate: "",
        guestCount: ""
      }
    },
    seva: {
      formResponseUrl: "",
      entries: {
        ...commonGoogleFormEntries,
        sevaInterest: ""
      }
    }
  } satisfies Record<string, EnquiryFormConfig>
} as const;

export function getWhatsappUrl() {
  const phone = siteConfig.contact.whatsappNumber.replace(/[^\d]/g, "");
  const text = encodeURIComponent(siteConfig.contact.whatsappMessage);

  return phone ? `https://wa.me/${phone}?text=${text}` : "https://wa.me/";
}
