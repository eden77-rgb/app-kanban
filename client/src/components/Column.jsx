import Tache from "./Tache"
import { useEffect } from "react"
import { useState } from "react";

export function Column({ title }) {

    const [tasks, setTasks] = useState([])
    const [response, setResponse] = useState(false)

    useEffect(() => {

        async function fetchData() {

            const res = await fetch("http://localhost:3000/api/tasks");
            const data = await res.json();
            setResponse(res.ok)

            setTasks(data.tasks)
        }
        fetchData()
    }, [])
    console.log(response)

    if(!response){
      return <div>
                <div>
                    <h2 className="mb-3 font-bold ">{title}</h2>
                </div>
                <div>Chargement...</div>
            </div>
    }

    return (
        <div>
            <div>
                <h2 className="mb-3 font-bold ">{title}</h2>
            </div>
            <div className="flex flex-col gap-[15px] max-h-[70vh] overflow-y-auto pr-[5px]">
                {
                    tasks.map((task) => (title.toLowerCase() == task.state &&
                        <Tache key={task.id} task={task}></Tache>
                    ))
                }
            </div>
        </div>
    )
}