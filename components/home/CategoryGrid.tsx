import Link from 'next/link';
import CategoryCard from '@/components/ui/CategoryCard';
import { getAllCategories } from '@/content/categories';

export default function CategoryGrid() {
  const categories = getAllCategories();
  return (
    <section className="section" aria-labelledby="categories-heading">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title" id="categories-heading">
            Kya Seekhna Chahte Ho?
          </h2>
          <div className="divider" />
          <p className="section-subtitle">
            9 categories mein structured tutorials — beginner se expert tak ka safar
          </p>
        </div>

        <div className="grid-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/blog" className="btn btn-outline">
            Sab Tutorials Dekhein →
          </Link>
        </div>
      </div>
    </section>
  );
}
