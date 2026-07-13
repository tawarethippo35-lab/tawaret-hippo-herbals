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

- **Product recommendation form** — set `find_your_match_form_url` in `_config.yml` to your published Google Form's embed URL (Google Forms → Send → the `<>` embed icon → copy the `src` URL). Until set, that page shows a WhatsApp fallback instead of a broken form.
- **Real reviews** — add them to `_data/testimonials.yml` following the format shown in that file's comments. No reviews are shown until real ones are added; nothing on the Reviews page is invented.

## Content structure

- `index.md` — home page
- `products.md` + `_products/` — catalog index and 15 individual product pages
- `blog.md` + `_posts/` — blog index and 3 starter posts
- `faq.html` — FAQ page with FAQPage schema
- `reviews.md` — testimonials page, reads from `_data/testimonials.yml`
- `find-your-match.md` — wellness intake form page

## A note on the Daily Balance Tonic

This product isn't in the `tawaret-product-catalog` reference material (the "12 confirmed products" list). You confirmed it directly in this conversation on 2026-07-09: 450 ml bottles, Cranberry and Lime flavors, sold by the case at TT$400 for 10 bottles or TT$760 for 20. If you're keeping that reference catalog up to date elsewhere, worth adding it there too so other tools/sessions know about it.

## A note on Colloidal Silver, T.E. Cream, and the three-product bundle

The site currently includes Colloidal Silver, T.E. Cream, and the Colloidal Silver, Healing Oil & Magnesium Bundle as public product pages. Their public copy must remain limited to approved product facts and ordering information. If Nyla later decides to remove them from indexed content:

- Delete or add `noindex: true` to the three product pages and the Colloidal Silver explainer post.
- `noindex: true` in a page's front matter removes it from search indexing (see `404.html` for an example) without deleting the page.

## Compliance rules baked into this site

- No em dashes anywhere in site copy.
- No use of the word "support" in site copy.
- Keep product copy limited to approved product facts and avoid medical claims.
- No children's dosing guidance anywhere.
- All products are currently available by prepaid pre-order.
- Free pickup is available at Chinapoo Road, Morvant. Extra Foods, Aranguez is also a free pickup option until August 31, 2026.
- The only direct call-to-action on the site is WhatsApp (`wa.me` click-to-chat links). The product recommendation form is a lead intake, not a purchase action, and it explicitly tells visitors the reply comes later by WhatsApp.

Keep new content consistent with these rules, and re-check pricing against your product catalog before publishing changes, since prices change.
