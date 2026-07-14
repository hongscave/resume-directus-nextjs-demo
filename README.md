# Disclaimer
Feel free to use.

# Demo for a Single Page Developer Resume Using Directus + Nextjs + Typescript
This is a demostration of my understanding for the fundamentals.

## Backbone
Nextjs
Typescript
Directus

## Initial Setup
- Run the script /setup/directus-collections.sh to create the collections with defined schema on Directus.  Or, you can create them via Directus GUI

## Caveats
- Directus returns date fields as ISO strings (e.g. "2026-07-14"), not Date objects, so string is the correct type.