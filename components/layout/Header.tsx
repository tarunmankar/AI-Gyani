'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const tutorialSubmenus = [
  { href: '/category/ai-basics', label: 'AI Basics' },
  { href: '/category/python-for-ai', label: 'Python for AI' },
  { href: '/category/mathematics-for-ai', label: 'Math for AI' },
  { href: '/category/machine-learning', label: 'Machine Learning' },
  { href: '/category/deep-learning', label: 'Deep Learning' },
  { href: '/category/generative-ai-llms', label: 'Generative AI' },
  { href: '/category/ai-tools-frameworks', label: 'Tools & Frameworks' },
  { href: '/category/projects-deployment', label: 'Projects' },
  { href: '/category/projects-deployment', label: 'Deployment' },
  { href: '/category/ai-ethics-future', label: 'Career & Roadmap' },
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
              <Link href="/" className={`nav-link${pathname === '/' ? ' active' : ''}`}>Home</Link>
              
              <div className="nav-dropdown-wrapper">
                <button className="nav-link nav-dropdown-btn">
                  Tutorials
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '4px', display: 'inline-block'}}><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <div className="nav-dropdown">
                  {tutorialSubmenus.map((link, idx) => (
                    <Link
                      key={idx}
                      href={link.href}
                      className={`dropdown-link${pathname === link.href ? ' active' : ''}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
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
        <Link href="/" className={`nav-link${pathname === '/' ? ' active' : ''}`} onClick={() => setMenuOpen(false)}>Home</Link>
        <div className="mobile-dropdown-header">📚 Tutorials</div>
        <div className="mobile-dropdown-list">
          {tutorialSubmenus.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={`nav-link mobile-dropdown-link${pathname === link.href ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Link href="/blog" className="btn btn-primary mt-4" onClick={() => setMenuOpen(false)}>
          Sab Tutorials Dekhein →
        </Link>
      </nav>
    </>
  );
}
