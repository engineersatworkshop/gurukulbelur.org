'use server';

import { cookies } from 'next/headers';
import { signToken } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function loginAction(formData: FormData) {
  const password = formData.get('password');
  const validPassword = process.env.ADMIN_PASSWORD;

  if (!validPassword) {
    return { error: 'Admin password not configured on server.' };
  }

  if (password === validPassword) {
    const token = await signToken({ role: 'admin' });
    
    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });
    
    redirect('/admin');
  } else {
    return { error: 'Invalid password' };
  }
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_token');
  redirect('/admin/login');
}
