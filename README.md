# ash × Nuxt Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## What's Included

This is a fully featured starter for [Nuxt](https://nuxt.com/) made by [ash](https://a35.dev). It includes:

- Nuxt 5 / Vite 8
- Bun
- TypeScript
- Indented Sass
- Prettier
- Nuxt Fonts / Icons
- I18n

## Setup

Make sure to install dependencies:

```bash
bun install
```

## Development

Start the development server on `http://localhost:4140`:

```bash
bun run dev
```

It is recommended to use a JetBrains IDE, e.g., WebStorm (free for non-commercial use) or IntelliJ IDEA Ultimate (if you already use it).

## Production

Build the application for production:

```bash
bun run build
```

Locally preview production build:

```bash
bun run preview
```

## Deployment

For using Bun with CloudFlare Pages:
- To your Environment Variables, add `SKIP_DEPENDENCY_INSTALL=1`
- Set your Build Command to `bun i; bun run build`

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
