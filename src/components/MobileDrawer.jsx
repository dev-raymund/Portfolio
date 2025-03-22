import { navigation } from "../constants";

import { useLocation } from "react-router-dom";

const MobileDrawer = () => {
  const pathname = useLocation();
  return (
    <div
      id="mobile-drawer"
      className="hidden absolute z-20 h-screen bg-white p-10"
    >
      <ul>
        {navigation.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              className={`${
                item.url === pathname.hash
                  ? "font-bold text-sky-500 dark:text-sky-500"
                  : ""
              } font-sans hover:text-sky-500 text-xl dark:text-white uppercase transition duration-150 ease-in-out`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MobileDrawer;
