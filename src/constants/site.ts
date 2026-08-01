import { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  brand: {
    logoText: "VR",
    name: "Vedant",
    fullName: "Vedant Sunil Raut",
    role: "Software Engineer & Native Android Developer",
    email: "vedantsunilraut@gmail.com",
    connectMailto: "mailto:vedantsunilraut@gmail.com",
  },
  navigation: [
    { label: "Home", href: "/", active: true },
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Projects", href: "/projects" },
    { label: "Hire Me", href: "/hire" },
    { label: "Book a Call", href: "/book", isButton: true },
  ],
  hero: {
    badge: {
      tag: "NEW",
      text: "Introducing Portfolio...!",
      href: "#",
    },
    headline: {
      prefix: "Architecting high-performance software & shaping ",
      gradientText: "Mobile Realities",
    },
    subtitle: "Hello I'm Vedant | Software Engineer & Android Developer",
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
    twitter: "https://x.com",
    instagram: "https://www.instagram.com/vedantsunilraut",
  },
};

