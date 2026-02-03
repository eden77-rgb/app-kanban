import { useEffect, useRef, useState, useMemo } from "react"
import { useNavigate } from "@tanstack/react-router"

import imgBlackWidow from "../assets/black-widow/black-widow-char.7fe18d73.jpg"
import imgBlackWidowEye from "../assets/black-widow/black-widow-eye.7ca65830.png"
import imgCaptainAmerica from "../assets/captain-america/captain-america-char.3e42c62f.png"
import imgSmoke from "../assets/captain-america/captain-america-smoke.4f495569.jpg"
import imgHydra from "../assets/captain-america/captain-america-glitch-1.27a8e85e.png"
import imgHydraRed from "../assets/captain-america/captain-america-glitch-2.435c9217.png"
import imgHydraBlue from "../assets/captain-america/captain-america-glitch-3.7ae1f7ee.png"
import imgCaptainMarvel from "../assets/captain-marvel/captain-marvel-char.c7a46c65.jpg"
import imgDeadpool from "../assets/deadpool/deadpool-char.2aea1ef9.gif"
import imgIronMan from "../assets/iron-man/iron-man-char.9c97fc02.jpg"
import imgIronManRain from "../assets/iron-man/iron-man-rain.477626af.gif"
import imgMjolnir from "../assets/mjolnir/mjolnir-char.a573d738.jpg"


export default function NotFound() {
    const navigate = useNavigate()
    const dynamicText = useRef(null)

    const [randomDisplay] = useState(() => Math.floor(Math.random() * 6))

    const content = useMemo(() => ({
        0: {
            text: "Not eventhe Eye of Uatu sees  your request...",
            static: <img src={imgBlackWidow} className="h-full object-contain" alt="Black Widow" />,
            gif: <img src={imgBlackWidowEye} className="eyeImg absolute left-262.5 top-91.25" alt="Black Widow Eye" />
        },

        1: {
            text: "HYDRA is currently attacking this page!",
            static: <img src={imgCaptainAmerica} className="h-full object-contain self-end opacity-70 ml-17.5" alt="Captain America" />,
            gif: (
                <>
                    <div className="absolute inset-0 flex w-[200%] animate-smoke-move z-0">
                        <img src={imgSmoke} className="w-1/2 h-full object-cover" alt="Smoke" />
                        <img src={imgSmoke} className="w-1/2 h-full object-cover" alt="Smoke" />
                    </div>

                    <img src={imgHydra} className="hydraImg absolute w-[28%] left-131.25 top-90 opacity-80 z-10 mask-[linear-gradient(45deg,transparent_0%,black_10%,black_90%,transparent_100%)]" alt="Hydra" />
                    <img src={imgHydraRed} className="hydraImgRed hidden absolute w-[28%] left-132 top-89.25 opacity-60 z-8" alt="Hydra Red" />
                    <img src={imgHydraBlue} className="hydraImgBlue hidden absolute w-[28%] left-130.5 top-90.75 opacity-60 z-9" alt="Hydra Blue" />
                </>
            )
        },

        2: {
            text: "HYDRA has stolen this page from the S.H.I.E.L.D. database!",
            static: <img src={imgCaptainMarvel} className="mainImgMarvel transition-transform duration-300 ease-in-out" alt="Captain Marvel" />,
            gif: null
        },

        3: {
            text: "$#&%, you broke something ! Just kidding... ",
            static: <img src={imgDeadpool} className="self-start" alt="Deadpool" />,
            gif: null
        },

        4: {
            text: "Protocol missing... Exiting program...",
            static: <img src={imgIronMan} className="self-end" alt="Iron Man" />,
            gif: <img src={imgIronManRain} className="w-full h-full object-cover z-2" alt="Rain gif" />
        },

        5: {
            text: "You are not worthy...",
            static: <img src={imgMjolnir} className="mainImgMjolnir" alt="Mjolnir" />,
            gif: null
        }
    }), [])

    useEffect(() => {
        // Mise à jour du texte
        if (dynamicText.current) {
            dynamicText.current.innerText = content[randomDisplay].text
        }

        // 1. Animation Black Widow (L'oeil qui suit la souris)
        if (randomDisplay == 0) {
            const handleMouseMove = (e) => {
                const eyeImg = document.querySelector(".eyeImg")
                if (!eyeImg) return

                const eyeRect = eyeImg.getBoundingClientRect()
                const eyeCenterX = eyeRect.left + eyeRect.width / 2
                const eyeCenterY = eyeRect.top + eyeRect.height / 2

                const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX)
                const degrees = angle * (180 / Math.PI)
                eyeImg.style.transform = `rotate(${degrees + 90}deg)`
            }

            document.addEventListener("mousemove", handleMouseMove)
            return () => document.removeEventListener("mousemove", handleMouseMove)
        }

        // 2. Animation Captain America (Glitch Hydra)
        if (randomDisplay === 1) {
            let displayImg = 1
            const interval = setInterval(() => {
                const hydraRed = document.querySelector(".hydraImgRed")
                const hydraBlue = document.querySelector(".hydraImgBlue")
                if (hydraRed && hydraBlue) {
                    hydraRed.style.display = (displayImg % 2 === 0) ? "block" : "none"
                    hydraBlue.style.display = (displayImg % 2 === 0) ? "none" : "block"
                    displayImg = displayImg === 2 ? 1 : 2
                }
            }, 100)
            return () => clearInterval(interval)
        }

        // 3. Animation Captain Marvel (Pulse/Scale)
        if (randomDisplay == 2) {
            const interval = setInterval(() => {
                const mainImgMarvel = document.querySelector(".mainImgMarvel")
                if (mainImgMarvel) {
                    mainImgMarvel.style.transition = "transform 0.3s"
                    mainImgMarvel.style.transform = "scale(1.04)"
                    setTimeout(() => mainImgMarvel.style.transform = "scale(1)", 300)
                    setTimeout(() => mainImgMarvel.style.transform = "scale(1.01)", 600)
                    setTimeout(() => mainImgMarvel.style.transform = "scale(1)", 900)
                }
            }, 3000)
            return () => clearInterval(interval)
        }

    }, [randomDisplay, content])

    return (
        <div className="relative w-full overflow-hidden bg-white">
            <div className="absolute w-full h-150 overflow-hidden pointer-events-none">
                {content[randomDisplay].gif}
            </div>

            <div className="flex w-full h-150 items-center justify-center gap-31.25 overflow-hidden font-['Roboto']">
                <div className="w-1/2 max-w-137.5 flex flex-col gap-6.25 text-[#202020] z-1">
                    <h1 className="font-['Roboto_Condensed'] text-[44px] font-bold leading-tight">
                        404 PAGE NOT FOUND
                    </h1>

                    <h4 className="dynamic-text text-[20px] font-bold whitespace-nowrap" ref={dynamicText}></h4>

                    <p className="text-[16px]">
                        Check that you typed the address correctly, go back to your previous <br />
                        page or try using our site search to find something specific.
                    </p>

                    <button
                        className="flex justify-center items-center gap-3.75 w-auto h-8.75 max-w-[30%] rounded-[10px] bg-[#E50914] text-white text-[15px] border-none transition-opacity hover:opacity-90"
                        onClick={() => { navigate({ to: "/kanban" }) }}
                    >
                        <span className="retour-logo">↩</span> Retour
                    </button>
                </div>

                <div className="flex h-full items-center">
                    <div className="static h-full flex items-center">
                        {content[randomDisplay].static}
                    </div>
                </div>
            </div>
        </div>
    )
}
