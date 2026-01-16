## 2024-07-25 - Respecting User Motion Preferences

**Learning:** CSS smooth scrolling and JavaScript animations (like jQuery's `.animate()`) can cause discomfort for users with vestibular disorders. It's a critical accessibility issue to provide an alternative for users who have enabled the `prefers-reduced-motion` media query. Overriding this user preference is an anti-pattern.

**Action:** For all future JavaScript-based animations, I must check `window.matchMedia('(prefers-reduced-motion: reduce)').matches`. If `true`, I will provide an alternative, non-animated action (e.g., instant scroll, immediate state change). For CSS transitions, I will wrap them in `@media (prefers-reduced-motion: no-preference)` to ensure they only run for users who have not opted out of motion.

## 2026-01-16 - Localizing Static UI Attributes

**Learning:** Found an accessibility and internationalization issue where a core UI element ("Back to top" button) had its `title` and `aria-label` attributes hardcoded in English, while the rest of the user interface is in Chinese. This creates a jarring experience for non-English-speaking users and screen reader users.

**Action:** For all future enhancements, I must audit static text in HTML attributes (`title`, `aria-label`, `placeholder`, etc.) for localization inconsistencies. I will translate these attributes to match the primary language of the page to ensure a consistent and accessible user experience.
