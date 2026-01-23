import { useEffect } from "react"
import { useState } from "react";

export default function Tache({task})
{

    return (
        <div className="item-container" onClick={() => console.log("hi")}>
            <h3>{task.title}</h3>
            <h2>{task.date}</h2>
            <h3>Assigé à {task.assigne}</h3>
        </div>
    )
}


