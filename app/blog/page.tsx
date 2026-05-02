import type { Metadata } from 'next';
import BlogClient from './BlogClient';
import { getAllPosts } from '@/lib/posts';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Sab AI Tutorials — Hinglish Mein Seekho',
  description: 'AI Gyani ke sab free tutorials ek jagah — AI Basics, Machine Learning, Deep Learning, Generative AI aur zyada. Beginners ke liye Hinglish mein.',
  alternates: { canonical: 'https://www.aigyani.in/blog' },
  openGraph: {
    title: 'Sab AI Tutorials | AI Gyani',
    description: 'Free AI tutorials in Hinglish — beginners se advanced tak sab categories.',
    url: 'https://www.aigyani.in/blog',
  },
};

const webPageSchema = {
  name: 'AI Gyani — Sab Tutorials',
  url: 'https://www.aigyani.in/blog',
  description: 'All AI tutorials in Hinglish on AI Gyani',
  inLanguage: 'hi-IN',
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <JsonLd type="WebPage" data={webPageSchema} />
      <div style={{ background: 'var(--bg-alt)', padding: '48px 0 32px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <h1 className="section-title">📚 Sab Tutorials</h1>
          <div className="divider" style={{ margin: '12px 0 12px' }} />
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', maxWidth: '640px', lineHeight: 1.7 }}>
            AI Gyani par milenge aapko tutorials — AI Basics se lekar Generative AI tak, sab Hinglish mein.
            Har ek tutorial carefully likha gaya hai beginners ko dhyan mein rakhkar. Category filter use karke apna topic dhundho.
          </p>
        </div>
      </div>
      <div className="section-sm">
        <div className="container">
          <BlogClient posts={posts} />
        </div>
      </div>
    </>
  );
}
