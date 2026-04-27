import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us — Tarun Mankar | AI Gyani',
  description: 'AI Gyani ke founder Tarun Mankar ke baare mein janiye. Software Engineer aur AI Content Creator jo complex AI topics ko asaan Hinglish mein sikhate hain.',
};

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div className="prose" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>About AI Gyani</h1>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          padding: '24px',
          background: 'var(--bg-alt)',
          borderRadius: '16px',
          border: '1px solid var(--border)',
          marginBottom: '32px'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--primary), var(--accent))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '2rem',
            fontWeight: '800',
            flexShrink: 0
          }}>TM</div>
          <div>
            <div style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-primary)' }}>Tarun Mankar</div>
            <div style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: '600', marginBottom: '4px' }}>Software Engineer &amp; AI Content Creator</div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>📍 India &nbsp;·&nbsp; 🚀 AI Gyani Founder</div>
          </div>
        </div>

        <h2>Mere Baare Mein</h2>
        <p>
          Namaste! Main <strong>Tarun Mankar</strong> hoon — ek Software Engineer aur AI Content Creator.
          Kuch saal pehle jab maine AI seekhna shuru kiya, toh ek problem baar-baar aati thi: best resources sirf complex English mein the.
          Hindi ya Hinglish mein kuch dhundhte the toh ya toh bahut purana milta tha, ya itna surface-level ki koi kaam nahi aata tha.
        </p>
        <p>
          Isliye maine <strong>AI Gyani</strong> banaya — April 2026 mein. Ek aisa platform jahan AI, Machine Learning,
          Python aur Mathematics ko bilkul real bhasha mein sikhaya jaye. Waise jaisa main khud seekhna chahta tha.
        </p>

        <h2>AI Gyani Ka Mission</h2>
        <p>
          Har Hindustani student, fresher, ya working professional jo AI seekhna chahta hai — chahe uski English strong ho ya nahi —
          wo yahan se confidently shuru kar sake. No jargon. No unnecessary complexity. Sirf kaam ki baatein, asaan bhasha mein.
        </p>

        <h2>Yahan Kya Milega?</h2>
        <ul>
          <li><strong>AI Basics:</strong> Zero se shuru karne walon ke liye — koi background nahi chahiye.</li>
          <li><strong>Python for AI:</strong> Variables se lekar Web Scraping tak — step-by-step tutorials.</li>
          <li><strong>Mathematics for AI:</strong> Linear Algebra, Calculus, Statistics — bina darr ke.</li>
          <li><strong>Machine Learning:</strong> Real models banana — code ke saath, theory ke saath.</li>
          <li><strong>Projects:</strong> Practical cheezein jo resume mein dikh sakein.</li>
        </ul>

        <h2>Contact Karein</h2>
        <p>
          Koi sawal hai, koi feedback hai, ya sirf baat karni hai AI ke baare mein — main personally
          emails padhta hoon. Mail karo: <a href="mailto:contact@aigyani.in">contact@aigyani.in</a>
        </p>

        <p style={{ marginTop: '32px', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
          — Tarun Mankar, Founder, AI Gyani
        </p>
      </div>
    </div>
  );
}
