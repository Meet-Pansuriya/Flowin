import { defineConfig } from 'astro/config';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const isCloudflareBuild = process.env.CF_PAGES === '1' || process.env.DEPLOY_TARGET === 'cloudflare';
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true' && !isCloudflareBuild;
const githubPagesBase = '/Flowin';
const publicOrigin = 'https://flowinpipeandfitting.com';

async function rewriteRootLinks(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  await Promise.all(entries.map(async (entry) => {
    const entryPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      await rewriteRootLinks(entryPath);
      return;
    }

    if (!entry.isFile() || !entry.name.endsWith('.html')) return;

    const source = await readFile(entryPath, 'utf8');
    const rewritten = source.replace(
      /\b(href|src)=(['"])\/(?!Flowin(?:\/|$))/g,
      `$1=$2${githubPagesBase}/`,
    );

    if (rewritten !== source) await writeFile(entryPath, rewritten);
  }));
}

const githubPagesLinkRewrite = {
  name: 'github-pages-link-rewrite',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      if (isGitHubPagesBuild) await rewriteRootLinks(fileURLToPath(dir));
      const output = fileURLToPath(dir);
      const urls = [];
      async function collect(directory) {
        for (const entry of await readdir(directory, { withFileTypes: true })) {
          const entryPath = join(directory, entry.name);
          if (entry.isDirectory()) await collect(entryPath);
          else if (entry.name === 'index.html') {
            const source = await readFile(entryPath, 'utf8');
            const canonical = source.match(/<link rel="canonical" href="([^"]+)"/);
            if (canonical && !/<meta http-equiv="refresh"/i.test(source) && !source.includes('content="noindex, follow"')) urls.push(canonical[1]);
          }
        }
      }
      await collect(output);
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.sort().map(url => `<url><loc>${url}</loc></url>`).join('')}</urlset>\n`;
      await writeFile(join(output, 'sitemap.xml'), xml);
      await writeFile(join(output, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${publicOrigin}/sitemap.xml\n`);
    },
  },
};

export default defineConfig({
  output: 'static',
  site: isCloudflareBuild
    ? publicOrigin
    : 'https://meet-pansuriya.github.io',
  base: isGitHubPagesBuild ? githubPagesBase : '/',
  integrations: [githubPagesLinkRewrite],
});
