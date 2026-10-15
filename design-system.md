# **Renata’s Portfolio — Design System (Source of Truth)**

## **Standing instruction**

Please treat everything below as the definitive design system for this website. Treat the defined values, tokens, naming conventions, and rules as the source of truth and apply them automatically to anything I ask you to build or change, including new sections, new pages, and edits to existing content.

Reuse existing design-system values whenever they serve the same purpose. Do not create slightly different colors, typography styles, spacing values, or component variants to perform a role that is already defined. If a request introduces a genuinely new design role that is not covered by this system, tell me what is missing before creating a new global token or style rather than inventing one automatically.

The spacing scale defines **recurring content relationships and page-level spacing**, not every distance that can appear in a layout. Component-specific layout distances may be defined when required to reproduce an approved design. Keep those values scoped to that component and do not automatically promote them to global spacing tokens. If the same spacing relationship begins recurring across the site, flag it so we can decide whether it should become part of the global spacing scale.

The goal is to keep the site consistent without forcing unrelated layouts to use the same values simply for the sake of reuse. Existing patterns should be reused when they represent the same design role; genuinely different layout requirements may remain component-specific.

## **Naming Rules**

Use the names below as the canonical vocabulary for page sections, components, and elements.

* Use lowercase kebab-case.  
* Use `site-` for elements shared across the entire website.  
* Use `home-`, `about-`, and `project-` for page-specific structures.  
* Major page sections may use these names as HTML IDs where useful.  
* Component and element names do not automatically require HTML IDs.  
* Prefer semantic HTML (`header`, `nav`, `main`, `section`, `article`, `footer`, headings, links, etc.) before adding unnecessary wrappers.  
* Do not invent alternate names for structures already defined here.  
* Do not create generic names such as `section-1`, `content`, `container-2`, or `text-block`.

Home Page 

site-header

└── site-nav

home-hero

├── home-hero-heading

├── home-hero-intro

└── home-hero-scroll

home-work

└── home-project-card [repeated]

    ├── project-card-title

    ├── project-card-description

    ├── project-card-link

    └── project-card-image

site-footer

├── footer-copyright

└── footer-links

About Page 

site-header

└── site-nav

about-hero

├── about-hero-heading

├── about-hero-bio

└── about-hero-image

about-skills

├── about-software

│   ├── about-software-label

│   └── about-software-list

└── about-capabilities

    ├── about-capabilities-label

    └── about-capabilities-list

about-contact

├── about-contact-heading

└── about-contact-email

site-footer 

Project Page - Austin Notary Solutions

site-header

└── site-nav

project-hero

project-challenge

project-solution

├── project-solution-copy

├── project-solution-mobile

├── project-solution-seven-sections

└── project-solution-contact

project-results

site-footer

## **Typography scale**

### Typography breakpoint  
- Desktop typography applies at `768px` and above.  
- Mobile typography applies below `768px`.  
Use Display typography for each page's H1 by default. HTML heading levels must follow semantic hierarchy rather than visual appearance.

Font sizes should be implemented using the rem values. Pixel values are included as reference equivalents only.

| Style | Family | Weight | Desktop size | Mobile size | Line height | Letter spacing | Case |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| Display | Montserrat | 600 Semibold | 3.75rem / 60px | 2.75rem / 44px | 1.1 | normal | Sentence case |
| H2 — Section headline | Montserrat | 700 Bold | 2.5rem / 40px | 2rem / 32px | 1.2 | normal | Sentence case |
| H3 — Subsection headline | Montserrat | 700 Bold | 2rem / 32px | 1.75rem / 28px | 1.25 | normal | Sentence case |
| H4 — Card title | Montserrat | 500 Medium | 1.625rem / 26px | 1.5rem / 24px | 1.3 | normal | Sentence case |
| Body — Large | Bitter | 400 Regular | 1.375rem / 22px | 1.25rem / 20px | 1.5 | normal | Sentence case |
| Body — Standard | Bitter | 400 Regular | 1.125rem / 18px | 1.125rem / 18px | 1.6 | normal | Sentence case |
| Quote | Bitter | 500 Medium | 1.625rem / 26px | 1.375rem / 22px | 1.5 | normal | Sentence case |
| Kicker / eyebrow label | Bitter | 500 Medium | 1.125rem / 18px | 1rem / 16px | 1.4 | 0.04em | Uppercase |
| Nav / button label | Bitter | 300 Light for navigation; 500 Medium for buttons | 1.125rem / 18px | 1.125rem / 18px | 1.4 | normal | Sentence case |
| Caption / fine print | Bitter | 400 Regular | 0.75rem / 12px | 0.75rem / 12px | 1.5 | normal | Sentence case |

## **Color tokens**

- `bg-main` `#F3F3F3` — Default background for all pages and sections.

- `bg-surface` `#FFFFFF` — Elevated or contrasting section background used selectively on project pages, such as Solution and Contact sections.

- `text-primary` `#181717` — Primary text color for display headings, H2 headings, and navigation.

