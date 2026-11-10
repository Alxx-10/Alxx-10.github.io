import { test, expect, type Page } from '@playwright/test';

const pages = [
  ['/', "Je veux faire de l'IA mon métier."],
  ['/parcours/', 'Formation & expériences'],
  ['/projets/', 'Mes réalisations techniques'],
  ['/stages/', 'Mes missions chez PLANIFIQUE'],
  ['/veille/', 'Apprendre en continu'],
  ['/contact/', 'Travaillons ensemble'],
] as const;

// Collecte les erreurs console et les requêtes vers Wix pendant la visite
function watch(page: Page) {
  const errors: string[] = [];
  const wix: string[] = [];
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('request', (r) => /wix(static)?\.com/.test(r.url()) && wix.push(r.url()));
  return { errors, wix };
}

for (const [path, heading] of pages) {
  test(`${path} s'affiche sans erreur`, async ({ page }) => {
    const seen = watch(page);
    const res = await page.goto(path);
    expect(res?.status()).toBe(200);
    await expect(page.locator('h1')).toHaveText(heading);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForLoadState('networkidle');
    const broken = await page.$$eval('img', (imgs) => imgs.filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src));
    expect(broken).toEqual([]);
    expect(seen.errors).toEqual([]);
    expect(seen.wix).toEqual([]);
    // Pas de défilement horizontal
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}

for (const [list, count] of [['/projets/', 10], ['/stages/', 5]] as const) {
  test(`${list} : ${count} fiches, chacune avec sa galerie`, async ({ page }) => {
    await page.goto(list);
    const hrefs = await page.locator('a.card').evaluateAll((as) => as.map((a) => a.getAttribute('href')!));
    expect(hrefs).toHaveLength(count);
    for (const href of hrefs) {
      const res = await page.goto(href);
      expect(res?.status(), href).toBe(200);
      await expect(page.locator('.gal img').first(), href).toBeVisible();
      await expect(page.locator('.comp h3').first(), href).toBeVisible();
    }
  });
}

test('aucun lien interne cassé', async ({ page, request }) => {
  const toVisit = ['/'];
  const seen = new Set<string>();
  while (toVisit.length) {
    const path = toVisit.pop()!;
    if (seen.has(path)) continue;
    seen.add(path);
    const res = await request.get(path);
    expect(res.status(), path).toBe(200);
    if (!res.headers()['content-type']?.includes('html')) continue;
    await page.goto(path);
    const links = await page.locator('a[href^="/"]').evaluateAll((as) => as.map((a) => a.getAttribute('href')!));
    toVisit.push(...links.map((l) => l.split('#')[0]));
  }
  expect(seen.size).toBeGreaterThanOrEqual(22);
});

test('le bouton de thème bascule et se mémorise', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  await page.click('#theme');
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('le menu mobile s’ouvre', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'menu replié seulement sur mobile');
  await page.goto('/');
  await expect(page.locator('#links')).toBeHidden();
  await page.click('#menu');
  await expect(page.locator('#links')).toBeVisible();
  await expect(page.locator('#menu')).toHaveAttribute('aria-expanded', 'true');
});

test('le CV allégé est servi',async ({ request }) => {
  const res = await request.get('/cv-alexis-leclerc.pdf');
  expect(res.status()).toBe(200);
  expect(res.headers()['content-type']).toContain('pdf');
});

test('page 404', async ({ page }) => {
  await page.goto('/404.html');
  await expect(page.locator('h1')).toHaveText('Page introuvable');
});
