import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const cwd = fileURLToPath(new URL('../', import.meta.url));
const env = { ...process.env, DEPLOY_TARGET: 'cloudflare' };
for (const args of [['node_modules/astro/bin/astro.mjs', 'build'], ['scripts/check-site.mjs']]) {
  const result = spawnSync(process.execPath, args, { cwd, env, stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
