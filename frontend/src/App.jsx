const interventii = [
  { id: 1, titlu: "Schimb ulei și filtre", gata: false, tip: "mentenanta", data: "2026-06-10", kilometraj: 15000, cost: 600 },
  { id: 2, titlu: "Înlocuire plăcuțe frână", gata: true, tip: "reparatie", data: "2026-05-12", kilometraj: 14800, cost: 450 },
  { id: 3, titlu: "Instalare suspensie sport", gata: false, tip: "modificare", data: "2026-06-20", kilometraj: 15100, cost: 2500 }
];

export default function App() {
  const active = interventii.filter((t) => !t.gata).length;

  return (
    <>
      <header className="app-header">
        <h1>GarageLog</h1>
        <p>Sistem de gestionare a modificărilor și serviciilor auto.</p>
        <p className="app-count">
          {interventii.length} intervenții, dintre care {active} active
        </p>
      </header>
      <main className="container">
        <section className="panel">
          <h2>Intervențiile mele</h2>
          <pre>{JSON.stringify(interventii, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}