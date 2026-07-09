# Tawaret Hippo Herbals website

Jekyll site for GitHub Pages. Mobile-first, no CSS/JS framework, built for SEO and AI answer engines (AEO).

## Run locally

Requires Ruby and Bundler.

```
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Deploy to GitHub Pages

1. Create a new GitHub repo named `tawaret-hippo-herbals`.
2. Push this folder's contents to the repo's `main` branch.
3. In the repo's Settings → Pages, set the source to "Deploy from a branch", branch `main`, folder `/ (root)`.
4. GitHub Pages builds automatically using the `github-pages` gem in the Gemfile. No custom Actions workflow is needed.
5. Once live, update `url:` in `_config.yml` to your real GitHub Pages URL (or a custom domain if you add one), commit, and push again so canonical URLs and the sitemap are correct.

## Before launch, still needed from you

- **Find Your Match form** — set `find_your_match_form_url` in `_config.yml` to your published Google Form's embed URL (Google Forms → Send → the `<>` embed icon → copy the `src` URL). Until set, that page shows a WhatsApp fallback instead of a broken form.
- **Real reviews** — add them to `_data/testimonials.yml` following the format shown in that file's comments. No reviews are shown until real ones are added; nothing on the Reviews page is invented.

## Content structure

- `index.md` — home page
- `products.md` + `_products/` — catalog index and 15 individual product pages (12 catalog products + the HSV Wellness Protocol bundle + Daily Balance Tonic in Cranberry and Lime)
- `blog.md` + `_posts/` — blog index and 3 starter posts
- `faq.html` — FAQ page with FAQPage schema
- `reviews.md` — testimonials page, reads from `_data/testimonials.yml`
- `find-your-match.md` — wellness intake form page

## A note on the Daily Balance Tonic

This product isn't in the `tawaret-product-catalog` reference material (the "12 confirmed products" list). You confirmed it directly in this conversation on 2026-07-09: 450 ml bottles, Cranberry and Lime flavors, sold by the case at TT$400 for 10 bottles or TT$760 for 20. If you're keeping that reference catalog up to date elsewhere, worth adding it there too so other tools/sessions know about it.

## A note on Colloidal Silver, Tumor Eliminator Crème, and the HSV Wellness Protocol

Your `tawaret-product-catalog` reference material has a standing rule that keeps these three off indexed/public content, because colloidal silver content was the likely trigger for a past Google Business Profile flag. When this site was built, you chose to include all three on the public site anyway (product pages, schema, and the colloidal silver blog post). That's reflected here. If you later want to pull them from indexed content instead, the fix is small:

- Delete or `noindex: true` the three product pages (`_products/colloidal-silver.md`, `_products/tumor-eliminator-creme.md`, `_products/hsv-wellness-protocol.md`) and `_posts/2026-07-08-colloidal-silver-explainer.md`.
- `noindex: true` in a page's front matter removes it from search indexing (see `404.html` for an example) without deleting the page.

## Compliance rules baked into this site

- No em dashes anywhere in site copy.
- No use of the word "support" in site copy.
- No cure or treatment claims. Every product and post carries a plain-language disclaimer.
- No children's dosing guidance anywhere.
- No delivery mentions beyond TTPost as a pickup fallback.
- The only direct call-to-action on the site is WhatsApp (`wa.me` click-to-chat links). The Find Your Match form is a lead intake, not a purchase action, and it explicitly tells visitors the reply comes later by WhatsApp.

Keep new content consistent with these rules, and re-check pricing against your product catalog before publishing changes, since prices change.
