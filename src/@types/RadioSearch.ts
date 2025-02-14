import {Station} from "./Station";

export type RadioSearchT = {
    setIsDisplayingSearch?: React.Dispatch<React.SetStateAction<boolean>>, 
    setFavoritesRadios: React.Dispatch<React.SetStateAction<Station[] | null>>
    setCurrentStation: React.Dispatch<React.SetStateAction<Station | null>>
}