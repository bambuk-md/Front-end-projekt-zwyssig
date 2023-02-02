

import './App.css';

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
            headers: {"Content-Type": "application/json" }
            
        })
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(error => setError(error));
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
};

export default Tasks;


