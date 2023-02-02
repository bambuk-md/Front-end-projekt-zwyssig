import React, { useState, useEffect } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/tasks", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(error => setError(error));
  }, []);

  const handleDelete = (taskId: number) => {
    fetch(`http://127.0.0.1:3000/task/${taskId}`, {
      method: "DELETE"
    })
      
      .catch(error => setError(error));
  };

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.title}
          <button onClick={() => handleDelete(task.id)}>delete Task</button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;