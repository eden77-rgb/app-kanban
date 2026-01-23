import { Navigate, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import caenImg from "../assets/caen.jpg"
import bancImg from "../assets/banc.webp"

export default function Home(){

    const navigate = useNavigate()
            const [number, setNumber] = useState("");
            const [isVisible, setIsVisible] = useState(false)
            

            const handleChange = e =>{
                console.log(e.target.value)
                setNumber(e.target.value)
            }

            const handleClick = () =>{
                if (number.toLowerCase() == "kanban")
                {
                    navigate({to:'/kanban'})
                }
                else
                {
                    setIsVisible(true)
                }
            }

    return (
        <div className="home-container">
            <h2>Résolvez le rébus pour accéder au projet !</h2>
            <div className="rebus-container">
                <img src={caenImg} alt="" />
                <img src={bancImg} alt="" />
            </div>
                <p><input className="home-input" type="text" name="number" value={number} onChange={handleChange}/></p>
                <button className="home-button" onClick={handleClick}>Vérifier</button>
                <p className="error-msg">{isVisible == true && "Mauvaise réponse"}</p>
        </div>
    )
}