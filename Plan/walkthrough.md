# Gurukul School Website Walkthrough

## Overview
I have successfully built a complete React application for **Gurukul English Medium Co-educational School**. Initially started as a Single Page Application, it has been **refactored into a Multi-Page Application** using `react-router-dom`. The project is scaffolded using Vite and styled with Tailwind CSS v4 and Framer Motion for high-performance, premium animations.

## Changes Made
- **Initialization & Setup**:
  - Scaffolding a lightweight React app using `create-vite`.
  - Configured `@tailwindcss/vite` (Tailwind v4) and injected `Playfair Display` and `DM Sans` Google Fonts.
  - Set up a customized theme matching the premium Indian school aesthetic (Deep Navy `#0d2240`, Gold `#e8a020`, Off-white `#f7f5f0`).

- **Layout Components**:
  - [TopBar](file:///f:/Gurukul/src/components/TopBar.jsx#4-29): Slim navy bar with placeholder phone and school hours.
  - [Navbar](file:///f:/Gurukul/src/components/Navbar.jsx#14-124): Sticky wrapper with a gold-bordered logo, interactive animated navigation links powered by Framer Motion's `layoutId`, and a mobile slide-down drawer using `AnimatePresence`.
  - [Footer](file:///f:/Gurukul/src/components/Footer.jsx#4-59): Clean three-column informational footer with a dark, prestigious aesthetic.

- **Content Sections**:
  - [Hero](file:///f:/Gurukul/src/components/Hero.jsx#24-129): Dynamic intro section standing at 90vh, utilizing staggered child animations and responsive glassmorphism cards highlighting core offerings.
  - [FeatureStrip](file:///f:/Gurukul/src/components/FeatureStrip.jsx#41-73): Overlapping animated card showing four quick highlights.
  - [About](file:///f:/Gurukul/src/components/About.jsx#18-108): Two-column layout integrating an animated ICSE badge, text, and a pristine 4-pillar grid.
  - [Academics](file:///f:/Gurukul/src/components/Academics.jsx#40-87): Responsive 4-card grid offering robust hover interactions.
  - [NoticeBoard](file:///f:/Gurukul/src/components/NoticeBoard.jsx#45-119): Staggered slide-in notice list with customized gold date enclosures.
  - [Timings](file:///f:/Gurukul/src/components/Timings.jsx#5-93): High-contrast schedule table beside a descriptive navy box.
  - [Contact](file:///f:/Gurukul/src/components/Contact.jsx#41-103): Four hover-highlighted contact blocks combined with an embedded, curved Google Maps `iframe` for Belur Math.

- **Interactive Gallery Setup**:
  - [Gallery](file:///f:/Gurukul/src/components/Gallery.jsx#16-280): A robust grid displaying events. Uses React state and `localStorage` to seed six placeholders on the first load, complete with emoji rendering.
  - Added an **Admin Mode**, revealing a hidden upload zone triggered via `framer-motion` sliding down. It seamlessly incorporates `FileReader` to encode images to Base64 and previews them dynamically, with fade-in/out delete mechanics.

## Validation Results
- Verified that all dependencies installed correctly (`framer-motion`, `lucide-react`, `tailwindcss`).
- Addressed all Tailwind v4 specific standardizations (replacing `-grow` with `grow`, etc.) resulting in zero linting errors.
- Ran `npm run build` locally, successfully compiling the optimized static assets in under 1 second. The production build contains no rendering blockages.

To preview the website locally, run `npm run dev` and open the provided `localhost` URL in your browser.
