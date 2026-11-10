import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Sitemap maison : évite une dépendance pour une vingtaine d'URL
export const GET: APIRoute = async ({ site }) => {
  const paths = [
    '/',
    '/parcours',
    '/projets',
    '/stages',
    '/veille',
    '/contact',
    ...(await getCollection('projets')).map((p) => `/projets/${p.id}`),
    ...(await getCollection('stages')).map((s) => `/stages/${s.id}`),
  ];
  // Barre finale : même forme que les URL canoniques servies par GitHub Pages
  const urls = paths.map((p) => `  <url><loc>${new URL(p === '/' ? p : `${p}/`, site)}</loc></url>`).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
