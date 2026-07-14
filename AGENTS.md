<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:superpowers-workflow -->
# Superpowers Workflow Reminder

This project uses the **Superpowers** workflow.

## Mandatory Superpowers Invocation

At the start of EVERY conversation, before any response, action, or clarifying question, you MUST:

1. **Check for project-level config:**
   - Look for `PROJECT_CONFIG.yaml`
   - Load it if present to get project-specific commands and paths

2. **Invoke Superpowers skills:**
   - Use the `skill` tool to invoke `using-superpowers`
   - Invoke at least one other applicable skill based on the current task stage

## Workflow Stages and Skill Mapping

| Stage | Skill to Read | Purpose |
|-------|---------------|---------|
| Stage 1: Exploration | `brainstorming` | Feature design and approach selection |
| Stage 2: Planning | `writing-plans` | Task decomposition |
| Stage 3: Implementation | `test-driven-development` or `subagent-driven-development` | Write code with tests |
| Stage 4: Review | `requesting-code-review` | Code review process |
| Stage 5: Testing | *(use project test commands from config)* | Run all tests |
| Stage 6: Verification | `verification-before-completion` | Evidence-based validation |
| Stage 7: Delivery | `finishing-a-development-branch` | Merge and cleanup |
| MODE B: Debug | `systematic-debugging` | Root cause analysis |

## Forbidden

- Reading only `using-superpowers` then starting work
- Ignoring `PROJECT_CONFIG.yaml` if it exists
- Using generic commands when project config specifies exact commands
<!-- END:superpowers-workflow -->
