import { Navigate, useNavigate } from '@tanstack/react-router'

export default function Tache({task})
{
    const navigate = useNavigate()
    return (
        <div 
        className="bg-[#3a3a3a] p-4 rounded-[12px] shadow-[0_4px_6px_rgba(0,0,0,0.15)] cursor-pointer transition-all duration-200 ease-in-out border-l-[5px] border-[#646cff] break-words hover:-translate-y-1 hover:bg-[#454545] hover:shadow-[0_8px_12px_rgba(0,0,0,0.25)]"
        onClick={() => navigate({to:`/task/${task.id}`})}>
            <h3 
            className="m-0 mb-2 text-[1.1rem] font-semibold text-white"
            >{task.title}</h3>
            <h2
            className="m-0 mb-3 text-[0.85rem] text-[#a1a1aa] font-normal"
            >{task.date}</h2>
            <h3
            className="m-0 text-[0.8rem] inline-block bg-[#242424] px-2 py-1 rounded-[6px] text-[#b0b0b0]"
            >Assigné à {task.assigne}</h3>
        </div>
    )
}