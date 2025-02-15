import { ChangeEvent, useState } from "react";
import playIcon from "./../../assets/icons/play-circle-icon.svg";
import stopIcon from "./../../assets/icons/pause-circle-icon.svg";
import deleteIcon from "./../../assets/icons/delete-icon.svg";
import editIcon from "./../../assets/icons/edit-icon.svg";
import { RadioItemT } from "../../@types/RadioItem";
import { Station } from "../../@types/Station";

const RadioItem = ( { name, stationuuid, url_resolved, country, tags, favoritesRadios, setCurrentStation, setFavoritesRadios } : RadioItemT) => {
    const [isNotPlaying, setIsNotPlaying] = useState(false);
    const [isEditingRadio, setIsEditingRadio] = useState(false);
    const [radioName, setRadioName] = useState(name);
    const [radioCountry, setRadioCountry] = useState(name);

    const handleStation = () => {
        setCurrentStation({
            stationuuid,
            name,
            url_resolved,
            country,
            tags
        })
    }

    // const handleNameChange = (e: ChangeEvent<HTMLInputElement>, stationuuid: string) => {
    //     const index = favoritesRadios?.findIndex(station => station.stationuuid === stationuuid);
    //     if (index && e) {
    //         setFavoritesRadios((prev) => {
    //             const RenamedRadio = {
    //                 ...prev![index],
    //                 name: e.target.value
    //             }
    //             const newList = prev?.slice(0)
    //             newList?.splice(index, 1, RenamedRadio);
    //             return newList
    //     })
    //     }
    // }

    
    const handleDeleteRadio = (stationuuid: string) => {
        setFavoritesRadios((prev) => {
            if (prev) {
                const newRadios = prev!.filter((radio) => radio.stationuuid !== stationuuid) 
                return newRadios;
            } else {
                return prev;
            }
        });
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
                        { isEditingRadio ? 
                            <form className="flex flex-col">
                                <input
                                    placeholder={radioName}
                                    onChange={(e) => setRadioName(e.target.value)}
                                    value={radioName}
                                    className="font-semibold text-2xl placeholder:text-black"
                                    type="text" 
                                />
                                <input
                                    placeholder={radioCountry} 
                                    onChange={(e) => setRadioCountry(e.target.value)}
                                    value={radioCountry} 
                                    className="hidden capitalize lg:block placeholder:text-black" 
                                    type="text" 
                                />
                            </form>
                        :
                            <>
                                <h2 className="font-semibold text-2xl">{radioName}</h2>
                                <p className="hidden capitalize lg:block">{radioCountry}</p>
                            </>
                        }
                    </div>
                </div>

                {/* Edit & Delete Radio */}
                <div>
                    <button onClick={() => setIsEditingRadio(!isEditingRadio)} 
                        className="hidden lg:inline-block lg:mr-[26px]"
                    >
                        <img src={editIcon} alt="Edit radio"/>
                    </button>
                    <button className="mr-1" onClick={() => handleDeleteRadio(stationuuid)}>
                        <img src={deleteIcon} alt="Delete radio"/>
                    </button>
                </div>
            </div>
        </div>
    )
}
export {RadioItem}