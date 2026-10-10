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
| Case studies and personal projects | `src/app/data/projects.ts` |
| Skills | `src/app/data/skills.ts` |
| Key contributions | `src/app/data/experience.ts` |
| Email and profile links | `.env` (see [Contact details](#contact-details)) |
| Navigation links | `src/app/data/navigation.ts` |

Theme colours and fonts are defined in the `@theme` block of `src/styles.css`.

## Contact details

The email address and profile links are not kept in the repository. They are read from
environment variables and written to a gitignored file by `scripts/generate-contact.mjs`.

- Locally, copy `.env.example` to `.env` and fill in the values.
- Start the app with `npm start`, not `ng serve`: only the npm scripts read `.env`.
- After editing `.env` while the dev server is running, run `npm run contact` to apply it.
- Values left empty show "To be added".

The email address is stored encoded and only shown when a visitor clicks its card, which keeps
it away from spam scrapers. Anyone visiting the site can still read all three details.

## Before publishing

- Fill in the contact details. Entries left empty show "To be added".
- Keep case studies anonymized: no employer or product names, internal screenshots, endpoints,
  customer data, or unapproved metrics.
- List only verified outcomes.

## Structure

```
src/app/
  core/models/         typed content models
  data/                portfolio content
  features/            page sections (home, projects, skills, experience, contact)
  shared/components/   navbar, footer, project-card, section-heading
  app.ts               composes the page
```

## Deployment

`.github/workflows/deploy.yml` builds and publishes the site to GitHub Pages on every push to
`main`. One-time setup in the GitHub repository:

- Settings → Pages → Source: **GitHub Actions**.
- Settings → Secrets and variables → Actions → Variables: add `CONTACT_EMAIL`,
  `CONTACT_LINKEDIN_URL` and `CONTACT_GITHUB_URL`.

The workflow builds with `--base-href /portfolio/`; change it there if the repository is renamed.
