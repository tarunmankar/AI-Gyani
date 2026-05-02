import Link from 'next/link';

const reasons = [
  {
    icon: '🗣️',
    title: 'Hinglish Mein Samjhaaya',
    desc: 'Complex AI topics ko simple Hinglish mein explain kiya jata hai — koi jargon nahi, seedhi baat.',
  },
  {
    icon: '👶',
    title: 'Beginners Ke Liye',
    desc: 'Zero se shuru karo — koi prior knowledge ki zaroorat nahi. Step-by-step guide milegi.',
  },
  {
    icon: '👨‍💻',
    title: 'Expert: Tarun',
    desc: 'Tarun ek experienced AI developer hain jo complex concepts ko simple tarike se sikhate hain.',
  },
  {
    icon: '🗺️',
    title: 'Structured Curriculum',
    desc: 'Dher saare tutorials ek sahi sequence mein — basics se lekar advanced projects tak ka complete roadmap.',
  },
];

export default function WhyLearnSection() {
  return (
    <section className="section" aria-labelledby="why-heading">
      <div className="container">
        <div className="section-header centered">
          <h2 className="section-title" id="why-heading">
            AI Gyani Kyun Chunein?
          </h2>
          <div className="divider centered" />
          <p className="section-subtitle">
            Hamare saath AI seekhna ek smart decision hai
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => (
            <div key={reason.title} className="why-card">
              <div className="why-icon" aria-hidden="true">{reason.icon}</div>
              <h3 className="why-title">{reason.title}</h3>
              <p className="why-desc">{reason.desc}</p>
            </div>
          ))}
        </div>

        <div className="cta-banner">
          <h2>Apna AI Safar Aaj Hi Shuru Karein! 🚀</h2>
          <p>Free tutorials, structured learning, aur expert guidance — sab kuch ek jagah par</p>
          <Link href="/blog" className="btn">
            Tutorials Dekhein →
          </Link>
        </div>
      </div>
    </section>
  );
}
