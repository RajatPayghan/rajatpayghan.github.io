'use client';

import { BlurFade } from '@/components/BlurFade/blur-fade';
import { usePathname } from 'next/navigation';

export function WritingContentWrapper({ children }) {
  const pathname = usePathname();

  return (
    <BlurFade key={pathname} stagger={0.3}>
      {children}
    </BlurFade>
  );
}
