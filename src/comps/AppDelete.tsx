import React, { useState, useEffect } from "react";
import EditTaskForm from "./Put";
import axios from "axios";
import './App.css';
import { useNavigate } from "react-router-dom";



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
}, );
  
const jwtToken = sessionStorage.getItem("token");
const nav = useNavigate(); //hier und auch bei anderen Stellen https://bobbyhadz.com/blog/react-onclick-redirect

const getit = async () => {
  try {
    
    const response = await axios.get("http://127.0.0.1:3000/auth/jwt/tasks", {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    }); 
    setTasks(response.data);
  } catch (error) {
    
    setError(error as Error | null);
    nav('/');

    
  }
};

const handleDelete = async (taskId: number) => {
  try {
    
    await axios.delete(`http://127.0.0.1:3000/auth/jwt/task/${taskId}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    });

    getit();

    if (error === null) {
      alert('The delete was successful');
    }
  } catch (error) {
    setError(error as Error | null);
  }
};

const handleUpdate = async (task: Task) => {
  try {
    
    await axios.put("http://127.0.0.1:3000/auth/jwt/tasks", task, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      }
    });
    alert("Task updated successfully!");
    getit();
  } catch (error) {
    setError(error as Error | null);
    
  }
};
const tasktoedit = (task : Task) => {
    editTask(task);
}

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }


  return (
    <div className="allsame">
    <ul>
      {tasks.map(task => (
        
        <li key={task.id}>

          {task.title} <br></br>


          completed: { JSON.stringify(task.completed)}

        
                   
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