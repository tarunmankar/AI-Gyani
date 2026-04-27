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
author: "Tarun"
tags: ["Tag1", "Tag2"]
featured: false
relatedPosts: ["doosre-post-ka-slug"]
readingTime: 5
tableOfContents: true
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
