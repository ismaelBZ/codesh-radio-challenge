import { useEffect, useState } from "react";
// Types
import { Station } from "../../@types/Station";
// Components
import { RadioCard } from "./RadioCard";
// Icons
import MenuIcon from "./../../assets/icons/menu-icon.svg";
import ReturnIcon from "./../../assets/icons/return-icon.svg";
import NextIcon from "./../../assets/icons/more-icon.svg";
import BackIcon from "./../../assets/icons/back-icon.svg"

const RadioSearch = ({ setIsDisplayingSearch }: { setIsDisplayingSearch?: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const [radios, setRadios] = useState<Station[] | null>(null);
    const [pagination, setPagination] = useState<number[]>([1, 2, 3, 4])
    const [paginationOffset, setPaginationOffset] = useState(0)

    const getData = async (url: string) => {
            
        try {
            // Request needs basic header to allow CORS in API 
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
            }});
            
            // Data request successfully verification
            const data = await response.json();

            if (!data) {
                throw new Error("Failed to fetch data from API")
            }

            // Map data type to Station
            const radioList = data.map((radio: Station) => {
                return {
                    stationuuid: radio.stationuuid,
                    name: radio.name,
                    url_resolved: radio.url_resolved,
                    country: radio.country,
                    tags: radio.tags
                }})
            

            setRadios(radioList);
        // Error Treatment
        } catch (error) {
            // Implement Error Handling
            //.
            //.
            //.
            console.log(error); 
        }
    }

    useEffect(() => {
        getData(`https://de1.api.radio-browser.info/json/stations/search?limit=10&offset=${paginationOffset}`);
    }, [paginationOffset])
    
    
    // Refresh the Radio List when click on a pagination number
    const handleRadioList = (pageIndex: number) => {
        setPaginationOffset((pageIndex -1) * 10);
    }


    // Change the pagination numbers and refresh Radio List based on interaction << || >>
    const handlePagination = (option: "previous" | "next") => {
        if (option === "previous") {
            setPagination((prev) => {
                // Verify if it's on first pagination 
                if (prev[0] === 1) {
                    // If it's on first pagination, but's not on first page, refresh the radio list
                    setPaginationOffset((prev) => {
                        if (prev === 0) {
                            return prev;
                        } else {
                            return (((prev / 10) - 1) * 10); // prev / 10 = pagination index, reduced by 1 and multiplyed by 10 = new offset 
                        }
                    })                    
                    return prev; // On First pagination return the same pagination
                } else {
                    // It's not on firs pagination
                    // Refresh the radio list 
                    setPaginationOffset((prev) => {
                        return (((prev / 10) - 1) * 10); // prev / 10 = pagination index, reduced by 1 and multiplyed by 10 = new offset
                    })
                    
                    // Decrease pagination 
                    let newPagination = []
                    for (let i=0; i<4; i++) {
                        newPagination.push(pagination[i] -1 );
                    }
                    return newPagination
                }
            })
        } if (option === "next") {
            setPagination(() => { 
                // Refresh the radio List
                setPaginationOffset((prev) => {
                    return (((prev / 10) + 1) * 10); // prev / 10 = pagination index, reduced by 1 and multiplyed by 10 = new offset
                })

                let newPagination: number[] = []
                for (let i=0; i<4; i++) {
                    newPagination.push(pagination[i] + 1);
                }
                return newPagination  
            })
        }
    }
    
    console.log(pagination);

    return (
        <div className="pb-[30px]">
            {/* Return Button */}
            <button className="float-left py-3 lg:hidden">
                <img
                    src={ReturnIcon}
                    className="w-[35px] h-auto"
                    alt="Return to your favorites Radios" />
            </button>

            {/* Menu Button */}
            <button onClick={() => setIsDisplayingSearch && setIsDisplayingSearch(false)}
                className="float-right py-3"
            >
                <img src={MenuIcon} alt="Show Radios" />
            </button>

            {/* Search form*/}
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

            {/* Radio List */}
            <ul className="mt-[49px] flex flex-col gap-[21px]">
                {/**
                 * Implement loading feature
                 * 
                 * 
                 * 
                 */}
                {radios?.map((radio) => {
                    if (radio.name.match(new RegExp(/^ *$/))) { 
                        radio.name = "No name"
                    } return (
                        <li className="relative" key={radio.stationuuid}>
                            <RadioCard {...radio}/>
                        </li>
                    )
                })}
            </ul>

            {/* Pagination */}
            <div className="mt-[20px] flex justify-between" >
                {/* Previous Button */}
                <button onClick={() => handlePagination("previous")}>
                    <img src={BackIcon} alt="Previous pagination" />
                </button>
                <ul className="flex gap-[15px] justify-center">
                    {pagination.map((pageIndex) => {
                        return (
                            <li key={pageIndex}>
                                <button 
                                    onClick={() => handleRadioList(pageIndex)}
                                    className="px-[15px] py-[9px] w-[50px] text-center text-white bg-radio
                                        shadow-[inset_1px_2px_2px_rgba(0,0,0,0.5),inset_-1px_-2px_2px_rgba(0,0,0,0.5)]
                                    "
                                >
                                    {pageIndex}
                                </button>
                            </li>
                        )
                    })}
                </ul>
                {/* Next Button */}
                <button onClick={() => handlePagination("next")}>
                    <img src={NextIcon} alt="Next pagination" />
                </button>
            </div>

        </div>
    )
}

export default RadioSearch