/**
 * @fileoverview Utilities for managing MDX blog posts with metadata extraction
 * @author RajatPayghan
 * @version 2.1.0
 * @comments 'Updated to support complete metadata structure including boolean flags and image field'
 * @borrows Metadata structure from '@/app/writing/(content)/docs.metadata.md'
 *
 * @export { getAllPostSlugs(), getAllPostsMetadata(), getPostBySlug(slug), getPostMetadataBySlug(slug)}
 *
 */

import fs from 'fs';
import path from 'path';

// Path to the MDX content directory
const CONTENT_DIR = path.join(process.cwd(), 'src/app/writing/(content)');

/**
 * Retrieves all available blog post slugs from the content directory
 *
 * @returns {string[]} Array of folder names (slugs) that contain valid MDX files
 * @example
 * const slugs = getAllPostSlugs();
 * // Returns: ['first-post', 'second-post', 'javascript-tips']
 */
export function getAllPostSlugs() {
  const folders = fs.readdirSync(CONTENT_DIR);
  return folders.filter((folder) => {
    const mdxPath = path.join(CONTENT_DIR, folder, 'page.mdx');
    return fs.existsSync(mdxPath);
  });
}

/**
 * Parses metadata from MDX file content by extracting exported metadata object
 *
 * @private
 * @param {string} content - Raw MDX file content as string
 * @returns {Object} Parsed metadata object or empty object if parsing fails
 * @example
 * // Input MDX content with: export const metadata = { title: "Hello", date: "2024-01-01" }
 * // Returns: { title: "Hello", date: "2024-01-01" }
 */
function extractMetadataFromMDX(content) {
  // Regex to match: export const metadata = { ... };
  const metadataRegex = /export\s+const\s+metadata\s*=\s*({[\s\S]*?});/;
  const match = content.match(metadataRegex);

  if (!match) {
    return {};
  }

  try {
    // Use Function constructor to safely evaluate the JavaScript object
    // This approach handles complex object syntax better than JSON.parse
    const objectString = match[1];
    const metadata = new Function('return ' + objectString)();
    return metadata;
  } catch (error) {
    console.warn(`Failed to parse metadata from MDX file: ${error.message}`);
    return {};
  }
}

/**
 * Retrieves metadata for all blog posts in the content directory
 *
 * @borrows extractMetadataFromMDX()
 * @returns {Object[]} Array of post objects with slug and complete metadata
 * @returns {string} returns[].slug - The post's URL slug
 * @returns {string} returns[].title - Post title (defaults to 'Untitled')
 * @returns {string} returns[].date - Post date (defaults to empty string)
 * @returns {string} returns[].readTime - Estimated reading time (defaults to 'About 1 min')
 * @returns {string} returns[].description - Post description (defaults to empty string)
 * @returns {string[]} returns[].tags - Array of post tags (defaults to empty array)
 * @returns {boolean} returns[].isPublished - Publication status (defaults to false)
 * @returns {boolean} returns[].isFeatured - Featured status (defaults to false)
 * @returns {string} returns[].image - Post image path (defaults to empty string)
 *
 * @example
 * const posts = getAllPostsMetadata();
 * // Returns: [
 * //   { slug: 'first-post', title: 'My First Post', date: '2024-01-01', isPublished: true, ... },
 * //   { slug: 'second-post', title: 'Another Post', date: '2024-01-02', isFeatured: true, ... }
 * // ]
 */
export function getAllPostsMetadata() {
  const postSlugs = getAllPostSlugs();

  return postSlugs.map((slug) => {
    const mdxPath = path.join(CONTENT_DIR, slug, 'page.mdx');
    const fileContent = fs.readFileSync(mdxPath, 'utf-8');
    const metadata = extractMetadataFromMDX(fileContent);

    return {
      slug,
      title: metadata.title || 'Untitled',
      date: metadata.date || '',
      readTime: metadata.readTime || 'About 1 min',
      description: metadata.description || '',
      tags: metadata.tags || [],
      isPublished: metadata.isPublished || false,
      isFeatured: metadata.isFeatured || false,
      type: metadata.type || 'post',
      image: metadata.image || '',
      excerpt: metadata.excerpt || '',
      ...metadata, // Spread any additional metadata fields
    };
  });
}

