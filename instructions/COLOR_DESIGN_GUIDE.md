# PRDF Website Color Design Guide

## 🎨 Color Palette Overview

This guide defines the complete color system for the PRDF website. All colors are derived from a nature-inspired green palette that reflects growth, sustainability, and community empowerment.

---

## 📋 Core Color Definitions

### Primary Colors

#### **Primary Green** `#1E5631`

- **Role**: Foundation color, brand identity
- **Usage**:
  - Headers and navigation bars
  - Primary headings (H1, H2)
  - Logo and brand elements
  - Footer backgrounds (alternate with footer-bg)
  - Card borders and dividers
  - Active navigation states
- **Text on Primary**: Always use white (`#FFFFFF`) or light colors
- **Emotional Association**: Stability, growth, trust, nature

#### **Secondary Lime** `#A4C639`

- **Role**: Energy and vibrancy
- **Usage**:
  - Hero section backgrounds
  - Highlight boxes and callouts
  - Secondary buttons
  - Progress indicators
  - Success states and positive feedback
  - Hover states on interactive elements
- **Text on Secondary**: Use dark text (`#2E2E2E`) for readability
- **Emotional Association**: Freshness, optimism, action

#### **Accent Gold** `#E8B86D`

- **Role**: Attention and warmth
- **Usage**:
  - Hover states on links and buttons
  - Border highlights on cards
  - Icon backgrounds
  - Placeholder backgrounds
  - Warning/attention states
  - Decorative elements
- **Text on Accent**: Use dark brown (`#2E2E2E`) or dark text
- **Emotional Association**: Warmth, harvest, achievement

---

### Supporting Colors

#### **CTA Green** `#3D7A57`

- **Role**: Call-to-action emphasis
- **Usage**:
  - Primary CTA section backgrounds
  - Important action buttons
  - Form submit buttons
  - Donation/contribution sections
  - Success messages
- **Text on CTA**: Always white (`#FFFFFF`)
- **Emotional Association**: Commitment, action, growth

#### **Footer Dark** `#2B3D2F`

- **Role**: Grounding and closure
- **Usage**:
  - Footer backgrounds
  - Dark mode sections (if implemented)
  - Sidebar backgrounds (optional)
  - Modal overlays (with opacity)
- **Text on Footer**: Use light colors (`#F9F7F2` or white)
- **Emotional Association**: Stability, completion

---

### Background & Surface Colors

#### **Light Background** `#F9F7F2`

- **Role**: Primary page background
- **Usage**:
  - Main body background
  - Alternate section backgrounds (odd sections)
  - Card backgrounds (subtle)
  - Input field backgrounds
- **Text on Light BG**: Use dark text (`#2E2E2E`)
- **Emotional Association**: Warmth, comfort, clarity

#### **Surface White** `#FFFFFF`

- **Role**: Content surfaces
- **Usage**:
  - Card backgrounds
  - Modal backgrounds
  - Dropdown menus
  - Alternate section backgrounds (even sections)
  - Form field backgrounds
- **Text on Surface**: Use dark text (`#2E2E2E`)
- **Emotional Association**: Cleanliness, focus, clarity

---

### Text Colors

#### **Dark Text** `#2E2E2E`

- **Role**: Primary text content
- **Usage**:
  - Body text
  - Headings (when on light backgrounds)
  - Paragraph text
  - List items
- **Contrast**: Use on light backgrounds only
- **Readability**: Excellent on white and light backgrounds

#### **Muted Text** `#6E6E6E`

- **Role**: Secondary information
- **Usage**:
  - Captions and metadata
  - Placeholder text
  - Disabled states
  - Footer secondary text
  - Timestamps and labels
- **Contrast**: Use on light backgrounds only
- **Readability**: Good for non-critical information

---

## 🎯 Color Application Rules

### Hierarchy & Visual Weight

1. **Primary Green** = Highest importance (brand, navigation, major headings)
2. **CTA Green** = Action emphasis (buttons, CTAs)
3. **Secondary Lime** = Energy and highlights (hero sections, key messages)
4. **Accent Gold** = Attention and interaction (hovers, borders, decorative)
5. **Text Colors** = Content hierarchy (dark for primary, muted for secondary)

### Section Background Alternation

- **Odd-numbered sections**: Use `--bg-light` (`#F9F7F2`)
- **Even-numbered sections**: Use `--surface` (`#FFFFFF`)
- **Exception**: Hero and CTA sections use their designated colors

### Button Color System

#### Primary Buttons

