import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

// Convert markdown to HTML
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(markdown);
  const html = result.toString();
  // Add loading="lazy" to all images
  return html.replace(/<img(.*?)>/gi, '<img$1 loading="lazy">');
}

// Add IDs to headings in rendered HTML for TOC linking
export function addHeadingIds(html: string): string {
  return html.replace(/<(h[23])>(.*?)<\/\1>/gi, (match, tag, text) => {
    const id = text
      .replace(/<[^>]+>/g, '') // strip inner tags
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    return `<${tag} id="${id}">${text}</${tag}>`;
  });
}

// Slugify any string
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Truncate text to a given length
export function truncate(text: string, maxLength = 160): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s+\S*$/, '') + '...';
}

// Format reading time in Hinglish
export function formatReadingTime(minutes: number): string {
  if (minutes <= 1) return '1 min mein padhein';
  return `${minutes} min mein padhein`;
}

// Generate canonical URL
export function getCanonicalUrl(path: string): string {
  const baseUrl = 'https://www.aigyani.in';
  return `${baseUrl}${path.startsWith('/') ? path : '/' + path}`;
}

// Base URL
export const BASE_URL = 'https://www.aigyani.in';
export const SITE_NAME = 'AI Gyani';
export const DEFAULT_AUTHOR = 'Tarun';
