import Link from 'next/link';
import UnderlineLinkWithBG from '../UnderlineToBGLink';
import { formatDateForPostList } from '@/lib/utils';
import { cn } from '@/constants/utils';
import PostIcon from './post-icon';

export function PostListItem({ post }) {
  const { slug, title, date, description, tags, type, isFeatured } = post;
  // Add class post-link to Link
  return (
    <Link href={`/writing/${slug}`} className='post-link group'>
      <PostIcon type={type} isFeatured={isFeatured} className='bg-red-500' />

      <div className='post-title'>{title}</div>

      <div className='post-date'>{formatDateForPostList(date)}</div>
    </Link>
  );
}
