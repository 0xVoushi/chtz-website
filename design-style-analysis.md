# Design Style Analysis — _mad-assembly Landing

> **Purpose:** This document captures the design language of the `mad-assembly-landing` repository — not just what components exist, but *why* the interface feels the way it does — so another team or AI agent can transfer this style to a new project with fidelity.

---

## 1. Overview

| Property | Value |
|---|---|
| **Project** | _mad-assembly — airdrop distribution dApp landing page |
| **URL** | madassembly.xyz |
| **Framework** | Gatsby 5.7.0 + React 18.2.0 + TypeScript 4.9 |
| **Styling** | Styled-Components 5.3.8 (CSS-in-JS, NOT Tailwind) |
| **UI Libraries** | No third-party component library (shadcn/Radix/MUI) — fully custom |
| **Design type** | **DeFi/Web3 product landing page** — tech-editorial hybrid |
| **Page structure** | Single-page scroll: Header → Hero → How → FastStart → Benefits → Products → Partnership → FAQ → Start → Footer |

The design sits at the intersection of a **developer tool product site** and a **DeFi protocol landing page**. It's structured and editorial, but not minimal — there's visual richness through CSS texture (dashes, dots, grid lines) rather than images or gradients.

---

## 2. Design Character

### What it is

A **high-contrast, monospace-driven, crypto-native landing page** that communicates credibility and technical precision. It reads like the interface of a developer tool — clean structure, tight typography, purposeful color — but with the animated flair of a DeFi protocol site.

### What it feels like

- **Not generic.** JetBrains Mono as the *only* font immediately signals "this is a developer product."
- **Structured but alive.** Static sections alternate with animated elements (floating transaction cards, shimmer skeletons, accordion expansions).
- **Light but grounded.** White canvas with deep navy borders creates an editorial print feel; dark CTA sections break the rhythm dramatically.
- **Textured without images.** Depth comes from repeating dashed lines and radial dot patterns — all CSS, no photography.

### Design classification

| Dimension | Assessment |
|---|---|
| Style family | Tech-editorial / DeFi protocol |
| Density | **Low-medium** — generous spacing, few elements per section |
| Color temperature | **Neutral-cool** — white + navy + purple; orange for energy |
| Visual noise | **Low** — one font, limited colors, controlled animations |
| UI maturity | **Product-grade** — real token system, semantic colors, component variants |

---

## 3. Color System

### Raw Palette (`src/theme/Color.ts`)

```
white:     #ffffff
black:     #141414   (near-black, not pure black)
blackHard: #1E2D3D   (deep navy, the structural color)
grey:      #4c6176
greyLight: #607B96
purple:    #5565E8   (primary brand accent)
violet:    #c98bdf   (soft purple, secondary accent)
green:     #43d9ad   (success / positive)
orange:    #fea55f   (CTA / warning / hint)
red:       #ff3218   (danger only)
```

### Semantic Token Mapping

**Text hierarchy (3 levels):**

| Token | Value | Use |
|---|---|---|
| `text` | `#141414` | Body text on light bg |
| `textPrimary` | `#ffffff` | Text on dark bg |
| `textSecondary` | `#4c6176` | Secondary/muted labels |
| `textThird` | `#607B96` | Tertiary / placeholder |
| `textSuccess` | `#43d9ad` | Positive states |
| `textHint` | `#fea55f` | Highlight / CTA hint |
| `textHintSecond` | `#5565E8` | Purple hint text |
| `textHintThird` | `#c98bdf` | Violet hint text |

**Surfaces and backgrounds:**

| Token | Value | Role |
|---|---|---|
| `pageBg` | `#ffffff` | Page base — always white |
| `elementBg` | `#ffffff` | Card / component surface |
| `elementBgSecond` | `#1E2D3D` | Dark panels, nav, dark sections |
| `elementBgThird` | `#5565E8` | Purple accent fill (rare) |

**Borders:**

| Token | Value | Use |
|---|---|---|
| `elementBorder` | `#1E2D3D` | Primary border — structural |
| `elementBorderSecond` | `#607B96` | Subtle / secondary border |

**Buttons:**

| Token | Value | Meaning |
|---|---|---|
| `buttonBg` | `#1E2D3D` | Default/secondary button — dark |
| `buttonBgSecond` | `#ffffff` | White button |
| `buttonBgThird` | `#fea55f` | **Primary CTA — orange** |

