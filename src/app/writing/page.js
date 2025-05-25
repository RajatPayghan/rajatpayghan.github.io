import React from 'react';
import Link from 'next/link';

import { getBlogs, getBlogMetadata } from '@/lib/writing';

import { BlurFade } from '@/components/BlurFade/blur-fade';

export default function Writing() {
  const blogs = getBlogMetadata();
  console.log(blogs);

  return (
    <div className='relative flex flex-col w-full h-full place-items-center justify-center gap-4'>
      <span className='transform font-instrument text-3xl'>
        Tasty Stories Coming Up Soon ...
      </span>

      <div className='text-sm'>
        Till then, make yourself at{' '}
        <Link href='/' className='underline underline-offset-4'>
          home
        </Link>
      </div>

      <div>
        {blogs.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/writing/${slug}`}>
              <div className='text-lg font-semibold'>{title}</div>
              <div className='text-sm text-gray-500'>{date}</div>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}
