import { useState } from "react";

const Form = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleChange = (event) => {
    setTaskTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskTitle.trim() !== '') {
      const newTask = {
        title: taskTitle,
        completed: false,
      };
      addTask(newTask);
      setTaskTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task"
          value={taskTitle}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Add Task
        </button>
      </div>
    </form>
  );
}

export default Form;
