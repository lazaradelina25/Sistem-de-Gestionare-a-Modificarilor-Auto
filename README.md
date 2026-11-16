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

## Stage 6: data from a mock API
The list is served by json-server from db.json. The app fetches it on load and shows a loading state and an error state.

npm run api    # terminal 1, http://localhost:3001
npm run dev    # terminal 2, http://localhost:5173

## Status
- [x] Stage 5: local state and events
- [x] Stage 6: data from a mock API
- [ ] Stage 7: form and validation

## Stage 7: form and validation
Tasks/Interventions can be added from the page. The form is controlled and validated, and every change (add, toggle, delete) goes to the API before it shows up in the list.

## Stage 7 checklist

| Req | Description | File(s) | Action / Evidence |
|---|---|---|---|
| S7-R1 | controlled form: value + onChange on every field | InterventieForm.jsx | title & category controlled state |
| S7-R2 | empty title shows an error, nothing is sent | InterventieForm.jsx | validation function prevents submit |
| S7-R3 | added item shows in the list and survives refresh | App.jsx, api.js | createInterventie POST request |
| S7-R4 | toggle and delete survive refresh | App.jsx, api.js | updateInterventie PATCH & deleteInterventie DELETE |
| S7-R5 | button disabled while sending, form cleared only on success | InterventieForm.jsx | disabled attribute & reset after submit |
| S7-R6 | tw.json and the data-testid attributes | tw.json, Card, Form, List | tw.json in root, data-testid added |
| S7-R7 | README Stage 7 section + AI log | README.md, ai-log/etapa-07.md | updated documentation |
| S7-R8 | commit "Stage 7" pushed | commit history | stage 7 pushed to remote |

## Stage 8: routing and detail page
Three pages behind React Router: the list, a detail page at `/interventii/:id`, and an about page, plus a 404 page. Component styles moved to CSS Modules.

## Status
[x] Stage 7: form and validation
[x] Stage 8: routing and detail page
[ ] Stage 9: own backend with Express

## Stage 8 checklist

| Req | Description | File(s) | Action / Evidence |
|---|---|---|---|
| S8-R1 | SPA Navigation without reload | Layout.jsx, App.jsx | NavLink to /, /despre |
| S8-R2 | Detail page on title click | InterventieCard.jsx, InterventieDetaliuPage.jsx | Link to /interventii/:id |
| S8-R3 | Detail page refresh & 404 handling | InterventieDetaliuPage.jsx | useParams, fetchInterventie |
| S8-R4 | Custom 404 Page | NotFoundPage.jsx, App.jsx | Route path="*" |
| S8-R5 | CSS Modules per component | src/components, src/pages | *.module.css files |
| S8-R6 | data-testid & route match tw.json | Layout.jsx, Card, Pages | data-testid="nav", "detail", "not-found" |
| S8-R7 | README Stage 8 section + AI log | README.md, ai-log/etapa-08.md | updated |
| S8-R8 | Commit pushed | Git history | commit pushed |