**Status colors:**

| Token | Value |
|---|---|
| `success` | `#43d9ad` |
| `warning` | `#fea55f` |
| `danger` | `#ff3218` |

### Surface Logic

The site has two alternating surface modes:

1. **Light mode sections** (Hero, How, Benefits, Products, Header, Footer) — `pageBg: #fff`, borders from `elementBorder: #1E2D3D`
2. **Dark CTA sections** (FastStart, Partnership, Start) — `elementBgSecond: #1E2D3D` background with radial dot pattern overlay using `textHintSecond` (purple) at low opacity

There is no dark mode. The design uses darkness *structurally* (borders, dark panels) not as a theme toggle.

### Color Character

- **Purple** is the brand identity color — used on default state indicators, the logo, and `elementBgThird` fills.
- **Orange** is the action color — the primary CTA button, the FAQ sticky sidebar background, the hover state on the hamburger menu.
- **Green** only appears in success/positive contexts (never for decoration).
- **Violet** appears on link-type buttons only.
- The palette is deliberately **restrained** — 5 chromatic hues, used sparingly.

---

## 4. Typography

### Font Family

**Single font: JetBrains Mono** (monospace) — loaded from Google Fonts at weights 200, 400, 600.

```
font-family: 'JetBrains Mono', monospace
```

This is the **strongest design signal** in the project. Using a monospace font for *everything* (headings, body, buttons, labels) is an intentional choice that communicates "developer tool." It creates visual rhythm through natural character-width consistency.

### Font Size Scale (`src/theme/Theme.ts`)

HTML base: `font-size: 62.5%` → 1rem = 10px

| Token | rem | px |
|---|---|---|
| `extraSmall` | 1rem | 10px |
| `small` | 1.2rem | 12px |
| `regular` | 1.4rem | 14px |
| `default` | 1.6rem | 16px |
| `medium` | 1.8rem | 18px |
| `large` | 2.2rem | 22px |
| `largeX` | 2.4rem | 24px |
| `largeXX` | 2.8rem | 28px |
| `max` | 3.4rem | 34px |
| `maxPlus` | 3.6rem | 36px |

Hero heading uses `clamp(6.4rem, 5vw, 7.2rem)` on desktop — outside the scale — for dramatic scale.

### Font Weights

| Token | Value |
|---|---|
| `regular` | 400 |
| `medium` | 500 |
| `bold` | 700 |

### Letter Spacing

| Token | Value | Use |
|---|---|---|
| `extraSmall` | `-0.075rem` | Large headings |
| `small` | `-0.05rem` | Medium headings |
| `min` | `0.05rem` | Small text labels |

**Headings use negative letter-spacing.** At large sizes (hero H1), letter-spacing goes as tight as `-0.5rem`. This is a key contributor to the "compressed, editorial" feeling.

### Line Heights

| Token | Value |
|---|---|
| `extraSmall` | 1 |
| `smallerX` | 1.15 |
| `smaller` | 1.25 |
| `lowSmall` | 1.3 |
| `small` | 1.5 |
| `regular` | 2 |
| `medium` | 2.5 |
| `large` | 3 |
| `extraLarge` | 3.5 |

Body text uses `line-height: 1.5` (token `small`). The `regular: 2` token appears in feature-list contexts where breathing room is needed.

### Global Typography Rules

- `h1`: `font-weight: 500`, `font-size: 2.6rem` — deliberately understated default; individual sections override aggressively
- `button`: inherits `font-family: 'JetBrains Mono', monospace` (explicit override, no UX divergence)
- `b`: `font-weight: 700`
- `small`: `font-size: 1.2rem`
- Font features enabled globally: `kern`, `liga`, `clig`, `calt` + `text-rendering: optimizeLegibility`

### Typographic Character

The interface achieves density without clutter. Short sections with large headings, tight negative letter-spacing, and compressed line heights at display sizes create an editorial feel. Body text is spacious (1.5 line-height). The result: headings feel **punchy and technical**; body text feels **readable and professional**.

---

## 5. Layout and Spacing

### Container

- **Max-width: `125.4rem`–`125.6rem`** (1254px–1256px) — wider than typical 1200px, giving sections more breathing room
- Centered with `margin: 0 auto`
- Inner padding: `1.6rem` mobile → `4.8rem` on `lg+` per section

### Breakpoint System (styled-media-query)

