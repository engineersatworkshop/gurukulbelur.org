'use server';

import { supabase } from '@/lib/supabase';
import { uploadFileToCloudinary } from '@/lib/cloudinary';
import { revalidatePath } from 'next/cache';

export async function saveGalleryImageAction(image_url: string, caption: string) {
  if (!caption || !image_url) {
    return { error: 'Both image URL and caption are required.' };
  }

  const { error } = await supabase.from('gallery').insert({
    image_url,
    caption,
  });

  if (error) {
    console.error('Error inserting gallery image:', error);
    return { error: 'Failed to save image to database.' };
  }

  revalidatePath('/gallery');
  revalidatePath('/admin/gallery');
  
  return { success: true };
}

export async function deleteGalleryImageAction(id: string) {
  const { error } = await supabase.from('gallery').delete().eq('id', id);
  if (error) {
    console.error('Error deleting gallery image:', error);
    return { error: 'Failed to delete image.' };
  }
  
  revalidatePath('/gallery');
  revalidatePath('/admin/gallery');
  return { success: true };
}
