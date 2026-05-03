import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact AI Gyani — Tarun Mankar se Baat Karein',
  description: 'AI Gyani se contact karein. Content suggestions, technical sawal, collaboration, ya feedback — hum personally har message padhte hain.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div className="prose" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Contact AI Gyani</h1>

        <p>
          Namaste! Main <strong>Tarun Mankar</strong> hoon — AI Gyani ka founder. Hum ek chhoti si team hain
          jo genuinely chahti hai ki India ke har student aur professional ko AI accessible lage.
        </p>

        <p>
          Isliye hum har message personally padhte hain. Automated replies nahi — real jawab milta hai.
        </p>

        <hr />

        <h2>📧 Email karein</h2>
        <p>
          Sabse fast aur direct tarika:&nbsp;
          <a href="mailto:contact@aigyani.in"><strong>contact@aigyani.in</strong></a>
        </p>
        <p>
          <strong>Response time:</strong> Weekdays mein 24-48 ghante ke andar reply aata hai.
          Weekends par thoda zyada time lag sakta hai.
        </p>

        <hr />

        <h2>📨 Kis Baare Mein Contact Karein?</h2>

        <h3>✅ Content aur Technical Sawal</h3>
        <p>
          Koi post padh raha tha aur kuch samajh nahi aaya? Koi concept aur depth mein explain chahiye?
          Seedha email karo — main ya toh reply mein explain karunga ya ek nayi post likhne ki koshish karunga.
        </p>

        <h3>✅ Article Suggestion</h3>
        <p>
          Koi topic hai jo aap AI Gyani par dekhna chahte hain — Python, Deep Learning, Career, Tools?
          Batao — aapki request priority list mein jaayegi.
        </p>

        <h3>✅ Bug / Galti Report</h3>
        <p>
          Kisi post mein factual galti mili? Code kaam nahi kar raha? Screenshot ke saath email karo.
          Hum 24 ghante mein fix karne ki koshish karte hain.
        </p>

        <h3>✅ Collaboration / Guest Post</h3>
        <p>
          Agar aap AI ya tech field mein kaam karte hain aur AI Gyani ke saath collaborate karna chahte hain —
          guest articles, interviews, ya partnerships ke liye email karo with subject line: <em>"Collaboration Inquiry"</em>.
        </p>

        <h3>✅ Advertising / Sponsorship</h3>
        <p>
          Agar aap apne AI tool, course, ya product ko AI Gyani ke padhne walon tak pahunchana chahte hain —
          email karo with subject: <em>"Sponsorship Inquiry"</em>. Sirf relevant, high-quality products ko hi
          consider kiya jaata hai.
        </p>

        <hr />

        <h2>❓ Frequently Asked Questions</h2>

        <h3>Q: Kya main apna code ya project share karke help maang sakta hoon?</h3>
        <p>
          Haan! Email mein code paste karo (ya GitHub link do) aur clearly batao kahan problem aa rahi hai.
          Common debugging questions ke liye try karo pehle — aapko wahan bhi help milegi community se.
        </p>

        <h3>Q: Kya AI Gyani par free courses hain?</h3>
        <p>
          Abhi ke liye saara content <strong>bilkul free</strong> hai — koi paywall nahi, koi login nahi.
          Sirf padho aur seekho. Future mein agar premium content aaya, toh pehle newsletter subscribers
          ko inform kiya jaayega.
        </p>

        <h3>Q: Kya aap 1-on-1 mentoring dete hain?</h3>
        <p>
          Abhi formal mentoring program nahi hai. Lekin agar aapke specific career questions hain —
          email karo, main brief guidance zaroor de sakta hoon.
        </p>

        <h3>Q: Main AI Gyani ki team mein join kar sakta hoon?</h3>
        <p>
          Hum actively contributors dhundh rahe hain — writers, code reviewers, translators.
          Interested hain? Email karo with subject: <em>"Contributor Application"</em> aur batao
          aap kaise contribute karna chahenge.
        </p>

        <hr />

        <h2>🔗 Social Presence</h2>
        <p>
          Email ke alawa aap in platforms par bhi AI Gyani ko follow kar sakte hain
          (links jald aayenge — tab tak email hi best option hai):
        </p>
        <ul>
          <li>📸 <strong>Instagram:</strong> @aigyani.in (Coming Soon)</li>
          <li>💼 <strong>LinkedIn:</strong> Tarun Mankar</li>
          <li>🐙 <strong>GitHub:</strong> github.com/tarunmankar</li>
        </ul>

        <hr />

        <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginTop: '32px' }}>
          AI Gyani ka mission simple hai — AI seekhna India ke liye accessible banana.
          Aapke har message se hum aur better hote hain. Shukriya! 🙏
        </p>
        <p>— <strong>Tarun Mankar</strong>, Founder, AI Gyani</p>
      </div>
    </div>
  );
}

