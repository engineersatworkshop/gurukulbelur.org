import React from 'react';
import Gallery from '@/components/Gallery';
import { getGalleryImages, GalleryRecord } from '@/lib/supabase';

// Revalidate every 60 seconds (or 0 for SSR)
export const revalidate = 0;

const PARENTS_DAY_FILES = [
  'DSC_4526.JPG', 'DSC_4527.JPG', 'DSC_4589.JPG', 'DSC_4606.JPG', 'DSC_4628.JPG', 'DSC_4722.JPG', 'DSC_4763.JPG', 'DSC_4802.JPG', 'DSC_4884.JPG', 'DSC_4956.JPG', 'DSC_4968.JPG', 'DSC_5153.JPG', 'DSC_5200.JPG', 'DSC_5324.JPG', 'DSC_5404.JPG', 'DSC_5413.JPG', 'DSC_5497.JPG', 'DSC_5580.JPG', 'DSC_5620.JPG'
];

const NEW_FOLDER_FILES = [
  'PPT005.jpg', 'PPT006.jpg', 'PPT007.jpg', 'PPT008.jpg', 'PPT009.jpg', 'PPT010.jpg', 'PPT11.jpg', 'PPT12.jpg', 'PPT13.jpg', 'PPT14.jpg', 'PPT15.jpg', 'PPT16.jpg', 'PPT17.jpg', 'PPT18.jpg', 'PPT19.jpg', 'PPT20.jpg'
];

const GENERAL_FILES = [
  'IMG_20250729_132451.jpg', 'IMG_20250729_132745.jpg', 'IMG_20250804_124637.jpg', 'IMG_20251106_125402.jpg', 'IMG_20251106_130258.jpg', 'IMG_20251106_132321.jpg', 'IMG_20251205_114344.jpg', 'IMG_20251205_114351.jpg', 'IMG_20251205_114433.jpg', 'IMG_20251205_144747.jpg', 'IMG_20251205_145241.jpg', 'Building.jpg'
];

export default async function GalleryPage() {
  const dynamicImages = await getGalleryImages();

  const staticImages: GalleryRecord[] = [
    ...PARENTS_DAY_FILES.map((file, i) => ({
      id: `static-parents-day-${i}`,
      image_url: `/Parents day22/${file}`,
      caption: 'Parents Day 2022',
      album: 'Parents Day',
      created_at: new Date('2022-01-01').toISOString()
    })),
    ...NEW_FOLDER_FILES.map((file, i) => ({
      id: `static-new-folder-${i}`,
      image_url: `/New folder/${file}`,
      caption: 'School Activities',
      album: 'General',
      created_at: new Date('2023-01-01').toISOString()
    })),
    ...GENERAL_FILES.map((file, i) => ({
      id: `static-general-${i}`,
      image_url: `/${file}`,
      caption: 'Campus & Facilities',
      album: 'General',
      created_at: new Date('2024-01-01').toISOString()
    }))
  ];

  const allImages = [...dynamicImages, ...staticImages];

  return <Gallery photos={allImages} />;
}
