import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, PostFrontmatter, TocItem } from './types';

const POSTS_DIRECTORY = path.join(process.cwd(), 'content', 'posts');

// Get all category folder slugs
function getCategoryFolders(): string[] {
  if (!fs.existsSync(POSTS_DIRECTORY)) return [];
  return fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((item) => fs.statSync(path.join(POSTS_DIRECTORY, item)).isDirectory());
}

// Get all posts across all categories
export function getAllPosts(): Post[] {
  const categoryFolders = getCategoryFolders();
  const posts: Post[] = [];

  for (const categorySlug of categoryFolders) {
    const categoryDir = path.join(POSTS_DIRECTORY, categorySlug);
    if (!fs.existsSync(categoryDir)) continue;

    const files = fs.readdirSync(categoryDir).filter((f) => f.endsWith('.md'));

    for (const file of files) {
      const filePath = path.join(categoryDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      const slug = file.replace(/\.md$/, '');

      posts.push({
        frontmatter: {
          title: data.title || '',
          slug: data.slug || slug,
          category: data.category || categorySlug,
          categoryLabel: data.categoryLabel || '',
          description: data.description || '',
          author: data.author || 'Tarun',
          tags: data.tags || [],
          featured: data.featured || false,
          relatedPosts: data.relatedPosts || [],
          readingTime: data.readingTime || estimateReadingTime(content),
          tableOfContents: data.tableOfContents || false,
          order: data.order || 999,
          image: data.image || '',
          date: data.date || '2026-05-01',
        } as PostFrontmatter,
        content,
        slug: data.slug || slug,
        excerpt: data.description || content.slice(0, 160).replace(/[#*`]/g, '').trim() + '...',
      });
    }
  }

  // Sort posts by order (ascending)
  return posts.sort((a, b) => {
    return (a.frontmatter.order || 999) - (b.frontmatter.order || 999);
  });
}

// Get posts by category slug
export function getPostsByCategory(categorySlug: string): Post[] {
  return getAllPosts().filter((post) => post.frontmatter.category === categorySlug);
}

// Get featured posts
export function getFeaturedPosts(limit = 6): Post[] {
  return getAllPosts()
    .filter((post) => post.frontmatter.featured)
    .slice(0, limit);
}

// Get single post by slug
export function getPostBySlug(slug: string): Post | null {
  const allPosts = getAllPosts();
  return allPosts.find((post) => post.slug === slug) || null;
}

// Get related posts
export function getRelatedPosts(currentSlug: string, relatedSlugs: string[]): Post[] {
  const allPosts = getAllPosts();
  return relatedSlugs
    .map((slug) => allPosts.find((p) => p.slug === slug))
    .filter(Boolean) as Post[];
}

// Get all post slugs (for generateStaticParams)
export function getAllPostSlugs(): { slug: string }[] {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

// Extract table of contents from markdown content
export function extractToc(content: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const toc: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

    toc.push({ id, text, level });
  }

  return toc;
}

// Estimate reading time
export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}
