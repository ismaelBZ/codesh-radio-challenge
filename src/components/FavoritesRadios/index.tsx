import searchIcon from './../../assets/icons/search-icon.svg'
import { CurrentRadio } from './CurrentRadio';
import { RadioItem } from './RadioItem'
import { Station } from '../../@types/Station';

const FavoritesRadios = ({
        favoritesRadios,
        setFavoritesRadios,
        currentStation,
        setCurrentStation,
        setIsDisplayingSearch
    } : {
        currentStation: Station | null
        favoritesRadios: Station[] | null
        setCurrentStation: React.Dispatch<React.SetStateAction<Station | null>>
        setIsDisplayingSearch?: React.Dispatch<React.SetStateAction<boolean>>
        setFavoritesRadios: React.Dispatch<React.SetStateAction<Station[] | null>>
    }) => {
    

    return (
        <div>
            {/* Search Button */}
            <button onClick={() => setIsDisplayingSearch && setIsDisplayingSearch(true)}
                className="my-[12px] float-right"
            >
                <img src={searchIcon} alt="Search Radios" />
            </button>
            
            {/* Title */}
            <h1 className="py-[37px] font-semibold text-[1.75rem] text-center text-white">Radio Browser</h1>

            {/* Favorite Radios */}
            <p className="mt-2 text-white uppercase">Favorite Radios</p>

            {/* Radios */}
            <div className="relative mx-[4px] pb-[20px]" > {/* compensate the blur */}
                
                {/* Background blur */}
                <div className="absolute w-[100%] h-[100%] 
                        bg-radioList rounded-lg shadow-wrapper blur-[1px]
                    "
                ></div>

                {/* Current Radio */}
                {currentStation &&           
                    <CurrentRadio station={currentStation}/>
                }

                {/* Radios List */}
                <ul className="flex flex-col gap-[18px]">

                    {favoritesRadios && favoritesRadios.map((radio) => {
                        
                        return(
                            <li key={radio.stationuuid}>
                                <RadioItem {...radio} setCurrentStation={setCurrentStation} setFavoritesRadios={setFavoritesRadios} favoritesRadios={favoritesRadios}/>
                            </li>
                        )

                    })}

                </ul>
            </div>
        </div>
    )
}

export default FavoritesRadios;
