# Demo Single Page Developer Resume Using Directus + Nextjs + Typescript

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Disclaimer
- This resume is built because I need a digital resume to apply for jobs.
- It will be further improved.

## Backbone
Nextjs
Typescript
Directus
(KiloCode)

## Initial Setup
- Set the environment variables in .env
- Update the author.ts to your liking.
- Run the script /setup/directus-collections.sh to create the collections with defined schema on Directus.  Or, you can create them via Directus web GUI.
- Copy the /scripts/resume.config.example.ts to /scripts/resume.config.ts and modify accordingly.

## Caveats
- Directus returns date fields as ISO strings (e.g. "2026-07-14"), not Date objects, so string is the correct type.

## Analytics
- Built-in Umami Analytics integration, modify the environment variable to start tracking.

## Deploy 
Deploy to CloudFlare Workers using npm run deploy

## Build Resume.pdf
Run pnpm run build:resume  - the generated resume pdf file will be in the /pdf/ folder