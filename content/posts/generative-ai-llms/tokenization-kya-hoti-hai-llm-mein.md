---
title: "Tokenization Kya Hoti Hai LLM Mein? (Simple Hindi Guide 2026)"
slug: "tokenization-kya-hoti-hai-llm-mein"
category: "generative-ai-llms"
categoryLabel: "Generative AI & LLMs"
description: "Tokenization kya hai aur LLMs mein kaise kaam karta hai? Samjhein tokens, token limits aur kyon AI words ko alag tarike se padh ta hai. Simple Hinglish guide."
image: "/images/tokenization_in_llm.png"
author: "Tarun"
tags: ["Tokenization", "LLM", "NLP", "AI Internals", "ChatGPT"]
featured: false
relatedPosts: ["llm-kya-hote-hain-large-language-models", "embeddings-kya-hote-hain-ai-mein"]
readingTime: 12
tableOfContents: true
order: 83
---

# Tokenization Kya Hoti Hai? AI Words Ko Kaise "Padh" Ta Hai?

Kabhi aapne notice kiya? ChatGPT se Hindi mein baat karo toh sometimes ek simple sentence ka jawab dene mein bhi thoda time lagta hai. Ya phir "token limit exceeded" wali error aati hai? Ye sab **Tokenization** se related hai!

Aaj hum samjhenge ki AI actually text ko kaise process karta hai — jo normal insaani reading se bilkul alag hai.

![Tokenization in LLMs](/images/tokenization_in_llm.png)

## Computer Text Kaise Padh Ta Hai?

Insaan words padh ta hai. Computer sirf **numbers** samajh ta hai.

Toh AI ke liye text ko numbers mein convert karna padta hai. Ye conversion process do steps mein hoti hai:
1. **Tokenization** — Text ko chhote pieces (tokens) mein todna
2. **Embedding** — Un tokens ko numbers (vectors) mein convert karna

Aaj hum pehle step — Tokenization — samjhenge.

## Token Kya Hota Hai?

Token ek word hota hai... ya word ka ek hissa... ya punctuation... ya space.

Ye confusing lagta hai na? Ek example se samjhte hain:

**Sentence:** "ChatGPT is amazing!"

**Tokens:** ["Chat", "G", "PT", " is", " amazing", "!"]

Interesting! "ChatGPT" ek word tha par 3 tokens bana. " is" mein space bhi token ka hissa hai. Yahi **Subword Tokenization** hai.

## Tokenization Ke Types

### 1. Word Tokenization
Har word ek token.
> "Hello world" → ["Hello", "world"] — 2 tokens

Problem: "unhappily", "unhappy", "unhappiness" teen alag tokens — model teen cheezon ko alag seekhta hai, jabki sab "un + happy" se bane hain.

### 2. Character Tokenization
Har letter ek token.
> "Hi" → ["H", "i"] — 2 tokens

Problem: Bahut zyada tokens bante hain, aur word ka meaning maintain karna mushkil hota hai.

### 3. Subword Tokenization (Modern LLMs Use Karte Hain)
Words ko meaningful parts mein toda jaata hai — BPE (Byte Pair Encoding) ya WordPiece algorithm use karke.
> "unhappily" → ["un", "happi", "ly"] — 3 tokens, par meaningful!

Ye best approach hai kyunki:
- Common words ek token hote hain
- Rare words chhote parts mein toot te hain
- Naye words bhi handle ho jaate hain

## Token Limit Kya Hai?

Har LLM ki ek **context window** hoti hai — yaani ek baar mein maximum kitne tokens process kar sakta hai.

| Model | Context Window |
|:------|:--------------|
| GPT-3.5 | ~16,000 tokens |
| GPT-4 | ~128,000 tokens |
| Claude 3.5 | ~200,000 tokens |
| Gemini 1.5 Pro | ~1,000,000 tokens |

Ek page ka text ≈ ~500 tokens hota hai. Isliye 128K token limit matlab ≈ 250 pages!

## Hinglish/Hindi Zyada Tokens Kyun Lete Hain?

Ye bahut important baat hai! English text ka ek word aksar ek token hota hai. Par Hindi ya Hinglish ke liye:

- "नमस्ते" → ["न", "म", "स्", "ते"] — 4 tokens (ek simple word ke liye!)
- "namaste" → ["namaste"] — 1 token

Isliye Hindi mein baat karna English se **3-4 guna zyada tokens** use karta hai. Matlab:
- Cost zyada (API billing tokens par hoti hai)
- Context window jaldi bhar ti hai
- Response thoda slow ho sakta hai

## Tokenization Practically Kaise Dekhen?

OpenAI ka ek free tool hai: **platform.openai.com/tokenizer**

Wahan apna text paste karo — exactly dikhega ki kaunse tokens bane aur total count kitna hai. Interesting experiment hai!

## Conclusion

Tokenization sirf ek technical detail nahi hai — ye directly affect karta hai ki aapka AI tool kaise aur kitne efficiently kaam karta hai. Jab aap Hindi mein prompt likhte ho ya badi files upload karte ho, tab token count ka dhyan rakhna achha hai.

Agle post mein hum dekhenge ki **Embeddings** kya hote hain — tokens ke baad ka step!

---

### FAQs

**1. Kya 1 token = 1 word hota hai?**
Nahi. English mein roughly 1 word ≈ 1.3 tokens. Hindi mein ye ratio kaafi zyada ho sakta hai.

**2. Token limit exceed hone par kya hota hai?**
Model ya toh error deta hai ya purani conversation "bhool" jaata hai (context truncate ho jaata hai).

**3. Token aur word count mein kya use karna chahiye?**
LLM ke context mein hamesha **tokens** count karo, words nahi.

**4. Kya image ke bhi tokens hote hain?**
Vision models (jaise GPT-4o) mein haan — image ko bhi tokens mein convert kiya jaata hai.

**5. BPE algorithm kya hota hai?**
Byte Pair Encoding — ek algorithm jo frequently appearing character pairs ko ek token bana deta hai. Yahi modern LLMs ka foundation hai.

---

**Kya aapko pata tha ki Hindi mein itne zyada tokens use hote hain? Comment mein batao!**
