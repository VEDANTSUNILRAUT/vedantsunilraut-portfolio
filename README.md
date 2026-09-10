<div align="center">

# ⚡ Developer Portfolio & Interactive Android Showcase

An ultra-modern, high-performance developer portfolio and interactive mobile experience built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

Featuring a unique **Dual Layout Engine** that allows users to toggle seamlessly between a responsive desktop web experience and an authentic **interactive Android smartphone emulator**.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Website-7928CA?style=for-the-badge&logo=vercel&logoColor=white)](https://vedantsunilraut.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js%2016-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript%205-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS%20v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

[Explore Features](#-key-features) • [Tech Stack](#-tech-stack) • [Architecture](#-architecture--design-patterns) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure)

</div>

---

## 🌟 Overview

This project is an engineer-centric developer portfolio crafted to showcase software engineering expertise, native mobile development capabilities, and web performance engineering.

Beyond a traditional portfolio site, it includes an **in-browser Android Emulator chassis** with functional hardware buttons, pull-down Quick Settings, real backlight dimming emulation, status bar notifications, and an integrated **Interactive AI Assistant**.

---

## 🚀 Key Features

### 📱 Dual Layout Engine (Web & Android Emulator)
* **Seamless View Switching**: Effortlessly toggle between a full desktop web view and a Pixel-inspired smartphone chassis directly in the browser.
* **Interactive Smartphone Chassis**: Pixel 9 Pro-inspired geometry complete with power button, volume rocker, speaker slit, and gesture navigation bar.
* **Functional Android Quick Settings**: Pull-down notification drawer with interactive tiles (Wi-Fi, Bluetooth, Dark Mode, Flashlight, DND, Airplane Mode) and a dynamic backlight slider.
* **Real Backlight Dimming**: Real-time physical backlight control simulated through hardware-accelerated CSS layers.

### 🤖 Intelligent Portfolio AI Assistant
* **Interactive AI Chatbot**: Built-in executive assistant providing instant answers regarding technical skills, project architectural details, and engineering background.
* **Pre-trained bot knowledge engine**: Quick prompt suggestions and fluid conversational animations.

### 🎨 Visual Excellence & Micro-Interactions
* **Asymmetrical Bento Grid**: Modern visual presentation highlighting core engineering competencies and featured work.
* **Butter-Smooth Motion**: 60 FPS GPU-accelerated micro-interactions powered by **Framer Motion** and **Motion.dev**.
* **Momentum Scrolling**: Integrated **Lenis Smooth Scroll** delivering physics-based inertia scrolling.
* **Curated Dark Mode & Glassmorphism**: Tailored glowing accent shaders, ambient lighting effects, and frosted glass layers.

### ⚡ Performance & Production Readiness
* **Next.js 16 App Router**: Server and client component optimization with minimal bundle footprint.
* **Full SEO Integration**: Automated OpenGraph images, semantic HTML5, dynamic XML sitemaps, and robots.txt.
* **100% Type Safe**: Strict TypeScript configuration across components, models, and contexts.

---

## 🛠 Tech Stack

### Core Framework & Runtime
| Technology | Description |
| :--- | :--- |
| **Next.js 16** | React framework with App Router, Server Components, and optimized image handling |
| **React 19** | Latest React primitives, hooks, and concurrent features |
| **TypeScript 5** | Strict type safety and clear domain modeling |

### Styling & Animation
| Technology | Description |
| :--- | :--- |
| **Tailwind CSS v4** | Utility-first CSS engine with modern CSS variables |
| **Framer Motion / Motion** | Production-ready layout transitions and fluid gesture interactions |
| **Lenis** | Hardware-accelerated inertial momentum scrolling |
| **Lucide Icons & Devicon** | Scalable SVG developer iconography |
| **Shadcn UI & Base UI** | Accessible, headless UI component primitives |

---

## 📁 Project Structure

```text
├── public/                     # Static assets, SVG icons, OpenGraph images
│   ├── assets/
│   ├── tech-icons/
│   └── noise.svg
├── src/
│   ├── app/                    # Next.js App Router routes and pages
│   │   ├── about/              # About page
│   │   ├── blog/               # Technical blog & articles
│   │   ├── book/               # Book a call / consultation
│   │   ├── hire/               # Contact & inquiry form
│   │   ├── projects/           # Comprehensive project gallery
│   │   ├── work/               # Professional experience timeline
│   │   ├── globals.css         # Design tokens, themes & Tailwind styles
│   │   ├── layout.tsx          # Root layout, providers & view mode wrapper
│   │   └── page.tsx            # Main landing page (Bento Grid & Hero)
│   ├── components/
│   │   ├── android/            # Android Emulator chassis & mobile shell
│   │   │   ├── AndroidEmulator.tsx
│   │   │   ├── AndroidQuickSettingsSheet.tsx
│   │   │   ├── AndroidStatusBar.tsx
│   │   │   └── MobileApp.tsx
│   │   ├── common/             # Theme & view toggles, scroll providers
│   │   ├── layout/             # Header, Footer, and layout switchers
│   │   ├── sections/           # Hero, BentoGrid, Skills, Projects, CTA
│   │   └── ui/                 # Reusable buttons, cards, chatbot, icons
│   ├── constants/              # Static data (projects, skills, experience)
│   ├── context/                # React Context (ViewMode, MobileState, Assistant)
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions (cn helper, formatters)
│   └── types/                  # TypeScript interfaces and type definitions
├── components.json             # Shadcn component configuration
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and npm scripts
└── tsconfig.json               # TypeScript configuration
```

---

## 🚦 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
* [Node.js](https://nodejs.org/) (version **20.x** or higher recommended)
* [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/VEDANTSUNILRAUT/vedantsunilraut-portfolio.git
   cd vedantsunilraut-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000) to explore the application.

---

## 💻 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js local development server with hot-reloading |
| `npm run build` | Compiles and builds the production bundle with type-checking |
| `npm run start` | Serves the production build locally |
| `npm run lint` | Runs ESLint to inspect and validate code quality |

---

## 🏗 Architecture & Design Patterns

* **Context-Driven View Switching**: `ViewModeContext` and `MobileStateContext` coordinate real-time transitions between Desktop and Android Emulator viewports without re-mounting common pages.
* **Component-Driven Modular Architecture**: Clean separation between presentational components, section layouts, and contextual state providers.
* **Accessible & Responsive**: Fully responsive breakpoints ensuring consistent typography and layout from 320px mobile screens to ultra-wide displays.
* **SEO Optimized Metadata**: Centralized metadata configuration in Next.js layout supporting dynamic title generation, OpenGraph previews, and robots directives.

---

## 🌐 Deployment

The application is optimized for zero-config deployment on **[Vercel](https://vercel.com/)**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FVEDANTSUNILRAUT%2Fvedantsunilraut-portfolio)

Alternatively, it can be deployed on any platform supporting Node.js or Docker (AWS Amplify, Cloudflare Pages, Netlify, DigitalOcean).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to use and adapt it for personal projects and showcase references.

---

<div align="center">

Made with care and passion for high-performance software engineering.

⭐ **If you found this showcase inspiring, feel free to give it a star!**

</div>
