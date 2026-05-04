import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllCategories, getCategoryBySlug } from '@/content/categories';
import { getPostsByCategory } from '@/lib/posts';
import PostGrid from '@/components/blog/PostGrid';
import Breadcrumb from '@/components/blog/Breadcrumb';
import JsonLd, { breadcrumbSchema } from '@/components/seo/JsonLd';

interface Props {
  params: { category: string };
}

export function generateStaticParams() {
  return getAllCategories().map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cat = getCategoryBySlug(params.category);
  if (!cat) return { title: 'Category Nahi Mili' };
  return {
    title: `${cat.name} Tutorials — Hinglish Mein`,
    description: cat.description,
    alternates: { canonical: `https://www.aigyani.in/category/${cat.slug}` },
    openGraph: {
      title: `${cat.name} Tutorials | AI Gyani`,
      description: cat.description,
      url: `https://www.aigyani.in/category/${cat.slug}`,
    },
  };
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.category);
  if (!category) notFound();

  const posts = getPostsByCategory(params.category);
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Categories', href: '/blog' },
    { label: category.name, href: `/category/${category.slug}` },
  ];

  return (
    <>
      <JsonLd type="BreadcrumbList" data={breadcrumbSchema(breadcrumbs)} />
      <JsonLd type="WebPage" data={{
        name: `${category.name} Tutorials | AI Gyani`,
        description: category.description,
        url: `https://www.aigyani.in/category/${category.slug}`,
        inLanguage: 'hi-IN',
      }} />

      <div style={{ background: category.bgColor, borderBottom: '1px solid var(--border)', padding: '48px 0' }}>
        <div className="container">
          <Breadcrumb items={breadcrumbs} />
          <div className="cat-hero-inner">
            <span className="cat-hero-icon" aria-hidden="true">{category.icon}</span>
            <div>
              <h1 style={{ fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 800, marginBottom: '10px' }}>
                {category.name}
              </h1>
              <p style={{ fontSize: '13px', fontWeight: 700, color: category.color, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {category.hinglishName}
              </p>
              <p className="cat-hero-desc">{category.description}</p>
              <p style={{ marginTop: '16px', fontSize: '14px', color: 'var(--text-muted)' }}>
                {posts.length > 0 ? `${posts.length} tutorials` : 'Tutorials jald aayenge'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="section-sm">
        <div className="container">
          <PostGrid
            posts={posts}
            emptyMessage={`${category.name} Tutorials Jald Aa Rahe Hain`}
            emptySubtext={`Tarun abhi ${category.hinglishName} ke tutorials likh raha hai. Subscribe karein aur jab post aaye notification paayein.`}
          />
        </div>
      </section>
    </>
  );
}
