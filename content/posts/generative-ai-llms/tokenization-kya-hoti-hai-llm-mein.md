---
title: "Tokenization: AI shabdon ko kaise 'Padhta' hai?"
description: "Tokenization kya hai? BPE (Byte Pair Encoding) algorithm, Token limits, aur kyon Hindi mein zyada kharcha hota hai. LLM internals guide."
date: "2026-04-30"
author: "Tarun"
category: "generative-ai-llms"
categoryLabel: "Generative AI & LLMs"
tags: ["Tokenization", "LLM", "NLP", "BPE", "Byte Pair Encoding", "AI Math", "Transformers", "Tiktoken"]
image: "/images/tokenization_in_llm.png"
featured: false
readingTime: 12
tableOfContents: true
order: 83
slug: "tokenization-kya-hoti-hai-llm-mein"
---

![Tokenization in LLM](/images/tokenization_in_llm.png)

Aapne notice kiya hoga ki ChatGPT ki billing "Words" par nahi, balki **"Tokens"** par hoti hai. AI ke liye "Token" wo choti unit hai jo bhasha ko math mein badalti hai. AI ko "Apple" nahi pata, use `Token #1245` pata hai. Is post mein hum Tokenization ki factory ke andar ka raaz samjhenge.

---

## 1. Tokenization kya hai? (The Breakdown)

Computer text nahi samajhta, wo sirf numbers samajhta hai. **Tokenization** text ko chhote tukdon mein todne ki process hai:
- **Word-level:** "Walking" -> ["Walking"] (Problem: "Walked" ko naya word manega).
- **Character-level:** "Walking" -> ["W", "a", "l", "k", "i", "n", "g"] (Problem: Meaning bhool jayega).
- **Subword-level (Standard):** "Walking" -> ["Walk", "ing"]. 
Aaj ke models (GPT, Llama) **Subword Tokenization** use karte hain kyonki ye "Meaning" aur "Flexibility" ka best balance hai.

---

## 2. BPE (Byte Pair Encoding): The AI Syllables

BPE aaj ka industry standard algorithm hai. 
- Ye un characters ko aapas mein "Merge" (Jhod) deta hai jo baar-baar saath aate hain. 
- Example: "Antigravity" ko AI shayad `Anti` + `grav` + `ity` mein todega. 
- Isse AI naye words (jo usne kabhi nahi dekhe) unke "Tukdon" se samajh leta hai. Ise hum **Out-of-Vocabulary (OOV)** handling kehte hain.

---

## 3. The "Hindi Tax": Kyon Hindi mehngi hai?

Ye ek kadwa sach hai: **Devanagari script (Hindi) English ke mukable 3-4x zyada tokens leti hai.**
- English word "Technology" = 1 Token.
- Hindi word "तकनीक" (Takneek) = 4-5 Tokens.
- **Kyon?** Kyonki AI tokenizer internet ke 90% English data par train hue hain. Unke liye Hindi characters "Complex symbols" hain jinhe wo chote-chote bytes mein tod dete hain. Isliye Hindi AI apps ki cost hamesha zyada hoti hai.

---

## 4. Token Limits: Why memory is limited?

Har model ki ek **Context Window** hoti hai (e.g. 128k tokens). 
- Ye aapka "Working Space" hai. 
- Agar aap 500 pages feed karenge, toh model purane tokens bhool jayega kyonki uski "Token Memory" bhar chuki hai. 
- Jitne efficient tokens honge, utna hi bada context AI yaad rakh payega.

---

## 5. Summary Table: Tokenization Math

| Script | 1000 Words ≈ Tokens | Cost Factor |
|---|---|---|
| **English** | 750 Tokens | 1x (Base) |
| **Spanish / French**| 1200 Tokens | 1.6x |
| **Hindi / Marathi** | 3000-4000 Tokens | 4x - 5x |
| **Code (Python)** | 800 Tokens | 1.1x |

---

## FAQs

**1. "Tiktoken" kya hai?**
Ye OpenAI ka open-source library hai jo aapko batati hai ki aapka text kitne tokens lega. Coding se pehle hamesha isse check karein cost bachane ke liye.

**2. Kya Emoji tokens lete hain?**
Haan! Ek simple emoji 1 se 3 tokens le sakta hai kyonki wo Unicode bytes mein tootta hai.

**3. Tokenizer model ke training ka part hai?**
Haan! Tokenizer training se pehle hi fixed ho jata hai. Agar aapne tokenizer badla, toh pura model phir se train karna padega (kyonki numbers ka matlab badal jayega).

**4. 2026 mein koi improvement?**
Ab naye models (jaise Llama-3.2) ka vocabulary size badh gaya hai (128k tokens), jis se Hindi aur regional languages ab thodi sasti aur efficient ho gayi hain.

---

**Tokenization AI ki "Alphabet" hai. Ise samajh kar aap AI ki speed, cost, aur performance ko optimize kar sakte hain! 🔢**

---

**Tarun ke baare mein:** Tarun subword encoding algorithms aur linguistic compression ke specialist hain. AI-Gyani par har token logical aur optimized hai.
