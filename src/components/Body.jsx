import { experiences, skills, projects } from '../constants/index'

import Skill from './Skill'
import Experience from './Experience'
import Project from './Project'

import Hero from './Hero'

const Body = () => {

    return (
        <>
            
            <Hero />
            
            <div className="shadow-custom-1 shadow-zinc-400 p-7 rounded-2xl block xl:hidden">
                    
                <p className="text-zinc-900 mb-3 text-lg dark:text-white">Hello! I build responsive, elegant and digital experiences for the web.</p>
                <p className="text-zinc-900 mb-3 text-lg dark:text-white">I am a skilled Web Developer with a passion for creating visually appealing and user-friendly websites. I am proficient in front-end development and have experience building responsive and interactive web applications.</p>
                <p className="text-zinc-900 mb-3 text-lg dark:text-white">Currently focus these days in a leading projects. I am constantly expanding my skill set and keeping up with the latest industry trends to ensure that I am always at the forefront of web development practices.</p>

            </div>

            <div id="skills" className="pt-24">
                <Skill data={skills} />
            </div>

            <div id="experience" className="pt-24">
                <Experience data={experiences} />
            </div>

            <div id="projects" className="pt-24">
                <Project data={projects} />
            </div>

        </>
    )
}

export default Body