import {
  BookOpen,
  CalendarDays,
  FileText,
  HandHeart,
  Home,
  Image as ImageIcon,
  Landmark,
  ScrollText,
  Users
} from "lucide-react";
import { defaultLocale, type Locale } from "./i18n";

export const navItems = [
  { labelKey: "navEvents", href: "/events" },
  { labelKey: "navGallery", href: "/gallery" },
] as const;

export const footerItems = [
  { labelKey: "navHome", href: "/" },
  { labelKey: "navEvents", href: "/events" },
  { labelKey: "navMagazine", href: "/magazine" },
  { labelKey: "navGallery", href: "/gallery" },
  { labelKey: "navContact", href: "/contact" }
] as const;

export const aboutLinks = [
  { labelKey: "navHistory", href: "/about/history" },
  { labelKey: "navCommittee", href: "/about/committee-members" },
  { labelKey: "navTrustees", href: "/about/trustees" }
] as const;

export const resourceLinks = [
  { labelKey: "navMagazine", href: "/magazine" },
  { labelKey: "navReports", href: "/reports" },
  { labelKey: "navForms", href: "/forms" },
  { labelKey: "navBrandAssets", href: "/brand-assets" }
] as const;

const iconMap = {
  book: BookOpen,
  calendar: CalendarDays,
  file: FileText,
  hand: HandHeart,
  home: Home,
  image: ImageIcon,
  landmark: Landmark,
  scroll: ScrollText,
  users: Users
} as const;

type IconName = keyof typeof iconMap;

type LocalizedContent = {
  pillars: readonly { title: string; body: string; icon: IconName }[];
  homePreviews: readonly { title: string; body: string; href: string; icon: IconName }[];
  committeeMembers: readonly { name: string; role: string; note: string }[];
  trustees: readonly { name: string; role: string; note: string }[];
  magazines: readonly { title: string; period: string; summary: string; status: string }[];
  reports: readonly { title: string; year: string; summary: string; status: string }[];
  forms: readonly { title: string; purpose: string; language: string; updated: string }[];
  gallery: readonly { title: string; category: string; icon: IconName }[];
  events: readonly { title: string; meta: string; icon: IconName }[];
  activities: readonly { title: string; body: string; icon: IconName }[];
};

