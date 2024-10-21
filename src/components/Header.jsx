import Navigation from "./Navigation"
import Social from "./Social"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"

import pdf from "../assets/files/RaymundHermoso.pdf"

const Header = () => {

    return (
        <div className="w-6/12 sticky top-0 pt-60 max-h-screen">

            <h3 className="font-sans text-sky-500 text-xl font-bold mb-3">Hi, I am</h3>

            <h1 className="font-sans text-sky-500 text-6xl font-bold">Raymund Hermoso</h1>

            <h2 className="font-sans font-bold text-zinc-900 text-4xl mt-3 dark:text-white">Web Developer</h2>

            <Navigation />

            <a 
                href={pdf} 
                target="_blank"
                className="font-sans text-sky-500 p-3 border-x border-y border-sky-500 hover:text-white hover:border-sky-500 hover:bg-sky-500 transition duration-150 ease-in-out"
            >
                Download CV <FontAwesomeIcon icon={faDownload} />
            </a>

            <Social />
        </div>
    )
}

export default Header