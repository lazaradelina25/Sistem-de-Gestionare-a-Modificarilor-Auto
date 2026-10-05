# Sistem-de-Gestionare-a-Modificarilor-Auto
                                               |

A web app for managing car services and modifications: maintenance, repairs and tuning work.
It helps car owners keep a clear history of what was done to their car and what is still planned.

## Data model

| Field    | Type         | Notes                                                  |
| -------- | ------------ | ------------------------------------------------------ |
| title    | text         | required, max 100 chars (e.g. "Oil and filter change") |
| done     | boolean      | toggled from the list, default false                   |
| type     | fixed values | maintenance, repair, modification                      |
| category | relation     | Engine, Brakes, Suspension, Electronics                |
| user     | relation     | the owner of the item (from week 11)                   |

Extra fields: date, mileage, cost.

Sample data used across all stages:

1. Oil and filter change, active, maintenance
2. Brake pads replacement, done, repair
3. Sport suspension installation, active, modification

## How to run

Open `index.html` in a browser. No build step, no server.

## AI usage

| Tool   | Used for                                                                |
| ------ | ----------------------------------------------------------------------- |
| Claude / Gemini | HTML/CSS for stage 1, README draft, fixing the stylesheet path, Git help |

Details per stage: see the ai-log/ folder.

## Status

- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project

## Stage 1 checklist

| ID    | Requirement                                          | Where (permalink)                                                                 | How to check     |
| ----- | ---------------------------------------------------- | --------------------------------------------------------------------------------- | ---------------- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/lazaradelina25/Sistem-de-Gestionare-a-Modificarilor-Auto/blob/ce1aef9/README.md) | read |
| S1-R2 | AI usage section                                     | [README.md#L21-L27](https://github.com/lazaradelina25/Sistem-de-Gestionare-a-Modificarilor-Auto/blob/ce1aef9/README.md#L21-L27) | read |
| S1-R3 | AI log for stage 1                                   | [ai-log/etapa-01.md](https://github.com/lazaradelina25/Sistem-de-Gestionare-a-Modificarilor-Auto/blob/ce1aef9/ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with own data  | [index.html](https://github.com/lazaradelina25/Sistem-de-Gestionare-a-Modificarilor-Auto/blob/ce1aef9/index.html) | open the page |
| S1-R5 | finished card looks different                        | [style.css](https://github.com/lazaradelina25/Sistem-de-Gestionare-a-Modificarilor-Auto/blob/ce1aef9/style.css) (.done) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px                  | [style.css](https://github.com/lazaradelina25/Sistem-de-Gestionare-a-Modificarilor-Auto/blob/ce1aef9/style.css) (@media) | resize < 700px |
| S1-R7 | visible focus, readable dark theme                   | [style.css](https://github.com/lazaradelina25/Sistem-de-Gestionare-a-Modificarilor-Auto/blob/ce1aef9/style.css) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed                              | [commit ce1aef9](https://github.com/lazaradelina25/Sistem-de-Gestionare-a-Modificarilor-Auto/commit/ce1aef9) | commit history |
