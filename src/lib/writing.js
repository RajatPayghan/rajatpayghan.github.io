// src/lib/blogs.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'src/app/writing/(content)');

export function getBlogs() {
  const folders = fs.readdirSync(CONTENT_DIR);
  return folders.filter((folder) => {
    const mdxPath = path.join(CONTENT_DIR, folder, 'page.mdx');
    return fs.existsSync(mdxPath);
  });
}

export function getBlogMetadata() {
  const blogSlugs = getBlogs();

  return blogSlugs.map((slug) => {
    const mdxPath = path.join(CONTENT_DIR, slug, 'page.mdx');
    const fileContent = fs.readFileSync(mdxPath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug,
      ...data, // includes title, date, tags, etc.
    };
  });
}
