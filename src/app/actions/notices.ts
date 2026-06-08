'use server';

import { supabase } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';

export async function addNoticeAction(title: string, description: string, pdf_url: string | null) {
  if (!title || !description) {
    return { error: 'Title and description are required.' };
  }

  const { error } = await supabase.from('notices').insert({
    title,
    description,
    pdf_url,
  });

  if (error) {
    console.error('Error inserting notice:', error);
    return { error: 'Failed to save notice to database.' };
  }

  revalidatePath('/notice-board');
  revalidatePath('/admin/notices');
  revalidatePath('/admin');
  
  return { success: true };
}

export async function deleteNoticeAction(id: string) {
  const { error } = await supabase.from('notices').delete().eq('id', id);
  if (error) {
    console.error('Error deleting notice:', error);
    return { error: 'Failed to delete notice.' };
  }
  
  revalidatePath('/notice-board');
  revalidatePath('/admin/notices');
  revalidatePath('/admin');
  return { success: true };
}
