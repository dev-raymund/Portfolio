import { navigation } from "../constants"

import { useLocation } from "react-router-dom"

const Navigation = () => {

    const pathname = useLocation()

    return (
        <nav className="pt-12 pb-12">
            <ul className="flex flex-col gap-2.5">
                {navigation.map((item, index) => 
                    <li key={index}>
                        <a 
                            href={item.url} 
                            className={`${item.url === pathname.hash ? "font-bold text-sky-500 dark:text-sky-500" : ""} font-sans hover:text-sky-500 text-xl dark:text-white uppercase transition duration-150 ease-in-out`}
                        >
                            {item.title}
                        </a>
                    </li>
                
                )}
            </ul>
        </nav>
    )
}

export default Navigation