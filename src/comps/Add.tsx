
import React, {  useState } from "react";

interface Task {
    id: number;
    title: string;
    completed: boolean;
}


const Taskers = () => {
    const [task, setTask] = useState<Task>({
        id: 0,
        title: "",
        completed: false,
    });
    const [error, setError] = useState<Error | null>(null);

    const updateTask = (event: React.ChangeEvent<HTMLInputElement>) => { //inspiration von https://bobbyhadz.com/blog/typescript-react-onchange-event-type
        setTask({ ...task, title: event.target.value });
        
    };

    const addTask = async () => {
      try {
        const jwtToken = sessionStorage.getItem("token");
        const response = await fetch("http://127.0.0.1:3000/auth/jwt/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`
          },
          body: JSON.stringify(task)
        });
        if (!response.ok) {
          throw new Error("Failed to add task");
        }
        alert("Task created successfully!");
        
        
      } catch (error) {
        setError(error as Error | null);
      }
  };

    return (
        <div>
          <form>
            <input
                type="text"
                placeholder="Add title"
                value={task.title}
                onChange={updateTask}
            />

            <label> 
            <input type="button" onClick={addTask} value="Add Task"  ></input>
            </label>
            
            {error && <div>An error occurred: {error.message}</div>}
            </form>
        </div>
    );
};

export default Taskers;