import type { Metadata } from "next";
import { Outfit, EB_Garamond, Alata, Shadows_Into_Light, Henny_Penny, Source_Code_Pro, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { DeveloperLoader } from "@/components/common/DeveloperLoader";
import { LenisScroll } from "@/components/common/ScrollProviders";
import { InfiniteCanvasBackground } from "@/components/ui/InfiniteCanvasBackground";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DeviceLayoutSwitcher } from "@/components/layout/DeviceLayoutSwitcher/DeviceLayoutSwitcher";
import { PortfolioChatbot } from "@/components/ui/PortfolioChatbot";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
});

const alata = Alata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alata",
});

const shadowsIntoLight = Shadows_Into_Light({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-shadows-into-light",
});

const hennyPenny = Henny_Penny({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-henny-penny",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vedantsunilraut.vercel.app"),
  title: {
    default: "Vedant Sunil Raut | Software Engineer & Native Android Specialist",
    template: "%s | Vedant Sunil Raut",
  },
  description:
    "Portfolio of Vedant Sunil Raut — Software Engineer at Logituit. Expert in Native Android, Kotlin, Jetpack Compose, KMP, Next.js, and Full-Stack Engineering.",
  keywords: [
    "Vedant Raut",
    "Vedant Sunil Raut",
    "Software Engineer Logituit",
    "Android Developer",
    "Kotlin Specialist",
    "Jetpack Compose",
    "Kotlin Multiplatform",
    "KMP Developer",
    "Next.js Developer",
    "Full Stack Engineer",
    "Amravati",
    "India",
  ],
  authors: [{ name: "Vedant Sunil Raut", url: "https://github.com/VEDANTSUNILRAUT" }],
  creator: "Vedant Sunil Raut",
  publisher: "Vedant Sunil Raut",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Vedant Sunil Raut | Software Engineer & Native Android Specialist",
    description:
      "Software Engineer at Logituit specializing in Native Android Development, Kotlin, Jetpack Compose, KMP, and Modern Web Systems.",
    url: "https://vedantsunilraut.vercel.app",
    siteName: "Vedant Raut Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedant Sunil Raut | Software Engineer & Native Android Specialist",
    description:
      "Software Engineer at Logituit specializing in Native Android, Kotlin, Jetpack Compose & Full-Stack Web Development.",
    creator: "@vedantsunilraut",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", outfit.variable, ebGaramond.variable, alata.variable, shadowsIntoLight.variable, hennyPenny.variable, sourceCodePro.variable, "font-sans", geist.variable)}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicon/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="relative min-h-screen bg-black text-white overflow-x-hidden transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Global Lenis Smooth Momentum Scroll Wrapper */}
          <LenisScroll>
            {/* Global Developer Loader */}
            <DeveloperLoader />

            {/* Standalone Noise overlay */}
            <div 
              className="pointer-events-none fixed inset-0 z-50 mix-blend-overlay"
              style={{ 
                backgroundImage: 'url("/noise.svg")', 
                backgroundSize: '256px 256px',
                opacity: 'var(--noise-opacity)'
              }} 
            />

            {/* Persistent Background for both Web & Mobile */}
            <InfiniteCanvasBackground />

            {/* Automatic View Switcher: Desktop Web vs Native Android Mobile App */}
            <DeviceLayoutSwitcher>
              <Header />
              <div className="relative z-10 w-full min-h-screen flex flex-col items-center">
                {children}
              </div>
              <Footer />
            </DeviceLayoutSwitcher>

            {/* Vedant Executive AI Chatbot */}
            <PortfolioChatbot />
          </LenisScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}

