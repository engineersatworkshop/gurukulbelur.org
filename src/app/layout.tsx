import React from 'react';
import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gurukulbelur.org'),
  title: {
    default: 'Gurukul English Medium Co-Ed School | Belur Math',
    template: '%s | Gurukul School',
  },
  description: 'An English Medium Co-educational School providing holistic primary education with an emphasis on discipline and moral values in Belur Math, Liluah, Howrah.',
  keywords: ['School', 'Gurukul', 'Belur Math', 'Liluah', 'Howrah', 'English Medium', 'Co-Ed', 'Education'],
  openGraph: {
    title: 'Gurukul English Medium Co-Ed School',
    description: 'An English Medium Co-educational School providing holistic primary education.',
    url: 'https://gurukulbelur.org',
    siteName: 'Gurukul School',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gurukul English Medium Co-Ed School',
    description: 'An English Medium Co-educational School providing holistic primary education.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfairDisplay.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans text-gray-800 bg-white antialiased">
        <TopBar />
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <Toaster position="bottom-right" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Gurukul School",
              "description": "An English Medium Co-educational School providing holistic primary education.",
              "url": "https://gurukulbelur.org",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Girish Ghosh Rd, Bhot Bagan",
                "addressLocality": "Belur Math, Liluah, Howrah",
                "addressRegion": "West Bengal",
                "postalCode": "711202",
                "addressCountry": "IN"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
