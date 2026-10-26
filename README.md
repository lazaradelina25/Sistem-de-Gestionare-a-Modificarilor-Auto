# Sistem de Gestionare a Modificărilor Auto

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

cd frontend
npm install
npm run dev

Apoi deschide adresa afișată în terminal (http://localhost:5173)[cite: 20].

## AI usage

| Tool            | Used for                                                                |
| --------------- | ----------------------------------------------------------------------- |
| Claude / Gemini | HTML/CSS for stage 1, README draft, fixing the stylesheet path, Git help |

Details per stage: see the ai-log/ folder.

## Status

- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript[cite: 9]
- [x] Stage 3: Vite and React project[cite: 20]
- [x] Stage 4: components rendered from data[cite: 12]
- [x] Stage 5: local state and events[cite: 12]

## Stage 5 checklist

| ID | Requirement | Where (permalink) | How to check |
| -- | ----------- | ----------------- | ------------ |
| S5-R1 | list kept in useState, in App | App.jsx | read |
| S5-R2 | toggling changes state and card look | App.jsx, InterventieCard.jsx | click a checkbox |
| S5-R3 | delete removes the item | App.jsx, InterventieCard.jsx | click Delete |
| S5-R4 | header counter derived, not in state | App.jsx | toggle, watch header |
| S5-R5 | immutable updates (no push, splice, assignment) | App.jsx | read |
| S5-R6 | light/dark toggle: state + data-theme on html | App.jsx, App.css | click the button, both system themes |
| S5-R7 | no console warnings; README + AI log | README.md, ai-log/etapa-05.md | F12, Console |
| S5-R8 | commit "Stage 5" pushed | commit history | commit history |