| Token | em | px |
|---|---|---|
| `xs` | 22.5em | 360px |
| `xsm` | 32.5em | 520px |
| `sm` | 48em | 768px |
| `md` | 64em | 1024px |
| `mdMax` | 74.2em | 1187px |
| `lg` | 76.5em | 1224px |
| `xl` | 90em | 1440px |
| `xxl` | 240em | 3840px |
| `xxxl` | 320em | 5120px |
| `extraXl` | 480em | 7680px |

Ultra-wide breakpoints (`xxl`+) scale `html { font-size }` proportionally — the entire rem system expands automatically for 4K/8K displays.

### Section Spacing Pattern

Each section follows this padding rhythm:

| Breakpoint | Vertical padding |
|---|---|
| Mobile (default) | `3.2rem` – `6.4rem` |
| Tablet (`sm`) | `6.4rem` – `9.6rem` |
| Desktop (`lg`) | `9.6rem` |

Sections are separated by `border-bottom: 0.1rem solid elementBorder` rather than extra margin gaps.

### Grid System

No global grid — each section defines its own CSS Grid with named template areas. Examples:

**Benefits section (desktop, 5 columns):**
```
'first first first second second'
'third third six   fourth fourth'
'third third fifth fifth  fifth'
```

**How section (desktop):**
```
2-column: repeat(2, 1fr), gap 3.2rem
```

**Products section (desktop):**
```
2-column: 'Nft Create'
```

This approach gives each section a unique rhythm while staying within the consistent max-width container.

### Spacing Unit

No explicit spacing scale — spacing is written directly in rem values with an implied base unit of `0.8rem`. Common values: `0.8`, `1.2`, `1.6`, `2.4`, `3.2`, `4.8`, `6.4`, `9.6` rem.

### Layout Architecture: Guide Lines

`LayoutMain` renders two fixed `0.1rem` vertical lines at the container left and right edges — visible only on `lg+`. These act as an invisible architectural frame, reinforcing the structure without explicit grid columns.

```css
/* Fixed vertical guides in LayoutMain.tsx */
position: fixed; width: 0.1rem; height: 100%;
background-color: elementBorder; /* #1E2D3D */
```

### Interface Density

**Low-medium density.** Generous section padding, few elements per section. This is a marketing/landing page, not a dashboard — each section communicates one clear idea with room to breathe. The monospace font adds perceived density without actual information density increase.

---

## 6. Core UI Components

### Button (`src/components/ui/Button/`)

**7 types × 5 sizes** — the most complete component.

**Types:**

| Type | Background | Border | Text | Use |
|---|---|---|---|---|
| `default` | `#1E2D3D` | same | white | Secondary CTA, general action |
| `primary` | `#fea55f` | same | `#141414` | **Primary CTA — orange** |
| `outline` | transparent | `#1E2D3D` | `#141414` | Tertiary action |
| `status` | white | none | `#141414` | Pill-shaped badge, toggle |
| `link` | transparent | none | `#c98bdf` (violet) | Inline text action |
| `symbol` | transparent | none | `#141414` | Icon-only button |
| `danger` | `#ff3218` | same | white | Destructive action |

**Sizes:**

| Size | Padding | Font size |
|---|---|---|
| `small` | `0.5rem 1.6rem` | 1.2rem (12px) |
| `default` | `1rem 1.4rem` | 1.4rem (14px) |
| `large` | `1.2rem 1.6rem` | 1.6rem (16px) |
| `symbol` | `0` | 1.2rem |
| `token` | `1rem 0.4rem 1rem 0.8rem` | 2rem |

**Focus/hover state (all solid types):**
```css
box-shadow: 0 0 0 0.3rem transparentize(0.5, buttonColor);
```
This is the **universal interaction signal** — a soft glow ring in the button's own color.

**Disabled state:** `opacity: 0.5`

**Loading state:** `background: transparentize(0.8, purple)` + spinner icon + text

**Border radius:** `0.8rem` standard; `5rem` for `status` (pill)

**Transition:** `all 0.26s ease`

---

### Icon (`src/components/ui/Icon/`)

Wrapper for 50+ SVG icons with 12 size variants.

**Sizes:** `extraSmall` (1rem) → `small` (1.4rem) → `medium` (1.6rem) → `mediumPlus` (1.8rem) → `extraMedium` (2rem) → `default` (2.4rem) → `large` (3.2rem) → `xlarge` (4.4rem) → `xl` (6.4rem) → `xxl` (7.2rem) → `fill` (parent size) → `auto`

