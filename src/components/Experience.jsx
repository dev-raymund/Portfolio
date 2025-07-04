import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { skills } from "../constants";

const Experience = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex mb-10 rounded-lg p-5 shadow-custom-1 shadow-zinc-400 transition duration-150 ease-in-out flex-col"
        >
          <div className="w-full">
            <a
              href={item.link}
              target="_blank"
              className="flex items-center gap-2 mb-1 group"
            >
              <h4 className="text-xl text-sky-500 font-bold group-hover:underline">
                {item.company}
              </h4>
              <FontAwesomeIcon
                className="text-sky-500 text-lg group-hover:scale-110"
                icon={faArrowUpRightFromSquare}
              />
            </a>

            <h5 className="text-xl font-bold mb-1 dark:text-white">
              {item.position}
            </h5>

            <h4 className="text-lg mb-2 dark:text-white">{item.date}</h4>

            <p className="text-lg dark:text-white">{item.description}</p>

            <ul className="flex flex-wrap gap-3 mt-5">
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
