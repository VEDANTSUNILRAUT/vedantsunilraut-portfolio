import { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  brand: {
    logoText: "VR",
    name: "Vedant",
    fullName: "Vedant Sunil Raut",
    role: "Software Engineer at Logituit & Native Android Developer",
    email: "vedantsunilraut@gmail.com",
    connectMailto: "mailto:vedantsunilraut@gmail.com",
  },
  navigation: [
    { label: "Home", href: "/", active: true },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/hire" },
    { label: "Let's Connect", href: "mailto:vedantsunilraut@gmail.com", isButton: true },
  ],
  hero: {
    badge: {
      tag: "NEW",
      text: "Software Engineer @ Logituit",
      href: "#experience",
    },
    headline: {
      prefix: "Architecting high-performance software & shaping ",
      gradientText: "Mobile Realities",
    },
    subtitle: "Software Engineer at Logituit | Native Android & KMP Developer",
    primaryCta: {
      text: "Let's Connect",
      href: "mailto:vedantsunilraut@gmail.com",
    },
    secondaryCta: {
      email: "vedantsunilraut@gmail.com",
    },
  },
  weatherWidget: {
    temp: "27°C",
    location: "Konkan Divi / Amravati",
  },
  socials: {
    github: "https://github.com/VEDANTSUNILRAUT",
    linkedin: "https://www.linkedin.com/in/vedantsunilraut",
    twitter: "https://x.com/vedantsunilraut",
    instagram: "https://www.instagram.com/vedantsunilraut",
  },
};