**Rotation:** any value via `rotate` prop — used for chevron animations, arrow directions.

**Icon set includes:** chain icons (Eth, Bnb, Polygon, Arbitrum…), action icons (Copy, Search, Settings, Key…), state icons (Success, Error, Warning, Loader…), social icons (Discord, Twitter), logo variants.

---

### Dropdown (`src/components/ui/Dropdown/`)

Accordion-style collapsible section.

- Animated height via `react-animate-height` — duration `400ms`
- Chevron rotates `0deg → -180deg` on open (transition `0.26s`)
- Header text slides `translateX(1.2%)` on hover when closed
- Border: `0.1rem solid elementBorder` wrapping the whole item
- Content padding: `1.6rem` (mobile) → `1.6rem 3.2rem 1.6rem 1.6rem` (sm+)
- Chevron icon in purple (`color.default`)

---

### DropdownMenu (`src/components/ui/DropdownMenu/`)

Click-outside-aware floating menu.

- Absolute positioned content below trigger
- Width: `26rem`, max-height: `20rem` with scroll (via SimpleBar)
- Border: `0.1rem solid elementBorder`
- Hover indicator: `0.3rem` bottom bar in purple or orange
- Active link: bottom bar in `buttonBgThird` (orange)

---

### SwitchButtonGroup (`src/components/ui/SwitchButtonGroup/`)

Segmented control / radio group.

- CSS-driven sliding indicator (no JS for position — uses `:nth-of-type:checked ~ Slider` selectors)
- Supports up to 4 options
- Loading state shows `SkeletonElement` placeholder per option

---

### BtnBurger (`src/components/ui/BtnBurger/`)

Hamburger menu toggle.

