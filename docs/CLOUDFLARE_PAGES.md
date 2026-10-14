# Cloudflare Pages

Flowin is a static Astro site. Cloudflare serves it at `/`; GitHub Pages keeps its `/Flowin/` prefix. The Cloudflare build takes precedence over `GITHUB_ACTIONS`, including when built in GitHub CI.

## Git integration

- Repository: `Meet-Pansuriya/Flowin`
- Production branch: `main`
- Root directory: `site`
- Build command: `npm run build:cloudflare`
- Output directory: `dist`
- Node version: `24` (set `NODE_VERSION=24`)
- Optional `SITE_URL`: final public origin, including `https://`.

Cloudflare's `CF_PAGES_URL` supplies the origin when `SITE_URL` is unset. The build checks all generated pages and local links before deployment.

## Direct upload

From `site/`:

```sh
npm ci
npm run build:cloudflare
npx wrangler pages deploy dist --project-name flowin --branch main
```

Authenticate Wrangler with the intended Cloudflare account first. Choose the actual Pages project name if it differs from `flowin`. Upload only `site/dist`, never the repository, historical PHP site, dependencies or local files.

## Verification

Check the production homepage, a product-family page, enquiry builder and catalogue PDF. Assets and internal routes must start at `/`, without `/Flowin`. The discontinued theme routes must stay unavailable.

GitHub Pages remains independently deployable with `GITHUB_ACTIONS=true npm run build` followed by `npm run check:site` under the same environment.
