import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
interface Task {
    id: number;
    title: string;
    completed: boolean;
  }


const addtask = () => {
    const [todo, setTodo] = useState({id:0, title: "", completed: false});
    const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/tasks", {
            method: "POST",
            
        })
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(error => setError(error));
  }, []);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }
    return(
        <button onClick={setTodo}></button>
    )
}
