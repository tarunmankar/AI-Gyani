import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'AI Gyani ki Privacy Policy. Janiye hum aapka data kaise use aur secure karte hain.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div className="prose" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Privacy Policy</h1>
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        
        <p>Welcome to AI Gyani (aigyani.in). Hamari website par aapki privacy hamare liye bahut zaroori hai. Ye Privacy Policy document batata hai ki hum kis tarah ka data collect karte hain aur use kaise istemaal karte hain.</p>

        <h2>1. Information We Collect</h2>
        <p>Jab aap hamari website visit karte hain, toh hum kuch non-personal information collect kar sakte hain, jaise:</p>
        <ul>
          <li>Aapka IP address aur browser type (Analytics ke liye).</li>
          <li>Aap hamari website par kitna time spend karte hain aur kaunse pages visit karte hain.</li>
          <li>Agar aap humein contact karte hain, toh aapka email address aur naam.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>Aapke dwara di gayi jankari ka istemaal hum in kaamo ke liye karte hain:</p>
        <ul>
          <li>Website ka user experience behtar banane ke liye.</li>
          <li>Aapke sawalon ka jawab dene ke liye (Contact emails).</li>
          <li>Website ke traffic aur trends ko analyze karne ke liye.</li>
        </ul>

        <h2>3. Third-Party Ads (Google AdSense)</h2>
        <p>
          We use third-party advertising companies, like Google AdSense, to serve ads when you visit our website. 
          These companies may use information (not including your name, address, email address, or telephone number) 
          about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.
        </p>
        <p>
          Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.
        </p>

        <h2>4. Cookies</h2>
        <p>Hum "Cookies" ka istemaal karte hain taaki aapko ek personalized experience de sakein. Aap chahein toh apne browser settings mein jaakar cookies ko disable kar sakte hain.</p>

        <h2>5. Contact Us</h2>
        <p>Agar aapko is Privacy Policy ke baare mein koi doubt ya sawal hai, toh aap humse contact kar sakte hain:</p>
        <p>Email: <a href="mailto:contact@aigyani.in">contact@aigyani.in</a></p>
      </div>
    </div>
  );
}
