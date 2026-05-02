import Link from 'next/link';
import { Category } from '@/lib/types';

interface Props {
  category: Category;
}

export default function CategoryCard({ category }: Props) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="category-card"
      style={{ borderLeft: '3px solid var(--primary)' }}
      aria-label={`${category.name} tutorials dekhein`}
    >
      <span className="category-card-icon" aria-hidden="true">{category.icon}</span>
      <h3 className="category-card-name">{category.name}</h3>
      <p className="category-card-hinglish" style={{ color: 'var(--primary)' }}>
        {category.hinglishName}
      </p>
      <p className="category-card-desc">{category.shortDescription}</p>
      <p className="category-card-count" style={{ color: 'var(--primary)' }}>
        {category.postCount > 0
          ? `${category.postCount} tutorials →`
          : 'Tutorials jald aayenge →'}
      </p>
    </Link>
  );
}

