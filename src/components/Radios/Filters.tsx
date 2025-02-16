{/* Icons */}
import CheckIcon from "./../../assets/icons/favorite-icon.svg"

const Filters = ({filter, setFilter} : {filter: "name" | "country" | "language", setFilter: React.Dispatch<React.SetStateAction<"name" | "country" | "language">>}) => {
    return (
        <div className="relative w-[300px]">
            <div className="absolute w-full h-full blur-[2px] shadow-wrapper bg-[#1E1E21]"></div>
            <div className="relative z-10 p-[20px]">
                <p className="text-2xl text-white">Filters</p>
                <div className="relative">
                    <div className="absolute w-full h-full bg-radioList blur-[2px] shadow-wrapper"></div>    
                    <ul className="p-[20px] py-[20px] flex flex-col gap-[10px]">
                        <li className="relative text-left place-self-start ">
                            <div className="absolute w-full h-full bg-radio blur-[2px] shadow-wrapper"></div>
                            <button onClick={() => setFilter("name")}
                                className="relative w-[180px] py-[8px] px-[10px] z-10
                                    font-bold text-lg text-left text-white rounded-sm
                                "
                            >
                                Name
                                {filter === "name" && <img className="float-right" src={CheckIcon} alt="Active filter." />}
                            </button>
                        </li>
                        <li className="relative text-left place-self-start">
                            <div className="absolute w-full h-full bg-radio blur-[2px] shadow-wrapper"></div>
                            <button onClick={() => setFilter("country")}
                                className="relative z-10 w-[180px] py-[8px] px-[10px] 
                                    font-bold text-lg text-left text-white rounded-sm
                                "
                            >
                                Country
                                {filter === "country" && <img className="float-right" src={CheckIcon} alt="Active filter." />}
                            </button>
                        </li>
                        <li className="relative text-left place-self-start">
                            <div className="absolute w-full h-full bg-radio blur-[2px] shadow-wrapper"></div>
                            <button onClick={() => setFilter("language")} 
                                className="relative z-10 w-[180px] py-[8px] px-[10px] 
                                    font-bold text-lg text-left text-white rounded-sm
                                "
                            >
                                Language
                                {filter === "language" && <img className="float-right" src={CheckIcon} alt="Active filter" />}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export { Filters }