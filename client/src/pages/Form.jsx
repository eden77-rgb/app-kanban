import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"

export default function Form() {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("TODO")
    const [assignedTo, setAssignedTo] = useState("")

    async function postTask(task) {
        const response = await fetch("http://localhost:3000/api/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const task = {
            title: title,
            description: description,
            state: status.toLowerCase(),
            assigne: assignedTo
        }
        postTask(task)

        setTitle("");
        setDescription("");
        setStatus("TODO");
        setAssignedTo("");

        navigate({to: "/kanban"})
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-lg text-white">
            <h2 className="text-2xl font-semibold mb-6">Créer une tâche</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-1 font-medium" htmlFor="title">
                        Titre de la tâche
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Ex : Finir le formulaire"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Décris la tâche..."
                        rows={4}
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium" htmlFor="status">
                        État d'avancement
                    </label>
                    <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        <option value="TODO">TODO</option>
                        <option value="DOING">DOING</option>
                        <option value="DONE">DONE</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-1 font-medium" htmlFor="assignedTo">
                        Assigné à
                    </label>
                    <input
                        id="assignedTo"
                        type="text"
                        value={assignedTo}
                        onChange={(e) => setAssignedTo(e.target.value)}
                        className="w-full px-3 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Nom de la personne"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded transition-colors"
                >
                    Ajouter la tâche
                </button>
            </form>
        </div>
    )
}
