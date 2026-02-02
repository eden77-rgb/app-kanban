import { useEffect, useState } from "react"
import { Route } from "../routes/_layout.task.$taskId"
import { useNavigate } from "@tanstack/react-router"
import trashImg from "../assets/trash.png"

export default function Task() {
    const navigate = useNavigate()
    const { taskId } = Route.useParams()
    const [task, setTask] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://localhost:3000/api/tasks/${taskId}`);
            const data = await res.json();
            setTask(data.task)
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
        patchTask(e)
    }

    async function patchTask(newState) {
        const response = await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ state: newState })
        })
        console.log(response)
    }

    async function deleteTask() {
        const response = await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
            method: "DELETE"
        })
        console.log(response)
    }

    const handleDeleteBtn = () => {
        deleteTask()
        navigate({ to: '/kanban' })
    }

    return (
        <div className="max-w-[600px] mx-auto mt-[50px] bg-[#2a2a2a] p-[40px] rounded-[16px] border border-[#3f3f3f] shadow-[0_10px_25px_rgba(0,0,0,0.5)] text-white font-sans">
            <h1 className="mt-0 text-[2rem] text-[#646cff] mb-[20px] border-b-2 border-[#3f3f3f] pb-[15px] font-bold">
                {task.title}
            </h1>
            <p className="text-[1.1rem] leading-[1.6] text-[#d1d1d1] bg-[#1a1a1a] p-[20px] rounded-[8px] mb-[25px]">
                {task.description}
            </p>
            
            <div className="flex justify-between items-end mt-[10px]">
                <div className="flex flex-wrap items-center">
                    <select 
                        onChange={(e) => handleChange(e.target.value)} 
                        className="py-[8px] px-[16px] bg-[#3f3f3f] border border-[#646cff] rounded-[20px] font-bold uppercase text-[0.85rem] tracking-[1px] mr-[15px] outline-none cursor-pointer" 
                        value={task.state} 
                        id="status"
                    >
                        <option value="todo">TODO</option>
                        <option value="doing">DOING</option>
                        <option value="done">DONE</option>
                    </select>
                    <p className="text-[#a1a1aa] italic text-[1rem] before:content-['Assigné_à_:_'] before:font-normal before:text-[#666] before:mr-[5px] before:not-italic">
                        {task.assigne}
                    </p>
                </div>

                <img 
                    src={trashImg}
                    className="w-8 h-8 cursor-pointer transition-transform hover:scale-110 object-contain"
                    onClick={handleDeleteBtn}
                    alt="trash" 
                />
            </div>
        </div>
    )
}