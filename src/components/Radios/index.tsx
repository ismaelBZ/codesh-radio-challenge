import { useEffect, useState } from "react";

// Types
import { Station } from "../../@types/Station";
import { RadioSearchT } from "../../@types/RadioSearch";

// Components
import { RadioCard } from "./RadioCard";
import { Filters } from "./Filters";

// Icons
import MenuIcon from "./../../assets/icons/menu-icon.svg";
import ReturnIcon from "./../../assets/icons/return-icon.svg";
import NextIcon from "./../../assets/icons/more-icon.svg";
import BackIcon from "./../../assets/icons/back-icon.svg"


const RadioSearch = ({setIsDisplayingSearch, setFavoritesRadios, setCurrentStation, favoritesRadios} : RadioSearchT) => {
    const [radios, setRadios] = useState<Station[] | null>(null); // Fetched radio stations from API
    const [pagination, setPagination] = useState<number[]>([1, 2, 3, 4]);
    const [paginationOffset, setPaginationOffset] = useState(0);
    const [isShowingFilters, setIsShowingFilters] = useState(false);
    const [filter, setFilter] = useState<"name" | "country" | "language">("name");
    const [search, setSearch] = useState<string>("");
    const [searchTrigger, setSearchTrigger] = useState(true); // Only fetch on search typing when press enter


    const getData = async (url: string) => { 
        try {
            // Request needs basic header to allow CORS in API 
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
            }});
            
            const data = await response.json();
            if (!data) {
                throw new Error("Failed to fetch data from API")
            }

            const radioList = data.map((radio: Station) => {
                return {
                    stationuuid: radio.stationuuid,
                    name: radio.name,
                    url_resolved: radio.url_resolved,
                    country: radio.country,
                    tags: radio.tags
                }
            })
            
            setRadios(radioList);
        } catch (error) {
            // Have to implement an error handling to display that info to user
                // loading status + Error component("Can't get radio stations now, try again in a few minitus")
            console.log(error); 
        }
    }

    {/* Just fetch and refresh data based on search and filter */}
    useEffect(() => {
        if (search) {
            switch (filter) {
                case "name":
                    getData(`https://de1.api.radio-browser.info/json/stations/byname/${search}?limit=10&offset=${paginationOffset}`);
                    break;
                case "country":
                    getData(`http://de1.api.radio-browser.info/json/stations/bycountry/${search}?limit=10&offset=${paginationOffset}`);
                    break;
                case "language":
                    getData(`http://de1.api.radio-browser.info/json/stations/bylanguage/${search}?limit=10&offset=${paginationOffset}`);
                    break;
            }
        } else {
            getData(`http://de1.api.radio-browser.info/json/stations?limit=10&offset=${paginationOffset}`);
        }
    }, [paginationOffset, filter, searchTrigger])
    


    // Change the pagination numbers and refresh Radio List based on interaction < | i | i | >>
    const handlePagination = (option: "previous" | "next" | "index", index?: number) => {
        if (option === "previous") {
            setPagination((prev) => {
                // Verify if it's on first pagination 
                if (prev[0] === 1) {
                    // If it's on first pagination and is on first index return, ele recalculate paginationOffset based on index
                    setPaginationOffset((prev) => {
                        if (prev === 0) {
                            return prev;
                        } else {
                            return (((prev / 10) - 1) * 10); // prev / 10 = pagination index, reduced by 1 and multiplyed by 10 = new offset 
                        }
                    })                    
                    return prev; // On First pagination return the same pagination
                } else { // It's not on firs pagination
                    // Update the paginationOffset and refresh the radio list
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
        } else if (option === "next") {
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
        if (option === "index") {
            setPaginationOffset((index! -1) * 10);
        }
    }

    // Need to implement an user friendly pagination index status


    {/* Uptate radio list search input keyDown === "Enter" */}
    const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setSearchTrigger((prev) => !prev); 
            setPaginationOffset(0);
        } return;
    }

    
    return (
        <div className="pb-[30px]">
            {/* Return Button */}
            <button onClick={() => setIsDisplayingSearch && setIsDisplayingSearch(false)} 
                className="float-left py-3 lg:hidden"
            >
                <img
                    src={ReturnIcon}
                    className="w-[35px] h-auto"
                    alt="Return to your favorites Radios" />
            </button>

            {/* Filters Button */}
            <button onClick={() => setIsShowingFilters(!isShowingFilters)}
                className="float-right py-3"
            >
                <img src={MenuIcon} alt="Show Filters" />
            </button>

            {/* Filters */}
            {isShowingFilters && 
                <div className="relative top-[50px] w-fit mx-auto">
                    <Filters filter={filter} setFilter={setFilter}/>
                </div>
            }

            {/* Search form*/}
            <div className="w-full mt-[70px] flex justify-center">
                <input
                    type="text"
                    placeholder="Search here"
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => handleSearch(e)}
                    value={search}
                    className="w-80 px-[20px] py-[9px]
                        text-white
                        bg-radio rounded-lg shadow-[inset_0px_2px_6px_rgba(0,0,0,0.4)]
                        placeholder:text-white"
                />
            </div>

            {/* Radio List */}
            <ul className="mt-[49px] flex flex-col gap-[21px]">
                {radios?.map((radio) => {
                    if (radio.name.match(new RegExp(/^ *$/))) { 
                        radio.name = "No name"
                    } return (
                        <li className="relative" key={radio.stationuuid}>
                            <RadioCard {...radio} favoritesRadios={favoritesRadios} setFavoritesRadios={setFavoritesRadios} setCurrentStation={setCurrentStation}/>
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
                {/* Indexes */}
                <ul className="flex gap-[15px] justify-center">
                    {pagination.map((pageIndex) => {
                        return (
                            <li key={pageIndex}>
                                <button 
                                    onClick={() => handlePagination("index", pageIndex)}
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