## 2024-07-25 - Respecting User Motion Preferences

**Learning:** CSS smooth scrolling and JavaScript animations (like jQuery's `.animate()`) can cause discomfort for users with vestibular disorders. It's a critical accessibility issue to provide an alternative for users who have enabled the `prefers-reduced-motion` media query. Overriding this user preference is an anti-pattern.

**Action:** For all future JavaScript-based animations, I must check `window.matchMedia('(prefers-reduced-motion: reduce)').matches`. If `true`, I will provide an alternative, non-animated action (e.g., instant scroll, immediate state change). For CSS transitions, I will wrap them in `@media (prefers-reduced-motion: no-preference)` to ensure they only run for users who have not opted out of motion.

## 2024-07-26 - Localize Interactive Control Attributes

**Learning:** Hardcoded English attributes like `title` on interactive elements in a non-English UI create a jarring and inconsistent user experience. It also poses an accessibility issue, as screen readers may announce the English text to a user who does not understand it.

**Action:** When working on a non-English interface, I must inspect all interactive elements (buttons, links, etc.) for hardcoded English attributes (`title`, `aria-label`, etc.) and localize them to the primary language of the page. This ensures a seamless experience for all users.
