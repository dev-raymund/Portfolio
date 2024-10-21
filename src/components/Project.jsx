import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Project = ({ data }) => {
    return (
        <>
            {data.map((item, index) => 

                <div key={index} className="py-10">

                    <h3 className="px-8 text-xl font-sans font-bold uppercase text-sky-500 mb-5">{item.category}</h3>

                    {item.project_list.length > 0 ? (

                        item.project_list.map((project, index) => (

                            <div 
                                key={index} 
                                className="flex rounded-lg p-8 hover:shadow-custom-1 hover:shadow-zinc-400 transition duration-150 ease-in-out hover:scale-105"
                            >
                                <div className="w-1/4 mr-5">
                                    <img 
                                        src={project.featured_image} 
                                        alt={project.title} 
                                        className="border border-sky-500 p-2 rounded-md" 
                                    />
                                </div>
                                <div className="w-3/4">
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        className="flex items-center gap-3 mb-3 group"
                                    >
                                        <h4 className="text-xl text-sky-500 font-bold group-hover:underline">
                                            {project.title}
                                        </h4>
                                        <FontAwesomeIcon 
                                            className="text-sky-500 text-lg group-hover:scale-110" 
                                            icon={faArrowUpRightFromSquare} 
                                        />
                                    </a>

                                    <p className="text-lg dark:text-white">
                                        {project.description}
                                    </p>

                                </div>
                            </div>
                        ))

                    ) : (
                        <div className="px-8">
                            <p className="text-lg dark:text-white">Projects to be added soon.</p>
                        </div>
                    )}
                </div>
                )}
        </>
    )
}

export default Project