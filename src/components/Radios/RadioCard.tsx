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
                    localStorage.setItem("radios", JSON.stringify(newFavorites))
                    return newFavorites;
                } else {
                    const newFavorite = [ ...prev, 
                        {
                            stationuuid,
                            name,
                            url_resolved,
                            country,
                            tags
                        }
                    ]
                    localStorage.setItem("radios", JSON.stringify(newFavorite));
                    return newFavorite;
                }
            } else { // If it's the firs favorite station
                const newFavorite = [{
                    stationuuid,
                    name,
                    url_resolved,
                    country,
                    tags
                }];
                console.log(newFavorite);
                localStorage.setItem("radios", JSON.stringify(newFavorite));
                return newFavorite;
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

    return (
        <button className="w-full" onClick={handleClick}>
            <div
                className=" absolute top-0 left-0 w-full h-full
                    shadow-wrapper bg-radioList rounded-lg blur-[1px]
                "
            ></div>

            <div className="relative z-10 px-[19px] py-[15px] flex justify-between">
                <p className="text-2xl text-left text-white max-w-[95%]">{name}</p>
                
                {isInFavorites &&
                    <div className="absolute top-[10px] right-[8px]">
                        <img className="w-[20px]" src={CheckIcon} alt="On Favorites" />
                    </div>
                }
            </div>
        </button>
    )
}

export {RadioCard}