const en: LocalizedContent = {
  pillars: [
    {
      title: "Community institution",
      body: "Cultural programs, member participation, learning initiatives, and shared celebrations for the Nerul community.",
      icon: "users"
    },
    {
      title: "Event and community hall",
      body: "A demo booking path for family, social, and community functions, with capacity and amenities to be confirmed.",
      icon: "landmark"
    },
    {
      title: "Anand Ashram association",
      body: "A carefully worded space for elder-care associated seva, visits, support, and verified initiative updates.",
      icon: "hand"
    }
  ],
  homePreviews: [
    {
      title: "Magazine",
      body: "Swayam-style publication archive with issue cards and PDF placeholders.",
      href: "/magazine",
      icon: "book"
    },
    {
      title: "Reports",
      body: "Annual, activity, and governance report placeholders for transparent updates.",
      href: "/reports",
      icon: "scroll"
    },
    {
      title: "Gallery",
      body: "Event, hall, community, and seva photographs organized by category.",
      href: "/gallery",
      icon: "image"
    },
    {
      title: "Forms",
      body: "Printable membership, hall, seva, donation, and visit/support forms.",
      href: "/forms",
      icon: "file"
    }
  ],
  committeeMembers: [
    { name: "Member Name", role: "President", note: "Official Nerul name to be confirmed" },
    { name: "Member Name", role: "Vice President", note: "Official Nerul name to be confirmed" },
    { name: "Member Name", role: "Secretary", note: "Official Nerul name to be confirmed" },
    { name: "Member Name", role: "Treasurer", note: "Official Nerul name to be confirmed" },
    { name: "Member Name", role: "Committee Member", note: "Official Nerul name to be confirmed" },
    { name: "Member Name", role: "Committee Member", note: "Official Nerul name to be confirmed" }
  ],
  trustees: [
    { name: "Trustee Name", role: "Managing Trustee", note: "Official Nerul trustee details to be confirmed" },
    { name: "Trustee Name", role: "Trustee", note: "Official Nerul trustee details to be confirmed" },
    { name: "Trustee Name", role: "Trustee", note: "Official Nerul trustee details to be confirmed" },
    { name: "Trustee Name", role: "Trustee", note: "Official Nerul trustee details to be confirmed" }
  ],
  magazines: [
    { title: "Swayam Magazine", period: "Current issue", summary: "Community writing, updates, and cultural notes.", status: "PDF coming soon" },
    { title: "Festival Special", period: "Ganeshotsav edition", summary: "Program schedule, essays, and member contributions.", status: "Demo placeholder" },
    { title: "Sanskruti Notes", period: "Quarterly", summary: "Lectures, youth activities, and community highlights.", status: "Demo placeholder" }
  ],
  reports: [
    { title: "Annual Activity Report", year: "2025-26", summary: "Programs, seva initiatives, hall usage summary, and committee updates.", status: "PDF to be uploaded" },
    { title: "Community Programs Report", year: "2025", summary: "Cultural events, lectures, celebrations, and member participation.", status: "Demo placeholder" },
    { title: "Seva Initiatives Report", year: "2025", summary: "Anand Ashram associated support, visits, and volunteer activities.", status: "Demo placeholder" }
  ],
  forms: [
    { title: "Membership Form", purpose: "For new member enquiries and member detail updates.", language: "English / Marathi PDF planned", updated: "To be confirmed" },
    { title: "Hall Enquiry Form", purpose: "For event type, preferred date, guest count, and basic booking details.", language: "English / Marathi PDF planned", updated: "To be confirmed" },
    { title: "Seva Volunteer Form", purpose: "For volunteering interest across cultural, community, and elder-support initiatives.", language: "English / Marathi PDF planned", updated: "To be confirmed" },
    { title: "Donation / Support Form", purpose: "For donation intent and support-related communication.", language: "English / Marathi PDF planned", updated: "To be confirmed" },
    { title: "Anand Ashram Visit / Support Form", purpose: "For family visits, support interest, and related seva communication.", language: "English / Marathi PDF planned", updated: "To be confirmed" }
  ],
  gallery: [
    {
      title: "Cultural program",
      category: "Events",
      icon: "calendar"
    },
    {
      title: "Community gathering",
      category: "Community",
      icon: "users"
    },
    {
      title: "Hall setup",
      category: "Hall",
      icon: "landmark"
    },
    {
      title: "Seva initiative",
      category: "Seva",
      icon: "hand"
    },
    {
      title: "Festival celebration",
      category: "Events",
      icon: "home"
    },
    {
      title: "Member activity",
      category: "Community",
      icon: "book"
    }
  ],
  events: [
    { title: "Ganeshotsav program", meta: "Festival schedule placeholder", icon: "calendar" },
    { title: "Lecture series", meta: "Speaker details to be confirmed", icon: "book" },
    { title: "Community seva day", meta: "Volunteer plan placeholder", icon: "hand" },
    { title: "Hall orientation", meta: "Amenities and availability to be confirmed", icon: "home" }
  ],
  activities: [
    {
      title: "Cultural Programs",
      body: "Festivals, music gatherings, spiritual discourses, traditional celebrations, and community events.",
      icon: "calendar"
    },
    {
      title: "Educational Initiatives",
      body: "Workshops, lectures, student support programs, and knowledge-sharing sessions.",
      icon: "book"
    },
    {
      title: "Social Service",
      body: "Community welfare activities, charitable initiatives, and support programs for those in need.",
      icon: "hand"
    },
    {
      title: "Senior Community Engagement",
      body: "Spaces and activities designed to encourage meaningful interaction and wellbeing for senior members.",
      icon: "users"
    }
  ]
};

const blank = {
  pillars: en.pillars.map((item) => ({ ...item, title: "", body: "" })),
  homePreviews: en.homePreviews.map((item) => ({ ...item, title: "", body: "" })),
  committeeMembers: en.committeeMembers.map((item) => ({ ...item, name: "", role: "", note: "" })),
  trustees: en.trustees.map((item) => ({ ...item, name: "", role: "", note: "" })),
  magazines: en.magazines.map((item) => ({ ...item, title: "", period: "", summary: "", status: "" })),
  reports: en.reports.map((item) => ({ ...item, title: "", year: "", summary: "", status: "" })),
  forms: en.forms.map((item) => ({ ...item, title: "", purpose: "", language: "", updated: "" })),
  gallery: en.gallery.map((item) => ({ ...item, title: "", category: "" })),
  events: en.events.map((item) => ({ ...item, title: "", meta: "" })),
  activities: en.activities.map((item) => ({ ...item, title: "", body: "" }))
};

