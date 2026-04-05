# Multisender Landing -- Architecture

**Last Updated**: 2026-03-26

## Overview

Static landing page for **Multisender** -- a batch token distribution platform for EVM chains. Products: Classic (ERC-20 multisend), Massdrop (merkle airdrop), NFT (ERC-721/1155), B2B API. Built with Nuxt 3, deployed to GitHub Pages.

**Domain**: https://multisender.app
**Dashboard**: https://dashboard.multisender.app (login, register)
**SDK Docs**: https://sandbox-sdk.multisender.app

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Nuxt 3 (^3.11.2, SSR + static generation) |
| UI | Vue 3 Composition API (`<script setup lang="ts">`) |
| Language | TypeScript 5 |
| Styling | SCSS (scoped) + CSS custom properties |
| i18n | @nuxtjs/i18n 8.3.1 (7 languages, lazy-loaded JSON) |
| Build | Vite + Nitro (preset: `github_pages`) |
| Package manager | pnpm |
| Linting | ESLint 9 + Prettier |
| SEO | @nuxtjs/sitemap, @nuxtjs/robots, nuxt-gtag |
| Key deps | ethers 5, @supabase/supabase-js, @splidejs/splide, floating-vue, shiki, merkletreejs, gas-price-oracle |

## Project Structure

```
multisender-landing/
├── app.vue                         # Root component
├── nuxt.config.mts                 # Nuxt config (i18n, nitro, vite, modules)
├── i18n.config.ts                  # i18n runtime config
├── pages/
│   ├── index.vue                   # Homepage
│   ├── [article].vue               # Dynamic article pages
│   ├── api.vue                     # B2B API landing page
│   ├── api-early-access.vue        # B2B API early access
│   ├── brandkit.vue                # Brand assets
│   ├── fee-schedule.vue            # Fee information
│   ├── llms.vue                    # LLM-optimized page
│   ├── networks/                   # Per-chain pages (dynamic)
│   ├── tokens/                     # Per-token pages (dynamic)
│   └── admin/                      # Admin views
├── components/
│   ├── section/                    # Page sections (welcome, products, benefits, faq, etc.)
│   │   ├── welcome/               # Hero sections
│   │   ├── products/              # Product showcase
│   │   ├── benefits/              # Feature highlights
│   │   ├── calculator/            # Gas cost calculator
│   │   ├── faq/                   # FAQ accordion
│   │   ├── networks/              # Supported chains grid
│   │   ├── transactions/          # Recent transactions
│   │   └── api/                   # B2B API page sections (Hero, SocialProof, Problem, Solution, Benefits, UseCases, Features, Security, Pricing, Faq, Cta, Teams)
│   ├── layout-header/             # Site header + navigation
│   ├── layout-footer/             # Site footer
│   ├── locale-switcher.vue        # Language picker
│   ├── chain-logo/                # Chain brand icons
│   ├── chat-widget/               # Support chat
│   ├── brandkit/                  # Brand kit components
│   ├── networks/                  # Network-specific components
│   ├── templates/                 # Reusable template components
│   ├── m-button.vue               # Button primitive
│   ├── m-spinner.vue              # Loading spinner
│   ├── m-toggle.vue               # Toggle switch
│   ├── b-image.vue                # Optimized image
│   ├── ExpandableText.vue         # Collapsible text
│   └── DownloadButtonElem.vue     # Download trigger
├── composables/
│   ├── useNetworks.ts             # Chain/network data
│   ├── useSupabase.ts             # Supabase client
│   ├── useBreakpoints.ts          # Responsive breakpoints
│   ├── useChat.ts                 # Chat widget logic
│   ├── useAnnouncement.ts         # Announcement banner
│   ├── meta.ts                    # Page meta composable
│   └── gtag.ts                    # Analytics events
├── constants/                     # App constants
│   ├── chains.ts                  # Supported chains list
│   ├── contracts.ts               # Contract addresses
│   ├── config/                    # Per-chain config
│   ├── apis.ts                    # API endpoints
│   ├── nav.ts                     # Navigation links
│   ├── calculator.ts              # Calculator constants
│   ├── networkPageConfig.ts       # Network page SEO/content config
│   ├── tokenPageConfig.ts         # Token page SEO/content config
│   └── ...
├── services/
│   ├── calculator.ts              # Gas cost calculation
│   ├── provider.ts                # Ethers provider
│   ├── gasOracle.ts               # Gas price fetching
│   ├── token*.ts                  # Token operations (multisend, airdrop)
│   ├── tenderly.ts                # Transaction simulation
│   ├── 1inch.ts                   # 1inch integration
│   └── emulate/                   # TX emulation
├── styles/
│   ├── media.scss                 # Responsive mixins (auto-imported)
│   ├── networks/
│   │   ├── _variables.scss        # CSS custom properties (design tokens)
│   │   ├── components/            # Component-specific styles
│   │   ├── layouts/               # Layout styles
│   │   └── sections/              # Section-specific styles
│   └── vendor/                    # Third-party style overrides
├── locales/                       # i18n JSON files (en, ru, zh, es, pt, de, ja)
├── types/                         # TypeScript type definitions
├── utils/                         # Pure utility functions
├── assets/                        # Static assets (images, SVGs)
├── public/                        # Public static files
├── layouts/
│   └── with-banner.vue            # Layout with announcement banner
├── plugins/
│   └── floating-vue.ts            # Tooltip plugin
├── providers/
│   └── wallet/                    # Wallet connection providers
├── supabase/                      # Supabase config / migrations
├── scripts/                       # Build-time scripts (fee gen, gas config)
└── abi/                           # Smart contract ABIs
```

