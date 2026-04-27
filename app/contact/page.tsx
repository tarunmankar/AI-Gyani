import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'AI Gyani se contact karein. Apne sawal, feedback ya business inquiries humein bhejein.',
};

export default function ContactPage() {
  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div className="prose" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Contact Us</h1>
        <p>Agar aapke paas koi sawal hai, feedback dena chahte hain, ya humse kisi bhi wajah se judna chahte hain, toh aap niche diye gaye email par contact kar sakte hain.</p>
        
        <h2>Reach Out via Email</h2>
        <p>Aap humein is email id par message bhej sakte hain:</p>
        <p>📧 <strong>Email:</strong> <a href="mailto:contact@aigyani.in">contact@aigyani.in</a></p>

        <h2>Social Media (Coming Soon)</h2>
        <p>Hum jaldi hi YouTube aur Twitter (X) par bhi active honge, jahan aap humse direct jud sakenge.</p>

        <p><strong>Note:</strong> Humein aapke emails ka jawab dene mein 24-48 ghante lag sakte hain. Hum koshish karenge ki aapke har ek sawal ka jawab dein.</p>
      </div>
    </div>
  );
}
