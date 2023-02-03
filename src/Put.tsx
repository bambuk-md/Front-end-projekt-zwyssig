import { useEffect, useState } from "react";
import { isPropertySignature } from "typescript";
import {Task} from "./AppDelete";
import React from "react";

export interface IProps {
    taskToEdit : Task
    taskEdited: (editedTask: Task) => void,
}

const emptyTask : Task = {"title" : "", "completed": false, "id": 0};

function EditTaskForm(props: IProps) {
    const [formData, setFormData] = useState<Task>(props.taskToEdit ?? emptyTask);
    
    useEffect(() => setFormData(props.taskToEdit), [props])
    
    function onInputChange(event : React.ChangeEvent<HTMLInputElement>) {
       //name: Name des Formularfelds
       //value: Wert       
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    function onFormSubmit(event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        props.taskEdited(formData);
    }

    return (
        <div className="editTaskForm">
            <ol>
            <form onSubmit={onFormSubmit}>
            <li>
            
            
                <input type="text" name="title" placeholder="press edit to change a task" value={formData.title} onChange={onInputChange} required/>
                <button>Save</button>
            
            </li>
            </form>
            </ol>
        </div>
    )
}
export default EditTaskForm;