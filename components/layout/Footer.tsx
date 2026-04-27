import Link from 'next/link';
import { getAllCategories } from '@/content/categories';

const categories = getAllCategories();

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'All Tutorials' },
  { href: '/category/projects-deployment', label: 'Projects' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
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
            <h4>Legal & About</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
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
