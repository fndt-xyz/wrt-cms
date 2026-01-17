## wrt-cms

A developer-first Next.js template designed to decouple content from code.

The mission of wrt-cms is simple: allow developers and writers to focus entirely on writing. By using a config-driven architecture, you can deploy a full-scale site and manage all your pages by simply editing standard .tsx content files.

Quick Start
Clone and Install:

```bash

git clone https://github.com/fndt-xyz/wrt-cms.git
cd wrt-cms
npm install
```

Run Local Preview:

```bash

npm run dev -- -p 3001
```
How to Write Content

This template uses a Content-First approach. You do not need to build new routes or manage complex navigation logic.

Locate your content: Navigate to app/[folder]/view.tsx for dev to write page layout code. Navigate to app/[folder]/cntnt01.tsx for writer to insert content of the page.

Write: Edit the file using standard Tailwind CSS and React components.

Automate: The config/page-list.ts automatically handles the metadata, navigation, and SEO for that page.

Tech Stack
Framework: Next.js 16 (App Router)

Styling: Tailwind CSS 4

Animation: Framer Motion (Optimized for 120s slow-cycle visuals)

Language: TypeScript

License
This project is licensed under the GNU General Public License v3.0 (GPL-3.0). 
See the LICENSE file for details.


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
