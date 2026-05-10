# AGENTS.md

## Overview
This document provides instructions and context for coding agents (Antigravity, Claude Code, Copilot, Cursor, etc.) working on the B. S. Sr. Sec. School web application repository. It is generated based on the actual repository configuration.

## Stack
- **Framework**: Next.js 16.2.4 (App Router)
- **UI Library**: React 19.2.5
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Components**: shadcn/ui (configured with "new-york" style, CSS variables, and Radix UI primitives)
- **Icons**: `lucide-react`
- **Package Manager**: `pnpm`
- **Animations**: `tw-animate-css`
- **Not Used (as of current state)**: Prisma, Drizzle, Zod, Auth.js, Zustand, Redux, or any database ORM/state managers.

## Structure
- `src/app/`: Next.js App Router. Contains all routes, pages, and layouts.
- `src/components/`: Reusable React components.
  - `src/components/ui/`: Base shadcn/ui primitives.
  - `src/components/landing/`: Page-specific components for the landing/home page.
- `src/data/`: Static mock data and configuration (e.g., `navigation.ts`, `newsEvents.ts`). Used in lieu of a database.
- `src/hooks/`: Custom React hooks.
- `src/lib/`: Utility functions (e.g., `utils.ts` for Tailwind class merging).
- `public/`: Static assets.

## Commands
*Note: The project uses `pnpm`, as evidenced by the active environment and `pnpm-lock.yaml`.*
- **Install**: `pnpm install`
- **Dev**: `pnpm dev` (runs `next dev --turbopack`)
- **Build**: `pnpm run build` (runs `next build`)
- **Start**: `pnpm run start` (runs `next start`)
- **Lint**: `pnpm run lint` (runs `next lint` using ESLint 9)
- **Type-check**: `pnpm dlx tsc --noEmit` (no explicit script in `package.json`, use this standard command)
- **Format**: *No Prettier or formatting script is explicitly configured in the repo.*
- **Test**: *No testing framework (Jest/Vitest/Playwright) or test folders are currently present in the repo.*

## Coding conventions
- **Components**: Build on top of shadcn/ui and Radix primitives (`@radix-ui/*`) located in `src/components/ui/`.
- **Styling**: Use Tailwind CSS utility classes. Use the `cn()` utility from `@/lib/utils` for conditional class merging.
- **Icons**: Exclusively use `lucide-react`.
- **Data**: Fetch and render static data from `src/data/` rather than setting up API endpoints unless necessary.

## Next.js conventions in this repo
- **Router**: Uses the App Router (`src/app/`). The Pages Router is not used.
- **Aliases**: Path aliases are configured as `@/*` mapping to `./src/*`.
- **Styles**: Global styles are defined in `src/app/globals.css`.
- **Fonts**: Handled natively by Next.js via `next/font/google` (Inter is the primary font as per architecture documentation).

## Testing and validation
- **Linting**: Uses ESLint 9 Flat Config (`eslint.config.mjs`) extending `next/core-web-vitals` and `next/typescript`.
- *Note: Automated tests are not currently implemented.* Validation relies on linting, type-checking, and manual browser verification.

## Agent behavior
- Follow existing patterns before introducing new abstractions.
- Prefer minimal diffs to keep PRs/changes focused and clean.
- Do not rename or reorganize files unless explicitly instructed or absolutely necessary.
- Run the relevant validation commands (`pnpm run lint`, `pnpm dlx tsc --noEmit`) after making changes.
- If changing multiple areas, explain assumptions and impact to the user before proceeding.
- Do not add complex architectural dependencies (e.g., state managers, ORMs) unless explicitly requested by the user.
