import { Navigate, useNavigate } from '@tanstack/react-router'

export default function Home(){

    const navigate = useNavigate()

    return (
        <div>
            <h2>Bienvenue dans ce super quizz !</h2>
            <button onClick={() => {navigate({to: "/quiz"})}}>Commencer</button>
        </div>
    )
}