- `text-secondary` `#33363F` — Secondary text color for H3 and H4 headings, body copy, and supporting text.

- `accent` `#6B2D8B` — Brand accent used for interactive and emphasized elements, such as active navigation indicators and hover underlines.

## **Spacing scale**

### Content spacing

Content spacing remains unchanged across breakpoints.

- **Display/H1 and H2 → paragraph:** 32px
- **H3 → paragraph:** 16px
- **H4 or Kicker → paragraph:** 24px
- **Paragraph → paragraph:** 24px

### Component spacing

These values are scoped to the named components and are not global spacing tokens. Desktop applies at 1024px and above, tablet at 768px–1023px, and mobile below 768px.

| Component | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Home project card — description → case study link | 48px | 40px | 32px |
| Home work — project card → project card | 96px | 72px | 64px |
| Project solution — subsection → subsection | 96px | 72px | 64px |

### Section spacing breakpoints

- **Large:** 1024px and above

- **Medium:** 768px–1023px

- **Small:** below 768px

- **Section outer padding — standard:** 96px large / 64px medium / 40px small

- **Section outer padding — footer:** 64px large / 48px medium / 32px small

Section outer padding applies vertically (top and bottom). Horizontal spacing is controlled separately by page gutters. Adjacent independently padded sections contribute their own padding; do not add an additional section gap. Component-specific layouts may use different spacing when required by the approved design.

## **Content width and page gutters**

Use a maximum content width of 1200px. The content container should remain fluid.

| Breakpoint | Horizontal page gutters |
| --- | --- |
| Desktop — 1024px and above | 48px |
| Tablet — 768px–1023px | 32px |
| Mobile — below 768px | 24px |

## **Interactive states**

For text links and navigation:

- Use `text-primary` by default.
- Use an `accent` underline on hover and for active navigation.
- Navigation uses 300 Light by default and 400 Regular on hover. Change weight immediately without scaling the text. Animate the navigation underline using `scaleX()` over 200ms with smooth easing, respecting `prefers-reduced-motion`.
- Use a visible 2px `accent` focus outline with 4px offset for keyboard focus.

Do not invent additional button styles or interaction patterns.

## **Responsive navigation**

At 768px and above, display the standard desktop navigation.

Below 768px, replace the desktop navigation links with a hamburger menu button.

Tapping the hamburger opens a full-screen navigation overlay with the following behavior:

* Background: `bg-main` (`#F3F3F3`)  
* Position: fixed and fills the entire viewport  
* Navigation links are centered horizontally and vertically  
* Links are stacked vertically with `32px` between them  
* Navigation links use the approved Nav / button label typography  
* The hamburger icon changes to a close icon while the menu is open  
* Selecting a navigation link closes the menu  
* Pressing `Escape` closes the menu  
* Page scrolling is disabled while the menu is open  
* The menu button must use a semantic `<button>` element with an accessible label  
* `aria-expanded` must reflect whether the menu is open or closed  
* Move focus into the menu when it opens
* Keep focus within the menu while open
* Return focus to the menu button when it closes
* Keyboard focus must remain visible  
* Navigation animations must respect `prefers-reduced-motion`


## **Home hero specifications**

- `home-hero-intro` uses Montserrat, 400 Regular, 1.625rem / 26px at 768px and above and 1.375rem / 22px below 768px, with a 1.5 line height and `text-secondary`. This is a hero-specific typography role; Body Large remains unchanged.
- `home-hero-scroll` is a decorative 48px × 48px SVG in `accent`. It moves down 8px and returns to its original position over a repeating 2-second ease-in-out animation. Disable the animation for `prefers-reduced-motion`. It has no link, button, or JavaScript behavior.

## **Home project card specifications**

- `project-card-title` uses Bitter, 400 Regular, 1.125rem / 18px, uppercase, with a 1.4 line height at all breakpoints. Keep semantic H2 markup for these headings. This card-specific role overrides the general H4 card-title style for home project cards.
- The title and case-study link share each project's color: Austin Notary Solutions `#0034AD`, Camelot Vet Services `#AB0782`, and Raasin in the Sun `#6E660A`. These colors are scoped to the home project cards.
- At desktop widths (1024px and above), align the case-study link's bottom edge with the image's bottom edge. Preserve the specified minimum description-to-link spacing.

- `project-card-link` uses 1rem / 16px text (2px smaller than the 18px description) and has one continuous underline spanning the words, gap, and arrow in the project color. While the case-study link is hovered, its arrow moves 4px to the right over 200ms with ease-in-out timing and returns when hover ends. Disable the arrow movement and its transition for `prefers-reduced-motion`.
- Project images link to the associated `liveUrl` in a new tab with a pointer cursor. On hover, scale the image to 1.03 over 300ms with ease-in-out timing inside a fixed frame that clips overflow. Disable the zoom and transition for `prefers-reduced-motion`; provide the approved keyboard focus outline on the image link.

- Home project image frames use Tailwind `shadow-sm` for a subtle shadow outside the frame; the image zoom remains clipped inside it.
