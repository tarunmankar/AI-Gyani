import PostCard from './PostCard';
import { Post } from '@/lib/types';

interface Props {
  posts: Post[];
  emptyMessage?: string;
  emptySubtext?: string;
}

export default function PostGrid({ posts, emptyMessage, emptySubtext }: Props) {
  if (!posts || posts.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">📚</div>
        <h3>{emptyMessage || 'Abhi Koi Tutorial Nahi Hai'}</h3>
        <p>{emptySubtext || 'Posts jald aa rahe hain! Thoda intezaar karein — Tarun naye tutorials likh raha hai.'}</p>
      </div>
    );
  }

  return (
    <div className="grid-3">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
