import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const origin = 'https://flowinpipeandfitting.com';
const preview = process.env.CF_PAGES === '1' && process.env.CF_PAGES_BRANCH !== undefined && process.env.CF_PAGES_BRANCH !== 'main';
const pages = [];
function visit(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) visit(path);
    else if (entry.name.endsWith('.html')) pages.push(path);
  }
}
visit('dist');
const urls = new Set();
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  if (/<meta http-equiv="refresh"/i.test(html)) {
    if (!html.includes('/products/swr/ring-fit-pipes/')) throw new Error(`${file}: unexpected redirect`);
    continue;
  }
  const robots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1];
  if (file.endsWith('404.html') || preview) {
    if (!robots?.includes('noindex')) throw new Error(`${file}: must be noindex`);
    continue;
  }
  if (!robots || robots.includes('noindex')) throw new Error(`${file}: indexing blocked`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!canonical?.startsWith(`${origin}/`) || canonical.includes('/Flowin/') || canonical.includes('?') || urls.has(canonical)) throw new Error(`${file}: incorrect or duplicate canonical`);
  urls.add(canonical);
  const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  if (!json) throw new Error(`${file}: missing structured data`);
  const graph = JSON.parse(json)['@graph'];
  if (!graph.some(node => node['@type'] === 'WebPage' && node.url === canonical)) throw new Error(`${file}: schema URL mismatch`);
  if (!html.includes('property="og:image"')) throw new Error(`${file}: missing social preview`);
}
const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
if (locations.length !== urls.size || locations.some(url => !urls.has(url))) throw new Error('Sitemap differs from indexable pages');
if (!readFileSync('dist/robots.txt', 'utf8').includes(`Sitemap: ${origin}/sitemap.xml`)) throw new Error('robots.txt lacks primary sitemap');
console.log(`SEO checks passed: ${urls.size} indexable URLs, canonical URLs, structured data and sitemap.`);
