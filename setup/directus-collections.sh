#!/bin/bash
set -e

if [ -z "$DIRECTUS_URL" ] || [ -z "$DIRECTUS_TOKEN" ]; then
  echo "Error: DIRECTUS_URL and DIRECTUS_TOKEN must be set"
  echo "Usage: DIRECTUS_URL=... DIRECTUS_TOKEN=... bash setup/directus-collections.sh"
  exit 1
fi

BASE="$DIRECTUS_URL"
AUTH="Authorization: Bearer $DIRECTUS_TOKEN"

echo "=== Creating 'projects' collection ==="
curl -s -X POST "$BASE/collections" \
  -H "$AUTH" \
  -H "Content-Type: application/json" \
  -d '{
    "collection": "projects",
    "meta": {
      "icon": "code",
      "note": "Software projects"
    },
    "schema": {},
    "fields": [
      {
        "field": "id",
        "type": "uuid",
        "meta": {
          "hidden": true,
          "readonly": true,
          "interface": "input",
          "special": ["uuid"]
        },
        "schema": {
          "is_primary_key": true,
          "has_auto_increment": false
        }
      },
      {
        "field": "sort",
        "type": "integer",
        "meta": {
          "hidden": true,
          "interface": "input",
          "sort": 1
        },
        "schema": {}
      },
      {
        "field": "status",
        "type": "string",
        "meta": {
          "interface": "select-dropdown",
          "options": {
            "choices": [
              {"text": "Published", "value": "published"},
              {"text": "Draft", "value": "draft"},
              {"text": "Archived", "value": "archived"}
            ]
          },
          "sort": 2,
          "width": "half"
        },
        "schema": {
          "default_value": "draft"
        }
      },
      {
        "field": "publishedDate",
        "type": "date",
        "meta": {
          "interface": "date",
          "sort": 3,
          "width": "half",
          "required": true
        },
        "schema": {
          "is_nullable": false
        }
      },
      {
        "field": "title",
        "type": "string",
        "meta": {
          "interface": "input",
          "sort": 4,
          "width": "full",
          "required": true
        },
        "schema": {
          "is_nullable": false
        }
      },
      {
        "field": "tags",
        "type": "json",
        "meta": {
          "interface": "tags",
          "sort": 5,
          "width": "full",
          "options": {
            "placeholder": "Enter tags..."
          }
        },
        "schema": {}
      },
      {
        "field": "description",
        "type": "text",
        "meta": {
          "interface": "input-multiline",
          "sort": 6,
          "width": "full",
          "required": true
        },
        "schema": {
          "is_nullable": false
        }
      },
      {
        "field": "urls",
        "type": "json",
        "meta": {
          "interface": "input-multiline",
          "sort": 7,
          "width": "full",
          "note": "JSON object: {\"android\": \"...\", \"app_store\": \"...\", \"website\": \"...\"}"
        },
        "schema": {}
      },
      {
        "field": "website",
        "type": "string",
        "meta": {
          "interface": "input",
          "sort": 8,
          "width": "full"
        },
        "schema": {
          "is_nullable": true
        }
      }
    ]
  }' | python3 -m json.tool

echo ""

# Update meta to set archive/sort
curl -s -X PATCH "$BASE/collections/projects" \
  -H "$AUTH" \
  -H "Content-Type: application/json" \
  -d '{
    "meta": {
      "archive_field": "status",
      "archive_value": "archived",
      "unarchive_value": "draft",
      "sort_field": "sort"
    }
  }' | python3 -m json.tool

echo ""
echo "=== Creating 'jobs' collection ==="
curl -s -X POST "$BASE/collections" \
  -H "$AUTH" \
  -H "Content-Type: application/json" \
  -d '{
    "collection": "jobs",
    "meta": {
      "icon": "work",
      "note": "Work experience"
    },
    "schema": {},
    "fields": [
      {
        "field": "id",
        "type": "uuid",
        "meta": {
          "hidden": true,
          "readonly": true,
          "interface": "input",
          "special": ["uuid"]
        },
        "schema": {
          "is_primary_key": true,
          "has_auto_increment": false
        }
      },
      {
        "field": "sort",
        "type": "integer",
        "meta": {
          "hidden": true,
          "interface": "input",
          "sort": 1
        },
        "schema": {}
      },
      {
        "field": "status",
        "type": "string",
        "meta": {
          "interface": "select-dropdown",
          "options": {
            "choices": [
              {"text": "Published", "value": "published"},
              {"text": "Draft", "value": "draft"},
              {"text": "Archived", "value": "archived"}
            ]
          },
          "sort": 2,
          "width": "half"
        },
        "schema": {
          "default_value": "draft"
        }
      },
      {
        "field": "startDate",
        "type": "date",
        "meta": {
          "interface": "date",
          "sort": 3,
          "width": "half",
          "required": true
        },
        "schema": {
          "is_nullable": false
        }
      },
      {
        "field": "finishDate",
        "type": "date",
        "meta": {
          "interface": "date",
          "sort": 4,
          "width": "half",
          "note": "Leave empty for current position"
        },
        "schema": {
          "is_nullable": true
        }
      },
      {
        "field": "title",
        "type": "string",
        "meta": {
          "interface": "input",
          "sort": 5,
          "width": "full",
          "required": true
        },
        "schema": {
          "is_nullable": false
        }
      },
      {
        "field": "companyName",
        "type": "string",
        "meta": {
          "interface": "input",
          "sort": 6,
          "width": "full",
          "required": true
        },
        "schema": {
          "is_nullable": false
        }
      },
      {
        "field": "description",
        "type": "text",
        "meta": {
          "interface": "input-multiline",
          "sort": 7,
          "width": "full",
          "required": true
        },
        "schema": {
          "is_nullable": false
        }
      },
      {
        "field": "location",
        "type": "string",
        "meta": {
          "interface": "input",
          "sort": 8,
          "width": "full",
          "required": true
        },
        "schema": {
          "is_nullable": false
        }
      }
    ]
  }' | python3 -m json.tool

echo ""

# Update meta to set archive/sort
curl -s -X PATCH "$BASE/collections/jobs" \
  -H "$AUTH" \
  -H "Content-Type: application/json" \
  -d '{
    "meta": {
      "archive_field": "status",
      "archive_value": "archived",
      "unarchive_value": "draft",
      "sort_field": "sort"
    }
  }' | python3 -m json.tool

echo ""
echo "Done."
