import Tache from "./Tache"
export function Column({title})
{
    return (
        <div>
            <div>
                <h2>{title}</h2>
            </div>
        <div className="grid-container">
            <Tache></Tache>
            <Tache></Tache>
            <Tache></Tache>
            <Tache></Tache>
            <Tache></Tache>
            <Tache></Tache>
            <Tache></Tache>
        </div>
        </div>
    )
}