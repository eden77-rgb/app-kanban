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
        <div className="task-detail-container">
            <h1 className="task-detail-title">{task.title}</h1>
            <p className="task-detail-desc">{task.description}</p>
            <p className="task-detail-status">{task.state}</p>
            <p className="task-detail-assignee">{task.assigne}</p>
        </div>
    )
}