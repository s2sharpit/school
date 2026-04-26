# Architecture Documentation

## Project Overview
This project is a modern, responsive web application for **B. S. Sr. Sec. School**, located in Salempur Khadar. It serves as the primary digital presence for the school, providing information on academics, admissions, faculty, and public disclosures. 

## Technology Stack
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Components**: [Radix UI Primitives](https://www.radix-ui.com/) for accessible components
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript
- **Package Manager**: npm/yarn/pnpm/bun (configured with turbopack for dev)

## Directory Structure

The project follows a standard Next.js App Router structure inside the `src/` directory.

```text
src/
├── app/                  # Next.js App Router (Pages, Layouts, Routing)
├── components/           # Reusable React components
│   ├── landing/          # Components specific to the landing/home page
│   └── ui/               # Base UI components (Radix primitives, generic components)
├── data/                 # Static data used across the application
├── hooks/                # Custom React hooks
└── lib/                  # Utility functions and shared helpers
```

## Routing Map

The application utilizes Next.js file-based routing via the `app` directory. The following routes are currently implemented:

- `/` (`page.tsx`) - Home/Landing Page
- `/about` - Information about the school's history, mission, and vision
- `/academics` - Details on academic programs and curriculum
- `/admissions` - Admission process, criteria, and application forms
- `/contact` - Contact information and location map
- `/documents` - Downloadable resources and school documents
- `/faculty` - Profiles and directory of the school's teaching staff
- `/gallery` - Photo and video gallery of school events and infrastructure
- `/news-events` - Latest news, announcements, and upcoming events
- `/public-disclosure` - Mandatory public disclosures and compliance documents

## Component Architecture

The project employs a component-driven architecture:

1. **Layout Components**: `Header` and `Footer` are implemented globally via `src/app/layout.tsx` to maintain a consistent frame across all pages.
2. **Section Components**: Reusable, full-width sections like `OverviewSection`, `CTASection`, and `LandingHeroSection` are built to rapidly assemble pages.
3. **Card Components**: Smaller UI building blocks like `FeatureCard` and `DocumentCard` ensure visual consistency.
4. **UI Primitives**: Base components (e.g., Accordion, Avatar) reside in `src/components/ui/` and are built on top of Radix UI to guarantee accessibility and consistent styling.

## Data Management

Currently, the application relies on static data files located in the `src/data/` directory. This approach is lightweight and performant for content that doesn't change frequently.

- `navigation.ts`: Defines the header/footer navigation links.
- `newsEvents.ts`: Contains the latest news articles and events.
- `programsData.ts`: Holds information about the various academic and extracurricular programs.

## Styling Strategy

- **Tailwind CSS**: Utility-first CSS framework used for all styling. It enables rapid UI development and ensures consistent design tokens (colors, spacing, typography).
- **Global Styles**: Defined in `src/app/globals.css`.
- **Fonts**: The application uses the `Inter` font from `next/font/google`, optimized and loaded automatically to prevent layout shifts.

## Future Considerations
- If dynamic content management becomes necessary (e.g., frequent news updates, dynamic gallery uploads), integrating a Headless CMS (like Sanity, Contentful, or Strapi) is recommended.
- Database integration can be added seamlessly via API routes (`src/app/api/`) or React Server Components if user authentication or interactive portals (e.g., student/parent dashboard) are required in the future.
