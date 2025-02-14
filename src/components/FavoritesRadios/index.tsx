import searchIcon from './../../assets/icons/search-icon.svg'
import { CurrentRadio } from './CurrentRadio';
import { RadioItem } from './RadioItem'
import { Station } from '../../@types/Station';

const radios = [
    {
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
    },
    {
        "changeuuid": "27a15674-3809-4677-b51b-e0a1d21f56d2",
        "stationuuid": "ffc0d701-f43b-4232-8be6-f7ff72add8ef",
        "serveruuid": "bb6ab4bf-ed07-4a6d-b723-d22e4cc65e7f",
        "name": "\tBlasmusikradio mit Bernd",
        "url": "https://stream.laut.fm/blasmusikradio_mit_bernd",
        "url_resolved": "https://blasmusikradiomitbernd.stream.laut.fm/blasmusikradio_mit_bernd?t302=2025-02-12_01-23-00&uuid=a9e03918-2544-4264-9e99-cda5e7565984",
        "homepage": "https://laut.fm/blasmusikradio_mit_bernd",
        "favicon": "https://assets.laut.fm/b22749b7fdb382b8912269e3d8054380?t=_120x120",
        "tags": "blasmusik,folk,marsch,polka",
        "country": "Germany",
        "countrycode": "DE",
        "iso_3166_2": "",
        "state": "Bayern",
        "language": "german",
        "languagecodes": "de",
        "votes": 35,
        "lastchangetime": "2024-11-21 20:55:25",
        "lastchangetime_iso8601": "2024-11-21T20:55:25Z",
        "codec": "MP3",
        "bitrate": 128,
        "hls": 0,
        "lastcheckok": 1,
        "lastchecktime": "2025-02-12 01:23:10",
        "lastchecktime_iso8601": "2025-02-12T01:23:10Z",
        "lastcheckoktime": "2025-02-12 01:23:10",
        "lastcheckoktime_iso8601": "2025-02-12T01:23:10Z",
        "lastlocalchecktime": "2025-02-12 01:23:10",
        "lastlocalchecktime_iso8601": "2025-02-12T01:23:10Z",
        "clicktimestamp": "2025-02-12 17:35:48",
        "clicktimestamp_iso8601": "2025-02-12T17:35:48Z",
        "clickcount": 97,
        "clicktrend": -2,
        "ssl_error": 0,
        "geo_lat": null,
        "geo_long": null,
        "geo_distance": null,
        "has_extended_info": false
    },
    {
        "changeuuid": "a319efde-f674-4468-8a95-1afb5f4827b1",
        "stationuuid": "9d69cc77-b698-40c0-8036-17cd1f09ca44",
        "serveruuid": "d6474059-e9b1-439c-aa72-da33f732c82a",
        "name": "\tFun Radio",
        "url": "http://stream.funradio.sk:8000/fun128.mp3",
        "url_resolved": "http://stream.funradio.sk:8000/fun128.mp3",
        "homepage": "http://www.funradio.sk/",
        "favicon": "http://www.funradio.sk/img/logo/apple-icon-120x120.png?v=2024-02-12-1045",
        "tags": "",
        "country": "Slovakia",
        "countrycode": "SK",
        "iso_3166_2": null,
        "state": "",
        "language": "",
        "languagecodes": "",
        "votes": 364,
        "lastchangetime": "2024-04-02 14:25:12",
        "lastchangetime_iso8601": "2024-04-02T14:25:12Z",
        "codec": "MP3",
        "bitrate": 128,
        "hls": 0,
        "lastcheckok": 1,
        "lastchecktime": "2025-02-12 13:07:53",
        "lastchecktime_iso8601": "2025-02-12T13:07:53Z",
        "lastcheckoktime": "2025-02-12 13:07:53",
        "lastcheckoktime_iso8601": "2025-02-12T13:07:53Z",
        "lastlocalchecktime": "2025-02-11 22:18:49",
        "lastlocalchecktime_iso8601": "2025-02-11T22:18:49Z",
        "clicktimestamp": "2025-02-12 17:46:08",
        "clicktimestamp_iso8601": "2025-02-12T17:46:08Z",
        "clickcount": 98,
        "clicktrend": -6,
        "ssl_error": 0,
        "geo_lat": null,
        "geo_long": null,
        "geo_distance": null,
        "has_extended_info": false
    }
]

const FavoritesRadios = ({
        setIsDisplayingSearch,
        setCurrentStation,
        currentStation
    } : {
        setIsDisplayingSearch?: React.Dispatch<React.SetStateAction<boolean>>
        setCurrentStation: React.Dispatch<React.SetStateAction<Station | null>>
        currentStation: Station | null
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

                    {radios.map((radio) => {
                        
                        return(
                            <li key={radio.stationuuid}>
                                <RadioItem {...radio} setCurrentStation={setCurrentStation}/>
                            </li>
                        )

                    })}

                </ul>
            </div>
        </div>
    )
}

export default FavoritesRadios;
