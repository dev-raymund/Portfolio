import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faSun } from "@fortawesome/free-regular-svg-icons"
import { faMoon } from "@fortawesome/free-regular-svg-icons"

import { useState } from "react"

const ToggleDarkMode = () => {

    const [dark, setDark] = useState(true)

    const darkModeHandler = () => {
        setDark(!dark)
        document.body.classList.toggle("dark")
    }

    return (
        <button onClick={() => darkModeHandler()} className="relative w-12 h-7 flex justify-between items-center gap-1 p-1 bg-slate-800 rounded-full">
            <FontAwesomeIcon 
                className="text-amber-500 text-md group-hover:scale-110 absolute left-1" 
                icon={faMoon} 
            />
            <span className={`${dark ? "left-1" : "right-1"} absolute z-10 bg-white w-5 h-5 rounded-full`}></span>
            <FontAwesomeIcon 
                className="text-amber-500 text-md group-hover:scale-110 absolute right-1" 
                icon={faSun} 
            />
        </button>
        
    )
}

export default ToggleDarkMode