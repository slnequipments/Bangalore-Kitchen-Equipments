import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const staticFiles = [
  "index.html",
  "products.html",
  "services.html",
  "blog.html",
  "about.html",
  "contact.html",
  "404.html",
  "styles.css",
  "script.js",
  "favicon.ico",
  "favicon.svg",
  "site.webmanifest",
  "robots.txt",
  "sitemap.xml",
  "_headers",
];

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const file of staticFiles) {
  const source = join(root, file);
  if (existsSync(source)) {
    cpSync(source, join(dist, file));
  }
}

cpSync(join(root, "assets"), join(dist, "assets"), { recursive: true });

console.log(`Built static site into ${dist}`);
