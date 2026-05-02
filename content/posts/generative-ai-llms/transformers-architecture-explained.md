---
title: "Transformers Architecture Kya Hai? GPT aur BERT ka Dil — Explained (2026)"
slug: "transformers-architecture-explained"
category: "generative-ai-llms"
categoryLabel: "Generative AI & LLMs"
description: "Transformers architecture kya hai aur yeh itni powerful kyun hai? Attention mechanism, encoder-decoder, positional encoding — sab kuch simple Hinglish mein samjhein."
image: "/images/transformers_architecture_genai.png"
author: "Tarun"
tags: ["Transformers", "Attention Mechanism", "GPT", "BERT", "Deep Learning"]
featured: false
relatedPosts: ["gpt-kaise-kaam-karta-hai", "llm-kya-hote-hain-large-language-models"]
readingTime: 14
tableOfContents: true
order: 78
---

# Transformers Architecture: Woh Engine Jo GPT, BERT aur ChatGPT Ko Chalata Hai!

2017 mein Google ke kuch researchers ne ek paper publish kiya jiska title tha — **"Attention Is All You Need."**

Us ek paper ne puri AI duniya badal di.

Aaj ChatGPT, Gemini, Claude, BERT — ye sab usi architecture par chalta hai jo us paper mein describe ki gayi thi: **Transformer.**

Aaj hum samjhenge ki ye magic kaise kaam karta hai — bilkul simple tarike se!

![Transformers Architecture](/images/transformers_architecture_genai.png)

## Transformers se Pehle Kya Tha?

Pehle text process karne ke liye **RNNs (Recurrent Neural Networks)** aur **LSTMs** use hote the. Ye ek ke baad ek word padhte the — jaise aap ek kitaab word-by-word padhte ho.

**Problem kya thi?**
- Slow — parallel processing nahi ho sakti thi
- "Long-term memory" kamzor — sentence ke pehle words baad mein "bhool" jaata tha
- Training mein bahut waqt lagta tha

**Transformer ne ye sab solve kar diya** ek cheez se — **"Attention."**

## Attention Mechanism — Transformer ka Dil

Socho tum ek complex Hindi sentence padh rahe ho:

> "Rahul ne apni sister ko uska tiffin diya kyunki **wo** school mein tha."

**"Wo" kaun hai — Rahul ya sister?**

Context se samajh aata hai ki "wo" = Rahul. Insaan yahi karta hai — poore sentence par "attention" deta hai important words ko samajhne ke liye.

Transformer bilkul yahi karta hai — mathematically!

### Self-Attention kaise kaam karta hai?

Har word ke liye teen vectors banate hain:
- **Q (Query):** "Main kaun hoon? Mujhe kya chahiye?"
- **K (Key):** "Main kaunsi information offer karta hoon?"
- **V (Value):** "Meri actual information kya hai?"

```
Attention(Q, K, V) = softmax(QK^T / √dk) × V
```

Simple terms mein: Har word doosre sabhi words ko score karta hai ki "tum mere liye kitne relevant ho?" High score = zyada attention.

## Transformer ka Full Architecture

Transformer ke do main hisse hain:

```
Input Sentence
      ↓
[Encoder Stack]  ←── Sentence samjho
      ↓
[Decoder Stack]  ←── Output generate karo
      ↓
Output Sentence
```

*(GPT sirf Decoder use karta hai, BERT sirf Encoder!)*

### Encoder — "Padhne wala"

```
Input Tokens
    ↓
[Embedding Layer]       ← Words ko numbers mein badlo
    ↓
[Positional Encoding]   ← Word ka position add karo
    ↓
[Multi-Head Attention]  ← Har word doosre ko dekhe
    ↓
[Feed Forward Network]  ← Process karo
    ↓
[Layer Norm + Residual] ← Stable training ke liye
    ↓
(Repeat N times)
    ↓
Encoded Representation
```

### Decoder — "Likhne wala"

```
[Masked Self-Attention]    ← Sirf pehle ke words dekho
    ↓
[Cross-Attention]          ← Encoder output bhi dekho
    ↓
[Feed Forward Network]
    ↓
[Softmax]                  ← Next word probability
    ↓
Output Token
```

## Positional Encoding — "Kaunsa Word Kahan Hai?"

Attention sabhi words ek saath dekhta hai — par word ka position bhi matter karta hai!

