import { defineConfig, devices } from '@playwright/test';

// Par défaut : site construit (dist/) servi par astro preview.
// BASE_URL=https://alxx-10.github.io npx playwright test → teste le site en ligne.
const remote = process.env.BASE_URL;

export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  reporter: 'list',
  use: { baseURL: remote ?? 'http://127.0.0.1:4322' },
  webServer: remote
    ? undefined
    : {
        command: 'node node_modules/astro/astro.js preview --host 127.0.0.1 --port 4322',
        url: 'http://127.0.0.1:4322',
        reuseExistingServer: false,
      },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
});
