import Link from 'next/link';
import UnderlineLinkWithBG from '../UnderlineToBGLink';
import { formatLastPlayedTime } from '@/lib/utils';
import { cn } from '@/constants/utils';

export function PostListItem({ post }) {
  const { slug, title, date, description, tags } = post;
  // Add class post-link to Link
  return (
    <Link
      href={`/writing/${slug}`}
      className={cn('', 'flex text-md items-center')}
    >
      <UnderlineLinkWithBG label={title} />
      <div className='w-32 bg-transparent flex-1 h-px' />
      <div className='w-fit'>{formatLastPlayedTime(date)}</div>
      {/* <article className='post-item'>
        <h2 className='post-title'>{title}</h2>
        {date && <time className='post-date'>{date}</time>}
        {description && <p className='post-description'>{description}</p>}
        {tags && tags.length > 0 && (
          <div className='post-tags'>
            {tags.map((tag) => (
              <span key={tag} className='post-tag'>
                {tag}
              </span>
            ))}
          </div>
        )}
      </article> */}
    </Link>
  );
}
