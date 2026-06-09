# Gurukul School Website

Welcome to the official website repository for **Gurukul School**. This platform serves as a digital hub for the school community, providing information about academics, admissions, recent notices, and a vivid photo gallery of school memories.

## 🌟 Features

- **Modern & Responsive UI**: Beautifully crafted with Tailwind CSS and Framer Motion for smooth animations and a premium look across all devices (mobile, tablet, and desktop).
- **Admin Dashboard**: A secure backend panel allowing authorized staff to manage the Notice Board and Photo Gallery dynamically.
- **Dynamic Notice Board**:
  - Visitors can view the latest notices and download associated PDF circulars directly from the browser.
  - Admins can instantly publish or delete notices with PDF/Image attachments.
- **High-Performance Gallery**:
  - Uses Next.js `<Image>` optimization to seamlessly compress and serve dozens of high-resolution "Parents Day" and "Campus" images without crashing user browsers.
  - Features an intuitive Album filtering system and a gorgeous full-screen Lightbox mode.
- **Serverless Backend**: Powered by Supabase (PostgreSQL) for database management and Cloudinary for enterprise-grade asset hosting and delivery.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Database**: [Supabase](https://supabase.com/)
- **File Storage**: [Cloudinary](https://cloudinary.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/engineersatworkshop/gurukulbelur.org.git
   cd gurukulbelur.org
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env.local` file in the root directory and add your credentials:
   ```env
   # Supabase configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   
   # Cloudinary configuration
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   
   # Admin Panel Security
   ADMIN_PASSWORD=your_secure_password
   JWT_SECRET=your_jwt_signing_secret
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

5. Enginner Workshop new