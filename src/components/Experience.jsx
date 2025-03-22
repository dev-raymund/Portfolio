import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { skills } from "../constants";

const Experience = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex mb-10 rounded-lg p-4 md:hover:shadow-custom-1 md:hover:shadow-zinc-400 transition duration-150 ease-in-out md:hover:scale-105 flex-col xl:flex-row"
        >
          <div className="w-full xl:w-1/5 mr-5 mb-5">
            <h4 className="text-lg dark:text-white">{item.date}</h4>
          </div>
          <div className="w-full xl:w-4/5">
            <a
              href={item.link}
              target="_blank"
              className="flex items-center gap-3 mb-3 group"
            >
              <h4 className="text-xl text-sky-500 font-bold group-hover:underline">
                {item.company}
              </h4>
              <FontAwesomeIcon
                className="text-sky-500 text-lg group-hover:scale-110"
                icon={faArrowUpRightFromSquare}
              />
            </a>

            <h5 className="text-xl font-bold mb-3 dark:text-white">
              {item.position}
            </h5>

            <p className="text-lg dark:text-white">{item.description}</p>

            <ul className="flex flex-wrap gap-3 mt-10">
              {item.technologies.map((technology, index) => {
                const matchSkill = skills.find(
                  (skill) => skill.title === technology
                );

                return (
                  <li key={index} className="bg-white rounded-md p-2">
                    <a href="#">
                      <img
                        src={matchSkill.icon}
                        alt={matchSkill.title}
                        className="w-10 h-10 transition duration-150 ease-in-out hover:scale-105"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Experience;