const mr: LocalizedContent = {
  pillars: [
    {
      title: "समुदाय संस्था",
      body: "नेरुळ समुदायासाठी सांस्कृतिक कार्यक्रम, सभासद सहभाग, शिक्षण उपक्रम आणि सामूहिक साजरेपणा.",
      icon: "users"
    },
    {
      title: "कार्यक्रम आणि समुदाय सभागृह",
      body: "कौटुंबिक, सामाजिक आणि समुदाय कार्यक्रमांसाठी नमुना चौकशी मार्ग. क्षमता आणि सुविधा पुष्टी कराव्यात.",
      icon: "landmark"
    },
    {
      title: "आनंद आश्रम संबंध",
      body: "ज्येष्ठ नागरिक सेवा, भेटी, सहाय्य आणि पुष्टी झालेल्या उपक्रमांसाठी काळजीपूर्वक मांडलेला विभाग.",
      icon: "hand"
    }
  ],
  homePreviews: [
    {
      title: "मासिक",
      body: "अंक कार्ड आणि PDF तात्पुरत्या लिंकसह प्रकाशन संग्रह.",
      href: "/magazine",
      icon: "book"
    },
    {
      title: "अहवाल",
      body: "वार्षिक, उपक्रम आणि प्रशासन अहवालांसाठी तात्पुरती कार्डे.",
      href: "/reports",
      icon: "scroll"
    },
    {
      title: "छायाचित्रे",
      body: "कार्यक्रम, सभागृह, समुदाय आणि सेवा छायाचित्रे विभागानुसार.",
      href: "/gallery",
      icon: "image"
    },
    {
      title: "फॉर्म",
      body: "सभासदत्व, सभागृह, सेवा, देणगी आणि भेट/सहाय्य फॉर्म.",
      href: "/forms",
      icon: "file"
    }
  ],
  committeeMembers: [
    { name: "सदस्य नाव", role: "अध्यक्ष", note: "अधिकृत नेरुळ नाव पुष्टी करणे बाकी" },
    { name: "सदस्य नाव", role: "उपाध्यक्ष", note: "अधिकृत नेरुळ नाव पुष्टी करणे बाकी" },
    { name: "सदस्य नाव", role: "सचिव", note: "अधिकृत नेरुळ नाव पुष्टी करणे बाकी" },
    { name: "सदस्य नाव", role: "खजिनदार", note: "अधिकृत नेरुळ नाव पुष्टी करणे बाकी" },
    { name: "सदस्य नाव", role: "समिती सदस्य", note: "अधिकृत नेरुळ नाव पुष्टी करणे बाकी" },
    { name: "सदस्य नाव", role: "समिती सदस्य", note: "अधिकृत नेरुळ नाव पुष्टी करणे बाकी" }
  ],
  trustees: [
    { name: "विश्वस्त नाव", role: "मुख्य विश्वस्त", note: "अधिकृत नेरुळ विश्वस्त तपशील पुष्टी करणे बाकी" },
    { name: "विश्वस्त नाव", role: "विश्वस्त", note: "अधिकृत नेरुळ विश्वस्त तपशील पुष्टी करणे बाकी" },
    { name: "विश्वस्त नाव", role: "विश्वस्त", note: "अधिकृत नेरुळ विश्वस्त तपशील पुष्टी करणे बाकी" },
    { name: "विश्वस्त नाव", role: "विश्वस्त", note: "अधिकृत नेरुळ विश्वस्त तपशील पुष्टी करणे बाकी" }
  ],
  magazines: [
    { title: "स्वयम् मासिक", period: "सध्याचा अंक", summary: "समुदाय लेखन, बातम्या आणि सांस्कृतिक टिपणे.", status: "PDF लवकरच" },
    { title: "उत्सव विशेषांक", period: "गणेशोत्सव अंक", summary: "कार्यक्रम वेळापत्रक, लेख आणि सभासद योगदान.", status: "नमुना" },
    { title: "संस्कृती टिपणे", period: "त्रैमासिक", summary: "व्याख्याने, युवा उपक्रम आणि समुदाय झलक.", status: "नमुना" }
  ],
  reports: [
    { title: "वार्षिक उपक्रम अहवाल", year: "२०२५-२६", summary: "कार्यक्रम, सेवा उपक्रम, सभागृह वापर सारांश आणि समिती अपडेट.", status: "PDF अपलोड करणे बाकी" },
    { title: "समुदाय कार्यक्रम अहवाल", year: "२०२५", summary: "सांस्कृतिक कार्यक्रम, व्याख्याने, उत्सव आणि सभासद सहभाग.", status: "नमुना" },
    { title: "सेवा उपक्रम अहवाल", year: "२०२५", summary: "आनंद आश्रम संबंधित सहाय्य, भेटी आणि स्वयंसेवक उपक्रम.", status: "नमुना" }
  ],
  forms: [
    { title: "सभासदत्व फॉर्म", purpose: "नवीन सभासद चौकशी आणि सभासद माहिती अद्ययावत करण्यासाठी.", language: "इंग्रजी / मराठी PDF नियोजित", updated: "पुष्टी करणे बाकी" },
    { title: "सभागृह चौकशी फॉर्म", purpose: "कार्यक्रम प्रकार, तारीख, पाहुणे संख्या आणि बुकिंग तपशीलासाठी.", language: "इंग्रजी / मराठी PDF नियोजित", updated: "पुष्टी करणे बाकी" },
    { title: "सेवा स्वयंसेवक फॉर्म", purpose: "सांस्कृतिक, समुदाय आणि ज्येष्ठ सहाय्य उपक्रमांसाठी स्वयंसेवक आवड.", language: "इंग्रजी / मराठी PDF नियोजित", updated: "पुष्टी करणे बाकी" },
    { title: "देणगी / सहाय्य फॉर्म", purpose: "देणगी किंवा सहाय्य संबंधित संपर्कासाठी.", language: "इंग्रजी / मराठी PDF नियोजित", updated: "पुष्टी करणे बाकी" },
    { title: "आनंद आश्रम भेट / सहाय्य फॉर्म", purpose: "भेट, सहाय्य आणि सेवा संपर्कासाठी.", language: "इंग्रजी / मराठी PDF नियोजित", updated: "पुष्टी करणे बाकी" }
  ],
  gallery: en.gallery.map((item, index) => ({
    ...item,
    title: ["सांस्कृतिक कार्यक्रम", "समुदाय मेळावा", "सभागृह व्यवस्था", "सेवा उपक्रम", "उत्सव सोहळा", "सभासद उपक्रम"][index],
    category: ["कार्यक्रम", "समुदाय", "सभागृह", "सेवा", "कार्यक्रम", "समुदाय"][index]
  })),
  events: [
    { title: "गणेशोत्सव कार्यक्रम", meta: "उत्सव वेळापत्रक तात्पुरते", icon: "calendar" },
    { title: "व्याख्यानमाला", meta: "वक्ते तपशील पुष्टी करणे बाकी", icon: "book" },
    { title: "समुदाय सेवा दिवस", meta: "स्वयंसेवक योजना तात्पुरती", icon: "hand" },
    { title: "सभागृह परिचय", meta: "सुविधा आणि उपलब्धता पुष्टी करणे बाकी", icon: "home" }
  ],
  activities: [
    {
      title: "सांस्कृतिक कार्यक्रम",
      body: "उत्सव, संगीत मेळावे, आध्यात्मिक प्रवचने, पारंपरिक सोहळे आणि समुदाय कार्यक्रम.",
      icon: "calendar"
    },
    {
      title: "शैक्षणिक उपक्रम",
      body: "कार्यशाळा, व्याख्याने, विद्यार्थी सहाय्य कार्यक्रम आणि ज्ञान-वाटप सत्रे.",
      icon: "book"
    },
    {
      title: "सामाजिक सेवा",
      body: "समुदाय कल्याण उपक्रम, धर्मादाय उपक्रम आणि गरजूंसाठी सहाय्य कार्यक्रम.",
      icon: "hand"
    },
    {
      title: "ज्येष्ठ समुदाय सहभाग",
      body: "ज्येष्ठ सदस्यांसाठी अर्थपूर्ण संवाद आणि आरोग्यदायी सहभाग प्रोत्साहित करणाऱ्या जागा आणि उपक्रम.",
      icon: "users"
    }
  ]
};

export const localizedContent = {
  en,
  mr
} satisfies Record<Locale, LocalizedContent>;

export const content = localizedContent[defaultLocale];

export const resolveIcon = (name: keyof typeof iconMap) => iconMap[name];
