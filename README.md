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

## Caveats
- Directus returns date fields as ISO strings (e.g. "2026-07-14"), not Date objects, so string is the correct type.

## Deploy 
Deploy to CloudFlare Pages.