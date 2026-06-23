# ProSmash Shop — Styling & Theme Guide

This repository contains the frontend theme assets and templates for the ProSmash Shop storefront. This README documents how styling is organized, naming conventions, theme variables, and recommended workflows for development and deployment.

**Project overview**

- Purpose: storefront theme built with Liquid templates and static assets.
- Key folders:
  - `assets/`: CSS, JS, images, and other static assets. Many files end with `.css.liquid` when they depend on Liquid variables.
  - `layout/`, `sections/`, `snippets/`, `templates/`: Shopify theme structure for markup and component scaffolding.
  - `config/` and `locales/`: theme settings and translations.

**Styling structure & file types**

- `.css.liquid`: dynamic styles that use Liquid (`settings`, `asset_url`, translations). Use when styles need runtime values from theme settings.
- `.css`: static stylesheet files that do not need Liquid processing.
- `all.min.css`: compiled and minified bundle used in production—prefer referencing this for performance.

Naming conventions

- Prefixes: many component styles use `mdp-weare-` (component-specific). Keep new component styles consistent with this pattern: `mdp-weare-{component}-{variant}.css.liquid`.
- Utility and global files: keep shared utilities (grid, typography, helpers) in distinct files like `mdp-weare-grid-1.css.liquid`.
- Hover sets, themes, and small modules: keep concise names like `hover-set1.css`.

Component-level organization

- One component → one stylesheet: store styles used only by a specific section in its matching component stylesheet. This keeps scope clear and reduces accidental coupling.
- When a section needs tiny overrides, prefer adding a section-specific stylesheet rather than editing global CSS.

Using theme settings and CSS variables

- Create theme settings in `config/settings_schema.json` or the theme editor to expose colors, fonts, and toggles to merchants.
- Inject settings as CSS custom properties in the page head (in `layout/theme.liquid`) so static `.css` files can consume them:

```liquid
<style>
  :root {
    --brand-color: {{ settings.color_brand | default: '#1a1a1a' }};
    --accent-color: {{ settings.color_accent | default: '#ff5a5f' }};
    --base-font: "{{ settings.font_base.family }}", system-ui, -apple-system, sans-serif;
  }
</style>
```

- For styles that require conditional logic (e.g., per-theme overrides), keep them in `.css.liquid` and reference `settings` directly.

How to add or modify styles

- Add a new file under `assets/` (choose `.css.liquid` if you need theme data). Name it following conventions.
- Register the stylesheet in `layout/theme.liquid` or the appropriate template using Shopify filters:

```liquid
{{ 'your-file.css' | asset_url | stylesheet_tag }}
```

- For section-scoped styles, load them conditionally inside the section snippet to avoid unnecessary downloads on pages that don't use the section.

Performance & best practices

- Minify and bundle for production: keep `all.min.css` as the canonical production bundle.
- Critical CSS: inline the minimum above-the-fold CSS in the head for the fastest first paint.
- Defer non-critical JS/CSS and lazy-load large image assets.
- Use long cache TTLs for assets and update filenames or use fingerprinting when deploying changed bundles.

Development workflow

- Local preview: use Laragon to serve the theme files for local editing, or use Shopify CLI/Theme Kit to preview and push changes to a development theme.
- Editing tips:
  - Prefer small, focused changes and test in the theme preview.
  - Use browser devtools to test CSS variable changes before committing.

Contributing

- Keep CSS changes scoped and small. Open PRs with screenshots and the pages affected.
- Document any new theme settings added in `config/settings_schema.json` in this README or in a separate `docs/` folder.

Troubleshooting

- If styles don't update: clear browser cache, confirm the theme asset was uploaded, and verify the correct file is referenced in `layout/theme.liquid`.
- If Liquid variables are missing in `.css.liquid`, confirm `settings` keys exist in `config/settings_schema.json`.

Contacts & next steps

- For deployment questions, include the person or team that manages the production Shopify store.
- Want a quick scaffold for a new component stylesheet and section? Ask and I can create a template.

---

Generated: concise styling and theme guide for developers. Edit this file to add project-specific examples and deployment commands.
