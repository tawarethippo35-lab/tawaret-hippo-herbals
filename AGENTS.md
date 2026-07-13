# Tawaret Hippo Herbals — Codex Project Instructions

## Scope and separation

- Work only on Tawaret Hippo Herbals in this repository.
- The repository is `tawarethippo35-lab/tawaret-hippo-herbals`; the live branch is `main`.
- Never use BTSY repositories, accounts, files, contacts, branding, or business rules here.
- Tawaret Google Drive, Google Sheets, Google Forms, Gemini, and Make.com work belongs under `tawarethippo35@gmail.com`.

## Authoritative project documents

- `docs/business-rules.md` contains permanent business, sales, communication, payment, pickup, and consultation rules.
- `docs/product-catalog.md` contains the current approved product names, sizes, prices, bundles, and digital inclusions.
- `docs/automation-map.md` contains the approved tools, workflows, connections, statuses, and data flow.
- Check these documents before changing website content, sales logic, or automation instructions.
- If repository content conflicts with these documents, report the conflict. Do not silently choose or invent a correction.

## Editing rules

- Use clean builds, clean replacements, and structured corrections. Do not use patching-style fixes unless Nyla explicitly requests patching for the current task.
- Confirm the repository, branch, remote, and files in scope before editing.
- Use a dedicated feature branch for substantial changes. Do not change `main` until work is reviewed and approved.
- Preserve unrelated user changes and working features.
- Preserve front matter, Liquid syntax, filenames, URLs, and data structures unless the approved task requires a change.
- Reuse existing layouts, includes, styles, and asset conventions before introducing new patterns.
- Never invent products, prices, sizes, ingredients, availability, delivery methods, payment links, health claims, testimonials, certifications, or regulatory statements.
- Do not expose passwords, API keys, webhook secrets, payment information, or private customer information in repository files.

## Website structure

- This is a Jekyll website configured by `_config.yml`.
- Page content lives in root Markdown/HTML files and `_posts`.
- Product content lives in `_products`.
- Shared templates live in `_includes` and `_layouts`.
- Static files live in `assets`.

## Safety and communication

- Use warm, direct, educational, natural language.
- Do not diagnose, prescribe, promise cures, guarantee results, or present Tawaret Hippo Herbals as medical care.
- Keep free general questions separate from personalized guidance and medical-report review that require the TT$250 consultation.
- WhatsApp is the primary order and inquiry channel. Calls are only for confirmed pickup logistics.
- Do not mention TTPOST unless Nyla explicitly confirms it for the current task.
- Do not use “sis” or “queen.”

## Automation rules

- Keep Make.com scenarios off during setup and controlled tests unless activation is explicitly approved.
- Do not send customer messages, publish content, process payments, or activate automations without explicit approval.
- AI-generated classifications and replies must remain reviewable by Nyla before customer use.

## Verification and handoff

- Review the complete diff and confirm unrelated content was not modified.
- Run the relevant Jekyll build and targeted tests when dependencies are available.
- Check affected pages for valid front matter, Liquid syntax, internal links, asset paths, responsive layout, grammar, accessibility, and WhatsApp conversion paths.
- Report what was inspected, changed, and tested; the result; files changed; branch and commit details; remaining connections or approvals; and one recommended next action.
