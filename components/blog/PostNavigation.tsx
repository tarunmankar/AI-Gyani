import Link from 'next/link';
import { Post } from '@/lib/types';

interface Props {
  prev: Post | null;
  next: Post | null;
}

export default function PostNavigation({ prev, next }: Props) {
  if (!prev && !next) return null;

  return (
    <div className="post-navigation" style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
      gap: '20px', 
      marginTop: '48px',
      paddingTop: '32px',
      borderTop: '2px solid var(--border-light)'
    }}>
      {prev ? (
        <Link href={`/blog/${prev.slug}`} className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
          <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
            ← Pichla Tutorial
          </span>
          <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.4 }}>
            {prev.frontmatter.title}
          </h4>
        </Link>
      ) : <div />}

      {next ? (
        <Link href={`/blog/${next.slug}`} className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', textDecoration: 'none', textAlign: 'right' }}>
          <span style={{ fontSize: '12px', color: '#6366f1', fontWeight: 600, textTransform: 'uppercase', marginBottom: '8px' }}>
            Agla Tutorial →
          </span>
          <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.4 }}>
            {next.frontmatter.title}
          </h4>
        </Link>
      ) : <div />}
    </div>
  );
}
