import React, { useState, useEffect } from "react";
import Tasks from "./App";

interface Props {
  taskid: number;
}
interface Task {
    id: number;
    title: string;
  }


const GetTask = (props: Props) => {
    const [tasks, setTasks] = useState<Task>({id: 0, title: ""});
    const [error, setError] = useState<Error | null>(null);
  
    useEffect(() => {
        fetch(`http://127.0.0.1:3000/task/${props.taskid}`, {
            method: "GET",
            headers: {"Content-Type": "application/json" },
        })
        .then(res=> res.json())
        .then(data => setTasks(data))
      .catch(error => setError(error));
    }, []);
    
  
    if (error) {
      return <div>An error occurred: {error.message}</div>;
    }
  
    return (
      <p>{tasks.title}</p>
    );
  };

export default GetTask;