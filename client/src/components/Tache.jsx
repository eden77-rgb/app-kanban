import { Navigate, useNavigate } from '@tanstack/react-router'

export default function Tache({task})
{
    console.log(task.assigne)
    const navigate = useNavigate()
    return (
        <div className="item-container" onClick={() => navigate({to:`/task/${task.id}`})}>
            <h3>{task.title}</h3>
            <h2>{task.date}</h2>
            <h3>Assigné à {task.assigne}</h3>
        </div>
    )
}