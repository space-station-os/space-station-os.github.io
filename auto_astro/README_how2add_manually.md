# 📰 How to Manually Add a News Article to SSOS

This project uses [Astro](https://astro.build/) and Markdown to auto-generate the **SSOS News section**.

---

## ✅ Step-by-Step: Manually Add a News Post

### 1. Create a Markdown file under `src/content/news/`

Use the following format for the filename:

```
YYYY-MM-DD-title-slug.md
```

**Example:**

```bash
touch src/content/news/2025-06-15-initial-release.md
```

---

### 2. Add content to the file

Start with YAML frontmatter followed by the Markdown body:

```markdown
---
title: Initial Public Release of SSOS
pubDate: 2025-06-15
description: The Space Station OS project enters public release!
---

We are happy to announce that Space Station OS has been released to the public.

More information is available at [GitHub](https://github.com/space-station-os).
```

---

### 3. Preview locally (optional)

```bash
npm run dev
```

Visit:  
[http://localhost:4321/news/](http://localhost:4321/news/)

---

### 4. Build the Astro site

```bash
npm run build
```

---

### 5. Copy Astro News to the Sphinx documentation site

```bash
cp -r dist/news ../build/html/
```

Make sure this points to the correct Sphinx build path.

---

### 6. Commit and push to GitHub Pages

```bash
cd ../build/html
git add news/
git commit -m "Add news for 2025-06-15: Initial release"
git push origin main
```

---

## 🧠 Notes

- `pubDate` must be in `YYYY-MM-DD` format.
- No need to specify slug; it’s derived from the filename.
- Frontmatter values must match the schema defined in `src/content/config.ts`.

---

## 🧩 Future Option

You can automate this process later using GitHub Actions to trigger on:

- `git push`
- or GitHub Release events

