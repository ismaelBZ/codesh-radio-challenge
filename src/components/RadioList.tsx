import {useState} from 'react';
import searchIcon from './../assets/icons/search-icon.svg'
import playIcon from "./../assets/icons/play-circle-icon.svg";
import stopIcon from "./../assets/icons/pause-circle-icon.svg";
import deleteIcon from "./../assets/icons/delete-icon.svg"
import playFocus from "./../assets/icons/play-icon.svg"
import pauseFocus from "./../assets/icons/pause-icon.svg"

const RadioList = () => {
    const [isNotPlaying, setIsNotPlaying] = useState(false);

    return (
        <div>
            {/* Search Button */}
            <button className="my-[12px] float-right">
                <img src={searchIcon} alt="Search Radios" />
            </button>
            
            {/* Title */}
            <h1 className="py-[37px] font-semibold text-[1.75rem] text-center text-white">Radio Browser</h1>

            {/* Favorite Radios */}
            <p className="mt-2 text-white uppercase">Favorite Radios</p>

            {/* Radios */}
            <div className="relative mx-[4px]"> {/* compensate the blur */}
                
                {/* Background blur */}
                <div className="absolute -left-[2%] w-[104%] h-[104%] 
                        bg-radioList rounded-lg shadow-wrapper blur-[1px]
                    "
                ></div>

                {/* Current Radio */}
                <div className="relative py-1 z-10">
                    <div className="py-[15px] px-[6px] flex justify-between items-center">
                        <div className="flex gap-[10px] items-center">
                            {/* Play Pause */}
                            <button className="px-[12px] py-[9px]">
                                <img src={isNotPlaying ? playFocus : pauseFocus} alt={isNotPlaying ? "Play" : "Stop"} />
                            </button>
                        
                            {/* Radio Info */}
                            <div>
                                <h2 className="font-semibold text-2xl">Radio Name</h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Radios List */}
                <ul className="flex flex-col gap-[18px]">

                    <li className="-mx-[6px] py-[15px] px-[12px] 
                            relative"
                    >
                        {/* Background blur */}
                        <div className="absolute -top-[1%] -left-[1%] w-[102%] h-[101%] 
                                bg-radio rounded-sm blur-[1px]
                            "
                        ></div>
                        
                        <div className="relative z-10 flex justify-between items-center">
                            {/* Button & Info */}
                            <div className="flex gap-[10px] items-center">
                                {/* Play Pause */}
                                <button>
                                    <img src={isNotPlaying ? playIcon : stopIcon} alt={isNotPlaying ? "Play" : "Stop"} />
                                </button>

                                {/* Radio Info */}
                                <div>
                                    <h2 className="font-semibold text-2xl">Radio Name</h2>
                                </div>
                            </div>

                            {/* Edit & Delete Radio */}
                            <div>
                                <button className="mr-1">
                                    <img src={deleteIcon} alt="Delete radio" />
                                </button>
                            </div>
                        </div>
                    </li>

                    <li className="-mx-[6px] py-[15px] px-[12px] 
                            relative"
                    >
                        {/* Background blur */}
                        <div className="absolute -top-[1%] -left-[1%] w-[102%] h-[101%] 
                                bg-radio rounded-sm blur-[1px]
                            "
                        ></div>
                        
                        <div className="relative z-10 flex justify-between items-center">
                            {/* Button & Info */}
                            <div className="flex gap-[10px] items-center">
                                {/* Play Pause */}
                                <button>
                                    <img src={isNotPlaying ? playIcon : stopIcon} alt={isNotPlaying ? "Play" : "Stop"} />
                                </button>

                                {/* Radio Info */}
                                <div>
                                    <h2 className="font-semibold text-2xl">Radio Name</h2>
                                </div>
                            </div>

                            {/* Edit & Delete Radio */}
                            <div>
                                <button className="mr-1">
                                    <img src={deleteIcon} alt="Delete radio" />
                                </button>
                            </div>
                        </div>
                    </li>

                    <li className="-mx-[6px] py-[15px] px-[12px] 
                            relative"
                    >
                        {/* Background blur */}
                        <div className="absolute -top-[1%] -left-[1%] w-[102%] h-[101%] 
                                bg-radio rounded-sm blur-[1px]
                            "
                        ></div>
                        
                        <div className="relative z-10 flex justify-between items-center">
                            {/* Button & Info */}
                            <div className="flex gap-[10px] items-center">
                                {/* Play Pause */}
                                <button>
                                    <img src={isNotPlaying ? playIcon : stopIcon} alt={isNotPlaying ? "Play" : "Stop"} />
                                </button>

                                {/* Radio Info */}
                                <div>
                                    <h2 className="font-semibold text-2xl">Radio Name</h2>
                                </div>
                            </div>

                            {/* Edit & Delete Radio */}
                            <div>
                                <button className="mr-1">
                                    <img src={deleteIcon} alt="Delete radio" />
                                </button>
                            </div>
                        </div>
                    </li>

                    <li className="-mx-[6px] py-[15px] px-[12px] 
                            relative"
                    >
                        {/* Background blur */}
                        <div className="absolute -top-[1%] -left-[1%] w-[102%] h-[101%] 
                                bg-radio rounded-sm blur-[1px]
                            "
                        ></div>
                        
                        <div className="relative z-10 flex justify-between items-center">
                            {/* Button & Info */}
                            <div className="flex gap-[10px] items-center">
                                {/* Play Pause */}
                                <button>
                                    <img src={isNotPlaying ? playIcon : stopIcon} alt={isNotPlaying ? "Play" : "Stop"} />
                                </button>

                                {/* Radio Info */}
                                <div>
                                    <h2 className="font-semibold text-2xl">Radio Name</h2>
                                </div>
                            </div>

                            {/* Edit & Delete Radio */}
                            <div>
                                <button className="mr-1">
                                    <img src={deleteIcon} alt="Delete radio" />
                                </button>
                            </div>
                        </div>
                    </li>

                    <li className="-mx-[6px] py-[15px] px-[12px] 
                            relative"
                    >
                        {/* Background blur */}
                        <div className="absolute -top-[1%] -left-[1%] w-[102%] h-[101%] 
                                bg-radio rounded-sm blur-[1px]
                            "
                        ></div>
                        
                        <div className="relative z-10 flex justify-between items-center">
                            {/* Button & Info */}
                            <div className="flex gap-[10px] items-center">
                                {/* Play Pause */}
                                <button>
                                    <img src={isNotPlaying ? playIcon : stopIcon} alt={isNotPlaying ? "Play" : "Stop"} />
                                </button>

                                {/* Radio Info */}
                                <div>
                                    <h2 className="font-semibold text-2xl">Radio Name</h2>
                                </div>
                            </div>

                            {/* Edit & Delete Radio */}
                            <div>
                                <button className="mr-1">
                                    <img src={deleteIcon} alt="Delete radio" />
                                </button>
                            </div>
                        </div>
                    </li>

                    <li className="-mx-[6px] py-[15px] px-[12px] 
                            relative"
                    >
                        {/* Background blur */}
                        <div className="absolute -top-[1%] -left-[1%] w-[102%] h-[101%] 
                                bg-radio rounded-sm blur-[1px]
                            "
                        ></div>
                        
                        <div className="relative z-10 flex justify-between items-center">
                            {/* Button & Info */}
                            <div className="flex gap-[10px] items-center">
                                {/* Play Pause */}
                                <button>
                                    <img src={isNotPlaying ? playIcon : stopIcon} alt={isNotPlaying ? "Play" : "Stop"} />
                                </button>

                                {/* Radio Info */}
                                <div>
                                    <h2 className="font-semibold text-2xl">Radio Name</h2>
                                </div>
                            </div>

                            {/* Edit & Delete Radio */}
                            <div>
                                <button className="mr-1">
                                    <img src={deleteIcon} alt="Delete radio" />
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RadioList;
