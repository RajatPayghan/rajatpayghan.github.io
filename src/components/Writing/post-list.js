// SERVER COMPONENT - List of posts with sorting
import Link from 'next/link';
import { PostListItem } from './post-listitem';

export function PostsList({ posts }) {
  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className='writing-content'>
      <section className='content-wrapper'>
        {sortedPosts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}
