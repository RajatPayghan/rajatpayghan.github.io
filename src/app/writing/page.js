import React from 'react';
import Link from 'next/link';
import { getAllPostsMetadata } from '@/lib/writing';
import WorkRow from '@/components/Home/work-rows';
import { OnlineLink } from '@/components/OnlineLink';

export default function Writing() {
  const posts = getAllPostsMetadata();

  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className='relative flex flex-col w-full min-h-[80%] gap-16'>
      <div className='grid place-items-center font-instrument w-full h-36 md:p-16 text-7xl italic'>
        Writings
      </div>

      <div>
        This is my personal blog, a space where I share my thoughts, ideas and
        other interesting things I come across. I view it as some sort of a
        timecapsule, where I document my journey and see how I evolve over time.
        On here, you will find notes (aka fleeting thoughts), regular posts and
        more elaborate essays.
      </div>

      <div>
        {sortedPosts.map(({ slug, title, date, description, tags }) => (
          <WorkRow
            href={'/writing/' + slug}
            title={title}
            subtitle={tags}
            dateStart={date}
            dateEnd={''}
            isCurr={false}
            key={slug}
          />
        ))}
      </div>
    </div>
  );
}
