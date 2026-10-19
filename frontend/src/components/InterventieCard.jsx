
const ETICHETE_TIP = {
  mentenanta: "mentenanță",
  reparatie: "reparație",
  modificare: "modificare",
};

export default function InterventieCard({ task }) {
  return (
    <li className={task.gata ? "task-card done" : "task-card"}>
      <div>
        <h3>{task.titlu}</h3>

        <span className={`badge badge-${task.tip}`}>
          {ETICHETE_TIP[task.tip]}
        </span>
      </div>

      <span className="status">
        {task.gata ? "Gata" : "Activ"}
      </span>
    </li>
  );
}
