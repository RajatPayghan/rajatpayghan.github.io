import React from 'react';
import Link from 'next/link';
import { getAllPostsMetadata } from '@/lib/writing';

export default function Writing() {
  const posts = getAllPostsMetadata();

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className='relative flex flex-col w-full h-full place-items-center justify-center gap-4'>
      <div className='w-full max-w-4xl'>
        <h1 className='text-3xl font-bold mb-8 text-center'>Writing</h1>
        <div className='space-y-6'>
          {sortedPosts.map(({ slug, title, date, description, tags }) => (
            <article
              key={slug}
              className='border-b border-gray-200 dark:border-gray-700 pb-6'
            >
              <Link
                href={`/writing/${slug}`}
                className='block hover:opacity-80 transition-opacity'
              >
                <h2 className='text-xl font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-400'>
                  {title}
                </h2>
                <div className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                  {date &&
                    new Date(date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                </div>
                {description && (
                  <p className='text-gray-600 dark:text-gray-300 mb-3'>
                    {description}
                  </p>
                )}
                {tags && tags.length > 0 && (
                  <div className='flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className='px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md'
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
