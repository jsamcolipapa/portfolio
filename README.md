# John Samuel Colipapa — Portfolio

A static, single-page developer portfolio built with Angular 22, Tailwind CSS 4 and Lucide icons.
There is no backend: all content lives in typed TypeScript files.

## Requirements

- Node.js 24 (`nvm use` picks it up from `.nvmrc`; Angular 22 does not run on Node 20)
- npm

## Commands

```bash
npm install     # install dependencies
npm start       # dev server at http://localhost:4200
npm test        # unit tests (Vitest)
npm run build   # production build in dist/portfolio/browser
```

## Editing content

| What | File |
| --- | --- |
| Name, role, intro, hero badges | `src/app/data/profile.ts` |
| Case studies | `src/app/data/projects.ts` |
| Skills | `src/app/data/skills.ts` |
| Key contributions | `src/app/data/experience.ts` |
| Certifications and education | `src/app/data/credentials.ts` |
| Email and profile links | `src/app/data/contact.ts` |
| Navigation links | `src/app/data/navigation.ts` |

Theme colours and fonts are defined in the `@theme` block of `src/styles.css`.

## Before publishing

- Fill in `credentials.ts` and `contact.ts`. Entries left as `null` show "To be added".
- Keep case studies anonymized: no employer or product names, internal screenshots, endpoints,
  customer data, or unapproved metrics.
- List only verified certifications, education and outcomes.

## Structure

```
src/app/
  core/models/         typed content models
  data/                portfolio content
  features/            page sections (home, projects, skills, experience, credentials, contact)
  shared/components/   navbar, footer, project-card, section-heading
  app.ts               composes the page
```

## Deployment

Not configured yet. The build output is plain static files, so it can be hosted on GitHub Pages or
Cloudflare Pages. For a GitHub Pages project site, build with `--base-href /<repo-name>/`.
