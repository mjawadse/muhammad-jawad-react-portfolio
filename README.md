# Muhammad Jawad — React Portfolio

A responsive one-page portfolio built with React and Vite. The design uses an editorial cream, ink and electric-blue system with lightweight CSS motion and no heavy visual libraries.

## Local preview without installing anything

1. Open the `dist` folder.
2. Double-click `index.html`.

On Windows, `OPEN_LOCAL_PREVIEW.bat` opens the same production build for you.

## Development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Run `npm run build` to create the portable production version in `dist`.

## Content editing

Portfolio copy, links, experience and project data live in `src/content/site.json`. The components read this file at build time, so most content updates do not require JSX changes.

The optional `/manage-portfolio/` editor becomes available after Git-based Netlify authentication is configured. It is intentionally excluded from navigation and search indexing.

## Netlify

The included `netlify.toml` uses `npm run build` and publishes `dist`. The contact form is preconfigured for Netlify Forms.
