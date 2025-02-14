import {Station} from "./Station"

export type RadioCardT = {
    favoritesRadios: Station[] | null
    setFavoritesRadios: React.Dispatch<React.SetStateAction<Station[] | null>>
    setCurrentStation: React.Dispatch<React.SetStateAction<Station | null>>,
    stationuuid: string, 
    name: string, 
    url_resolved: string, 
    country: string, 
    tags?: string
}