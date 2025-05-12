import { experiences, skills, projects } from "../constants/index";

import Skill from "./Skill";
import Experience from "./Experience";
import Project from "./Project";

import Hero from "./Hero";

const Body = () => {
  return (
    <>
      <Hero />

      <div id="skills" className="pt-24">
        <h3 className="font-sans text-sky-500 text-2xl font-bold mb-3 text-center lg:text-left">
          Skill
        </h3>
        <Skill data={skills} />
      </div>

      <div id="experience" className="pt-24">
        <h3 className="font-sans text-sky-500 text-2xl font-bold mb-3 text-center lg:text-left">
          Experience
        </h3>
        <Experience data={experiences} />
      </div>

      <div id="projects" className="pt-24">
        <h3 className="font-sans text-sky-500 text-2xl font-bold mb-3 text-center lg:text-left">
          Project
        </h3>
        <Project data={projects} />
      </div>
    </>
  );
};

export default Body;
