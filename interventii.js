// GarageLog - stage 2: data logic (plain JavaScript, no DOM)

// --- Data ---
const interventii = [
  {
    id: 1,
    titlu: "Schimb ulei și filtre",
    finalizata: false,
    tip: "mentenanta",
    data: "2026-10-12",
    kilometraj: 84200,
    cost: 350,
  },
  {
    id: 2,
    titlu: "Înlocuit plăcuțe de frână",
    finalizata: true,
    tip: "reparatie",
    data: "2026-09-28",
    kilometraj: 83650,
    cost: 520,
  },
  {
    id: 3,
    titlu: "Montat suspensie sport",
    finalizata: false,
    tip: "modificare",
    data: "2026-10-20",
    kilometraj: 84500,
    cost: 2800,
  },
];

const TIPURI = ["mentenanta", "reparatie", "modificare"];

// --- Functions (none of them changes the received array) ---

// Returns an array with the titles
function listeazaTitluri(lista) {
  return lista.map((i) => i.titlu);
}

// Returns how many items are not finished yet
function numaraProgramate(lista) {
  return lista.filter((i) => !i.finalizata).length;
}

// Returns the items whose title or type contains the text (case-insensitive)
function cautaInterventii(lista, text) {
  const cautat = text.trim().toLowerCase();
  return lista.filter(
    (i) => i.titlu.toLowerCase().includes(cautat) || i.tip.includes(cautat)
  );
}

// Next id = highest existing id + 1 (safe after deletions)
function nextId(lista) {
  return lista.reduce((max, i) => Math.max(max, i.id), 0) + 1;
}

// Adds an item after validation; on error it logs a message and returns the same list
function adaugaInterventie(lista, titlu, tip = "mentenanta", kilometraj = 0, cost = 0) {
  const titluCurat = titlu.trim();

  if (titluCurat === "") {
    console.log("Titlul nu poate fi gol.");
    return lista;
  }
  if (titluCurat.length > 100) {
    console.log("Titlul poate avea cel mult 100 de caractere.");
    return lista;
  }
  if (!TIPURI.includes(tip)) {
    console.log("Tip invalid: " + tip);
    return lista;
  }
  if (typeof kilometraj !== "number" || kilometraj < 0) {
    console.log("Kilometrajul trebuie să fie un număr pozitiv: " + kilometraj);
    return lista;
  }
  if (typeof cost !== "number" || cost < 0) {
    console.log("Costul trebuie să fie un număr pozitiv: " + cost);
    return lista;
  }

  const nou = {
    id: nextId(lista),
    titlu: titluCurat,
    finalizata: false,
    tip: tip,
    data: new Date().toISOString().slice(0, 10),
    kilometraj: kilometraj,
    cost: cost,
  };
  return [...lista, nou];
}

// Returns a new list where the item with the given id has the opposite state
function comutaFinalizata(lista, id) {
  return lista.map((i) => (i.id === id ? { ...i, finalizata: !i.finalizata } : i));
}

// Returns a new list without the item with the given id
function stergeInterventie(lista, id) {
  return lista.filter((i) => i.id !== id);
}

// --- Tests in the console ---
console.log("--- Citire ---");
console.log("Titluri:", listeazaTitluri(interventii).join(", "));
console.log("Programate:", numaraProgramate(interventii));
console.log("Căutare 'ulei':", listeazaTitluri(cautaInterventii(interventii, "ulei")).join(", "));
console.log("Căutare 'reparatie':", listeazaTitluri(cautaInterventii(interventii, "reparatie")).join(", "));

console.log("--- Adăugare ---");
let lista = adaugaInterventie(interventii, "Revizie distribuție", "mentenanta", 85000, 1800);
console.log("Lista nouă:", lista.length, "intervenții");
console.log("Originalul a rămas cu:", interventii.length, "intervenții");

console.log("--- Modificare și ștergere ---");
lista = comutaFinalizata(lista, 1);
console.log("După finalizarea id 1, programate:", numaraProgramate(lista));
lista = stergeInterventie(lista, 3);
console.log("După ștergerea id 3:", listeazaTitluri(lista).join(", "));

console.log("--- Validare ---");
adaugaInterventie(lista, "Test cost", "reparatie", 1000, -50);
adaugaInterventie(lista, "   ");
adaugaInterventie(lista, "Ceva", "urgenta");