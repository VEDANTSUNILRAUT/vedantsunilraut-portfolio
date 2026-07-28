export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
  isButton?: boolean;
}

export interface BrandConfig {
  logoText: string;
  name: string;
  fullName: string;
  role: string;
  email: string;
  connectMailto: string;
}

export interface HeroBadgeConfig {
  tag: string;
  text: string;
  href: string;
}

export interface HeroHeadlineConfig {
  prefix: string;
  gradientText: string;
}

export interface HeroPrimaryCtaConfig {
  text: string;
  href: string;
}

export interface HeroSecondaryCtaConfig {
  email: string;
}

export interface HeroConfig {
  badge: HeroBadgeConfig;
  headline: HeroHeadlineConfig;
  subtitle: string;
  primaryCta: HeroPrimaryCtaConfig;
  secondaryCta: HeroSecondaryCtaConfig;
}

export interface WeatherWidgetConfig {
  temp: string;
  location: string;
}

export interface SocialsConfig {
  github: string;
  linkedin: string;
  twitter: string;
  instagram: string;
}

export interface SiteConfig {
  brand: BrandConfig;
  navigation: NavigationItem[];
  hero: HeroConfig;
  weatherWidget: WeatherWidgetConfig;
  socials: SocialsConfig;
}
