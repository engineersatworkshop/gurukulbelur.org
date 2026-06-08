# Gurukul School Website Tasks

- [x] Initialize React App
  - [x] Run `npx create-vite` with react template
  - [x] Install Tailwind CSS, Framer Motion, and required icons (e.g. `lucide-react`)
  - [x] Configure Tailwind (colors, fonts)
- [x] Setup Base Styles
  - [x] Add Google Fonts (Playfair Display, DM Sans) to [index.html](file:///f:/Gurukul/index.html)
  - [x] Define global CSS and Tailwind config theme extensions
- [/] Create Layout Components
  - [x] `<TopBar />`: Phone, hours, anchor links
  - [/] `<Navbar />`: Sticky on scroll, logo, animated nav links, mobile drawer
  - [x] `<Footer />`: Brand block, links, location
- [/] Create Page Sections
  - [x] `<Hero />`: Dot grid pattern, pulsing gold glow, two columns (text + floating glass cards)
  - [x] `<FeatureStrip />`: Negative margin card with 4 columns
  - [x] `<About />`: Image placeholder + text + pillar grid
  - [x] `<Academics />`: 4 cards in responsive grid with hover effects
  - [x] `<NoticeBoard />`: Navy background with animated notice list
  - [x] `<Timings />`: Table and text
  - [x] `<Gallery />`: Admin mode (useState, localStorage), preview, gallery grid with placeholders
  - [x] `<Contact />`: Address cards, Google Maps iframe
- [x] Final Assembly
  - [x] Compose all components in [App.jsx](file:///f:/Gurukul/src/App.jsx)
  - [x] Ensure smooth scrolling and Framer Motion view animations are applied correctly

## Phase 2: Multi-Page Refactoring
- [x] Install `react-router-dom`
- [x] Create Page Components
  - [x] [src/pages/Home.jsx](file:///f:/Gurukul/src/pages/Home.jsx) (Hero + FeatureStrip)
  - [x] `src/pages/About.jsx`
  - [x] `src/pages/Academics.jsx`
  - [x] `src/pages/NoticeBoard.jsx`
  - [x] `src/pages/Gallery.jsx`
  - [x] `src/pages/Contact.jsx`
- [x] Update Layout Components
  - [x] Update [Navbar.jsx](file:///f:/Gurukul/src/components/Navbar.jsx) to use `<Link>`
  - [x] Update [TopBar.jsx](file:///f:/Gurukul/src/components/TopBar.jsx) and [Footer.jsx](file:///f:/Gurukul/src/components/Footer.jsx) to use `<Link>`
- [x] Update [App.jsx](file:///f:/Gurukul/src/App.jsx) with Routing setup

