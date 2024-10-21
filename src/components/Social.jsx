import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { social } from '../constants'

const Social = () => {

    return (
        <nav className="pt-12 pb-12">
            <ul className="flex gap-10">
                {social.map((item, index) => 
                    <li key={index}>
                        <a href={item.link} target={item.target}>
                            <FontAwesomeIcon 
                                className="text-sky-500 text-3xl transition duration-150 ease-in-out hover:scale-105" 
                                icon={item.icon} 
                            />
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Social