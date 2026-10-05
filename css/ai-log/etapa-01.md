# Stage 1: AI log

## Tools
- Gemini

## Conversations
- Shared context in chat for generating initial layout and CSS rules.

## Key requests

### 1. HTML structure and CSS variables setup
- **Asked:** Generate HTML and CSS layout for Stage 1 adapted for an Auto Service / Car Mods management application.
- **Got:** HTML skeleton and CSS stylesheet using CSS Grid, Flexbox, CSS variables, and Dark Theme styles.
- **Changed or rejected:** Adjusted color palette to better match car service aesthetics and aligned badge classes (`badge-mentenanta`, `badge-reparatie`, `badge-tuning`).

## What I learned / what did not work
- Learned how to use CSS Grid for the main layout and Flexbox for forms and cards.
- Learned how to easily implement a dark theme by re-defining CSS variables inside a `@media (prefers-color-scheme: dark)` block.