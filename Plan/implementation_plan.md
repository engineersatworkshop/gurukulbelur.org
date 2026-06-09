# Implementation Plan for Gurukul School Website

## Goal Description
Build a complete, single-page React application for Gurukul English Medium Co-educational School. The site will feature a premium Indian school aesthetic with a deep navy and gold palette, typography involving Playfair Display and DM Sans, and smooth scroll animations via Framer Motion.

## Proposed Changes

### Configuration and Setup
- [NEW] `index.html`: Update title, add Google Fonts links (Playfair Display, DM Sans).
- [NEW] `tailwind.config.js`: Configure colors (navy `#0d2240`, gold `#e8a020`, off-white `#f7f5f0`) and extend font families.
- [NEW] `src/index.css`: Add global scroll-behavior: smooth, base style resets, and Tailwind directives.

---
### Core Components
#### [NEW] `src/components/TopBar.jsx`
- Slim navy top bar containing a placeholder phone, school hours, and right-aligned anchor links. Hidden on mobile viewports.

#### [NEW] `src/components/Navbar.jsx`
- Sticky header with white background.
- Employs `useEffect` to detect scrolling and add a box-shadow.
- Includes gold-bordered circular logo.
- Interactive navigation links with animated underline using `framer-motion`'s `layoutId`.

#### [NEW] `src/components/Footer.jsx`
- Dark background connecting quick links, brand block, and location information.

---
### Page Sections (Landing Page)
#### [NEW] `src/components/Hero.jsx`
- Full-width hero section spanning `90vh`.
- Structured with a two-column layout consisting of animated text and sliding glass-effect cards using `staggerChildren` and `whileHover`.

#### [NEW] `src/components/FeatureStrip.jsx`
- Overlay card feature stripping key highlights of the school (CICSE, Co-ed, 6 Days, 100%).

#### [NEW] `src/components/About.jsx`
- Detailed introduction offering text and a 2x2 pillar grid with left gold borders. Includes placeholder images that bounce into view.

#### [NEW] `src/components/Academics.jsx`
- Responsive 4-card grid layout with hover elevation showcasing school focus areas.

#### [NEW] `src/components/NoticeBoard.jsx`
- Navy backdrop dedicated to recent announcements. Notices enter the screen with staggered slide-in animations.

#### [NEW] `src/components/Timings.jsx`
- Clean comparison layout highlighting the schedule and hours alongside the operational model.

#### [NEW] `src/components/Contact.jsx`
- Address details partnered with a functional 380px tall Google Maps `iframe` for Belur Math.

---
### Interactive / State-Driven Components
#### [NEW] `src/components/Gallery.jsx`
- **Admin functionality**: Integrates `useState` and `localStorage` to handle image uploads via a FileReader.
- Initial load will seed 6 placeholder photos based on specific school events.
- Elements feature hover transitions and smooth fade-in/out delete mechanics relying on `AnimatePresence`.

---
### Assembly
#### [MODIFY] `src/App.jsx`
- Replaces standard Vite boilerplates to consolidate and render all the aforementioned components sequentially.

## Verification Plan
### Automated Tests
- Run `npm run lint` or `npm run build` to verify there are no compilation errors.
### Manual Verification
- Open in the browser to verify the visual aesthetic correctly matches the dark navy and gold "premium" feeling described by the prompt.
- Confirm scroll-triggered animations perform smoothly via Framer Motion's `whileInView`.
- Test local storage logic inside the Gallery component by adding/deleting photos and reloading the page.
- Test responsiveness.
