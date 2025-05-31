'use client';
import Link from 'next/link';
import { formatDateForPostList } from '@/lib/utils';
import PostIcon from '../Post-Meta/post-icon';
import { useIsMobile } from '../../Hooks/useIsMobile';

export function PostListItem({ post }) {
  const { slug, title, date, readTime, tags, type, isFeatured } = post;
  const isMobile = useIsMobile();
  // Add class post-link to Link
  return (
    <Link href={`/writing/${slug}`} className='post-link group'>
      <PostIcon type={type} isFeatured={isFeatured} className='bg-red-500' />

      <div className='post-title'>{title}</div>

      {isMobile ? (
        <div className='post-date'>{formatDateForPostList(date)}</div>
      ) : (
        <div className='post-dt-wrapper'>
          <div className='post-date'>{formatDateForPostList(date)}</div>
          {/* <div className='post-read-time'>{readTime + ' read'}</div> */}
          <div className='post-tag flex flex-row gap-1 items-center'>
            {'#' + tags.join(' #')}
          </div>
        </div>
      )}
    </Link>
  );
}
