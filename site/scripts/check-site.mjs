import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const dist = resolve('dist');
const isCloudflareBuild = process.env.CF_PAGES === '1' || process.env.DEPLOY_TARGET === 'cloudflare';
const base = process.env.GITHUB_ACTIONS === 'true' && !isCloudflareBuild ? '/Flowin' : '';
const pages = [];
function visit(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) visit(path);
    else if (entry.name.endsWith('.html')) pages.push(path);
  }
}
visit(dist);

const problems = [];
let linksChecked = 0;
const homeHtml = readFileSync(join(dist, 'index.html'), 'utf8');
const rangeCards = [...homeHtml.matchAll(/<a\b[^>]*class="[^"]*\bphoto-range\b[^"]*"[^>]*>[\s\S]*?<\/a>/g)];
if (rangeCards.length !== 5) problems.push(`index.html: expected five fully linked range cards, found ${rangeCards.length}`);
for (const [index, card] of rangeCards.entries()) {
  if (!card[0].includes('<img')) problems.push(`index.html: range card ${index + 1} missing its photograph`);
  if (!card[0].includes('Explore range')) problems.push(`index.html: range card ${index + 1} missing call to action`);
  if (!card[0].includes(`href="${base}/products/`)) problems.push(`index.html: range card ${index + 1} missing product destination`);
}
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const name = relative(dist, page).replaceAll('\\', '/');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  const idSet = new Set(ids);
  if (ids.length !== idSet.size) problems.push(`${name}: duplicate ID`);
  if (!/<meta http-equiv="refresh"/i.test(html) && (html.match(/<h1\b/g) ?? []).length !== 1) problems.push(`${name}: expected exactly one H1`);
  if (!/<title>[^<]+<\/title>/.test(html)) problems.push(`${name}: missing title`);
  if (!/<meta http-equiv="refresh"/i.test(html) && !/<meta name="description" content="[^"]+"/.test(html)) problems.push(`${name}: missing description`);
  for (const match of html.matchAll(/<(?:a|link|script|img)\b[^>]*?\b(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (!url.startsWith('/') && !url.startsWith('#')) continue;
    const [pathWithQuery, fragment] = url.split('#');
    const pathPart = pathWithQuery.split('?')[0];
    if (!pathPart && fragment) {
      if (!idSet.has(fragment)) problems.push(`${name}: missing #${fragment}`);
      continue;
    }
    if (!pathPart.startsWith(`${base}/`)) {
      problems.push(`${name}: unbased URL ${url}`);
      continue;
    }
    const relativePath = decodeURIComponent(pathPart.slice(base.length + 1));
    const target = join(dist, relativePath);
    const file = pathPart.endsWith('/') ? join(target, 'index.html') : target;
    if (!existsSync(file)) problems.push(`${name}: missing ${url}`);
    linksChecked++;
    if (fragment && file.endsWith('.html') && existsSync(file)) {
      const targetHtml = readFileSync(file, 'utf8');
      if (!targetHtml.includes(`id="${fragment}"`)) problems.push(`${name}: missing fragment ${url}`);
    }
  }
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="[^"]*"/.test(match[0])) problems.push(`${name}: image missing alt`);
  }
}

if (problems.length) {
  console.error(problems.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Checked ${pages.length} pages and ${linksChecked} local URLs: no broken links or basic structure errors.`);
}
