import { useState, useEffect } from "react";
import InterventieList from "./components/InterventieList.jsx";
import { fetchInterventii } from "./api.js";

// Tema de pornire: cea a sistemului de operare
function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
// componenta principala a aplicatiei
export default function App() {
  const [interventii, setInterventii] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tema, setTema] = useState(temaInitiala);

  // Încărcarea datelor de la API la montarea componentei
  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const data = await fetchInterventii();
        if (!ignore) setInterventii(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, []);

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

          {loading && <p className="info">Se încarcă...</p>}

          {error && (
            <p className="error">
              Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
            </p>
          )}

          {!loading && !error && (
            <InterventieList
              interventii={interventii}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}
        </section>
      </main>
    </>
  );
}