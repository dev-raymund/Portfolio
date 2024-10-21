const Skill = ({ data }) => {
    return (
        <ul className="flex flex-wrap gap-3">
            {data.map((item, index) =>
                <li key={index}>
                    <a href="#">
                        <img 
                            src={item.icon} 
                            alt={item.title} 
                            className="w-20 h-20 p-3 bg-white rounded-lg shadow-custom-1 shadow-zinc-400 transition duration-150 ease-in-out hover:scale-105" 
                        />
                    </a>
                </li>
            )}
        </ul>
    )
}

export default Skill