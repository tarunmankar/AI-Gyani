import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-content">
          <div className="hero-tag" role="text">
            🇮🇳 India ka #1 AI Learning Platform
          </div>

          <h1 id="hero-heading">
            AI Seekho,{' '}
            <span className="highlight">Apni Bhasha Mein</span>
          </h1>

          <p>
            Artificial Intelligence, Machine Learning, Deep Learning aur Generative AI —
            sab kuch Hinglish mein, step-by-step, beginners se lekar advanced level tak.
            Free tutorials by <strong>Tarun</strong>.
          </p>

          <div className="hero-actions">
            <Link href="/blog" className="btn btn-primary">
              Tutorials Dekhein →
            </Link>
            <Link href="/category/ai-basics" className="btn btn-outline">
              AI Basics Se Shuru Karein
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
