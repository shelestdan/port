# Tatgazservice Proposal Site

Premium one-page commercial proposal for ООО «Татгазсервис».

## Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion

## Purpose

This branch is not the final production site for the client.
It is a visually strong proposal page that presents:

- recommended stack: Next.js + React
- site structure
- loyalty program scope
- custom admin panel scope
- roadmap
- final project price: 60 000 ₽

## Local Run

```bash
npm ci
npm run dev
```

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## GitHub Pages

Workflow file already builds static `dist/`.
To deploy this branch to Pages:

```bash
gh workflow run deploy-pages.yml --ref <branch-name>
```
