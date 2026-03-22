# Pranav Tripathi — Portfolio

🌐 **Live:** [https://pranavtripathi.dev](https://pranavtripathi.dev)

Personal portfolio and blog — a statically exported Next.js site.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, static export)
- **UI:** [React 19](https://react.dev), [Tailwind CSS v4](https://tailwindcss.com)
- **Animations:** [Framer Motion](https://motion.dev)
- **Blog:** [MDX](https://mdxjs.com) via `next-mdx-remote`
- **Language:** [TypeScript](https://www.typescriptlang.org)
- **Font:** [Geist](https://vercel.com/font)

## Content

- **Structured data** (experience, projects, skills): `src/lib/data.ts`
- **Blog posts** (MDX): `src/content/blog/`

## Development

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:3000
npm run build      # static export → out/ directory
npm run lint       # run ESLint
```

## Deployment

The site builds as a fully static export (`output: "export"` in `next.config.ts`). The `out/` directory can be deployed to any static host (GitHub Pages, Cloudflare Pages, etc.).
