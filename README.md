# Niro Saie Darakhsh (NSD)

Company website for **نیرو ساعی درخش** — a Persian (RTL) corporate site built with the Next.js App Router.

## Tech Stack

- **[Next.js](https://nextjs.org) 16** — App Router, builds with Turbopack
- **[React](https://react.dev) 19**
- **TypeScript**
- **Tailwind CSS 3** + **Sass** (`globals.scss` + per-section `_*.scss` partials)
- **ESLint 9** with flat config (`eslint.config.mjs`) via `eslint-config-next`
- **[Vazirmatn](https://vazirmatn.com)** loaded through `next/font/google`

Key libraries: `@radix-ui/react-accordion`, `swiper`, `react-paginate`, `date-fns-jalali`, `lucide-react`, `react-icons`, `class-variance-authority`, `tailwind-merge`, `tailwindcss-animate`.

## Getting Started

Requirements: Node.js 20.9+ (Next.js 16 requirement; Node 22+ recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the site renders right-to-left in Persian.

## Scripts

| Script          | Description                                |
| --------------- | ------------------------------------------ |
| `npm run dev`   | Start the development server (Turbopack)   |
| `npm run build` | Create an optimized production build       |
| `npm run start` | Serve the production build                 |
| `npm run lint`  | Run ESLint (`eslint .`) over the project   |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout: fonts, metadata, header/footer
│   ├── globals.scss        # Global styles + Tailwind layers + section partials
│   ├── (landing)/          # Home page route group (/, one section per folder)
│   │   ├── page.tsx        # Home page assembling all sections
│   │   ├── (hero)/         # Hero section
│   │   ├── (services)/     # Services section
│   │   ├── (faq)/          # FAQ (Radix accordion) section
│   │   └── ...             # banner, about-us, contact-us, documents, personel
│   └── documents/          # /documents route — paginated study-note list
│       ├── page.tsx
│       └── PaginatedItems.tsx
├── components/             # Shared components (footer, header, ui, ...)
├── data/                   # Static content (documents.ts)
├── constants/              # App constants
├── helpers/                # Utilities (convertToPersianDate.ts)
└── lib/                    # Shared utilities (utils.ts, cn())
```

## Troubleshooting

- **`Module not found: Can't resolve '@vercel/turbopack-next/internal/font/...'` in dev** — a dev server left running across an `npm install` keeps a stale module graph. Restart `npm run dev`.
- **`Cannot find module for page: /_document` (or `/_not-found`) during `next build`** — usually a stale `.next` cache; delete it with `rm -rf .next` and rebuild.
- **Windows `EPERM` warnings during `npm install`** — a running dev server holds locks on `next`/`sharp` binaries; stop it before installing.

## Deploy

The site is deployed on [Vercel](https://vercel.com). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.