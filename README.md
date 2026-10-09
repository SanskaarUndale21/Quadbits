# Quadbits

Team portfolio and hackathon showcase. Next.js (App Router), TypeScript, Tailwind CSS 4, Motion.

## Run

```
npm install
npm run dev      # http://localhost:3000
npm run lint     # type check
npm run build
```

## Edit content

All content lives in `data/`. Components never hold facts.

- `team.ts` profiles, `ventures.ts` funding, `achievements.ts` results
- `capabilities.ts`, `projects.ts`, `site.ts` (email, stats)
- Items marked `confirm` render a "to confirm" tag until verified
- Photos go in `public/team/` and are referenced by `photo` in `team.ts`
- The funding total is the sum of the venture entries

The previous static page is kept in `legacy/`.
