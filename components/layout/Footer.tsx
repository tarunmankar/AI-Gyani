import Link from 'next/link';
import { getAllCategories } from '@/content/categories';

const categories = getAllCategories();

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Sab Tutorials' },
  { href: '/category/ai-basics', label: 'AI Basics' },
  { href: '/category/machine-learning', label: 'Machine Learning' },
  { href: '/category/deep-learning', label: 'Deep Learning' },
  { href: '/category/generative-ai-llms', label: 'Generative AI' },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo" style={{ marginBottom: '14px' }}>
              <div className="logo-icon" aria-hidden="true">🧠</div>
              <span style={{ color: '#fff', WebkitTextFillColor: '#fff' }}>AI Gyani</span>
            </div>
            <p>
              AI Gyani — aapka trusted AI teacher. Hinglish mein seekho Artificial Intelligence, Machine Learning, aur future ki technologies. Bilkul free, bilkul asaan.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Categories</h4>
            <ul>
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/category/${cat.slug}`}>{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><Link href="/blog">Sab Articles</Link></li>
              <li><Link href="/category/projects-deployment">Projects</Link></li>
              <li><Link href="/category/ai-ethics-future">AI Ethics</Link></li>
            </ul>
            <div style={{ marginTop: '24px' }}>
              <h4 style={{ marginBottom: '8px' }}>Author</h4>
              <p style={{ fontSize: '14px', color: '#94a3b8' }}>
                <strong style={{ color: '#e2e8f0' }}>Tarun</strong> — AI educator aur developer
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AI Gyani. Sab rights reserved.</p>
          <p>
            <Link href="https://www.aigyani.in" style={{ color: '#94a3b8' }}>
              www.aigyani.in
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
