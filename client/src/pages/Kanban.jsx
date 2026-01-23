import { Column } from "../components/Column"

export default function Kanban(){
    return (
        <div className="kanban-container">
            <Column title="TODO"></Column>
            <Column title="DOING"></Column>
            <Column title="DONE"></Column>
        </div>
    )
}