# Multisender Landing -- Agent Documentation

**Last Updated**: 2026-03-26

## Project

Static landing page for Multisender -- batch token distribution platform for EVM chains.
Tech: Nuxt 3 + Vue 3 Composition API + SCSS + TypeScript.

## Documentation Index

### System
- [Architecture](System/architecture.md) -- Tech stack, project structure, styling system, patterns

### SOP
- [Agents & Skills Guide](SOP/agents-and-skills-guide.md) -- How to create Claude agents and skills
- [Onboarding Guide](SOP/onboarding-guide.md) -- Claude Code setup walkthrough

### Agents (`.claude/agents/`)
- **nuxt-developer** -- Nuxt 3 + Vue 3 + SCSS development
- **product-manager** -- Product planning, PRDs, feature prioritization
- **refactoring-specialist** -- Code quality, performance, refactoring for Vue/Nuxt
- **testing-engineer** -- Testing strategy and implementation

### Commands (`.claude/commands/`)
- `/code-review` -- PR review with structured feedback
- `/update-doc` -- Documentation management (init, update, sop)

## Quick Reference

| What | Where |
|------|-------|
| Pages | `pages/` |
| Section components | `components/section/` |
| Shared UI | `components/` (m-button, m-spinner, etc.) |
| Composables | `composables/` |
| Constants/config | `constants/` |
| Translations | `locales/{en,ru,zh,es,pt,de,ja}.json` |
| Design tokens | `styles/networks/_variables.scss` |
| Responsive mixins | `styles/media.scss` (auto-imported) |
| Blockchain services | `services/` |
| Type definitions | `types/` |
| Utilities | `utils/` |
| Contract ABIs | `abi/` |
| Supabase | `supabase/` |

## Key Commands

```bash
pnpm dev          # Dev server
pnpm generate     # Static build (GitHub Pages)
pnpm lint         # ESLint + Prettier check
pnpm lint:fix     # Auto-fix lint issues
```
