

function ListItem({ task, index, deleteTask, completeTask }) {
  const handleDelete = () => {
    deleteTask(index);
  };

  const handleComplete = () => {
    completeTask(index);
  };

  return (
    <li className={`list-group-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.title}</span>
      <div className="btn-group">
        <button className="btn btn-sm btn-success" onClick={handleComplete}>
          Complete
        </button>
        <button className="btn btn-sm btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default ListItem;

