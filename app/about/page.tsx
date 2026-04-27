import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'AI Gyani ke baare mein janiye. Hum complex AI topics ko asaan Hinglish mein samjhate hain.',
};

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div className="prose" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>About Us</h1>
        <p><strong>Namaste doston! AI Gyani par aapka swagat hai.</strong></p>
        
        <h2>Hamara Purpose Kya Hai?</h2>
        <p>
          AI Gyani ek simple platform hai jahan hum complex Artificial Intelligence (AI) aur Machine Learning (ML) topics ko easy Hinglish mein samjhate hain. 
          Hamara mission hai ki har Hindustani student, professional aur tech-enthusiast bina kisi bhasha (language) ki rukawat ke AI seekh sake.
        </p>

        <h2>Aapko Yahan Kya Milega?</h2>
        <p>
          Is website par aapko milenge:
        </p>
        <ul>
          <li><strong>AI Basics:</strong> Zero se shuru karne walo ke liye.</li>
          <li><strong>Programming Tutorials:</strong> Python aur dusre tools ki step-by-step guides.</li>
          <li><strong>Deep Learning & GenAI:</strong> Latest tech jaise ChatGPT, LLMs ke baare mein jankari.</li>
          <li><strong>Projects:</strong> Real-world projects taaki aap practical seekh sakein.</li>
        </ul>

        <h2>Mera Baare Mein (Founder)</h2>
        <p>
          Mera naam Tarun hai aur main ek AI educator aur developer hoon. Maine dekha ki internet par AI ka best content sirf complex English mein available hai. 
          Isliye maine AI Gyani shuru kiya taaki main apne experiences aur knowledge ko aam bhasha mein aap sabke saath share kar saku.
        </p>

        <p>
          Agar aap AI seekhne ke is safar mein mere saath judna chahte hain, toh hamare tutorials zarur padhein. Happy Learning!
        </p>
      </div>
    </div>
  );
}
