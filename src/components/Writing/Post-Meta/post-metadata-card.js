import { BlurFade } from '@/components/BlurFade/blur-fade.js';
import { Tag } from 'lucide-react';

export function PostMetadataCard({ metadata, pathname }) {
  return (
    <BlurFade key={pathname} className='post-metadata-card'>
      <div className='post-title-wrapper'>
        <h1 className='hero-title-text-post'>{metadata.title}</h1>
      </div>

      {metadata.description && (
        <p className='post-meta-description'>{metadata.description}</p>
      )}

      <div className='post-other-meta'>
        {metadata.date && (
          <div className='post-meta-box'>
            <span className='dark:text-neutral-600 text-neutral-400'>
              Published
            </span>
            <time className='post-meta-date'>{metadata.date}</time>
          </div>
        )}

        {metadata.readTime && (
          <div className='post-meta-box'>
            <span className='dark:text-neutral-600 text-neutral-400'>
              Read Time
            </span>
            <time className='post-meta-date'>{metadata.readTime}</time>
          </div>
        )}

        {metadata.tags && metadata.tags.length > 0 && (
          <div className='post-meta-box'>
            <span className='dark:text-neutral-600 text-neutral-400'>Tags</span>
            <div className='post-meta-tags'>
              {metadata.tags.map((tag, index) => (
                <div key={tag} className='post-meta-tags'>
                  <span className='post-meta-tag group'>
                    <Tag
                      size={12}
                      className='text-sky-600 dark:text-sky-400 w-0 md:group-hover:w-3 transition-all duration-300'
                    />
                    {tag}
                  </span>
                  {index != metadata.tags.length - 1 && <span>•</span>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </BlurFade>
  );
}
