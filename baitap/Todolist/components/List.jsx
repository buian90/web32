
import ListItem from './ListItem';

const List = ({ tasks, deleteTask, completeTask }) => {
  return (
    <table className="table">
    <thead>
      <tr>
        <th>Công Việc</th>
      </tr>
    </thead>
    <tbody>

      {tasks.map((task, index) => (
        <ListItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
          completeTask={completeTask}
        />
      ))}
    </tbody>
    </table>
  );
}

export default List;

