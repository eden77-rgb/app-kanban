import Tache from "./Tache"
import { useEffect } from "react"
import { useState } from "react";

export function Column({title})
{

    const [tasks, setTasks] = useState([])
 
    useEffect(() => {
        
        async function fetchData(){

            const res = await fetch("http://localhost:3000/api/tasks");
            const tasks = await res.json();

            setTasks(tasks.tasks)
        }
        fetchData()
    }, [])

    return (
        <div>
            <div>
                <h2>{title}</h2>
            </div>
        <div className="grid-container">
        {
        tasks.map((task) => (title.toLowerCase() == task.state && 
        <Tache key={task.id} task={task}></Tache>
        ))}

        </div>
        </div>
    )
}