- Size: `4.4rem × 4.4rem`, `border-radius: 1.2rem`
- Background: `elementBorderSecond` (#607B96) → `buttonBgThird` (orange) on hover
- 3 lines animate to X using pure CSS transforms (no JS class toggle):
  - Line 1: `translateX(-50%) → translate(-50%, -50%) rotate(45deg)`
  - Line 2: opacity `1 → 0`
  - Line 3: `translateX(-50%) → translate(-50%, -50%) rotate(-45deg)`

---

### SkeletonElement (`src/components/ui/SkeletonElement/`)

Loading placeholder.

- `shimmer` animation: linear gradient sweeps left→right, 1.5s infinite
- Background: `#7c85a24d` (muted slate with transparency) shimmer
- `border-radius: 1.2rem` default, configurable
- Dimensions passed as props (width, height)

---

### Loader (`src/components/ui/Loader/`)

Spinning indicator.

- Uses `loaderSpin` animation: `4s steps(12, end) infinite` — step animation gives a "tick" feel, not smooth spin
- Default color: `purple (#5565E8)`, tinted 28% lighter via `polished.tint` when inside loading button
- Size: `2rem` default, configurable

---

## 7. Repeating UI Patterns

### Pattern 1: Dashed Grid Background

Used on: Hero section (horizontal + vertical lines), feature icon containers (Benefits), comparison card headers (How).

```css
/* Horizontal dashes */
background-image: repeating-linear-gradient(
  0deg, transparent, transparent 1rem,
  elementBgSecond 1rem, elementBgSecond calc(1rem + 0.1rem)
);
/* + vertical variant at 90deg */
```

This is a **high-frequency pattern** — it appears at different scales (dense in hero, sparse in icon boxes). It's one of the key textural signatures of this design.

---

### Pattern 2: Radial Dot Background

Used on: FastStart, Partnership, Start sections (dark CTA areas).

```css
background-image: radial-gradient(textHintSecond 1px, transparent 1px);
background-size: 1.8rem 1.8rem;
background-color: elementBgSecond; /* #1E2D3D */
```

Creates a subtle starfield / circuit board feel on dark panels. The dot color is `textHintSecond` = purple (`#5565E8`) at very low opacity — almost invisible but perceptible.

---

### Pattern 3: Vertical Guide Lines (Architecture Lines)

Used in: `LayoutMain` wrapper, fixed behind all content on `lg+`.

```css
position: fixed; top: 0; width: 0.1rem; height: 100%;
background-color: elementBorder; /* #1E2D3D */
/* left: 0 and right: 0 of the 125.6rem container */
```

Invisible to casual users, felt as structure. Makes the page feel like it's "on a grid."

---

### Pattern 4: Animated Floating Transaction Cards (Hero)

Four `TxSend` cards float around the hero with staggered wave animations:

```css
animation: animateWave 8s ease-in-out infinite;
/* delays: 0.5s, 2s, 4s, 6s */
/* Keyframes: opacity 0 → 1 (16%) → 1 (46%) → 0 (60%) */
/* Transform: translateY(30%) → none → none */
```

Cards contain transaction text ("Sent X tokens to Y recipients"). They act as proof-of-concept animation showing the product's output.

---

### Pattern 5: Dashed Icon Container (Benefits)

Feature icons sit inside a container with a dashed repeating background:

```css
background: repeating-linear-gradient(
  -45deg, green 0, green 0.1rem, transparent 0.1rem, transparent 0.2rem
);
/* color: green (#43d9ad) */
```

Creates a hatching effect — the icon appears highlighted against fine diagonal dashes. Unique visual signature for the benefits/features zone.

---

### Pattern 6: Section Alternation (Light/Dark Rhythm)

The page alternates between light and dark sections:

```
Hero (light) → How (light) → FastStart (dark) →
Benefits (light) → Products (light) → Partnership (dark) →
FAQ (light) → Start (dark)
```

Dark sections always use the radial dot pattern on `elementBgSecond`. Light sections use the white `pageBg`. The alternation creates visual pacing on scroll.

---

### Pattern 7: Underbar Link Indicator

Navigation links use a `::after` pseudo-element bottom bar as the active/hover indicator:

```css
::after {
  content: ''; position: absolute; bottom: 0;
  width: 100%; height: 0.3rem;
}
&:hover::after { background-color: elementBgThird; } /* purple */
&.activeNavLink::after { background-color: buttonBgThird; } /* orange */
```

Purple for hover, orange for active. The distinction between hover and active states uses accent colors meaningfully.

---

### Pattern 8: Sticky FAQ Sidebar

FAQ section uses a 2-column layout on desktop where the sidebar is `position: sticky`:

```css
/* Aside: sticky sidebar */
background-color: warning; /* orange on md+ */
```

The orange sidebar in the FAQ section is the strongest use of orange as a structural element (not just a button). It frames the content area.

---

### Pattern 9: Backdrop Blur Panel (Cookie Consent)

```css
background-color: rgba(4, 8, 24, 0.01);
border: 0.1rem solid rgba(255, 255, 255, 0.05);
backdrop-filter: blur(2rem);
box-shadow: 0 0.3rem 1.6rem rgba(105, 102, 255, 0.1), 0 0 0.4rem rgba(105, 102, 255, 0.1);
border-radius: 1.4rem;
```

The cookie consent panel uses glassmorphism with a purple-tinted shadow. Isolated use — not a system-wide pattern, but demonstrates the design team knows how to use it.

---

## 8. UX Principles

### Sections communicate one idea each

Every section has a single focus: How It Works, Why It's Better, Pricing, FAQ. No section tries to do multiple things. This creates a clean mental model as the user scrolls.

### Animated proof of concept in the hero

The floating transaction cards in the hero aren't decorative — they simulate the product's actual output (airdrop transactions). The user understands the product before reading a word.

### CTA placement follows natural reading flow

Three CTA sections (FastStart, Partnership, Start) are placed at the 30%, 70%, and 100% points of the page. Users who convert quickly hit the first; skeptical users reach the second after seeing benefits; the final appears after FAQ resolves objections.

### Color encodes meaning consistently

- Orange = do something now (primary button, FAQ sidebar, hamburger hover)
- Green = positive outcome, success (feature icons, success state)
- Purple = this is us, our brand (logo, default accent, link hover)
- Red = danger/error only (never decorative)

### Empty states and loading use the skeleton system

`SkeletonElement` is used in the `SwitchButtonGroup` during load. The shimmer animation communicates "data is coming" without blocking layout.

### Mobile-first with a progressive disclosure nav

Mobile nav is hidden, triggered by burger. Nav items appear in a 2-column grid. Desktop collapses the burger and shows a horizontal nav with right-border separators. This is a clean, standard pattern — nothing surprising, executed correctly.

---

## 9. Motion and Interaction Style

### Transition Standard

**`0.26s ease`** is the system-wide standard. This appears in:
- Buttons (all states)
- Dropdowns (chevron, header, text)
- Navigation links
- Logo hover
- Icon rotation

**`0.3s ease-in-out`** for icon transforms (slightly softer):
- Icon rotation via `transform`
- Link `::after` bar expansion

**`0.2s`** for faster micro-responses:
- Navbar overlay fade
- DropdownMenu open/close
- Burger background color

### Keyframe Animations

| Name | Duration | Easing | Use |
|---|---|---|---|
| `animateWave` | 8s | ease-in-out | Hero transaction cards (staggered: 0.5s, 2s, 4s, 6s delay) |
| `loaderSpin` | 4s | steps(12, end) | Loading spinner (stepped, not smooth) |
| `shimmer` | 1.5s | linear | Skeleton loading gradient sweep |
| `fadeInLeft` | — | — | Navigation slide in (mobile) |
| `fadeOutLeft` | — | — | Navigation slide out (mobile) |

### Hover Behaviors Summary

| Element | Hover change |
|---|---|
| Solid buttons | Glow ring `box-shadow: 0 0 0 0.3rem color(50% transparent)` |
| Link buttons | Darken text color |
| Symbol buttons | Transparent background fill (5% opacity) |
| Nav links | Purple `::after` bar appears |
| Active nav link | Orange `::after` bar persists |
| Dropdown title | `translateX(1.2%)` text shift |
| Logo | Color shifts to purple |
| Social icons | Background fill, color lightens |
| Burger button | Background changes to orange |

### Motion Character

The interface is **sober and controlled**. Only the hero has decorative animation; everything else is interaction-driven. The stepped loader (`steps(12, end)`) gives a mechanical, clicky feel — appropriate for a developer tool. No page-load animations, no scroll-triggered reveals.

---

## 10. Design Principles

These are derived directly from code patterns, not assumptions.

### 1. Monospace is the identity
`JetBrains Mono` is the only typeface, used everywhere from H1 to button labels. This signals "developer tool" before the user reads a single word. Any deviation — even adding a second sans-serif — would dilute the core brand signal.

*Evidence: `src/theme/Theme.ts` `font.family.default`; `global.tsx` button font override*

### 2. Light canvas, dark structure
The page background is always white. Structural elements (borders, dividers, the dark panels) use `#1E2D3D` navy. This polarity — white space + dark lines — creates a print-quality, editorial feel without requiring color.

*Evidence: `color.pageBg: white`, `color.elementBorder: #1E2D3D`, `LayoutMain` guide lines*

### 3. Accent colors are earned, not scattered
Purple is brand identity. Orange is the action color. Green is success-only. Violet is for link text. Red is for danger. Each color has exactly one job and is never used decoratively outside that job.

*Evidence: `Color.ts` semantic mapping; button type → color mapping in `Button/Style.tsx`*

### 4. Texture without images
Visual depth comes from CSS geometry — repeating dashed lines, radial dot grids, the guide line system. There are no background photos, gradients-as-decoration, or hero illustrations (other than the SVG icons). The site would look complete even with images disabled.

*Evidence: `Hero/Style.tsx` line patterns; `FastStart/Style.tsx` dot grid; `Benefits/Style.tsx` hatched icon containers*

### 5. 0.26s is the system clock
All interactive transitions share this duration. The rhythm is consistent and fast — fast enough to feel snappy, slow enough to be perceivable. Variation exists (0.3s for icons, 0.2s for overlays) but the base standard is 0.26s.

*Evidence: repeated `transition: all 0.26s ease` across Button, Dropdown, DropdownMenu, Header, LogoLink*

### 6. Negative letter-spacing compresses large type
At display sizes, letter-spacing goes negative (up to -0.5rem on the hero H1). This makes large monospace text feel designed, not mechanical. Without this, JetBrains Mono at 7.2rem would feel like a terminal printout.

*Evidence: `Hero/Style.tsx` `InfoTitle` letter-spacing; `Theme.ts` `letterSpacing.extraSmall: -0.075rem`*

### 7. Orange signals: do this now
`buttonBgThird` (#fea55f) is reserved for primary CTAs and "urgency" UI — the FAQ sticky sidebar, the hamburger hover, the hero primary button. It appears nowhere decorative.

*Evidence: Button `primary` type; `BtnBurger/Style.tsx` hover; `Faq/Style.tsx` aside background*

### 8. Sections alternate light and dark for scroll rhythm
The page isn't uniformly lit. Light → Light → **Dark** → Light → Light → **Dark** → Light → **Dark**. Dark sections are always CTAs. This rhythm guides scroll attention and prevents monotony without complex layout changes.

*Evidence: section background tokens in containers; FastStart, Partnership, Start all use `elementBgSecond`*

### 9. rem on 62.5% base scales the entire system
`html { font-size: 62.5% }` makes 1rem = 10px. All sizing is in rem. For ultra-wide displays (4K+), only `html { font-size }` needs to change — everything scales proportionally. This is a deliberate, future-proof sizing strategy.

*Evidence: `Theme.ts` font size tokens; `global.tsx` html font-size; breakpoint `xxl` font scaling*

### 10. Components over bespoke screens
There are no one-off styled elements per section. Every repeating UI concept (button, dropdown, icon wrapper, skeleton) is extracted into the `components/ui/` system. Page sections compose from these primitives.

*Evidence: `components/ui/index.ts` barrel export; all containers import from `components/ui`*

---

## 11. Transfer Guide for Another Project

### Critical — do not change these

These are the load-bearing elements of the design identity. Changing them breaks the character:

| Element | Why critical |
|---|---|
| **JetBrains Mono as sole typeface** | The single strongest visual signal. Replacing with Inter/Poppins/DM Sans makes it look like every other SaaS site |
| **Semantic color token structure** | The palette → semantic layer separation (like `Color.ts`) allows the system to stay coherent as it grows |
| **Orange as primary CTA** | Counter-intuitive (blue is conventional) but distinctive and consistent; changing it loses the brand signal |
| **`0.26s ease` transition standard** | Consistency across all interactive states is what makes the UI feel "designed," not assembled |
| **rem on 62.5% HTML base** | The entire spacing and sizing system depends on this; switching to 100% base requires recalculating every value |

### High value — recreate these

These patterns are what make the interface *feel* like this specific product:

| Pattern | How to recreate |
|---|---|
| **Dashed grid texture** | `repeating-linear-gradient` with 0.1rem lines and 1rem gaps, horizontal + vertical overlaid |
| **Radial dot CTA sections** | `radial-gradient(accentColor 1px, transparent 1px)` at `background-size: 1.8rem 1.8rem` on dark panels |
| **Button glow on focus** | `box-shadow: 0 0 0 0.3rem transparentize(0.5, buttonColor)` — apply to all interactive elements |
| **Negative letter-spacing on large headings** | Start at `-0.05rem` at 2.4rem, go to `-0.3rem` at 6rem+ |
| **Fixed vertical guide lines** | Two `position: fixed` `0.1rem` borders at container edges — only on lg+ |
| **Dark/light section alternation** | Alternate every 2-3 light sections with a dark CTA section using the dot pattern |

### Adaptable — can be changed

| Element | Notes |
|---|---|
| Section layout grids | Each section's CSS Grid areas are content-specific — replace with your content structure |
| Max-width container | `125.4rem` works for this content density; adjust to your breakpoint strategy |
| Animation timings | `8s` wave is specific to the hero concept; adapt to your animation needs |
| Icon library | The 50+ SVG icons are product-specific; replace with your icon set |
| Section order and count | The 8-section structure is specific to this landing; yours will differ |
| Breakpoints above `xl` | The `xxl/xxxl/extraXl` breakpoints for 4K+ are optional unless targeting those displays |

### What not to lose

When transferring, teams often drop the **small things** that make the whole feel cohesive. Do not lose:

1. The **glow focus state** on buttons — it's subtle but instantly raises perceived quality
2. **Negative letter-spacing** on any heading above 2.4rem
3. The **`steps(12, end)` loader** — smooth spin would break the "mechanical" personality
4. The **stepped opacity** system (`opacity01` through `opacity09`) for consistent transparency values
5. **Active vs hover color distinction** on navigation (orange active, purple hover)

### Suggested transfer order

1. **Color tokens** — port `Color.ts` palette + semantic layer first; nothing else works without this
2. **Typography** — load JetBrains Mono, set `html { font-size: 62.5% }`, establish the scale
3. **Global styles** — scrollbar, box-sizing, base element resets, body grid
4. **Button component** — this component alone teaches the design system (colors, sizes, states, transitions)
5. **Texture patterns** — add dashed and dot patterns as reusable CSS variables or utility classes
6. **Layout container** — max-width wrapper with guide lines
7. **Section structure** — implement the light/dark alternation rhythm

---

## 12. Evidence Map

| File | Role | Key conclusions drawn |
|---|---|---|
| `src/theme/Color.ts` | Palette + semantic token definitions | Complete color system; surface logic; accent discipline |
| `src/theme/Theme.ts` | Font, breakpoints, opacity, z-index | Font scale, 62.5% base, 8 breakpoints, opacity system |
| `src/theme/global.tsx` | Global CSS rules | Base element styles, scrollbar, font feature settings |
| `src/components/ui/Button/Style.tsx` | All button variants | 7 types, focus glow, disabled opacity, loading state |
| `src/components/ui/Button/@types/index.ts` | Button type definitions | Complete variant vocabulary |
| `src/components/ui/Icon/helpers/getSize.ts` | Icon size system | 12 size variants and values |
| `src/components/layouts/LayoutMain.tsx` | Root layout wrapper | Guide lines, ThemeProvider setup, container max-width |
| `src/containers/Hero/Style.tsx` | Hero section styling | Animated tx cards (animateWave), dashed grid pattern, H1 sizing |
| `src/containers/Benefits/Style.tsx` | Benefits section | CSS Grid named areas, hatched icon containers, 5-column layout |
| `src/containers/FastStart/Style.tsx` | Dark CTA section | Radial dot pattern pattern, dark section treatment |
| `src/containers/Faq/Style.tsx` | FAQ section | Sticky orange sidebar, 2-column desktop grid |
| `src/containers/Header/Style.tsx` | Navigation | Sticky header, burger, underbar link indicator, mobile nav |
| `src/components/ui/SkeletonElement/Style.tsx` | Loading skeleton | Shimmer animation, muted color |
| `src/components/ui/BtnBurger/Style.tsx` | Hamburger button | Pure CSS X-transform animation |
| `src/utils/animations.ts` | All keyframe animations | animateWave, loaderSpin, shimmer, fadeIn/Out |
| `gatsby-config.js` | Site metadata | Theme color (#fff), OG metadata, font preloading |
| `package.json` | Dependencies | Confirms styled-components, NO Tailwind/shadcn/Radix |

---

## 13. Confidence Level

### High confidence (confirmed in code)

- ✅ Complete color palette and all semantic token values
- ✅ JetBrains Mono as sole typeface
- ✅ All font sizes, weights, letter-spacing tokens
- ✅ All button variants, sizes, and states
- ✅ All keyframe animations and their timings
- ✅ Standard transition duration (0.26s)
- ✅ All breakpoints and their pixel values
- ✅ Container max-width (125.4rem)
- ✅ Dashed grid and radial dot pattern implementations
- ✅ Guide line system in LayoutMain
- ✅ Section alternation pattern (light/dark)
- ✅ Icon size system (12 variants)
- ✅ Skeleton shimmer implementation

### Needs visual confirmation

- ⚠️ **Actual rendered scale of the hero heading** — clamp value computed in browser may differ from what the code suggests at exact viewport widths
- ⚠️ **Dashed pattern visual density** — the repeating-linear-gradient patterns require browser rendering to judge effectiveness
- ⚠️ **Radial dot visibility** — at low opacity these may be imperceptible; needs screenshot to confirm prominence
- ⚠️ **Guide line visibility on lg+** — the 0.1rem lines depend on pixel density to be visible at all
- ⚠️ **Animation feel of animateWave** — timing and stagger work on paper; feel requires real playback
- ⚠️ **Actual OG image design** — `ogImage.jpg` content is unknown (not read); visual branding beyond the code is unconfirmed

### Not present in this repo

- ❌ No dark mode / theme toggle
- ❌ No data tables or dashboards (this is a landing page, not the app)
- ❌ No forms beyond the cookie consent buttons
- ❌ No toast/notification system
- ❌ No modal system (modal z-index is defined in the theme but unused in this repo)
- ❌ No Storybook or design documentation files
- ❌ No Figma export clues or design token exports

---

*Generated by Claude Code from static analysis of `/Users/voushi/Documents/GitHub/mad-assembly/mad-assembly-landing` — no browser rendering involved. Last analyzed: 2026-03-31.*
