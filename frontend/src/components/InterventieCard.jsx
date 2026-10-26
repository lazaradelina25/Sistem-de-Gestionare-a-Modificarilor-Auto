export default function InterventieCard({ interventie, onToggle, onDelete }) {
  return (
    <li className={interventie.gata ? "task-card done" : "task-card"}>
      <label className="task-main">
        <input
          type="checkbox"
          checked={interventie.gata}
          onChange={() => onToggle(interventie.id)}
        />
        <div>
          <h3>{interventie.titlu}</h3>
          <span className={`badge badge-${interventie.categorie}`}>
            {interventie.categorie}
          </span>
        </div>
      </label>
      <button
        className="btn-danger"
        onClick={() => onDelete(interventie.id)}
        aria-label={`Șterge ${interventie.titlu}`}
      >
        Șterge
      </button>
    </li>
  );
}