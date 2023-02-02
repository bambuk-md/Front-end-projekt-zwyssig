import React, { useEffect, useState } from "react";

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const Taskers = () => {
    const [task, setTask] = useState<Task>({
        id: Date.now(),
        title: "",
        completed: false,
    });
    const [error, setError] = useState<Error | null>(null);

    const updateTask = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask({ ...task, title: event.target.value });
    };

    const addTask = () => {
        fetch("http://127.0.0.1:3000/tasks", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify(task),
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