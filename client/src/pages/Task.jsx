import { useEffect, useState } from "react"
import { Route } from "../routes/task.$taskId"

export default function Task() {
    const { taskId } = Route.useParams()
    const [task, setTask] = useState([])
    const [newStatus, setNewStatus] = useState("")

    useEffect(() => {
        async function fetchData() {

            const res = await fetch(`http://localhost:3000/api/tasks/${taskId}`);
            const task = await res.json();
            setTask(task.task)
        }
        fetchData()
    }, [taskId])

    const handleChange = (e) => {
        console.log(e.toUpperCase())
            const newTask = {
            title: task.title,
            description: task.description,
            state: e,
            assigne: task.assigne
        }
        setTask(newTask)
        putTask(newTask)
    }

    async function putTask(newTask) {
        const response = await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask)
        })
        console.log(response)
    }

    return (
        <div className="task-detail-container">
            <h1 className="task-detail-title">{task.title}</h1>
            <p className="task-detail-desc">{task.description}</p>
            <select onChange={(e) => handleChange(e.target.value)}className="task-detail-status" value={task.state} id="status">
                <option value="todo">TODO</option>
                <option value="doing">DOING</option>
                <option value="done">DONE</option>
            </select>
            <p className="task-detail-assignee">{task.assigne}</p>
        </div>
    )
}