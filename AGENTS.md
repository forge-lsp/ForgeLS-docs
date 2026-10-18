<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Forge docs agents

Subagents live in `.opencode/agents/` and are registered in `opencode.json`.
Invoke with `@forge-explorer`, `@forge-planner`, `@forge-executor`, `@forge-qa`.

Delivery cycle (strict, in order, no skipping):

1. `@forge-explorer`: gather evidence on latest ForgeLS changes (PRs, commits, releases in `../forgels`) and docs impact. Read only.
2. `@forge-planner`: turn findings into an approved plan. No edits.
3. `@forge-executor`: implement the plan with small diffs, then hand off to QA.
4. `@forge-qa`: gate every change. Verdict PASS or FAIL with evidence.

- If QA verdict is FAIL, restart the cycle from step 1 with QA findings attached.
- If QA verdict is PASS, the cycle is done.
- Content changes cover both `en` and `id` locales unless the plan exempts one.
