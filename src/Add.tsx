import React, { useEffect, useState } from "react";

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

    const addTask = () => {
        const jwtToken = sessionStorage.getItem("token");
        fetch("http://127.0.0.1:3000/auth/jwt/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`
          },
          body: JSON.stringify(task)
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to add task");
            }
          })
          .catch((error) => {
            setError(error);
          });
      };

    return (
        <div>
            <input
                type="text"
                placeholder="Add title"
                value={task.title}
                onChange={updateTask}
            />
            <button onClick={addTask}>Add Task</button>
            {error && <div>An error occurred: {error.message}</div>}
        </div>
    );
};

export default Taskers;