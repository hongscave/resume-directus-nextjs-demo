#!/bin/bash
set -e

if [ -z "$DIRECTUS_URL" ] || [ -z "$DIRECTUS_TOKEN" ]; then
  echo "Error: DIRECTUS_URL and DIRECTUS_TOKEN must be set"
  echo "Usage: DIRECTUS_URL=... DIRECTUS_TOKEN=... bash setup/directus-add-fields.sh"
  exit 1
fi

BASE="$DIRECTUS_URL"
AUTH="Authorization: Bearer $DIRECTUS_TOKEN"

echo "=== Adding imgAlt field ==="
curl -s -X POST "$BASE/fields/projects" \
  -H "$AUTH" \
  -H "Content-Type: application/json" \
  -d '{
    "field": "imgAlt",
    "type": "string",
    "meta": {
      "interface": "input",
      "sort": 10,
      "width": "full",
      "note": "Alt text for the project thumbnail image"
    },
    "schema": {
      "is_nullable": true
    }
  }' | python3 -m json.tool

echo ""
echo "=== Adding pinned field ==="
curl -s -X POST "$BASE/fields/projects" \
  -H "$AUTH" \
  -H "Content-Type: application/json" \
  -d '{
    "field": "pinned",
    "type": "boolean",
    "meta": {
      "interface": "boolean",
      "sort": 11,
      "width": "half",
      "note": "Show pin icon on the project card"
    },
    "schema": {
      "default_value": false
    }
  }' | python3 -m json.tool

echo ""
echo "=== Adding sortOrder field ==="
curl -s -X POST "$BASE/fields/projects" \
  -H "$AUTH" \
  -H "Content-Type: application/json" \
  -d '{
    "field": "sortOrder",
    "type": "integer",
    "meta": {
      "interface": "input",
      "sort": 12,
      "width": "half",
      "note": "Lower = higher priority. Falls back to publishedDate desc."
    },
    "schema": {
      "is_nullable": true
    }
  }' | python3 -m json.tool

echo ""
echo "Done."