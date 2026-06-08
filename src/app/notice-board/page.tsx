import React from 'react';
import NoticeBoard from '@/components/NoticeBoard';
import { getNotices } from '@/lib/supabase';

// Revalidate every 60 seconds (or 0 for SSR)
export const revalidate = 0;

export default async function NoticeBoardPage() {
  const notices = await getNotices();
  return <NoticeBoard notices={notices} />;
}
