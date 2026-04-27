'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Tutorials' },
  { href: '/category/ai-basics', label: 'AI Basics' },
  { href: '/category/machine-learning', label: 'Machine Learning' },
  { href: '/category/generative-ai-llms', label: 'GenAI' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header" role="banner">
        <div className="container">
          <div className="header-inner">
            <Link href="/" className="logo" aria-label="AI Gyani — Ghar Jaao">
              <div className="logo-icon" aria-hidden="true">🧠</div>
              <span>AI Gyani</span>
            </Link>

            <nav className="nav-links" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link${pathname === link.href ? ' active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Link href="/blog" className="btn btn-primary header-cta" style={{ padding: '9px 20px', fontSize: '14px' }}>
                Padhna Shuru Karo →
              </Link>
              <button
                className="mobile-menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Menu band karo' : 'Menu kholo'}
                aria-expanded={menuOpen}
              >
                <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
                <span style={{ opacity: menuOpen ? 0 : 1 }} />
                <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link${pathname === link.href ? ' active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/blog" className="btn btn-primary mt-4" onClick={() => setMenuOpen(false)}>
          Padhna Shuru Karo →
        </Link>
      </nav>
    </>
  );
}
