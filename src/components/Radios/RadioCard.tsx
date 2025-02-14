import { useState } from "react"
import CheckIcon from "./../../assets/icons/favorite-icon.svg";
import { RadioCardT } from "../../@types/RadioCard";

const RadioCard = ({favoritesRadios, setFavoritesRadios, setCurrentStation, stationuuid, name, url_resolved, country, tags} : RadioCardT) => {
    const isInFavorites = favoritesRadios?.find(station => station.stationuuid === stationuuid);
    
    const handleClick = () => {
        setFavoritesRadios((prev) => {
            if (prev) {
                const favoriteIndex = prev.findIndex((station) => station.stationuuid === stationuuid); // Verify if is's already a favorite station
                
                // If is in favorites, favoriteIndex returns index, else favoriteIndex returns -1 and jump to else statement to add to favorites
                if (favoriteIndex >= 0) {
                    const newFavorites = prev.slice(0); // clone the list
                    newFavorites.splice(favoriteIndex, favoriteIndex + 1); // remove the station
                    return newFavorites;
                } else {
                    return ([ ...prev, 
                        {
                            stationuuid,
                            name,
                            url_resolved,
                            country,
                            tags
                        }
                    ]);
                }
            } else { // If it's the firs favorite station
                return [{
                    stationuuid,
                    name,
                    url_resolved,
                    country,
                    tags
                }]
            }
        })

        if (isInFavorites) return // Don't play the station, just remove form favorites, did in setFavoritesRadios
        
        setCurrentStation({
            name,
            stationuuid,
            url_resolved,
            country,
            tags
        })
    }

    console.log(isInFavorites);

    return (
        <button onClick={handleClick}>
            <div
                className=" absolute top-0 left-0 w-full h-full
                    shadow-wrapper bg-radioList rounded-lg blur-[1px]
                "
            ></div>

            <div className="relative z-10 px-[19px] py-[15px] 
                flex justify-between text-2xl text-white
                ">
                <p className="text-left">{name}</p>
                {isInFavorites &&
                    <div className="w-[22px] h-[auto]"><img src={CheckIcon} alt="Selected" /></div>
                }
            </div>
        </button>
    )
}

export {RadioCard}