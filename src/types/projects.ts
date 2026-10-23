export interface FeaturedProject {
  id: string;
  title: string;
  subtitle: string;
  highlights: string[];
  techStack: string[];
  previewTitle: string;
  previewSubtitle: string;
  bgGradient: string;
  glowColor: string;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  deviceType?: "browser" | "mobile";
  urlDisplay?: string;
}

