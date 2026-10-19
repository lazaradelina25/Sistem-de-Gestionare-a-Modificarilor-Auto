# Stage 2: AI log

## Tools
- AI assistant (chat), used to write and verify the JavaScript data logic (`interventii.js`), test immutability principles, and check validation rules.
- Copilot in VS Code was open, but I did not use its suggestions.

## Conversations
- <(https://gemini.google.com/app/037091087f46cee0?hl=ro)> (stage 2 data logic in JavaScript for GarageLog)

## Key requests
### 1. Creating the data structure and initial array
- Asked: to define the array of objects with unique IDs and sample items based on the project theme (GarageLog - car services and modifications) alongside the allowed types constant (`TIPURI`).
- Got: an array containing initial interventions with fields like `id`, `titlu`, `finalizata`, `tip`, `data`, `kilometraj`, and `cost`, plus the `TIPURI` array.
- Changed or rejected: kept as generated, perfectly fitting the car management theme.

### 2. Implementing immutable core functions
- Asked: to write the core functions (`listeazaTitluri`, `numaraProgramate`, `cautaInterventii`, `nextId`, `adaugaInterventie`, `comutaFinalizata`, `stergeInterventie`) using array methods (`map`, `filter`, `reduce`) while strictly respecting immutability.
- Got: functions using the spread operator (`...`) instead of mutating methods like `push`, and safe ID calculation (`nextId`) based on `reduce` to prevent duplicate IDs after deletions.
- Changed or rejected: kept as generated, ensuring robust filtering, case-insensitive searching, and state toggling.

### 3. Validation and console testing
- Asked: to add validation logic inside `adaugaInterventie` (checking for empty/too long titles, invalid types, and negative numbers for mileage or cost) and group manual tests in the console.
- Got: validation checks that log error messages and return the original list unchanged on error, followed by console tests grouped into sections (*Citire*, *Adăugare*, *Modificare și ștergere*, *Validare*) proving immutability.
- Changed or rejected: kept as generated, fully fulfilling the stage requirements.

## What I learned / what did not work
- Immutability using the spread operator (`...` for arrays and objects) ensures original data remains intact, which is critical for future React stages.
- Calculating the next ID using `reduce` (`Math.max`) is much safer than using `array.length + 1` because it avoids duplicate IDs after items are deleted.
- String methods like `trim()` and `toLowerCase()` make search and name validation robust against user input variations.
- Grouping console tests into clear sections makes it very easy to verify each function's output directly from the browser DevTools (F12).