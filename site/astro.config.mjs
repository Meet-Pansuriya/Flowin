import { defineConfig } from 'astro/config';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const isCloudflareBuild = process.env.CF_PAGES === '1' || process.env.DEPLOY_TARGET === 'cloudflare';
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true' && !isCloudflareBuild;
const githubPagesBase = '/Flowin';

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
    },
  },
};

export default defineConfig({
  output: 'static',
  site: isCloudflareBuild
    ? process.env.SITE_URL || process.env.CF_PAGES_URL || 'https://flowin.pages.dev'
    : 'https://meet-pansuriya.github.io',
  base: isGitHubPagesBuild ? githubPagesBase : '/',
  integrations: [githubPagesLinkRewrite],
});
