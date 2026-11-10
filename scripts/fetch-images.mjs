// Rapatrie en pleine résolution les images Wix référencées par l'ancien site.
// Usage : npm run fetch-images
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';

const OUT = new URL('../src/assets/images/wix/', import.meta.url);
const src = await readFile(new URL('../legacy/assets/data.js', import.meta.url), 'utf8');
const ids = [...new Set(src.match(/[0-9a-f]{32}~mv2\.(?:png|jpe?g|webp)/g))];

await mkdir(OUT, { recursive: true });
let ok = 0;
const failed = [];
for (const id of ids) {
  const file = new URL(id.replace('~mv2', ''), OUT);
  try {
    await access(file);
    ok++;
    continue; // déjà téléchargée
  } catch {}
  const res = await fetch(`https://static.wixstatic.com/media/f2fdee_${id}`);
  if (!res.ok) {
    failed.push(`${id} (${res.status})`);
    continue;
  }
  await writeFile(file, Buffer.from(await res.arrayBuffer()));
  ok++;
}
console.log(`${ok}/${ids.length} images présentes dans src/assets/images/wix/`);
if (failed.length) {
  console.error('Échecs :', failed.join(', '));
  process.exit(1);
}
