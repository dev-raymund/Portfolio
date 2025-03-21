import { navigation } from "../../constants";

import { useLocation } from "react-router-dom";

const Navigation = () => {
  const pathname = useLocation();

  return (
    <ul className="flex justify-between w-full">
      {navigation.map((item, index) => (
        <li key={index} className="text-white">
          <a
            href={item.url}
            className={`${
              item.url === pathname.hash ? "font-bold text-amber-500" : ""
            } hover:text-amber-500 text-lg`}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
