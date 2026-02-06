# Projects System

This portfolio uses a dynamic project system where you can add projects by creating markdown files in the `/projects` folder.

## How to Add a New Project

1. Create a new `.md` file in the `/projects` folder
2. Add frontmatter at the top of the file
3. The project will automatically appear on the website

## Project File Format

Create a file like `my-project.md`:

```markdown
---
title: "Your Project Title"
category: "Project Category"
description: "A brief description of your project"
image: "https://images.unsplash.com/photo-xxx?w=800&q=80"
tags: ["Tag1", "Tag2", "Tag3"]
link: "https://your-project-url.com"
github: "https://github.com/yourusername/repo"
---

# Your Project Title

Optional: Add detailed project description here...
This content is not currently displayed but can be used in the future.
```

## Frontmatter Fields

- **title** (required): Project name
- **category** (required): Category like "AI / ML", "Web App", "Mobile", etc.
- **description** (required): Short project description
- **image** (optional): Image URL (external like Unsplash) or local path like `/images/your-image.jpg`
- **tags** (optional): Array of technology tags
- **link** (optional): Live project URL
- **github** (optional): GitHub repository URL

## Images

You can use either:
1. **External URLs**: Use images from Unsplash, Pexels, or any image host
   - Example: `image: "https://images.unsplash.com/photo-xxx?w=800&q=80"`
2. **Local images**: Place images in `/public/images/` folder
   - Example: `image: "/images/my-project.jpg"`

## Example Projects

Check the existing files in `/projects` folder for examples:
- `project-eidos.md`
- `ai-image-classifier.md`
- `nlp-chatbot.md`
- `predictive-analytics.md`

## Tips

1. Use descriptive filenames (e.g., `ai-chatbot.md` instead of `project1.md`)
2. Keep descriptions concise (1-2 sentences)
3. Add relevant tags to make projects searchable
4. Images should be placed in `/public/images/` folder
5. The order of projects is alphabetical by filename
