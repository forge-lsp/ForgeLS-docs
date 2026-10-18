---
name: forgels-diataxis
description: Applies the Diataxis documentation framework to ForgeLS docs. Classifies pages into tutorial, how-to, reference, or explanation using curated references.
license: MIT
compatibility: opencode
metadata:
  audience: maintainers
  workflow: docs-architecture
  opencode/slash: "true"
  opencode/autoinvoke: "false"
---

# forgels-diataxis

Focus: applying the Diataxis framework (https://diataxis.fr/) to this docs site.

## When to use me

Use when creating a page, restructuring docs, reviewing whether a page fits its purpose, or fixing a page that mixes purposes. Use before `forgels-senior-writer` when the page type is unclear.

## Rules

1. ALWAYS keep standards and language style per the Diataxis guidelines in `references/`. Classify the page with the compass FIRST, then write in that quadrant's voice. Never mix quadrants in one page: link across instead.
2. ALWAYS verify against direct reference sources so docs are based on ACTUAL documentation, not hallucination. Style and structure claims must trace to `references/` (each file cites its source URL on diataxis.fr). Technical claims must trace to `../forgels` files, PR/release URLs, or fetched library docs. If a claim cannot be traced, flag it as UNVERIFIED.

## Workflow

1. Classify: ask action-or-cognition, acquisition-or-application (see `references/compass.md`). Name the quadrant.
2. Read the matching reference file plus `references/four-quadrants.md`.
3. Audit the page against that quadrant's key principles. List violations as path with line plus the broken principle.
4. Fix one violation at a time: move misplaced content to the correct page type (or propose the new page), never delete knowledge.
5. Work one small step at a time per `references/workflow.md`. Never create empty quadrant sections.

## Current site mapping

- `index`: explanation-leaning overview (what ForgeLS is). Keep conceptual, link out to procedures.
- `installation`: how-to guide (goal: working binary).
- `quickstart`: tutorial (learning by doing, concrete steps with expected output).
- `configuration`: reference-leaning (neutral description of keys, flags, defaults).

## References

- `references/four-quadrants.md`: the four needs and forms.
- `references/tutorials.md`, `references/how-to-guides.md`, `references/reference.md`, `references/explanation.md`: per-quadrant principles and language.
- `references/compass.md`: the classification truth table.
- `references/workflow.md`: guide-not-plan, small iterative steps.
- `references/quality.md`: functional vs deep quality.
