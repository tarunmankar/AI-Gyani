import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/types';
import { formatReadingTime } from '@/lib/utils';

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  const { frontmatter, slug, excerpt } = post;

  return (
    <article className="card post-card" itemScope itemType="https://schema.org/Article">
      {frontmatter.image && (
        <Link href={`/blog/${slug}`} className="post-card-image">
          <Image 
            src={frontmatter.image} 
            alt={frontmatter.title} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>
      )}
      <div className="post-card-body">
        <Link
          href={`/category/${frontmatter.category}`}
          className="post-card-category"
          style={{ color: '#6366f1' }}
        >
          {frontmatter.categoryLabel || frontmatter.category}
        </Link>

        <Link href={`/blog/${slug}`}>
          <h3 className="post-card-title" itemProp="headline">{frontmatter.title}</h3>
        </Link>

        <p className="post-card-desc" itemProp="description">
          {excerpt || frontmatter.description}
        </p>

        <div className="post-card-meta">
          <span itemProp="author" itemScope itemType="https://schema.org/Person">
            ✍️ <span itemProp="name">{frontmatter.author || 'Tarun'}</span>
          </span>
          <span>·</span>
          <span>📖 {formatReadingTime(frontmatter.readingTime)}</span>
          {frontmatter.featured && (
            <>
              <span>·</span>
              <span style={{ color: '#f59e0b', fontWeight: 600 }}>⭐ Featured</span>
            </>
          )}
        </div>

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="post-card-tags">
            {frontmatter.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="post-card-tag">{tag}</span>
            ))}
          </div>
        )}

        <div style={{ marginTop: '16px' }}>
          <Link
            href={`/blog/${slug}`}
            className="btn btn-outline"
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            Padhein →
          </Link>
        </div>
      </div>
    </article>
  );
}
