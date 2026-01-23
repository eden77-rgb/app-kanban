import { useEffect, useState } from "react"
import { Route } from "../routes/task.$taskId"

export default function Task() {
    const { taskId } = Route.useParams()
    const [task, setTasks] = useState([])

    useEffect(() => {
        async function fetchData() {

            const res = await fetch(`http://localhost:3000/api/tasks/${taskId}`);
            const task = await res.json();

            setTasks(task.task)
        }
        fetchData()
    }, [taskId])

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <p>{task.state}</p>
            <p>{task.assigne}</p>
        </div>
    )
}