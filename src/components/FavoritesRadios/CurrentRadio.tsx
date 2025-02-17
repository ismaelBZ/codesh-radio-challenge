import { useEffect, useState } from "react";

// Types
import { Station } from "../../@types/Station";

// Icons
import PlayButton from "./../../assets/icons/play-icon.svg"
import PauseButton from "./../../assets/icons/pause-icon.svg"


const CurrentRadio = ({station, setCurrentStation} : {station: Station | null, setCurrentStation: React.Dispatch<React.SetStateAction<Station | null>>}) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(true); 
    
    useEffect(() => { // play/pause basic on favorite radio item iteration
        const audio = document.querySelector<HTMLAudioElement>(`#a${station!.stationuuid}`);
        const updatedStatus = station?.isPlaying!
        if (updatedStatus) audio!.play();
        if (!updatedStatus) audio!.pause()
        setIsPlaying(updatedStatus);
    }, [station]);


    const handlePlay = () => {
        const audio = document.querySelector<HTMLAudioElement>(`#a${station!.stationuuid}`);
        if (isPlaying)  {
            audio!.pause()
        } else {
            audio!.play();
        }
        
        setCurrentStation((prev) => {
            return {
                ...prev!,
                isPlaying: !audio!.paused
            }
        })
        setIsPlaying(!audio!.paused); // Refresh isPlayng status based on html audio current status
    } 
    

    return (
        <div className="relative py-1 z-10">
            <div className="py-[15px] px-[6px] flex justify-between items-center">
                <div className="flex gap-[10px] items-center">
                    {/* Play Pause */}
                    <button
                        onClick={() => handlePlay()}
                        className="px-[12px] py-[9px]">
                        <img src={station!.isPlaying ? PlayButton : PauseButton} alt={isPlaying ? "Stop" : "Play"} />
                    </button>

                    {/* Audio */}
                    <audio id={`a${station!.stationuuid}`} autoPlay src={station!.url_resolved} />

                    {/* Radio Info */}
                    <div>
                        <h2 className="font-semibold text-2xl">{station!.name}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}


export {CurrentRadio}