import {Station} from "./Station";

export type RadioItemT = {
    name: string, 
    stationuuid: 
    string, 
    url_resolved: string, 
    country: string,
    tags?: string,
    setCurrentStation: React.Dispatch<React.SetStateAction<Station | null>>,
    setFavoritesRadios: React.Dispatch<React.SetStateAction<Station[] | null>>
}