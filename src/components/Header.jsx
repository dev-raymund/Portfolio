import Navigation from "./Navigation"
import Social from "./Social"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"

import pdf from "../assets/files/RAYMUND HERMOSO - CV.pdf"

const Header = () => {

    return (
        <>
            <h3 className="font-sans text-sky-500 text-xl font-bold mb-3">Hi, I am</h3>

            <h1 className="font-sans text-sky-500 text-6xl font-bold">Raymund Hermoso</h1>

            <h2 className="font-sans font-bold text-zinc-900 text-4xl mt-3 dark:text-white">Web Developer</h2>

            <div className="pt-12 pb-12">
                <Navigation className="flex flex-col gap-2.5" />
            </div>
            
            <a 
                href={pdf} 
                target="_blank"
                className="font-sans text-sky-500 p-3 border-x border-y border-sky-500 hover:text-white hover:border-sky-500 hover:bg-sky-500 transition duration-150 ease-in-out"
            >
                Download CV <FontAwesomeIcon icon={faDownload} />
            </a>

            <Social />
        </>
    )
}

export default Header