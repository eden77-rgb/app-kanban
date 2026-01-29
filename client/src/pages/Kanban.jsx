import { useNavigate } from "@tanstack/react-router"
import { Column } from "../components/Column"

export default function Kanban() {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center">
            <div className="kanban-container">
                <Column title="TODO"></Column>
                <Column title="DOING"></Column>
                <Column title="DONE"></Column>
            </div>

            <button
                className="mt-6 w-full max-w-250 py-4 text-2xl font-bold text-white bg-[#2a2a2a] rounded-lg shadow-lg border border-[#454545] hover:bg-[#3b3b3b] transition-colors duration-200"
                onClick={() => {navigate({to: "/form"})}}        
            >
                +
            </button>
        </div>
    )
}