// ============================================================
// AI Gyani — Type Definitions
// ============================================================

export interface Category {
  slug: string;
  name: string;
  hinglishName: string;
  description: string;
  shortDescription: string;
  icon: string;
  color: string;
  bgColor: string;
  postCount: number;
  featured: boolean;
  order: number;
}

export interface PostFrontmatter {
  title: string;
  slug: string;
  category: string;
  categoryLabel: string;
  description: string;
  author: string;
  tags: string[];
  featured: boolean;
  relatedPosts: string[];
  readingTime: number;
  tableOfContents: boolean;
  order?: number;
  image?: string;
  date?: string;
}

export interface Post {
  frontmatter: PostFrontmatter;
  content: string;
  slug: string;
  excerpt: string;
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}
