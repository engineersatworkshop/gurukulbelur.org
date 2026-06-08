import React from 'react';
import { Loader2 } from 'lucide-react';

export default function AdminLoading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <Loader2 className="w-12 h-12 animate-spin text-blue-600 mb-4" />
      <h3 className="text-lg font-semibold text-gray-700">Loading Dashboard...</h3>
    </div>
  );
}
