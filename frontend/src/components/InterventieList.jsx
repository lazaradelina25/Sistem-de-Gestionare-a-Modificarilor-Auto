
import InterventieCard from "./InterventieCard.jsx";

export default function InterventieList({ taskuri }) {
  if (!taskuri || taskuri.length === 0) {
    return (
      <p className="empty">
        Nu există nicio intervenție.
      </p>
    );
  }

  return (
    <ul className="task-list">
      {taskuri.map((task) => (
        <InterventieCard key={task.id} task={task} />
      ))}
    </ul>
  );
}
