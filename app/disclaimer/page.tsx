import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'AI Gyani ka Disclaimer. Educational purpose aur accuracy se judi zaroori baatein.',
};

export default function DisclaimerPage() {
  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <div className="prose" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>Disclaimer</h1>
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        
        <h2>1. Educational Purpose Only</h2>
        <p>
          AI Gyani (aigyani.in) par maujood saara content sirf aur sirf <strong>educational aur informational purposes</strong> ke liye banaya gaya hai. 
          Hamara maksad AI (Artificial Intelligence) aur usse judi technologies ko aam bhasha mein samjhana hai. Hum kisi bhi tarah ki professional advice nahi de rahe hain.
        </p>

        <h2>2. No Guarantee of Accuracy</h2>
        <p>
          Technology aur AI ki field bahut tezi se badal rahi hai. Hum poori koshish karte hain ki hamare articles mein di gayi jankari up-to-date aur 100% sahi ho, 
          lekin hum iski koi bhi legal guarantee ya warranty nahi dete. Agar kisi jankari mein koi bhool (error) ya purani baat hoti hai, toh uske liye hum zimmedar nahi honge.
        </p>

        <h2>3. Use at Your Own Risk</h2>
        <p>
          Is website par diye gaye kisi bhi code, tutorial, ya software tool ka istemaal aap apne risk par karte hain. 
          AI Gyani ya iske authors aapke kisi bhi data loss, device damage, ya financial loss ke liye zimmedar (liable) nahi honge.
        </p>

        <h2>4. External Links Disclaimer</h2>
        <p>
          Hamari website par doosri websites ke links (external links) ho sakte hain. Ye links sirf aapki suvidha aur extra jankari ke liye diye jaate hain. 
          Hum un websites ke content, security, ya policies ko control nahi karte hain aur na hi unke liye zimmedar hain.
        </p>

        <h2>5. Affiliate Disclaimer</h2>
        <p>
          Agar hum kisi third-party tool, course ya service ko promote karte hain jisme koi affiliate link shamil ho, toh hum use wahan clearly mention karenge.
        </p>

        <p>Agar aapko is disclaimer ke baare mein koi doubt hai, toh aap humse contact kar sakte hain: <a href="mailto:contact@aigyani.in">contact@aigyani.in</a></p>
      </div>
    </div>
  );
}
