# AI-Gyani Coding & Content Rules 📜

Welcome to the **AI-Gyani** project! This document outlines the standards and guidelines to ensure consistency, quality, and a premium user experience across the platform.

---

## 1. Project Vision 🎯
AI-Gyani is built to simplify Artificial Intelligence for the Indian audience. 
- **Mission**: "Apni Bhasha Mein AI Seekho" (Learn AI in your own language).
- **Core Value**: Zero friction, high readability, and relatable examples.

---

## 2. Tech Stack 💻
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict mode preferred)
- **Styling**: Vanilla CSS with Design Tokens (`styles/globals.css`)
- **Content**: Markdown-based blog system (`remark`, `gray-matter`)

---

## 3. Directory Structure 📁
- `app/`: Next.js pages and layouts.
- `components/`: Reusable UI components (Layout, UI, Post elements).
- `content/`: Markdown (`.md`) files for blog posts, organized by category.
- `public/`: Static assets (Images, Favicon, Verification files).
- `lib/`: Utility functions and helper logic.
- `styles/`: Global CSS and theme definitions.

---

## 4. Coding Standards 🛠️
### TypeScript
- Always use Interfaces/Types for props and data structures.
- Avoid `any`. Use `unknown` or specific types if possible.

### Styling (CSS)
- **DO NOT** use ad-hoc inline styles.
- **DO** use the CSS variable system defined in `:root` (e.g., `var(--primary)`, `var(--text-secondary)`).
- Follow the component-based class naming (e.g., `.btn`, `.card`, `.prose`).
- Keep designs **Premium**: Use subtle shadows, smooth transitions, and plenty of whitespace.

### Components
- Use Functional Components with arrow functions.
- Keep components small and focused. If a component grows too large, split it.

---

## 5. Content Guidelines ✍️
### Language (Hinglish)
- Use a mix of Hindi and English that feels natural to an Indian reader.
- **Example**: "Neural Networks kya hote hain?" instead of just "What are Neural Networks?".
- Avoid complex jargon without simple explanations.

### Formatting
- Use the `.prose` class for blog content to maintain consistent typography.
- Images in posts should be centered and high quality.
- Use `blockquote` for key insights and `pre` for code snippets.

---

## 6. SEO & Maintenance 🔍
- **Metadata**: Every page in `app/` should have a descriptive `metadata` object (Title, Description).
- **Verification**: Never delete search engine verification files (like `google<id>.html`) from the `public/` folder.
- **Deployment**: Ensure all changes are committed and pushed to `main` for automatic deployment.

---

## 7. Git Workflow 🌿
- **Commits**: Use descriptive messages (e.g., `feat: add contact page`, `fix: footer mobile spacing`).
- **Sync**: Always `git pull` before starting new work to avoid conflicts.

---

> [!TIP]
> Jab bhi doubt ho, check `globals.css` for existing design tokens! Happy Coding! 🚀
