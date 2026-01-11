## 2024-07-25 - Respecting User Motion Preferences

**Learning:** CSS smooth scrolling and JavaScript animations (like jQuery's `.animate()`) can cause discomfort for users with vestibular disorders. It's a critical accessibility issue to provide an alternative for users who have enabled the `prefers-reduced-motion` media query. Overriding this user preference is an anti-pattern.

**Action:** For all future JavaScript-based animations, I must check `window.matchMedia('(prefers-reduced-motion: reduce)').matches`. If `true`, I will provide an alternative, non-animated action (e.g., instant scroll, immediate state change). For CSS transitions, I will wrap them in `@media (prefers-reduced-motion: no-preference)` to ensure they only run for users who have not opted out of motion.
