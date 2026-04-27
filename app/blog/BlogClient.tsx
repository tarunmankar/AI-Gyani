'use client';
import { useState } from 'react';
import PostGrid from '@/components/blog/PostGrid';
import { Post } from '@/lib/types';
import { getAllCategories } from '@/content/categories';

interface Props {
  posts: Post[];
}

const categories = getAllCategories();

export default function BlogClient({ posts }: Props) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? posts
    : posts.filter((p) => p.frontmatter.category === activeCategory);

  return (
    <>
      <div className="filter-tabs" role="tablist" aria-label="Category filter">
        <button
          role="tab"
          className={`filter-tab${activeCategory === 'all' ? ' active' : ''}`}
          onClick={() => setActiveCategory('all')}
          aria-selected={activeCategory === 'all'}
        >
          Sab ({posts.length})
        </button>
        {categories.map((cat) => {
          const count = posts.filter((p) => p.frontmatter.category === cat.slug).length;
          if (count === 0) return null;
          return (
            <button
              key={cat.slug}
              role="tab"
              className={`filter-tab${activeCategory === cat.slug ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat.slug)}
              aria-selected={activeCategory === cat.slug}
            >
              {cat.icon} {cat.name} ({count})
            </button>
          );
        })}
      </div>
      <PostGrid
        posts={filtered}
        emptyMessage="Is Category Mein Abhi Koi Tutorial Nahi"
        emptySubtext="Yeh tutorials jald aane wale hain. Doosri categories check karein ya baad mein aayein."
      />
    </>
  );
}
