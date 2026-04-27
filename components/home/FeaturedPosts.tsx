import Link from 'next/link';
import PostCard from '@/components/blog/PostCard';
import { Post } from '@/lib/types';

interface Props {
  posts: Post[];
}

export default function FeaturedPosts({ posts }: Props) {
  return (
    <section className="section" style={{ background: 'var(--bg-alt)' }} aria-labelledby="featured-heading">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="featured-heading">
            ⭐ Featured Tutorials
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            Tarun ke best tutorials — sirf aapke liye curated
          </p>
        </div>

        {posts.length > 0 ? (
          <>
            <div className="grid-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <Link href="/blog" className="btn btn-primary">
                Aur Tutorials Dekhein →
              </Link>
            </div>
          </>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon">✍️</div>
            <h3>Tutorials Likhe Ja Rahe Hain!</h3>
            <p>Tarun abhi naye tutorials likh raha hai. Jald hi yahan bahut saare posts milenge.</p>
            <Link href="/category/ai-basics" className="btn btn-primary">
              Categories Explore Karein →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
