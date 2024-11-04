import Social from "./Social"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"

import pdf from "../assets/files/RaymundHermoso.pdf"

import profile from '../assets/profile.png'

const Hero = () => {
    return (

        <div id="about" className="flex gap-5 pt-24 flex-col lg:flex-row">

            <div className="text-center lg:text-left lg:w-1/2 xl:hidden">

                <h3 className="font-sans text-sky-500 text-xl font-bold mb-3">Hi, I am</h3>

                <h1 className="font-sans text-sky-500 text-5xl xl:text-6xl font-bold">Raymund Hermoso</h1>

                <h2 className="font-sans font-bold text-zinc-900 text-3xl xl:text-4xl mt-3 mb-10 dark:text-white">Web Developer</h2>

                <a 
                    href={pdf} 
                    target="_blank"
                    className="font-sans text-sky-500 p-3 border-x border-y border-sky-500 hover:text-white hover:border-sky-500 hover:bg-sky-500 transition duration-150 ease-in-out"
                >
                    Download CV <FontAwesomeIcon icon={faDownload} />
                </a>

                <Social />
            </div>

            <div className="lg:w-1/2 xl:w-full">

                <div className="w-full flex justify-center">
                    <img src={profile} alt="Profile" className="w-3/4 lg:w-full xl:w-3/5" />
                </div>

                <div className="shadow-custom-1 shadow-zinc-400 p-7 rounded-2xl hidden xl:block">
                    
                    <p className="text-zinc-900 mb-3 text-lg dark:text-white">Hello! I build responsive, elegant and digital experiences for the web.</p>
                    <p className="text-zinc-900 mb-3 text-lg dark:text-white">I am a skilled Web Developer with a passion for creating visually appealing and user-friendly websites. I am proficient in front-end development and have experience building responsive and interactive web applications.</p>
                    <p className="text-zinc-900 mb-3 text-lg dark:text-white">Currently focus these days in a leading projects. I am constantly expanding my skill set and keeping up with the latest industry trends to ensure that I am always at the forefront of web development practices.</p>

                </div>

            </div>

        </div>
    )
}

export default Hero