"**Kutte ne billi ko khaaya**" aur "**Billi ne kutte ko khaaya**" — same words, different meaning!

Positional encoding har word mein ek unique "position signal" add karta hai — mathematical waves (sine aur cosine functions) use karke.

```python
import numpy as np

def positional_encoding(position, d_model):
    PE = np.zeros((position, d_model))
    for pos in range(position):
        for i in range(0, d_model, 2):
            PE[pos, i] = np.sin(pos / (10000 ** (i/d_model)))
            PE[pos, i+1] = np.cos(pos / (10000 ** (i/d_model)))
    return PE
```

## Multi-Head Attention — Ek Saath Kai Angles Se Dekhna

Sirf ek attention head bahut limited hota. **Multi-Head Attention** mein multiple attention "heads" parallel mein kaam karte hain — jaise kai logon ka ek saath analysis.

- Head 1: Grammar relationships dekhe
- Head 2: Semantic meaning dekhe
- Head 3: Coreference (pronoun kaun refer karta hai) dekhe

Phir sab results combine karte hain!

```
[Head 1] [Head 2] [Head 3] ... [Head h]
              ↓
         Concatenate
              ↓
         Linear Layer
              ↓
     Final Attention Output
```

## GPT vs BERT — Dono Transformer Par, Par Alag!

| Feature | GPT (Decoder-only) | BERT (Encoder-only) |
|---|---|---|
| Banaya | OpenAI | Google |
| Kaam | Text generation | Text understanding |
| Training | Next word predict karo | Masked word predict karo |
| Use case | ChatGPT, writing | Search, classification |
| Direction | Left-to-right only | Bidirectional |

**GPT ka training:**
"The cat sat on the ___" → predict "mat"

**BERT ka training:**
"The cat [MASK] on the mat" → predict "sat"

## Transformer Scale: Kyun Bade Models Better Hain?

```
GPT-1 (2018):    117 Million parameters
GPT-2 (2019):    1.5 Billion parameters
GPT-3 (2020):    175 Billion parameters
GPT-4 (2023):    ~1 Trillion parameters (estimated)
```

Jitne zyada parameters, utna zyada "knowledge" store ho sakta hai — par training cost bhi exponentially badhti hai!

## PyTorch mein Simple Transformer

```python
import torch
import torch.nn as nn

class SimpleTransformer(nn.Module):
    def __init__(self, vocab_size, d_model=256, nhead=8, num_layers=6):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, d_model)
        encoder_layer = nn.TransformerEncoderLayer(d_model=d_model, nhead=nhead)
        self.transformer = nn.TransformerEncoder(encoder_layer, num_layers=num_layers)
        self.output = nn.Linear(d_model, vocab_size)

    def forward(self, x):
        x = self.embedding(x)
        x = self.transformer(x)
        return self.output(x)

model = SimpleTransformer(vocab_size=10000)
print(f"Parameters: {sum(p.numel() for p in model.parameters()):,}")
```

## Transformer ne Kya Revolutionize Kiya?

- **NLP:** Google Search, Gmail autocomplete, ChatGPT
- **Computer Vision:** Vision Transformer (ViT) — images bhi transformers se!
- **Audio:** Whisper (speech recognition), music generation
- **Biology:** AlphaFold — protein structure predict karna
- **Code:** GitHub Copilot, Cursor

---

### FAQs

**1. Transformer aur Neural Network mein kya farq hai?**
Transformer ek specific type ka neural network hai. Iska specialty hai attention mechanism jo parallel processing allow karta hai.

**2. Kya mujhe math jaani chahiye Transformers samjhne ke liye?**
Basic concept ke liye nahi. Implementation ke liye matrix multiplication aur probability basics helpful hain.

**3. GPT aur BERT mein se kaun better hai?**
Different tasks ke liye different — GPT text generate karta hai, BERT text samjhta hai. "Better" use case par depend karta hai.

**4. Transformers kitne layers hote hain?**
GPT-3 mein 96 layers hain! Har layer complexity add karta hai.

**5. Kya Transformers future mein replace ho jayenge?**
Researchers naye architectures (Mamba, State Space Models) explore kar rahe hain, par filhaal Transformers ka koi strong replacement nahi hai.

---

**Attention mechanism ka concept clear hua? Agar koi part aur explain karein toh comment mein batao! 🤖**
