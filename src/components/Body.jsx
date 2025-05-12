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
        <Skill data={skills} />
      </div>

      <div id="experience" className="pt-24">
        <Experience data={experiences} />
      </div>

      <div id="projects" className="pt-24">
        <Project data={projects} />
      </div>
    </>
  );
};

export default Body;
