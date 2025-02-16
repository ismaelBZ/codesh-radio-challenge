import { useEffect, useState } from "react";

// Components 
import FavoritesRadios from "./components/FavoritesRadios";
import RadiosList from "./components/Radios";

// Types 
import { Station } from "./@types/Station";


function App() {
    const [deviceType, setDeviceType] = useState<"mobile" | "desktop">("mobile");
    const [isDisplayingSearch, setIsDisplayingSearch] = useState<boolean>(false)
    const [currentStation, setCurrentStation] = useState<Station | null>(null);
    const [favoritesRadios, setFavoritesRadios] = useState<Station[] | null>(localStorage.getItem("radios") ? JSON.parse(localStorage.getItem("radios")!) : null);

    {/* Handle responsive layout when resize */}
    useEffect(() => {
        handleDeviceType();
        window.addEventListener('resize', handleDeviceType);
    }, []);

    const handleDeviceType = () => {
        const width = window.innerWidth

        if (width < 1025) {
            setDeviceType("mobile");
        } else {
            setDeviceType("desktop");
        }
    }


    return (
        <div className="px-[20px]">
            {/* App background */}
            <div className="-mx-[20px] fixed w-svw h-svh bg-background -z-10"></div> {/* used to fix RadiosList hight because the blur is 104% */}

            {deviceType === "mobile" ?
                
                <div className="pb-[70px]">
                    {isDisplayingSearch ? 
                        <RadiosList
                            favoritesRadios={favoritesRadios}
                            setFavoritesRadios={setFavoritesRadios} 
                            setIsDisplayingSearch={setIsDisplayingSearch} 
                            setCurrentStation={setCurrentStation}
                            /> 
                            : 
                            <FavoritesRadios
                                favoritesRadios={favoritesRadios} 
                                currentStation={currentStation}
                                setCurrentStation={setCurrentStation}
                                setFavoritesRadios={setFavoritesRadios} 
                                setIsDisplayingSearch={setIsDisplayingSearch} 
                        />
                    }
                </div>

                : deviceType === "desktop" &&
                
                <div className="-ml-[20px] grid gap-[40px] grid-rows-1 grid-cols-[320px_1fr] ">
                    <div className="pl-[10px] pr-[16px] min-h-svh bg-[#1E1E21]">
                        <RadiosList
                            favoritesRadios={favoritesRadios}
                            setCurrentStation={setCurrentStation} 
                            setFavoritesRadios={setFavoritesRadios} 
                        />
                    </div>
                    <div className="pb-[70px]">
                        <FavoritesRadios 
                            favoritesRadios={favoritesRadios}
                            currentStation={currentStation}
                            setCurrentStation={setCurrentStation} 
                            setFavoritesRadios={setFavoritesRadios}
                        />
                    </div>
                </div>
            }
        </div>
    )
}

export default App
