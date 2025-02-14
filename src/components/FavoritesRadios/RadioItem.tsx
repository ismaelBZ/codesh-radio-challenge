import { useState } from "react";
import playIcon from "./../../assets/icons/play-circle-icon.svg";
import stopIcon from "./../../assets/icons/pause-circle-icon.svg";
import deleteIcon from "./../../assets/icons/delete-icon.svg";
import editIcon from "./../../assets/icons/edit-icon.svg";
import { Station } from "../../@types/Station";

const RadioItem = ({
        name, 
        stationuuid, 
        url_resolved, 
        country,
        tags,
        setCurrentStation
    } : {
        name: string, 
        stationuuid: 
        string, 
        url_resolved: string, 
        country: string,
        tags?: string
        setCurrentStation: React.Dispatch<React.SetStateAction<Station | null>>
    }) => {
    const [isNotPlaying, setIsNotPlaying] = useState(false)

    const handleStation = () => {
        setCurrentStation({
            stationuuid,
            name,
            url_resolved,
            country,
            tags
        })
    }
    
    return (
        <div className="-mx-[6px] py-[15px] px-[12px] relative">
            {/* Background blur */}
            <div className="absolute top-[0] left-0 w-[100%] h-[100%] 
                bg-radio rounded-sm blur-[1px]
            "
            ></div>

            <div className="relative z-10 flex justify-between items-center">
                {/* Button & Info */}
                <div className="flex gap-[10px] items-center">
                    {/* Play Pause */}
                    <button onClick={handleStation}>
                        <img src={isNotPlaying ? playIcon : stopIcon} alt={isNotPlaying ? "Play" : "Stop"} />
                    </button>

                    <audio src={url_resolved} />

                    {/* Radio Info */}
                    <div>
                        <h2 className="font-semibold text-2xl">{name}</h2>
                        <p className="hidden capitalize lg:block">{country}</p>
                    </div>
                </div>

                {/* Edit & Delete Radio */}
                <div>
                    <button className="hidden lg:inline-block lg:mr-[26px]">
                        <img src={editIcon} alt="Edit radio"/>
                    </button>
                    <button className="mr-1">
                        <img src={deleteIcon} alt="Delete radio"/>
                    </button>
                </div>
            </div>
        </div>
    )
}
export {RadioItem}