'use client';

import { BlurFade } from '@/components/BlurFade/blur-fade';
import { usePathname } from 'next/navigation';

export function WritingContentWrapper({ children }) {
  const pathname = usePathname();

  return (
    <BlurFade key={pathname} delay={0.7}>
      {children}
    </BlurFade>
  );
}
