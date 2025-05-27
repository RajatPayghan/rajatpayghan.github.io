import { BlurFade } from '@/components/BlurFade/blur-fade.js';

export function PostMetadataCard({ metadata, pathname }) {
  return (
    <BlurFade key={pathname} className='post-metadata-card'>
      <div className='post-title-wrapper'>
        <h1 className='hero-title-text-post'>{metadata.title}</h1>
      </div>

      {/* COMPONENT SUGGESTION: Extract PostMeta component for date, tags, etc. */}
      {(metadata.date || metadata.tags || metadata.description) && (
        <div className='post-meta'>
          {metadata.date && (
            <time className='post-meta-date'>{metadata.date}</time>
          )}
          {metadata.description && (
            <p className='post-meta-description'>{metadata.description}</p>
          )}
          {metadata.tags && metadata.tags.length > 0 && (
            <div className='post-meta-tags'>
              {metadata.tags.map((tag) => (
                <span key={tag} className='post-meta-tag'>
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </BlurFade>
  );
}
