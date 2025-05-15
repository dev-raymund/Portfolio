import { experiences, skills, projects } from "../constants/index";

import Skill from "./Skill";
import Experience from "./Experience";
import Project from "./Project";

import Hero from "./Hero";

const Body = () => {
  return (
    <>
      <Hero />

      <div id="skills" className="pt-10 xl:pt-20">
        <h3 className="font-sans text-sky-500 text-2xl font-bold mb-3 text-center lg:text-left">
          Skills
        </h3>
        <Skill data={skills} />
      </div>

      <div id="experiences" className="pt-10 xl:pt-20">
        <h3 className="font-sans text-sky-500 text-2xl font-bold mb-3 text-center lg:text-left">
          Experiences
        </h3>
        <Experience data={experiences} />
      </div>

      <div id="projects" className="pt-10 xl:pt-20">
        <h3 className="font-sans text-sky-500 text-2xl font-bold mb-3 text-center lg:text-left">
          Projects
        </h3>
        <Project data={projects} />
      </div>
    </>
  );
};

export default Body;
