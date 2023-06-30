
import List from '../components/List';
import Form from '../components/Form';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  // Thêm một công việc mới vào danh sách
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Xóa một công việc khỏi danh sách
  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  // Đánh dấu một công việc đã hoàn thành
  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  // Đếm số lượng công việc chưa hoàn thành
  const countIncompleteTasks = () => {
    return tasks.filter((task) => !task.completed).length;
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <Form addTask={addTask} />
      <List
        tasks={tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
      <div className="tasks-remaining">{countIncompleteTasks()} tasks remaining</div>
    </div>
  );
}

export default App;
