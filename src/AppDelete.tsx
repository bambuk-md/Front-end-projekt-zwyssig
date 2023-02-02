import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from "react";
import Taskers from "./Add";
import EditTaskForm from "./Put";


export type Task  ={
  id: number;
  title: string;
  completed: boolean;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [editit, editTask] = useState<Task>({
    id: 0,
    title: "",
    completed: false,
});
  

  useEffect(() => {
    getit();
  }, []);
    
    
  
  const getit = () =>{
    fetch("http://127.0.0.1:3000/tasks", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(error => setError(error));

  }

  const handleDelete = (taskId: number) => {
    fetch(`http://127.0.0.1:3000/task/${taskId}`, {
      method: "DELETE"
    
    })
    
    .then(res => {
      getit();
  })
      .catch(error => setError(error));
      
      
  };

  const handleUpdate = (task: Task) => {
    fetch("http://127.0.0.1:3000/tasks", {
        method: "PUT",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(task),
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update task");
        }
      })
      .catch((error) => {
        setError(error);
      });
    
};
const tasktoedit = (task : Task) => {
    editTask(task);
}

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }


  return (
    <div>
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.title}
          
          <button onClick={() => handleDelete(task.id)}>delete Task</button>
          <button onClick={() => tasktoedit(task)}>Edit Task</button>
          
          
        </li>
      ))}
    </ul>
    <EditTaskForm taskToEdit={editit} taskEdited={handleUpdate} ></EditTaskForm>
    
    </div>
  );

};


export default Tasks;