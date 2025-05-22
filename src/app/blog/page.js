import React from 'react';
import Link from 'next/link';

import { BlurFade } from '@/components/common/blur-fade';

export default function Blog() {
  return (
    <div className='relative flex flex-col w-full h-full place-items-center justify-center gap-4'>
      <BlurFade delay={0.2}>
        <span className='transform font-instrument text-3xl'>
          Tasty Stories Coming Up Soon ...
        </span>
      </BlurFade>
      <BlurFade delay={1}>
        <div className='text-sm'>
          Till then, make yourself at{' '}
          <Link href='/' className='underline underline-offset-4'>
            home
          </Link>
        </div>
      </BlurFade>
    </div>
  );
}
