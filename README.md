# Bootchamp Digital Academy

A Vite + React + TypeScript front-end for the Bootchamp Digital Academy experience. The UI leverages shadcn/ui primitives, Tailwind CSS, and a collection of reusable components under `src/components`.

## Getting Started

```pwsh
git clone <REPO_URL>
cd bootchamp-digital-academy
npm install
npm run dev
```

The dev server listens on port `8080` (see `vite.config.ts`). Update the port in that file if the default conflicts with another local service.

## Available Scripts

- `npm run dev` – start Vite in development mode with fast HMR.
- `npm run build` – create a production build.
- `npm run build:dev` – build with `NODE_ENV=development`, handy for debugging prod-only issues.
- `npm run preview` – preview the production build locally.
- `npm run lint` – run ESLint across the repo.

## Tech Stack

- React 18 with React Router
- TypeScript + Vite + @vitejs/plugin-react-swc
- Tailwind CSS + shadcn/ui component patterns
- TanStack Query, React Hook Form, Zod, Recharts, and other supporting libs (see `package.json` for the full list)

## Project Structure

- `src/components` – shared UI elements and feature sections (hero, programs, etc.).
- `src/pages` – route-level components used by React Router.
- `src/hooks`, `src/lib` – composable utilities and helper functions.
- `public` – static assets served as-is by Vite.

## Deployment

Any static hosting provider that supports serving the contents of `dist/` will work (Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.). Typical flow:

```pwsh
npm run build
# upload the dist/ folder to your host of choice
```

Remember to configure your host for SPA-style routing (rewrite unknown routes to `index.html`) so client-side navigation works.
