import Link from 'next/link';
import UnderlineLinkWithBG from '../UnderlineToBGLink';
import { formatDateForPostList } from '@/lib/utils';
import { cn } from '@/constants/utils';

export function PostListItem({ post }) {
  const { slug, title, date, description, tags } = post;
  // Add class post-link to Link
  return (
    <Link
      href={`/writing/${slug}`}
      className={cn('', 'flex text-md items-center')}
    >
      <UnderlineLinkWithBG
        label={title}
        underlinePaddingRatio={0}
        underlineHeightRatio={0.005}
      />
      <div className='w-32 bg-transparent flex-1 h-px' />
      <div className='w-fit text-sm font-mono text-neutral-400 dark:text-neutral-700'>
        {formatDateForPostList(date)}
      </div>
    </Link>
  );
}
