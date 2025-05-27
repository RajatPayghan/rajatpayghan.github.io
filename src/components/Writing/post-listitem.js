import Link from 'next/link';

export function PostListItem({ post }) {
  const { slug, title, date, description, tags } = post;

  return (
    <Link href={`/writing/${slug}`} className='post-link'>
      <article className='post-item'>
        <h2 className='post-title'>{title}</h2>
        {/* Add these styles to your CSS file */}
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
      </article>
    </Link>
  );
}
