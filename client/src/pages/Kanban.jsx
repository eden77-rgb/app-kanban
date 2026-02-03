import { useNavigate } from "@tanstack/react-router"
import { Column } from "../components/Column"

export default function Kanban() {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row gap-[30px] p-[20px] justify-center flex-wrap [&>div]:flex-1 [&>div]:min-w-[280px] [&>div]:max-w-[350px] [&>div]:bg-[#2a2a2a] [&>div]:border [&>div]:border-[#3f3f3f] [&>div]:rounded-[16px] [&>div]:p-[20px] [&>div]:shadow-[0_4px_12px_rgba(0,0,0,0.2)] [&>div]:flex [&>div]:flex-col [&>div]:items-stretch [&>div:nth-child(1)]:border-t-4 [&>div:nth-child(1)]:border-t-[#ff4d4d] [&>div:nth-child(2)]:border-t-4 [&>div:nth-child(2)]:border-t-[#ffab00] [&>div:nth-child(3)]:border-t-4 [&>div:nth-child(3)]:border-t-[#00c853]">
                <Column title="TODO"></Column>
                <Column title="DOING"></Column>
                <Column title="DONE"></Column>
            </div>

            <button
                className="mt-6 w-full max-w-[250px] py-4 text-2xl font-bold text-white bg-[#2a2a2a] rounded-lg shadow-lg border border-[#454545] hover:bg-[#3b3b3b] transition-colors duration-200 cursor-pointer"
                onClick={() => { navigate({ to: "/form" }) }}
            >
                +
            </button>
        </div>
    )
}