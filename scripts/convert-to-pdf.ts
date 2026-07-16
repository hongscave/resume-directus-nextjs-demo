import { readFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PDF_DIR = join(__dirname, '..', 'pdf');
const HTML_FILE = join(PDF_DIR, 'index.html');

function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function loadConfig() {
  try {
    const mod = require('./resume.config.ts') as typeof import('../scripts/resume.config.example');
    return mod.resumeConfig;
  } catch {
    console.warn('scripts/resume.config.ts not found. Falling back to resume.config.example.ts.');
    const mod = require('./resume.config.example.ts') as typeof import('../scripts/resume.config.example');
    return mod.resumeConfig;
  }
}

async function convertToPdf() {
  if (!existsSync(HTML_FILE)) {
    console.error(`HTML file not found: ${HTML_FILE}`);
    console.error('Run `pnpm run generate-resume` first.');
    process.exit(1);
  }

  const config = loadConfig();
  const slug = slugify(config.fullName);
  const fileName = `resume-${slug}.pdf`;
  const outputPath = join(PDF_DIR, fileName);

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
  });

  try {
    const page = await browser.newPage();
    await page.goto(`file://${resolve(HTML_FILE)}`, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '0', bottom: '0', left: '0', right: '0' },
    });
    console.log(`Resume PDF ready: ${resolve(outputPath)}`);
  } finally {
    await browser.close();
  }
}

convertToPdf();
