import { useEffect, useState } from "react";
import InterventieList from "./components/InterventieList.jsx";
import InterventieForm from "./components/InterventieForm.jsx";
import {
  createInterventie,
  deleteInterventie,
  fetchInterventii,
  updateInterventie,
} from "./api.js";

export default function App() {
  const [interventii, setInterventii] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  async function handleAdd(nouaInterventie) {
    const creat = await createInterventie(nouaInterventie);
    setInterventii((prev) => [...prev, creat]);
  }

  async function handleToggle(id) {
    const item = interventii.find((t) => t.id === id);
    try {
      const actualizat = await updateInterventie(id, { gata: !item.gata });
      setInterventii((prev) => prev.map((t) => (t.id === id ? actualizat : t)));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteInterventie(id);
      setInterventii((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  const active = interventii.filter((t) => !t.gata).length;

  return (
    <>
      <header className="app-header">
        <h1>Sistem de Gestionare a Modificărilor Auto</h1>
        <p className="app-count">
          {interventii.length} intervenții, dintre care {active} active
        </p>
      </header>
      <main className="container">
        <section className="panel">
          <h2>Adaugă intervenție</h2>
          <InterventieForm onAdd={handleAdd} />
        </section>
        <section className="panel">
          <h2>Intervențiile mele</h2>
          {loading && (
            <p className="info" data-testid="loading">
              Se încarcă...
            </p>
          )}
          {error && (
            <p className="error" data-testid="error">
              {error}
            </p>
          )}
          {!loading && (
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