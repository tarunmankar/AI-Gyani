import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from '@/lib/posts';
import { markdownToHtml, addHeadingIds, formatReadingTime, BASE_URL } from '@/lib/utils';
import { extractToc } from '@/lib/posts';
import Breadcrumb from '@/components/blog/Breadcrumb';
import TableOfContents from '@/components/blog/TableOfContents';
import RelatedPosts from '@/components/blog/RelatedPosts';
import JsonLd, { articleSchema, breadcrumbSchema } from '@/components/seo/JsonLd';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: 'Post Nahi Mila' };
  const { frontmatter, slug } = post;
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    authors: [{ name: frontmatter.author || 'Tarun' }],
    keywords: frontmatter.tags,
    alternates: { canonical: `${BASE_URL}/blog/${slug}` },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: `${BASE_URL}/blog/${slug}`,
      type: 'article',
      authors: [frontmatter.author || 'Tarun'],
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const { frontmatter, content, slug } = post;
  const htmlContent = addHeadingIds(await markdownToHtml(content));
  const toc = extractToc(content);
  const relatedPosts = getRelatedPosts(slug, frontmatter.relatedPosts || []);

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: frontmatter.categoryLabel || frontmatter.category, href: `/category/${frontmatter.category}` },
    { label: frontmatter.title, href: `/blog/${slug}` },
  ];

  return (
    <>
      <JsonLd type="Article" data={articleSchema({ title: frontmatter.title, description: frontmatter.description, slug, author: frontmatter.author || 'Tarun' })} />
      <JsonLd type="BreadcrumbList" data={breadcrumbSchema(breadcrumbs)} />

      <div className="container">
        <div style={{ paddingTop: '40px' }}>
          <Breadcrumb items={breadcrumbs} />
        </div>

        <header className="post-header">
          <div className="badge" style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)', marginBottom: '16px' }}>
            {frontmatter.categoryLabel || frontmatter.category}
          </div>
          <h1 className="post-title">{frontmatter.title}</h1>
          <div className="post-meta">
            <div className="author-card" style={{ display: 'inline-flex', padding: '10px 16px', marginTop: 0 }}>
              <div className="author-avatar" style={{ width: '36px', height: '36px', fontSize: '1rem' }}>T</div>
              <div style={{ marginLeft: '10px' }}>
                <div className="author-name" style={{ fontSize: '14px' }}>{frontmatter.author || 'Tarun'}</div>
                <div className="author-label">AI Educator</div>
              </div>
            </div>
            <span>·</span>
            <span>📖 {formatReadingTime(frontmatter.readingTime)}</span>
            {frontmatter.tags?.slice(0, 2).map((tag) => (
              <span key={tag} className="post-card-tag">{tag}</span>
            ))}
          </div>
        </header>

        <div className="post-layout" style={{ paddingBottom: '80px' }}>
          <div>
            {frontmatter.tableOfContents && toc.length > 0 && (
              <div className="post-sidebar" style={{ display: 'block' }}>
                <TableOfContents items={toc} />
              </div>
            )}
            <article
              className="prose"
              itemScope
              itemType="https://schema.org/Article"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
            <RelatedPosts posts={relatedPosts} />
          </div>

          {frontmatter.tableOfContents && toc.length > 0 && (
            <aside className="post-sidebar" aria-label="Table of contents">
              <TableOfContents items={toc} />
            </aside>
          )}
        </div>
      </div>
    </>
  );
}
