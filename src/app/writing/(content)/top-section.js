'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function TopSection() {
  const pathname = usePathname();
  return <div className='w-full h-36 bg-red-500/30'>{pathname}</div>;
}
