import { useState } from "react";
import InterventieList from "./components/InterventieList.jsx";

// Datele inițiale ale proiectului tău
const INTERVENTII_INITIALE = [
  { id: 1, titlu: "Schimb ulei și filtre", gata: false, categorie: "mentenanță" },
  { id: 2, titlu: "Înlocuire plăcuțe frână", gata: true, categorie: "reparație" },
  { id: 3, titlu: "Instalare suspensie sport", gata: false, categorie: "modificare" },
];

// Tema de pornire: cea a sistemului de operare
function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [interventii, setInterventii] = useState(INTERVENTII_INITIALE);
  const [tema, setTema] = useState(temaInitiala);

  // Funcția de comutare a stării (bifat / nebifat)
  function handleToggle(id) {
    setInterventii((prev) =>
      prev.map((item) => (item.id === id ? { ...item, gata: !item.gata } : item))
    );
  }

  // Funcția de ștergere
  function handleDelete(id) {
    setInterventii((prev) => prev.filter((item) => item.id !== id));
  }

  // Comutarea temei (Light / Dark)
  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  // Valoare derivată: numărul de intervenții active (nefinalizate)
  const active = interventii.filter((item) => !item.gata).length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <h1>GarageLog</h1>
        <p>Sistem de gestionare a modificărilor și serviciilor auto.</p>
        <p className="app-count">
          {interventii.length} intervenții, dintre care {active} active
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Intervențiile mele</h2>
          <InterventieList
            interventii={interventii}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </>
  );
}