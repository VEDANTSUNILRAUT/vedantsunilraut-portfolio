import type { Metadata } from "next";
import { Outfit, EB_Garamond, Alata, Shadows_Into_Light, Henny_Penny, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { DeveloperLoader } from "@/components/common/DeveloperLoader";
import { LenisScroll } from "@/components/common/ScrollProviders";
import { InfiniteCanvasBackground } from "@/components/ui/InfiniteCanvasBackground";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DeviceLayoutSwitcher } from "@/components/layout/DeviceLayoutSwitcher/DeviceLayoutSwitcher";

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
  title: "Premium Developer Portfolio | Vedant Raut",
  description: "Modern Full Stack & Native Android Engineer Portfolio built with Next.js, Tailwind, and Framer Motion",
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
      className={`${outfit.variable} ${ebGaramond.variable} ${alata.variable} ${shadowsIntoLight.variable} ${hennyPenny.variable} ${sourceCodePro.variable} antialiased`}
    >
      <body className="relative min-h-screen bg-black text-white overflow-x-hidden transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Global Lenis Smooth Momentum Scroll Wrapper */}
          <LenisScroll>
            {/* Global Developer Loader (Temporarily hidden) */}
            {/* <DeveloperLoader /> */}

            {/* Noise overlay */}
            <div 
              className="pointer-events-none fixed inset-0 z-50 mix-blend-overlay"
              style={{ 
                backgroundImage: 'url("https://dhirajbhawsar.in/noise.webp")', 
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
          </LenisScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