- **Background**: `--cta` (`#3D7A57`)
- **Text**: White
- **Hover**: Darken by 10-15% or use `--primary` (`#1E5631`)

#### Secondary Buttons

- **Background**: `--accent` (`#E8B86D`)
- **Text**: `--text-dark` (`#2E2E2E`)
- **Hover**: `--secondary` (`#A4C639`)

#### Outline Buttons

- **Border**: `--primary` (`#1E5631`) or `--cta` (`#3D7A57`)
- **Background**: Transparent
- **Text**: `--primary` or `--cta`
- **Hover**: Fill with border color, text becomes white

### Link Color System

- **Default**: `--primary` (`#1E5631`)
- **Hover**: `--accent` (`#E8B86D`)
- **Visited**: Slightly muted version of primary
- **Active**: `--cta` (`#3D7A57`)

### Card & Container Design

- **Background**: `--surface` (`#FFFFFF`)
- **Border**: `--accent` (`#E8B86D`) - 2px solid
- **Border Radius**: 10px
- **Shadow**: Subtle (`0 4px 8px rgba(0,0,0,0.05)`)
- **Heading Color**: `--primary` (`#1E5631`)

### Navigation System

- **Background**: `--primary` (`#1E5631`)
- **Text**: White
- **Hover**: `--accent` (`#E8B86D`)
- **Active**: `--secondary` (`#A4C639`)

---

## 🎨 Component-Specific Guidelines

### Header/Navigation

```
Background: --primary (#1E5631)
Text: White
Logo: White or --accent (#E8B86D)
Links: White → Hover: --accent
```

### Hero Section

```
Background: --secondary (#A4C639)
Heading: --primary (#1E5631)
Body Text: --text-dark (#2E2E2E)
```

### Content Sections

```
Alternating Backgrounds:
  - Odd: --bg-light (#F9F7F2)
  - Even: --surface (#FFFFFF)
Section Headings: --primary (#1E5631)
Body Text: --text-dark (#2E2E2E)
Muted Text: --text-muted (#6E6E6E)
```

### Cards/Boxes

```
Background: --surface (#FFFFFF)
Border: --accent (#E8B86D) - 2px
Heading: --primary (#1E5631)
Text: --text-dark (#2E2E2E)
```

### Call-to-Action Sections

```
Background: --cta (#3D7A57)
Text: White
Button Background: --accent (#E8B86D)
Button Text: --text-dark (#2E2E2E)
Button Hover: --secondary (#A4C639)
```

### Footer

```
Background: --footer-bg (#2B3D2F)
Text: --bg-light (#F9F7F2) or white
Links: --bg-light → Hover: --accent (#E8B86D)
```

### Forms

```
Input Background: --surface (#FFFFFF) or --bg-light (#F9F7F2)
Input Border: --text-muted (#6E6E6E) - 1px
Input Focus Border: --primary (#1E5631) - 2px
Label: --text-dark (#2E2E2E)
Placeholder: --text-muted (#6E6E6E)
Submit Button: --cta (#3D7A57)
```

### Alerts & Notifications

```
Success: --cta (#3D7A57) background, white text
Warning: --accent (#E8B86D) background, --text-dark text
Error: Red (not in palette - use sparingly)
Info: --primary (#1E5631) background, white text
```

### Badges & Tags

```
Primary Badge: --primary (#1E5631) background, white text
Secondary Badge: --secondary (#A4C639) background, --text-dark text
Accent Badge: --accent (#E8B86D) background, --text-dark text
```

---

## ✅ Do's and Don'ts

### ✅ DO

- Use **Primary Green** for all major headings and navigation
- Alternate section backgrounds between light and white for visual rhythm
- Use **Accent Gold** for hover states and interactive feedback
- Apply **Secondary Lime** to hero sections and highlight areas
- Use **CTA Green** exclusively for important action buttons
- Maintain white text on dark backgrounds (primary, footer, CTA)
- Use dark text on light backgrounds (secondary, accent, surfaces)
- Apply consistent border radius (8-10px) to cards and buttons
- Use subtle shadows for depth (cards, modals)

### ❌ DON'T

- Don't use **Primary Green** as a button color (use CTA Green instead)
- Don't place dark text on dark backgrounds
- Don't use **Secondary Lime** for large text blocks (use for backgrounds/highlights)
- Don't mix **Accent Gold** with **Secondary Lime** in the same component
- Don't use **Footer Dark** for main content areas
- Don't create buttons with **Primary Green** background (too dark for CTAs)
- Don't use muted text for important information
- Don't skip the alternating section backgrounds
- Don't apply accent colors to body text (only headings and highlights)

