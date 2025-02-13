import { useState } from "react";
import PlayButton from "./../../assets/icons/play-icon.svg"
import PauseButton from "./../../assets/icons/pause-icon.svg"
import { CurrentStation } from "../../@types/CurrentStation";


const radio = {
    "changeuuid": "647c930b-ba03-4723-8807-496e548fea45",
    "stationuuid": "db93a00f-9191-46ab-9e87-ec9b373b3eee",
    "serveruuid": "629e3689-1876-437e-8177-f4e9c5713082",
    "name": "\tArrow Classic Rock",
    "url": "http://stream.gal.io/arrow",
    "url_resolved": "http://stream.gal.io/arrow",
    "homepage": "https://www.arrow.nl/",
    "favicon": "https://www.arrow.nl/wp-content/uploads/2020/08/logo.png",
    "tags": "",
    "country": "The Netherlands",
    "countrycode": "NL",
    "iso_3166_2": null,
    "state": "",
    "language": "",
    "languagecodes": "",
    "votes": 78,
    "lastchangetime": "2024-12-09 17:24:25",
    "lastchangetime_iso8601": "2024-12-09T17:24:25Z",
    "codec": "MP3",
    "bitrate": 192,
    "hls": 0,
    "lastcheckok": 1,
    "lastchecktime": "2025-02-12 17:07:52",
    "lastchecktime_iso8601": "2025-02-12T17:07:52Z",
    "lastcheckoktime": "2025-02-12 17:07:52",
    "lastcheckoktime_iso8601": "2025-02-12T17:07:52Z",
    "lastlocalchecktime": "2025-02-12 17:07:52",
    "lastlocalchecktime_iso8601": "2025-02-12T17:07:52Z",
    "clicktimestamp": "2025-02-12 17:59:59",
    "clicktimestamp_iso8601": "2025-02-12T17:59:59Z",
    "clickcount": 91,
    "clicktrend": -8,
    "ssl_error": 0,
    "geo_lat": 52.0796325954509,
    "geo_long": 4.30389404296875,
    "geo_distance": null,
    "has_extended_info": false
}

const CurrentRadio = ({station} : {station: CurrentStation | null}) => {
    const [isPlaying, setIsPlaying] = useState(true);
    
    const handlePlay = () => {
        const audio = document.querySelector<HTMLAudioElement>(`#a${station!.stationuuid}`);
        if (isPlaying)  {
            audio!.pause()
        } else {
            audio!.play();
        }
        
        setIsPlaying(!audio!.paused)
    } 
    
    return (
        <div className="relative py-1 z-10">
            <div className="py-[15px] px-[6px] flex justify-between items-center">
                <div className="flex gap-[10px] items-center">
                    {/* Play Pause */}
                    <button
                        onClick={() => handlePlay()}
                        className="px-[12px] py-[9px]">
                        <img src={isPlaying ? PlayButton : PauseButton} alt={isPlaying ? "Stop" : "Play"} />
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