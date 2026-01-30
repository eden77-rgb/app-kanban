import { useNavigate } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import caenImg from "../assets/caen.jpg"
import bancImg from "../assets/banc.webp"

export default function Home() {
    const navigate = useNavigate()
    const [typing, setTyping] = useState("");
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Enter') {
                verify()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [typing])

    const handleChange = e => {
        setTyping(e.target.value)
    }

    const verify = () => {
        if (typing.toLowerCase() == "kanban") {
            navigate({ to: '/kanban' })
        } else {
            setIsVisible(true)
            setTyping("")
        }
    }

    const handleClick = () => {
        verify()
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center gap-4 bg-[#242424] text-white/87 font-sans">
            
            <h2 className="text-3xl mb-5">
                Résolvez le rébus pour accéder au projet !
            </h2>

            <div className="flex justify-center gap-5 flex-wrap mb-2.5">
                <img 
                    src={caenImg} 
                    alt="Caen" 
                    className="w-[150px] h-[150px] object-cover rounded-xl border-[3px] border-[#3f3f3f] shadow-lg"/>
                <img 
                    src={bancImg} 
                    alt="Banc" 
                    className="w-[150px] h-[150px] object-cover rounded-xl border-[3px] border-[#3f3f3f] shadow-lg"/>
            </div>

            <p className="w-full">
                <input 
                    className="px-4 py-2.5 text-lg rounded-lg border border-[#3f3f3f] bg-[#1a1a1a] text-white text-center outline-none focus:border-[#646cff] transition-colors"
                    type="text" 
                    name="typing" 
                    value={typing} 
                    onChange={handleChange}/>
            </p>

            <button 
                className="px-6 py-2.5 text-base font-semibold rounded-lg border border-transparent bg-[#1a1a1a] text-white cursor-pointer transition-colors duration-200 hover:border-[#646cff] hover:bg-[#2a2a2a]" 
                onClick={handleClick}>Vérifier</button>

            <p className="text-[#ff4d4d] font-bold min-h-[24px]">
                {isVisible && "Mauvaise réponse"}
            </p>
        </div>
    )
}