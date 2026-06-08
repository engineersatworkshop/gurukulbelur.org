import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white bg-doodles">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
        <h2 className="mt-6 text-xl font-serif font-bold text-brand-navy">Loading Gurukul...</h2>
        <p className="text-gray-500 mt-2">Please wait a moment</p>
      </div>
    </div>
  );
}
