# Post Kaise Daalein? (Post Schema Guide)

Har post ek `.md` file honi chahiye jo `content/posts/[category]/` folder ke andar ho.

## 1. Frontmatter (Metadata)
Har file ke top par ye block hona zaroori hai:

```yaml
---
title: "Post ka Title"
slug: "post-ka-url-slug"
category: "category-slug"
categoryLabel: "Category ka Naam"
description: "150-160 characters ka SEO description"
image: "/images/your-image-name.png"
author: "Tarun"
tags: ["Tag1", "Tag2"]
featured: false
relatedPosts: ["doosre-post-ka-slug"]
readingTime: 10
tableOfContents: true
order: 1
---
```

## 2. Category Slugs
Inme se koi ek use karein:
- `ai-basics`
- `python-for-ai`
- `mathematics-for-ai`
- `machine-learning`
- `deep-learning`
- `generative-ai-llms`
- `ai-tools-frameworks`
- `projects-deployment`
- `ai-ethics-future`

## 3. Formatting Tips
- `# Heading 1` (Sirf ek baar, ye Title hota hai)
- `## Heading 2` (Main sections)
- `### Heading 3` (Sub sections)
- `[Link Text](URL)`
- `![Alt Text](/image-path.jpg)`
- Code blocks ke liye backticks use karein.

## 4. Image Rules (Google Discover SEO)
- **Width:** Kam se kam 1200px honi chahiye.
- **Aspect Ratio:** 16:9 (Jaise 1200x675px ya 1200x630px).
- **Quality:** High resolution, blur nahi hona chahiye.
- **Logo:** Image mein logo ko main image mat banayein.
- Har post mein 1 Hero Image (Top) aur 1-2 In-content images rakhna best hai.

## 5. Post Writing Rules (SEO & Tone)
- **Tone:** Natural Hinglish (Hindi + English mix). Conversational, simple, informal, relatable. Use "socho", "maan lo", "simple si baat". No textbook wording!
- **Length:** 1800–2500 words (ya 1200-1600 simple topics ke liye).
- **Paragraphs:** Short (2-4 lines).
- **Structure:** Strong hook in 2-3 lines. Use clear H2/H3 headings. Add mini stories and analogies.
- **SEO Rules:** Primary keyword in Title, first 100 words, and 1-2 H2s. Add 3-5 FAQs at the end.
- **CTA:** End with a practical conclusion + CTA (share, explore, bookmark).
