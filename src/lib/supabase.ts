import { createClient } from '@supabase/supabase-js';

// Types matching the Supabase tables
export interface NoticeRecord {
  id: string;
  title: string;
  description: string;
  pdf_url?: string | null;
  created_at: string;
}

export interface GalleryRecord {
  id: string;
  image_url: string;
  caption: string;
  created_at: string;
}

// Use the exact URL from your screenshot as a fallback so the server never crashes
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL.startsWith('http') 
  ? process.env.NEXT_PUBLIC_SUPABASE_URL 
  : 'https://umfcmzqfsjghenclisha.supabase.co';

const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dummy_anon_key';

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function getNotices(): Promise<NoticeRecord[]> {
  const { data, error } = await supabase
    .from('notices')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching notices:', error);
    return [];
  }

  return data || [];
}

export async function getGalleryImages(): Promise<GalleryRecord[]> {
  const { data, error } = await supabase
    .from('gallery')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }

  return data || [];
}
