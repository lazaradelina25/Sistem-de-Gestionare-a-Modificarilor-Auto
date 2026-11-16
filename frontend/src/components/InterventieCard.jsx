export default function InterventieCard({ interventie, onToggle, onDelete }) {
  return (
    <li
      className={interventie.gata ? "task-card done" : "task-card"}
      data-testid="item"
      data-id={interventie.id}
    >
      <label className="task-main">
        <input
          type="checkbox"
          checked={interventie.gata}
          onChange={() => onToggle(interventie.id)}
          data-testid="item-toggle"
        />
        <div>
          <h3 data-testid="item-title">{interventie.titlu}</h3>
          <span className={`badge badge-${interventie.categorie}`}>
            {interventie.categorie}
          </span>
        </div>
      </label>
      <button
        className="btn-danger"
        onClick={() => onDelete(interventie.id)}
        aria-label={`Șterge ${interventie.titlu}`}
        data-testid="item-delete"
      >
        Șterge
      </button>
    </li>
  );
}