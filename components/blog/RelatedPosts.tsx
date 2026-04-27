import Link from 'next/link';
import { Post } from '@/lib/types';

interface Props {
  posts: Post[];
}

export default function RelatedPosts({ posts }: Props) {
  if (!posts || posts.length === 0) return null;
  return (
    <section className="related-posts" aria-label="Related posts">
      <h2 className="section-title" style={{ marginBottom: '24px', fontSize: '1.25rem' }}>
        🔗 Yeh Bhi Padhein
      </h2>
      <div className="grid-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card" style={{ padding: '20px', display: 'block', textDecoration: 'none' }}>
            <span style={{ fontSize: '12px', color: '#6366f1', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', display: 'block' }}>
              {post.frontmatter.categoryLabel}
            </span>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', lineHeight: 1.4 }}>
              {post.frontmatter.title}
            </h3>
            <p style={{ fontSize: '13px', color: '#64748b', marginTop: '8px' }}>Padhein →</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
