---
title: "OpenAI API Kaise Use Karein? Complete Beginner Guide (2026)"
slug: "openai-api-kaise-use-karein"
category: "ai-tools-frameworks"
categoryLabel: "AI Tools & Frameworks"
description: "OpenAI API kaise use karein? ChatGPT jaisi powers apne app mein integrate karo — setup se liye pehle API call tak, Python mein step-by-step Hinglish mein."
image: "/images/openai_api_guide.png"
author: "Tarun"
tags: ["OpenAI API", "ChatGPT API", "GPT-4", "Python", "AI Integration"]
featured: false
relatedPosts: ["hugging-face-kya-hai", "prompt-engineering-kya-hai-full-guide"]
readingTime: 14
tableOfContents: true
order: 97
---

# OpenAI API Kaise Use Karein? Apne App mein ChatGPT Ki Powers Add Karo!

Kabhi socha hai ki ChatGPT wali intelligence apne khud ke app mein daal sakein? Ek aise chatbot banao jo aapke customers ke sawal answer kare? Ya ek AI writing assistant jo aapke students ki help kare?

Ye sab mumkin hai **OpenAI API** ke zariye. Aur hai bhi utna mushkil nahi jitna lagta hai!

![OpenAI API Guide](/images/openai_api_guide.png)

## OpenAI API Kya Hai?

**OpenAI API ek gateway hai jiske zariye aap OpenAI ke powerful models (GPT-4, GPT-4o, DALL-E, Whisper) ko apne applications mein directly use kar sakte hain.**

Matlab aap Python, JavaScript, ya koi bhi language mein code likh sakte hain jo ChatGPT se baat kare aur us jaisa response generate kare.

## OpenAI API Setup — Step by Step

### Step 1: Account Banao
platform.openai.com par jakar free account create karo.

### Step 2: API Key Lo
Dashboard mein "API Keys" section mein jakar new key create karo. Ise safely rakh lena — ye sirf ek baar dikhta hai!

### Step 3: Python Library Install Karo

```bash
pip install openai
```

### Step 4: API Key Set Karo

```python
import os
from openai import OpenAI

# API key environment variable mein rakhna best practice hai
os.environ["OPENAI_API_KEY"] = "sk-proj-..."
client = OpenAI()
```

## Pehla API Call — Hello GPT!

```python
from openai import OpenAI

client = OpenAI(api_key="your-api-key-here")

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "user", "content": "Namaste! AI explain karo ek line mein."}
    ]
)

print(response.choices[0].message.content)
```

Bas! Aapka pehla AI-powered response aa jayega.

## Messages ka Structure Samjho

OpenAI API "conversation history" ke format mein kaam karta hai:

```python
messages = [
    # System message — AI ko role batao
    {"role": "system", "content": "Tum ek helpful Hindi teacher ho jo simple bhasha mein samjhate ho."},
    
    # User ka question
    {"role": "user", "content": "Photosynthesis kya hai?"},
    
    # Agar pehle ki baat chahiye add karo (history)
    {"role": "assistant", "content": "Photosynthesis woh process hai..."},
    
    # Agla sawal
    {"role": "user", "content": "Aur respiration?"}
]
```

Ye conversation memory maintain karne ka tarika hai.

## Practical Example: Simple Chatbot Banana

```python
from openai import OpenAI

client = OpenAI()
conversation_history = [
    {"role": "system", "content": "Tum ek helpful AI assistant ho jo Hinglish mein baat karte ho."}
]

def chat(user_message):
    conversation_history.append({"role": "user", "content": user_message})
    
    response = client.chat.completions.create(
        model="gpt-4o-mini",  # Cost-effective model
        messages=conversation_history,
        max_tokens=500,
        temperature=0.7  # Creativity level (0=factual, 1=creative)
    )
    
    assistant_message = response.choices[0].message.content
    conversation_history.append({"role": "assistant", "content": assistant_message})
    return assistant_message

# Chat loop
print("Chatbot: Namaste! Main aapki kya madad kar sakta hoon?")
while True:
    user_input = input("Aap: ")
    if user_input.lower() == "bye":
        break
    print(f"Chatbot: {chat(user_input)}")
```

## Important Parameters

| Parameter | Kya Karta Hai | Range |
|---|---|---|
| `model` | Kaunsa AI model use karo | gpt-4o, gpt-4o-mini, etc. |
| `max_tokens` | Response ki maximum length | 1 – 128000 |
| `temperature` | Creativity vs factual accuracy | 0.0 – 2.0 |
| `top_p` | Probability sampling | 0.0 – 1.0 |
| `stream` | Response streaming (like ChatGPT) | True/False |

## Streaming Response (Like ChatGPT)

```python
# Response stream karo — word by word ata hai
stream = client.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Ek chhoti si poem likhna AI ke baare mein."}],
    stream=True
)

for chunk in stream:
    if chunk.choices[0].delta.content is not None:
        print(chunk.choices[0].delta.content, end="", flush=True)
```

## DALL-E Image Generation API

```python
response = client.images.generate(
    model="dall-e-3",
    prompt="A futuristic Indian city with flying cars and holographic billboards",
    size="1024x1024",
    quality="standard",
    n=1,
)

image_url = response.data[0].url
print(image_url)  # Download ya display karo
```

## Whisper Speech-to-Text API

```python
audio_file = open("speech.mp3", "rb")

transcript = client.audio.transcriptions.create(
    model="whisper-1",
    file=audio_file,
    language="hi"  # Hindi transcription
)

print(transcript.text)
```

## Cost Management — Paisa Bachao!

OpenAI API use karne par paise lagte hain (per token). Tips:

- **gpt-4o-mini** use karo development mein—bahut sasta aur fast hai
- `max_tokens` set karo unnecessarily lambe responses se bachne ke liye
- System prompts concise rakho
- Caching implement karo—same response baar baar generate mat karo
- Usage dashboard regularly check karo

**Rough Pricing (2026):**
- gpt-4o-mini: ~$0.15 per million input tokens
- gpt-4o: ~$2.50 per million input tokens

---

### FAQs

**1. Kya OpenAI API free hai?**
New accounts ko $5 ka free credit milta hai. Uske baad pay-per-use model hai. Bahut sasta hai chhote projects ke liye.

**2. API key kahan store karein safely?**
Hamesha environment variables ya `.env` file mein. Kabhi bhi code mein directly mat likho, aur GitHub par upload mat karo.

**3. Rate limits kya hain?**
Har plan mein requests per minute ka limit hota hai. Dashboard mein check karo. Free tier mein limited hai.

**4. GPT-4o aur GPT-4o-mini mein kya farq hai?**
GPT-4o more capable hai, GPT-4o-mini faster aur sasta hai. Testing ke liye mini, production ke liye zaroorat ke hisaab se decide karo.

**5. Kya OpenAI API India mein available hai?**
Haan! VPN ki zaroorat nahi. Direct access milta hai.

---

**Aapne OpenAI API se kya banana chahoge? Apna idea comment mein share karo! 💡**
