export default function AuthorBio() {
  return (
    <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '2px solid var(--border-light)' }}>
      <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '16px' }}>
        About the Author
      </h3>
      <div className="author-card">
        <div className="author-avatar">TM</div>
        <div>
          <div className="author-name">Tarun Mankar</div>
          <div className="author-label" style={{ marginBottom: '8px' }}>Software Engineer &amp; AI Content Creator</div>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            Main ek Software Engineer hoon jo AI aur Machine Learning ke baare mein Hinglish mein likhta hai.
            Maine AI Gyani isliye banaya taaki koi bhi Indian student bina English ki tension ke AI seekh sake —
            bilkul free, bilkul asaan.
          </p>
        </div>
      </div>
    </div>
  );
}
