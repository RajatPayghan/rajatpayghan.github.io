// src/lib/writing.js
import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'src/app/writing/(content)');

export function getBlogs() {
  const folders = fs.readdirSync(CONTENT_DIR);
  return folders.filter((folder) => {
    const mdxPath = path.join(CONTENT_DIR, folder, 'page.mdx');
    return fs.existsSync(mdxPath);
  });
}

function parseMetadataFromMDX(content) {
  // Look for export const metadata = { ... }
  const metadataRegex = /export\s+const\s+metadata\s*=\s*({[\s\S]*?});/;
  const match = content.match(metadataRegex);

  if (!match) {
    return {};
  }

  try {
    // Use Function constructor to safely evaluate the object
    // This creates: new Function('return ' + objectString)()
    const objectString = match[1];
    const metadata = new Function('return ' + objectString)();
    return metadata;
  } catch (error) {
    console.warn('Failed to parse metadata from MDX file:', error);
    return {};
  }
}

export function getBlogMetadata() {
  const blogSlugs = getBlogs();

  return blogSlugs.map((slug) => {
    const mdxPath = path.join(CONTENT_DIR, slug, 'page.mdx');
    const fileContent = fs.readFileSync(mdxPath, 'utf-8');
    const metadata = parseMetadataFromMDX(fileContent);

    return {
      slug,
      title: metadata.title || 'Untitled',
      date: metadata.date || '',
      description: metadata.description || '',
      tags: metadata.tags || [],
      ...metadata,
    };
  });
}

export function getBlogBySlug(slug) {
  if (!slug) {
    console.warn('getBlogBySlug called with undefined or empty slug');
    return null;
  }

  const mdxPath = path.join(CONTENT_DIR, slug, 'page.mdx');

  if (!fs.existsSync(mdxPath)) {
    return null;
  }

  const fileContent = fs.readFileSync(mdxPath, 'utf-8');
  const metadata = parseMetadataFromMDX(fileContent);

  return {
    slug,
    metadata: {
      title: metadata.title || 'Untitled',
      date: metadata.date || '',
      description: metadata.description || '',
      tags: metadata.tags || [],
      ...metadata,
    },
  };
}
