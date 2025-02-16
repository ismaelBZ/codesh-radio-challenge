import { useEffect, useState } from "react";

// Types
import { RadioItemT } from "../../@types/RadioItem";

// Icons
import playIcon from "./../../assets/icons/play-circle-icon.svg";
import stopIcon from "./../../assets/icons/pause-circle-icon.svg";
import deleteIcon from "./../../assets/icons/delete-icon.svg";
import editIcon from "./../../assets/icons/edit-icon.svg";


const RadioItem = ( { name, stationuuid, url_resolved, country, tags, setCurrentStation, setFavoritesRadios } : RadioItemT) => {
    const [isNotPlaying, setIsNotPlaying] = useState(false);
    const [isEditingRadio, setIsEditingRadio] = useState(false);
    const [radioName, setRadioName] = useState(name);
    const [radioCountry, setRadioCountry] = useState(name);

    {/* Refresh the play pause icon based on current radio html audio tag status  */}
    useEffect(() => {
        setIsNotPlaying(false);
        const favoriteRadio = document.querySelector<HTMLAudioElement>(`#a${stationuuid}`);
        const favoriteRadioUuid = (favoriteRadio?.getAttribute("id"))?.slice(1); ;
        if (favoriteRadio && favoriteRadioUuid === stationuuid) setIsNotPlaying(() => favoriteRadio.paused ? true : false);            
    });

    {/* Set the current station */}
    const handleStation = () => {
        setCurrentStation({
            stationuuid,
            name,
            url_resolved,
            country,
            tags
        })
    }

    {/* Update radio properties on edit */}
    const handleEditRadio = () => {
        setFavoritesRadios((prev) => {
            const radioIndex = prev!.findIndex((radio) => radio.stationuuid === stationuuid )
            const updatedFavorites = prev!.slice(0);
            // const newName = radioName.match(new RegExp(/^ *$/)) ? prev![radioIndex].name : radioName
            updatedFavorites[radioIndex].name = radioName;
            updatedFavorites[radioIndex].country = radioCountry;
            localStorage.setItem("radios", JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
        (document.activeElement as HTMLInputElement).blur();
        setIsEditingRadio(false);
    }

    {/* Exit edit mode and blur input when click.target != inputs */}
    const handleInputBlur = () => {
        const nameInput = document.getElementById(`${stationuuid}name`);
        const countryInput = document.getElementById(`${stationuuid}country`);
        setTimeout(() => {
            // If active element in none of editing inputs, apply changes and close edition
            if (document.activeElement === nameInput || document.activeElement === countryInput) {
                return
            } else {
                (document.activeElement as HTMLInputElement).blur();
                handleEditRadio();
            }
        }, 80) // Need to run inside a setTimeout because onBlur doesn't have any active element
    }

    const handleDeleteRadio = (stationuuid: string) => {
        setFavoritesRadios((prev) => {
            if (prev) {
                const newRadios = prev!.filter((radio) => radio.stationuuid !== stationuuid); 
                localStorage.setItem("radios", JSON.stringify(newRadios));
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
                <div className="flex gap-[10px] grow items-center">

                    {/* Play Pause Button*/}
                    <button onClick={handleStation}>
                        <img src={isNotPlaying ? playIcon : stopIcon} alt={isNotPlaying ? "Play" : "Stop"} />
                    </button>

                    {/* Audio */}
                    <audio src={url_resolved} />

                    {/* Radio Info */}
                    <div className="flex flex-col grow gap-1">
                        { isEditingRadio ? 
                            <> {/* Is used onChange to set the data for not rerender all radios on type*/}
                                <input
                                    id={`${stationuuid}name`}
                                    placeholder={radioName}
                                    onChange={(e) => setRadioName(e.target.value)} 
                                    onKeyDown={(e) => {if (e.key === "Enter") handleEditRadio()}}
                                    onBlur={handleInputBlur} 
                                    autoFocus
                                    value={radioName}
                                    className="font-semibold text-2xl placeholder:text-black rounded-sm bg-[rgba(123,241,168,0.5)]
                                    shadow-[inset_0px_0px_5px_rgba(0,0,0,0.3),0px_0px_2px_rgba(0,0,0,0.5)] 
                                    focus-visible:outline-0 focus-visible:border
                                    "
                                    type="text" 
                                />
                                <input
                                    id={`${stationuuid}country`}
                                    placeholder={radioCountry} 
                                    onChange={(e) => setRadioCountry(e.target.value)}
                                    onKeyDown={(e) => {if (e.key === "Enter") handleEditRadio()}}
                                    onBlur={handleInputBlur}  
                                    value={radioCountry} 
                                    className="hidden capitalize lg:block placeholder:text-black rounded-sm bg-[rgba(225,113,0,0.5)] 
                                    shadow-[inset_0px_0px_5px_rgba(0,0,0,0.3),0px_0px_2px_rgba(0,0,0,0.5)]
                                    focus-visible:outline-0 focus-visible:border" 
                                    type="text" 
                                />
                            </>
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
                    {/* edit */}
                    <button 
                        onClick={() => setIsEditingRadio(!isEditingRadio)}
                        className="hidden lg:inline-block lg:px-[15px]"
                    >
                        <img src={editIcon} alt="Edit radio"/>
                    </button>
                    
                    {/* delete */}
                    <button className="mr-1 lg:ml-[5px] lg:p-[10px]" onClick={() => handleDeleteRadio(stationuuid)}>
                        <img src={deleteIcon} alt="Delete radio"/>
                    </button>
                </div>
            </div>
        </div>
    )
}
export {RadioItem}