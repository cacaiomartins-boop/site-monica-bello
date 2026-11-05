// Depois do build, grava o HTML completo de cada página dentro do dist.
// O React "assume" esse HTML no navegador; o visual é o mesmo.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const { pages } = await import(pathToFileURL(resolve(root, "dist-ssr/entry-server.js")).href);

const marker = '<div id="root"></div>';
const targets = [
  ["dist/index.html", "home"],
  ["dist/ansiedade/index.html", "ansiedade"],
];

for (const [file, key] of targets) {
  const path = resolve(root, file);
  const html = readFileSync(path, "utf-8");
  if (!html.includes(marker)) throw new Error(`Marcador não encontrado em ${file}`);
  const body = pages[key]();
  if (!body.includes("<h1")) throw new Error(`Página ${key} sem H1 após a renderização`);
  writeFileSync(path, html.replace(marker, () => `<div id="root">${body}</div>`));
  console.log(`pré-renderizado: ${file} (${body.length} caracteres)`);
}
