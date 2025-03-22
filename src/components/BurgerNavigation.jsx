import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// import { useState } from "react"

const BurgerNavigation = () => {
  // const [openMobileDrawer, setOpenMobileDrawer] = useState(false)

  const toggleMobileDraweHandler = () => {
    // setOpenMobileDrawer(true)
    document.getElementById("mobile-drawer").classList.toggle("block");
  };

  return (
    <div className="hidden md:hidden justify-end dark:text-white">
      <button onClick={() => toggleMobileDraweHandler()}>
        <FontAwesomeIcon icon={faBars} className="" />
      </button>
    </div>
  );
};

export default BurgerNavigation;
