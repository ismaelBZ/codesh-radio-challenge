import { useState } from "react"
import CheckIcon from "./../../assets/icons/favorite-icon.svg";

const RadioCard = ({stationuuid, name, url_resolved, country, tags} : {stationuuid: string, name: string, url_resolved: string, country: string, tags?: string}) => {
    const [isSelected, setIsSelected] = useState(true)

    return (
        <>
            <div
                className=" absolute top-0 left-0 w-full h-full
                    shadow-wrapper bg-radioList rounded-lg blur-[1px]
                "
            ></div>

            <p className="relative z-10 px-[19px] py-[15px] 
                flex justify-between text-2xl text-white
                ">
                <span>{name}</span>
                {isSelected &&
                    <span><img src={CheckIcon} alt="Selected" /></span>
                }
            </p>
        </>
    )
}
export {RadioCard}