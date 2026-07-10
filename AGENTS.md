# Tawaret Hippo Herbals — Codex Project Instructions

## Project scope

- This repository contains the Tawaret Hippo Herbals website.
- Preserve the existing brand voice, product claims, prices, contact details, and business information unless the user explicitly requests a change.
- Do not invent health claims, testimonials, certifications, ingredients, or regulatory statements.

## Repository structure

- The site is a Jekyll project configured by `_config.yml`.
- Page content lives in root Markdown/HTML files and `_posts`.
- Product content lives in `_products` and supporting structured data lives in `_data`.
- Shared templates live in `_includes` and `_layouts`.
- Static files live in `assets`.

## Editing rules

- Make the smallest change needed for the request.
- Do not edit files inside `.git` manually.
- Preserve front matter, Liquid syntax, filenames, URLs, and data structure unless a requested change requires otherwise.
- Reuse existing layouts, includes, styles, and asset conventions before introducing new patterns.
- Do not commit generated site output or dependency folders unless they are already tracked and intentionally maintained.

## Verification

- Review `git diff` after changes and confirm unrelated content was not modified.
- When dependencies are available, run the repository's Jekyll build or serve command and resolve relevant errors before handoff.
- Check affected pages for valid front matter, Liquid syntax, internal links, asset paths, and responsive layout.
- Report changed files, checks performed, and any remaining limitations.
