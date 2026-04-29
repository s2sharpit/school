# B. S. Sr. Sec. School - Web Application

This is the official web application for **B. S. Sr. Sec. School**, Salempur Khadar, providing a modern, responsive, and accessible digital experience for students, parents, and faculty.

## 🚀 Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 📋 Prerequisites

Ensure you have the following installed before starting development:
- [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
- A package manager (npm, yarn, pnpm, or bun)

## 🛠️ Getting Started

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd school
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open the application**:
   Navigate to [http://localhost:3000](http://localhost:3000) with your browser to see the application running. The page will auto-update as you edit files.

## 📂 Project Structure

- `src/app/`: Contains all Next.js App Router pages and global layouts.
- `src/components/`: Reusable React components (UI components, layout sections, etc.).
- `src/data/`: Static data files (JSON/TS) for navigation, news, and programs.
- `src/hooks/`: Custom React hooks used throughout the application.
- `src/lib/`: Shared utility functions.
- `public/`: Static assets such as images and icons.

For a more detailed technical breakdown, please refer to the [`ARCHITECTURE.md`](./ARCHITECTURE.md) file.

## 📜 Available Commands

- `npm run dev`: Starts the development server using Turbopack for faster compilation.
- `npm run build`: Creates an optimized production build of your application.
- `npm run start`: Starts a Node.js server to serve the production build.
- `npm run lint`: Runs ESLint to catch and fix potential issues in the codebase.

## 🌐 Deployment

The easiest way to deploy this Next.js application is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details on deploying to various platforms.
