---
title: "NLP Techniques Explained: Tokenization, Stemming aur Lemmatization"
slug: "nlp-techniques-explained"
category: "deep-learning"
categoryLabel: "Deep Learning"
description: "NLP Techniques ko simple Hindi mein samjhein. Tokenization, Stemming, aur Lemmatization kya hote hain aur AI inka use kaise karta hai?"
author: "Tarun"
tags: ["NLP", "Tokenization", "Stemming", "Lemmatization", "Deep Learning"]
featured: false
relatedPosts: ["nlp-kya-hai-text-processing-guide"]
readingTime: 15
tableOfContents: true
order: 69
---

# NLP Techniques Explained: Tokenization, Stemming & Lemmatization

Pichle post mein humne dekha ki **NLP** kya hota hai. Aaj hum thoda andar jayenge aur dekhenge ki computer actually text data ko process kaise karta hai. 

Jab hum computer ko koi bada paragraph dete hain, toh wo use "as it is" nahi samajhta. Use kuch steps se guzarna padta hai, jinhe hum **NLP Techniques** ya **Text Preprocessing** kehte hain.

![NLP Techniques Hero](/images/nlp_techniques.png)

## 1. Tokenization: Tukde-Tukde Karna

Socho aapke paas ek badi chocolate bar hai aur aapko use bachon mein baantna hai. Aap kya karoge? Uske chhote-chhote piece karoge. 

**Tokenization** bilkul wahi hai. Isme hum bade text ya sentence ko chhote pieces mein todte hain, jinhe hum **Tokens** kehte hain.

*   **Sentence Tokenization:** Pure paragraph ko sentences mein todna.
*   **Word Tokenization:** Ek sentence ko words mein todna.

**Example:**
"AI-Gyani best platform hai."
Tokens: `["AI-Gyani", "best", "platform", "hai", "."]`

## 2. Stop Words Removal: Faaltu Words Hatana

Humari bhasha mein kuch aise words hote hain jo sentence ka structure toh banate hain par uska main "meaning" nahi badalte (jaise: is, am, are, the, hai, ka, ke). 

NLP mein hum in words ko hata dete hain taaki model sirf "zaroori" words par focus kare. Inhe **Stop Words** kehte hain.

## 3. Stemming: Root Word tak pahunchna

English (aur Hindi) mein ek hi word ke kai roop hote hain. Jaise: *Eating, Eats, Eaten*. In sabka main word (root) hai—**Eat**.

**Stemming** ek aisi technique hai jo word ke peeche ke suffixes (ing, s, ed) ko kaat deti hai taaki hume root word mil sake.

**Problem:** Stemming thodi "rude" hoti hai. Ye kabhi-kabhi word ko aise kaat deti hai ki uska koi matlab hi nahi rehta.
*Example:* "Studies" ko Stemming "Studi" bana degi, jo ki galat hai.

## 4. Lemmatization: Samajhdari se Root Word dhoondhna

Lemmatization Stemming ka bada bhai hai, jo thoda zyada samajhdar hai. Ye sirf word ko kaat-ta nahi hai, balki dictionary (Morphological analysis) ka use karke uska sahi "Root Word" nikalta hai. 

**Example:**
*   **Word:** "Better"
*   **Stemming:** "Better" (wo ise nahi badal payega)
*   **Lemmatization:** "Good" (kyonki use pata hai better good ka hi ek roop hai)

## 5. POS Tagging (Part-of-Speech Tagging)

Isme model ye pehchanta hai ki sentence mein kaunsa word Noun hai, kaunsa Verb hai, aur kaunsa Adjective. Ye context samajhne ke liye bahut zaroori hai.

## Summary: Ye kyon zaroori hai?

In techniques ka use karke hum kachre (noise) ko saaf karte hain aur computer ko sirf wo data dete hain jo kaam ka hai. Isse model ki accuracy badh jati hai aur training fast hoti hai.

Agle post mein hum milenge AI ke sabse bade "Hero" se—**Transformers**!

---

### FAQs

**1. Stemming kab use karni chahiye?**
Jab speed zyada important ho aur thodi bahut spelling mistake chal sakti ho (jaise basic search engines mein).

**2. Lemmatization kab use karni chahiye?**
Jab aapko accuracy aur grammar ka dhayan rakhna ho (jaise Chatbots ya Translation mein).

**3. Kya inke liye koi library hai?**
Haan! Python mein `NLTK`, `SpaCy`, aur `TextBlob` jaisi behtareen libraries hain jo ye kaam ek line mein kar deti hain.

---

**Aapko Tokenization aur Lemmatization ka difference samajh aaya? Agar haan, toh niche "OP" likhein!**
