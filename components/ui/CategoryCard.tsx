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
      style={{ '--cat-color': category.color, '--cat-bg': category.bgColor } as any}
      aria-label={`${category.name} tutorials dekhein`}
    >
      <div className="category-card-watermark" aria-hidden="true">{category.icon}</div>
      <div className="category-card-icon-wrapper">
        <span className="category-card-icon" aria-hidden="true">{category.icon}</span>
      </div>
      <h3 className="category-card-name">{category.name}</h3>
      <p className="category-card-hinglish">
        {category.hinglishName}
      </p>
      <p className="category-card-desc">{category.shortDescription}</p>
      <div className="category-card-footer">
        <span className="category-card-arrow">→</span>
      </div>
    </Link>
  );
}

