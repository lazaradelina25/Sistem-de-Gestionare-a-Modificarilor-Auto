import { useState } from "react";

const CATEGORII = [
  { value: "mentenanta", label: "Mentenanță" },
  { value: "reparatie", label: "Reparație" },
  { value: "tuning", label: "Tuning / Modificare" },
];

const TITLU_MAX = 100;

export default function InterventieForm({ onAdd }) {
  const [titlu, setTitlu] = useState("");
  const [categorie, setCategorie] = useState("mentenanta");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const t = titlu.trim();
    if (t === "") return "Titlul intervenției este obligatoriu.";
    if (t.length > TITLU_MAX) return `Titlul are maximum ${TITLU_MAX} de caractere.`;
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    setEroare("");
    setTrimite(true);

    try {
      await onAdd({ titlu: titlu.trim(), categorie, gata: false });
      setTitlu("");
      setCategorie("mentenanta");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate data-testid="form">
      <label>
        Titlu intervenție
        <input
          type="text"
          value={titlu}
          onChange={(e) => setTitlu(e.target.value)}
          placeholder="Ex: Schimb ulei și filtru"
          maxLength={TITLU_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>

      <label>
        Categorie
        <select
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
          data-testid="form-categorie"
        >
          {CATEGORII.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </label>

      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}

      <button type="submit" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă intervenție"}
      </button>
    </form>
  );
}