/**
 * Retrieves a complete blog post object including metadata by slug
 *
 * @borrows extractMetadataFromMDX()
 * @param {string} slug - The post's URL slug identifier
 * @returns {Object|null} Post object with slug and metadata, or null if not found
 * @returns {string} returns.slug - The post's URL slug
 * @returns {Object} returns.metadata - Complete metadata object
 * @returns {string} returns.metadata.title - Post title
 * @returns {string} returns.metadata.date - Post date
 * @returns {string} returns.metadata.readTime - Estimated reading time
 * @returns {string} returns.metadata.description - Post description
 * @returns {string[]} returns.metadata.tags - Array of post tags
 * @returns {boolean} returns.metadata.isPublished - Publication status
 * @returns {boolean} returns.metadata.isFeatured - Featured status
 * @returns {string} returns.metadata.image - Post image path
 *
 * @example
 * const post = getPostBySlug('first-post');
 * if (post) {
 *   console.log(post.slug); // 'first-post'
 *   console.log(post.metadata.title); // 'My First Post'
 *   console.log(post.metadata.isPublished); // true
 * }
 */
export function getPostBySlug(slug) {
  if (!slug) {
    console.warn('getPostBySlug called with undefined or empty slug');
    return null;
  }

  const mdxPath = path.join(CONTENT_DIR, slug, 'page.mdx');

  if (!fs.existsSync(mdxPath)) {
    console.warn(`Post not found: ${slug}`);
    return null;
  }

  const fileContent = fs.readFileSync(mdxPath, 'utf-8');
  const metadata = extractMetadataFromMDX(fileContent);

  return {
    slug,
    metadata: {
      title: metadata.title || 'Untitled',
      date: metadata.date || '',
      readTime: metadata.readTime || 'About 1 min',
      description: metadata.description || '',
      tags: metadata.tags || [],
      isPublished: metadata.isPublished || false,
      isFeatured: metadata.isFeatured || false,
      type: metadata.type || 'post',
      image: metadata.image || '',
      excerpt: metadata.excerpt || '',
      ...metadata, // Include any additional metadata fields
    },
  };
}

/**
 * Retrieves only the metadata for a specific blog post by slug
 *
 * @borrows extractMetadataFromMDX()
 * @param {string} slug - The post's URL slug identifier
 * @returns {Object|null} Metadata object or null if post not found
 * @returns {string} returns.title - Post title (defaults to 'Untitled')
 * @returns {string} returns.date - Post date (defaults to empty string)
 * @returns {string} returns.readTime - Estimated reading time (defaults to 'About 1 min')
 * @returns {string} returns.description - Post description (defaults to empty string)
 * @returns {string[]} returns.tags - Array of post tags (defaults to empty array)
 * @returns {boolean} returns.isPublished - Publication status (defaults to false)
 * @returns {boolean} returns.isFeatured - Featured status (defaults to false)
 * @returns {string} returns.image - Post image path (defaults to empty string)
 *
 * @example
 * const metadata = getPostMetadataBySlug('first-post');
 * if (metadata) {
 *   console.log(metadata.title); // 'My First Post'
 *   console.log(metadata.date); // '2024-01-01'
 *   console.log(metadata.isPublished); // true
 *   console.log(metadata.tags); // ['javascript', 'tutorial']
 * }
 */
export function getPostMetadataBySlug(slug) {
  if (!slug) {
    console.warn('getPostMetadataBySlug called with undefined or empty slug');
    return null;
  }

  const mdxPath = path.join(CONTENT_DIR, slug, 'page.mdx');

  if (!fs.existsSync(mdxPath)) {
    console.warn(`Post not found: ${slug}`);
    return null;
  }

  const fileContent = fs.readFileSync(mdxPath, 'utf-8');
  const metadata = extractMetadataFromMDX(fileContent);

  return {
    title: metadata.title || 'Untitled',
    date: metadata.date || '',
    readTime: metadata.readTime || 'About 1 min',
    description: metadata.description || '',
    tags: metadata.tags || [],
    isPublished: metadata.isPublished || false,
    isFeatured: metadata.isFeatured || false,
    type: metadata.type || 'post',
    image: metadata.image || '',
    excerpt: metadata.excerpt || '',
    ...metadata, // Include any additional metadata fields
  };
}