## Styling System

### SCSS Mixins (auto-imported via `styles/media.scss`)

All mixins use `max-width` (mobile-first is NOT the default -- these are desktop-down breakpoints):

| Mixin | Breakpoint | px |
|-------|-----------|-----|
| `vw-xs` | max-width: 22.5em | 360px |
| `vw-xsm` | max-width: 32.5em | 520px |
| `vw-sm` | max-width: 48em | 768px |
| `vw-md` | max-width: 64em | 1024px |
| `vw-lg` | max-width: 76.5em | 1224px |
| `vw-xl` | max-width: 90em | 1440px |

Additional: `@include touch` (hover: none), `@include dark` (prefers-color-scheme: dark), `@include hdpi` (2x resolution).

Usage:
```scss
.element {
  font-size: 2rem;
  @include vw-sm {
    font-size: 1.5rem;
  }
}
```

### CSS Custom Properties (Design Tokens)

Defined in `styles/networks/_variables.scss` on `:root`:

- **Backgrounds**: `--networks-primary-bg` (#0b114c), `--networks-secondary-bg`, `--networks-hover-bg`
- **Borders**: `--networks-border-color` (#263776), `--networks-hover-border`
- **Accent**: `--networks-highlight-color` (#00a4ff), `--networks-highlight-hover`
- **Text**: `--networks-title-color` (#fff), `--networks-text-secondary` (#76a6ee)
- **Spacing**: `--networks-card-radius`, `--networks-section-radius`, `--networks-grid-gap`
- **Layout**: `--container-width` (90rem), `--banner-height`

### Component Styling Pattern

Components use `<style scoped lang="scss">`. Global styles go in `styles/networks/`. Never use unscoped styles in components.

## i18n

- **Strategy**: `prefix_except_default` (English at `/`, others at `/ru/`, `/zh/`, etc.)
- **Default locale**: `en`
- **7 locales**: en, ru, zh, es, pt, de, ja
- **Lazy loading**: Each locale is a separate JSON file in `locales/`
- **Cookie**: `ms_i18n`
- **Usage**: `$t('key')` in templates, `useI18n()` in setup

All user-facing strings MUST go through i18n. Never hardcode text.

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `NUXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NUXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `NUXT_PUBLIC_GTAG_ID` | Google Analytics tag |
| `NUXT_PUBLIC_COOKIE_DOMAIN` | i18n cookie domain |

## Build & Deploy

- **Dev**: `pnpm dev` (Vite dev server with HMR)
- **Build**: `pnpm generate` (static generation for GitHub Pages)
- **Lint**: `pnpm lint` / `pnpm lint:fix`
- **Config scripts**: `pnpm config:fee`, `pnpm config:multisender`, `pnpm config:nft`, `pnpm config:massdrop`

Static output goes to `dist/`. Deployed via GitHub Pages with the `github_pages` Nitro preset. Node polyfills (buffer, process, events) are injected for ethers.js browser compatibility.

## Key Patterns

1. **Section-based page composition**: Pages compose `section/*` components. Each section is self-contained with its own styles, data fetching, and i18n keys.
2. **Composables for shared logic**: `useNetworks()`, `useSupabase()`, `useBreakpoints()` -- standard Vue 3 composable pattern.
3. **Constants-driven content**: Chain lists, contract addresses, navigation, and page configs live in `constants/`. Adding a new chain means updating constants, not components.
4. **Services for blockchain logic**: `services/` handles ethers.js calls, gas estimation, token operations, and third-party API integrations.
5. **Supabase for dynamic data**: Transaction history, announcements, and other server-side data via Supabase client.
