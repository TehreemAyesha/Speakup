---
name: Eloquent Clarity
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434656'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#747688'
  outline-variant: '#c4c5d9'
  surface-tint: '#104af0'
  primary: '#0040df'
  on-primary: '#ffffff'
  primary-container: '#2d5bff'
  on-primary-container: '#efefff'
  inverse-primary: '#b8c3ff'
  secondary: '#006c4a'
  on-secondary: '#ffffff'
  secondary-container: '#82f5c1'
  on-secondary-container: '#00714e'
  tertiary: '#4d565b'
  on-tertiary: '#ffffff'
  tertiary-container: '#656e73'
  on-tertiary-container: '#e8f1f7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b8c3ff'
  on-primary-fixed: '#001355'
  on-primary-fixed-variant: '#0035bd'
  secondary-fixed: '#85f8c4'
  secondary-fixed-dim: '#68dba9'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005137'
  tertiary-fixed: '#dbe4ea'
  tertiary-fixed-dim: '#bfc8ce'
  on-tertiary-fixed: '#141d21'
  on-tertiary-fixed-variant: '#3f484d'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 1.5rem
  margin-desktop: 2.5rem
  margin-mobile: 1rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
---

## Brand & Style

This design system is built for an AI-driven educational environment that prioritizes psychological safety and intellectual growth. The personality is **encouraging, objective, and scholarly yet accessible**. The target audience comprises students and educators who require a focused, low-friction interface for complex thought.

The visual style is **High-End Minimalism** with a focus on functional clarity. It avoids unnecessary decoration to reduce cognitive load during intense debate practice. The aesthetic is defined by generous whitespace, soft environmental lighting, and a "breathable" interface that evokes a sense of calm and readiness.

## Colors

The palette centers on **Soft Blues and Greens** to establish a tranquil atmosphere.
- **Primary:** A vibrant but disciplined blue for focus and primary intent.
- **Secondary:** A natural green used for progress, constructive feedback, and growth indicators.
- **Backgrounds:** We utilize a very light slate-grey background to reduce eye strain, with pure white surfaces for active content containers.
- **Semantic States:** Info states utilize a sky-blue tint, while success states use a clear emerald to provide positive reinforcement for student achievements.

## Typography

This design system employs **Plus Jakarta Sans** across all levels. Its soft curves and modern geometry make it exceptionally readable for long-form debate transcripts while maintaining a friendly, optimistic character.

- **Headlines:** Use Bold and Semi-Bold weights with slight negative letter-spacing to create a confident, grounded look.
- **Body Text:** Set with generous line-height (1.5x) to ensure legibility during rapid reading.
- **Hierarchy:** High contrast between label sizes and body text helps students quickly distinguish between AI prompts and their own input.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a maximum width constraint for readability. 
- **Desktop:** A 12-column grid with 24px gutters. Sidebars should occupy 3 columns, leaving 9 for the primary debate arena.
- **Mobile:** A single-column layout with 16px margins.
- **Rhythm:** We use a strict 4px/8px baseline grid. Padding within cards and modals should be consistent at 24px (1.5rem) to maintain an airy, uncrowded feel.

## Elevation & Depth

This design system uses **Tonal Layers** and **Ambient Shadows** to create a sense of organized hierarchy.
- **Level 0 (Background):** Slate-50 (#F8FAFC).
- **Level 1 (Cards/Sidebar):** White surface with a 1px border (#E2E8F0) and a very soft, diffused shadow (0px 4px 20px rgba(0,0,0,0.03)).
- **Level 2 (Active/Floating):** Used for modals and active tooltips. These feature a slightly deeper shadow and a subtle primary-tinted glow to signal focus.
- **Depth Metaphor:** Surfaces do not "float" high; they feel like paper layers resting gently on a desk, emphasizing a tactile, grounded learning environment.

## Shapes

The shape language is **Rounded (0.5rem base)**. This softens the mathematical precision of the AI, making the interface feel more approachable and less intimidating for students.
- **Small elements (Checkboxes, Tags):** 0.25rem (Soft).
- **Standard elements (Buttons, Inputs):** 0.5rem (Rounded).
- **Large containers (Cards, Modals):** 1rem (Rounded-LG).
- **Avatars/Indicators:** Fully circular (Pill-shaped) to represent human-centric elements.

## Components

### Buttons
- **Primary:** Solid Primary Color, white text, 0.5rem corner radius. Subtle lift on hover.
- **Secondary:** Tertiary Blue background (#F0F9FF) with Primary Blue text. No border.
- **Ghost:** No background, Primary Blue text. Used for less frequent actions like "View Source."

### Cards
- White background, 1rem corner radius, 1px subtle border. 
- Cards used for "AI Feedback" should have a subtle green top-border (2px) to signify constructive input.

### Sidebar
- A fixed-width, light-grey (#F8FAFC) or white container. 
- Nav items use "Rounded" highlight shapes for the active state with a 4px primary-colored vertical indicator on the left.

### Inputs & Fields
- Background-colored (#F1F5F9) fills with no borders in their default state.
- Transition to a white background with a 2px Primary border upon focus.

### Feedback Chips
- Small, pill-shaped indicators for "Logical Fallacy," "Strong Evidence," or "Rebuttal Opportunity." 
- Use low-saturation background tints with high-saturation text for maximum readability without visual noise.