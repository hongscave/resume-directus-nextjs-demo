# Demo Single Page Developer Resume Using Directus + Nextjs + Typescript

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Disclaimer
- This repo is a work-in-progress.
- This resume is built because I need a digital resume to apply for jobs.
- It is not optimised but it will be.
- Feel free to use.

## Backbone
Nextjs
Typescript
Directus
(KiloCode)

## Initial Setup
- Run the script /setup/directus-collections.sh to create the collections with defined schema on Directus.  Or, you can create them via Directus web GUI.

## Caveats
- Directus returns date fields as ISO strings (e.g. "2026-07-14"), not Date objects, so string is the correct type.