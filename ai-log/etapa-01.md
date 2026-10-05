# Stage 1: AI log

## Tools
- Claude (chat), used to generate the HTML/CSS, the README draft and to debug a problem
- Copilot in VS Code was open, but I did not use its suggestions <DELETE THIS LINE IF TRUE, OR WRITE WHAT YOU USED IT FOR>

## Conversations
- <PASTE THE SHARE LINK OF THIS CLAUDE CONVERSATION HERE> (stage 1 mockup for a car services and modifications manager)

## Key requests
### 1. First version of the mockup
- Asked: to build stage 1 from the course guide for my theme, a car services and modifications manager (GarageLog).
- Got: index.html, style.css, README.md and the AI log template, with a header, a form (text + select), three cards, Grid and Flexbox layout, a @media rule for narrow screens, CSS variables and a dark theme.
- Changed or rejected: <WHAT YOU CHANGED, e.g. app name, texts, colors, sample data, or "kept as generated">

### 2. Making the page more interactive
- Asked: to make the page less basic while using only HTML and CSS, as required by stage 1.
- Got: a CSS-only checkbox that marks a card as done, type filters built with hidden radio buttons and :has(), counters with counter-increment, expandable details, a star for important items and hover/focus effects.
- Changed or rejected: <WHAT YOU KEPT OR REMOVED, e.g. "kept the filters, removed the star">. Nothing is saved after reload, because that needs JavaScript (later stages).

### 3. Fixing styles that did not load
- Asked: why the page showed no styling at all.
- Got: the cause was that style.css was inside a folder named css while index.html linked to "style.css" in the same folder.
- Changed or rejected: <WRITE WHAT YOU DID, e.g. "moved style.css next to index.html" OR "changed the link to css/style.css">, and moved the ai-log folder to the project root.

## What I learned / what did not work
<WRITE 3-4 LINES IN YOUR OWN WORDS. Ideas: the href path in <link> must match where the file really is; Grid creates the two columns and Flexbox aligns the form and the cards; the dark theme works by redefining only the CSS variables; :has() lets a parent react to a checked checkbox or radio button without JavaScript.>