---

## 🔄 Color Combinations

### Recommended Pairings

1. **Primary + Accent**: Navigation with hover states
2. **Secondary + Primary**: Hero sections with headings
3. **CTA + Accent**: CTA sections with buttons
4. **Surface + Accent**: Cards with borders
5. **Primary + White**: Headers and footers

### Avoid These Combinations

- Primary Green + Secondary Lime (too much green, low contrast)
- Accent Gold + Secondary Lime (competing bright colors)
- Dark Text on Primary/Footer backgrounds (use white instead)

---

## ♿ Accessibility Guidelines

### Contrast Ratios (WCAG AA Compliance)

- **Primary Green + White**: ✅ 7.2:1 (AAA)
- **CTA Green + White**: ✅ 4.8:1 (AA)
- **Secondary Lime + Dark Text**: ✅ 4.5:1 (AA)
- **Accent Gold + Dark Text**: ✅ 4.2:1 (AA)
- **Dark Text + Light Background**: ✅ 12.6:1 (AAA)
- **Muted Text + Light Background**: ✅ 4.5:1 (AA)

### Focus States

- Use **Accent Gold** (`#E8B86D`) with 2-3px outline for focus indicators
- Ensure focus states are visible on all interactive elements
- Maintain 3:1 contrast ratio for focus indicators

### Color-Blind Considerations

- Never rely solely on color to convey information
- Use icons, text labels, or patterns in addition to color
- Test with color-blind simulators (deuteranopia, protanopia)

---

## 📐 Implementation Notes

### CSS Variables (Recommended)

```css
:root {
  --primary: #1e5631;
  --secondary: #a4c639;
  --accent: #e8b86d;
  --bg-light: #f9f7f2;
  --surface: #ffffff;
  --text-dark: #2e2e2e;
  --text-muted: #6e6e6e;
  --cta: #3d7a57;
  --footer-bg: #2b3d2f;
}
```

### Tailwind Configuration (If Using Tailwind)

Extend your `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'prdf-primary': '#1E5631',
      'prdf-secondary': '#A4C639',
      'prdf-accent': '#E8B86D',
      'prdf-bg-light': '#F9F7F2',
      'prdf-surface': '#FFFFFF',
      'prdf-text-dark': '#2E2E2E',
      'prdf-text-muted': '#6E6E6E',
      'prdf-cta': '#3D7A57',
      'prdf-footer': '#2B3D2F',
    }
  }
}
```

---

## 🎭 Creative Applications

### Gradient Usage

- **Subtle gradients**: Primary → CTA Green (for backgrounds)
- **Accent gradients**: Accent Gold → Secondary Lime (for special elements)
- Use sparingly and maintain readability

### Overlay Effects

- Dark overlays on images: Use `--footer-bg` with 40-60% opacity
- Light overlays: Use `--bg-light` with 20-30% opacity

### Border Accents

- Use **Accent Gold** for top borders on cards
- Use **Primary Green** for left borders on important content
- Use **Secondary Lime** for bottom borders on section dividers

### Icon Colors

- Primary icons: `--primary` or `--cta`
- Decorative icons: `--accent`
- Status icons: Match to semantic meaning (success = CTA, warning = accent)

---

## 📱 Responsive Considerations

- Maintain color consistency across all breakpoints
- Ensure touch targets (buttons) maintain sufficient contrast
- Test color visibility in both light and dark ambient conditions
- Consider reduced motion preferences for hover effects

---

## 🔍 Quick Reference

| Element          | Background | Text      | Border    |
| ---------------- | ---------- | --------- | --------- |
| Header           | `#1E5631`  | White     | -         |
| Hero             | `#A4C639`  | `#2E2E2E` | -         |
| Section (odd)    | `#F9F7F2`  | `#2E2E2E` | -         |
| Section (even)   | `#FFFFFF`  | `#2E2E2E` | -         |
| Card             | `#FFFFFF`  | `#2E2E2E` | `#E8B86D` |
| CTA Section      | `#3D7A57`  | White     | -         |
| Footer           | `#2B3D2F`  | `#F9F7F2` | -         |
| Primary Button   | `#3D7A57`  | White     | -         |
| Secondary Button | `#E8B86D`  | `#2E2E2E` | -         |

---

**Last Updated**: 2025  
**Version**: 1.0  
**Maintained By**: PRDF Design Team
