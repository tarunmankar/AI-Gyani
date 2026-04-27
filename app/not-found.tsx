import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found">
      <div>
        <h1>404</h1>
        <h2>Yeh Page Nahi Mila! 😕</h2>
        <p>Jo page aap dhundh rahe hain woh exist nahi karta ya hata diya gaya hai.</p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary">Home Jaao →</Link>
          <Link href="/blog" className="btn btn-outline">Tutorials Dekhein</Link>
        </div>
      </div>
    </div>
  );
}
