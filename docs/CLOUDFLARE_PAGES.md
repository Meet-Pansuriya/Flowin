# Cloudflare Pages

Flowin is a static Astro site. Cloudflare serves it at `/`; GitHub Pages keeps its `/Flowin/` prefix. The Cloudflare build takes precedence over `GITHUB_ACTIONS`, including when built in GitHub CI.

Production project: `flowin-pipes` at https://flowin-pipes.pages.dev/.
Public domain: https://flowinpipeandfitting.com/ (also https://www.flowinpipeandfitting.com/), connected on 14 October 2026.
GitHub integration automatically deploys pushes to `main`. A standalone `404.html` ensures unknown and discontinued theme routes return 404 instead of falling back to the homepage.

## Domain DNS

- Registrar: GoDaddy; DNS management: Cloudflare Free.
- Nameservers: `holly.ns.cloudflare.com` and `kayden.ns.cloudflare.com`.
- Proxied CNAME records for `@` and `www`: `flowin-pipes.pages.dev`.
- Original `_domainconnect`, `_dmarc` and `_github-pages-challenge-meet-pansuriya` records preserved as DNS-only records.
- GoDaddy parking A records replaced by the Pages apex CNAME.
- HTTPS homepage verified for both domains; product page, enquiry, catalogue PDF and hero asset verified on the primary domain.

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
npx wrangler pages deploy dist --project-name flowin-pipes --branch main
```

Authenticate Wrangler with the intended Cloudflare account first. Upload only `site/dist`, never the repository, historical PHP site, dependencies or local files.

## Verification

Check the production homepage, a product-family page, enquiry builder and catalogue PDF. Assets and internal routes must start at `/`, without `/Flowin`. The discontinued theme routes must stay unavailable.

GitHub Pages remains independently deployable with `GITHUB_ACTIONS=true npm run build` followed by `npm run check:site` under the same environment.
