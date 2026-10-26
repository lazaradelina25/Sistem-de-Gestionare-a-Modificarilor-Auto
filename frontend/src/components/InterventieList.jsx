import InterventieCard from "./InterventieCard.jsx";

export default function InterventieList({ interventii, onToggle, onDelete }) {
  if (interventii.length === 0) {
    return <p className="empty">Nu există nicio intervenție.</p>;
  }

  return (
    <ul className="task-list">
      {interventii.map((item) => (
        <InterventieCard
          key={item.id}
          interventie={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}