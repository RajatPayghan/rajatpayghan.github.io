/**
 *
 * SERVER COMPONENT - List of posts with sorting
 *
 */

import { PostListItem } from './post-listitem';

export function PostsList({ posts, filterTag = '', filterType = '' }) {
  // Sort posts by date (newest first)
  const sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get pusblished posts only (remove in progress ones)
  const publishedPosts = sortedPosts.filter(
    (post) => post.isPublished === true
  );

  // Get featured posts (for future)
  const featuredPosts = sortedPosts.filter((post) => post.isFeatured === true);

  // Get published posts which have a tag filterTag else published posts
  const tagPosts = filterTag
    ? publishedPosts.filter((post) => post.tags.includes(filterTag))
    : publishedPosts;

  // Get published posts which have a tag filterTag else published posts
  const typePosts = filterType
    ? publishedPosts.filter((post) => post.type == filterType)
    : publishedPosts;

  return (
    <div className='writing-content'>
      <section className='content-wrapper'>
        {typePosts.map((post) => (
          <PostListItem key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}
