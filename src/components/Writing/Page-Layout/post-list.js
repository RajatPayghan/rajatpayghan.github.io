/**
 *
 * CLIENT COMPONENT - List of posts with sorting
 * Made client to support filtering based on state change of filter button
 * TODO Filter button
 *
 */

'use client';
import { PostListItem } from './post-listitem';

// Helper function: Sort posts by date (newest first)
function sortPostsByDate(posts) {
  return posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Helper function: Get only published posts
function getPublishedPosts(posts) {
  return posts.filter((post) => post.isPublished === true);
}

// Helper function: Get only featured posts
function getFeaturedPosts(posts) {
  return posts.filter((post) => post.isFeatured === true);
}

// Helper function: Filter posts by tag
function filterPostsByTag(posts, tag) {
  return tag ? posts.filter((post) => post.tags.includes(tag)) : posts;
}

// Helper function: Filter posts by type
function filterPostsByType(posts, type) {
  return type ? posts.filter((post) => post.type === type) : posts;
}

// Helper function: Group posts by year - FIXED for hydration
function groupPostsByYear(posts) {
  return posts.reduce((groups, post) => {
    // Extract year directly from YYYY-MM-DD format - most efficient
    const year = parseInt(post.date.split('-')[0], 10);
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(post);
    return groups;
  }, {});
}

// TODO Move the tage & type filter logic inside this component
export function PostsList({ posts, filterTag = '', filterType = '' }) {
  const publishedPosts = getPublishedPosts(posts);
  const tagPosts = filterPostsByTag(publishedPosts, filterTag);
  const typePosts = filterPostsByType(publishedPosts, filterType);
  const sortedPosts = sortPostsByDate(publishedPosts);

  // Group by year
  const postsByYear = groupPostsByYear(sortedPosts);

  return (
    <div className='writing-content'>
      {/* Future filtering options */}

      <section className='content-wrapper-year-list'>
        {Object.entries(postsByYear)
          .sort(([a], [b]) => b - a) // Sort years newest first
          .map(([year, yearPosts]) => (
            <div key={year} className='content-wrapper-post-list'>
              <div className='flex gap-4 items-center text-neutral-400 dark:text-neutral-600'>
                <div>{year}</div>
                <div className='w-full h-px bg-neutral-100 dark:bg-neutral-900' />
              </div>
              {yearPosts.map((post) => (
                <PostListItem key={post.slug} post={post} />
              ))}
            </div>
          ))}
      </section>
    </div>
  );
}
