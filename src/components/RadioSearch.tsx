import {useState} from "react";
import MenuIcon from "./../assets/icons/menu-icon.svg"
import CheckIcon from "./../assets/icons/favorite-icon.svg"

const RadioSearch = () => {
    const [isSelected, setIsSelected] = useState(true)

    return (
        <div>
            {/* Menu Button */}
            <button className="float-right py-3">
                <img src={MenuIcon} alt="Show Radios" />
            </button>
            
            {/* Search */}
            <form className="w-full mt-[70px] flex justify-center">
                <input 
                    type="text" 
                    placeholder="Search here" 
                    className="w-80 px-[20px] py-[9px]
                        text-white
                        bg-radio rounded-lg shadow-[inset_0px_2px_6px_rgba(0,0,0,0.4)]
                        placeholder:text-white"
                />
            </form>

            {/* Categories Filter */}
            <ul className="mt-[49px] flex flex-col gap-[21px]">
                <li className="relative">
                    <div 
                        className=" absolute top-0 left-0 w-full h-full
                            shadow-wrapper bg-radioList rounded-lg blur-[1px]
                        "
                    ></div>
                    
                    <p className="relative z-10 px-[19px] py-[15px] 
                        flex justify-between text-2xl text-white
                        ">
                        <span>Categories</span>
                        {isSelected && 
                            <span><img src={CheckIcon} alt="Selected" /></span>
                        }
                    </p>
                </li>
                <li className="relative">
                    <div 
                        className=" absolute top-0 left-0 w-full h-full
                            shadow-wrapper bg-radioList rounded-lg blur-[1px]
                        "
                    ></div>
                    
                    <p className="relative z-10 px-[19px] py-[15px] 
                        flex justify-between text-2xl text-white
                        ">
                        <span>Categories</span>
                        {isSelected && 
                            <span><img src={CheckIcon} alt="Selected" /></span>
                        }
                    </p>
                </li>
            </ul>
            
        </div>
    )
}
export default RadioSearch