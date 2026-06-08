import React from 'react';
import Gallery from '@/components/Gallery';
import { getGalleryImages } from '@/lib/supabase';

// Revalidate every 60 seconds (or 0 for SSR)
export const revalidate = 0;

export default async function GalleryPage() {
  const images = await getGalleryImages();
  return <Gallery photos={images} />;
}
