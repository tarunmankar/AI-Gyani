import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'AI Gyani ki Terms and Conditions. Website use karne ke rules aur regulations.',
};

export default function TermsConditionsPage() {
  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div className="prose" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Terms and Conditions</h1>
        <p><strong>Last Updated: April 27, 2026</strong></p>
        
        <p>Welcome to AI Gyani! Hamari website (aigyani.in) ko access karke aap in Terms and Conditions ko maante hain. Agar aap in terms se sehmat nahi hain, toh kripya is website ka use na karein.</p>

        <h2>1. Website Use Rules</h2>
        <p>
          AI Gyani ek educational platform hai. Aap yahan maujood content ko sirf padhne aur seekhne ke liye use kar sakte hain. Kisi bhi content ko galat irade (illegal purposes) se use karna sakht mana hai.
        </p>

        <h2>2. Content Usage (Copyright)</h2>
        <p>
          Is website ka saara original content (articles, tutorials, images) AI Gyani aur Tarun ka copyright hai. Aap hamare content ko bina permission liye kisi dusre blog ya website par copy-paste karke publish nahi kar sakte. Agar aap reference dena chahte hain, toh link (backlink) de sakte hain.
        </p>

        <h2>3. Third-Party Links</h2>
        <p>
          Hamari website par kuch aise links ho sakte hain jo kisi doosri website (third-party) par le jayein. Hum un websites ke content ya privacy policy ke liye zimmedar nahi hain.
        </p>

        <h2>4. Liability Disclaimer</h2>
        <p>
          Hum poori koshish karte hain ki AI Gyani par di gayi jankari 100% sahi ho, lekin hum iski koi legally binding guarantee nahi dete. Is website ki information use karke agar aapka koi nuksaan (loss) hota hai, toh uske liye AI Gyani ya iske author zimmedar nahi honge.
        </p>

        <h2>5. Changes to Terms</h2>
        <p>
          Hum kisi bhi waqt in Terms and Conditions ko update ya change kar sakte hain. Aapko salah di jati hai ki aap samay-samay par is page ko check karte rahein.
        </p>

        <h2>6. Contact Us</h2>
        <p>Agar aapko in terms ke baare mein koi sawal hai, toh humein yahan email karein: <a href="mailto:contact@aigyani.in">contact@aigyani.in</a></p>
      </div>
    </div>
  );
}
