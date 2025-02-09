import GirmanSearchLogo from "@/assets/Girman search logo.svg"
import GirmanLogo from "@/assets/grimam-logo.png"
import GirmanLogoName from "@/assets/griman-name.png"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"; // Import the search icon
import axios from "axios";
import { searchResultInterface } from "@/types";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import UserList from "../userlist/UserList";
import NotFoundSearch from "@/assets/NoSearchFound.png"
function SearchUser() {
    const { toast } = useToast()
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [searchResult, setSearchResult] = useState<searchResultInterface[]>([])
    const [isSearch, setIsSearch] = useState<boolean>(false)
    const [hasSearchedPerformed, setHasSearchedPerformed] = useState<boolean>(false)
    const handlePressEnter = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        setHasSearchedPerformed(false)
        if (event.key === "Enter" && searchQuery.trim() !== "") {
            try {
                setLoading(true);
                console.log("search Query", searchQuery)
                setIsSearch(true)
                const payload = {
                    search: searchQuery
                }
                const response = await axios.post("http://localhost:8000/users/search-user/", payload, {
                    headers: { "Content-Type": "application/json" }
                })
                console.log("response", response.data.data)
                if (response.status !== 200) {
                    console.log("not able to fetch result")
                }
                setSearchResult(response.data.data)

            } catch (error) {
                setSearchResult([])
            } finally {
                setLoading(false);
                setHasSearchedPerformed(true)
            }
        }
    }
    return (
        <div>
            <div 
                className={`
                    flex md:flex-col absolute md:top-[260px] md:left-[560px] ${!isSearch ?"gap-[80px]":""} 
                    left-[40px]
                `}

            >
                {
                    isSearch?(
                        <></>
                    ):(
                        <>        
                            <div className=" hidden md:flex md:w-[800px] md:h-[125px] md:gap-[39.99px]">
                                <img
                                    src={GirmanLogo}
                                    alt="Girman Logo"
                                    className="md:w-[187.31px] md:h-[125px]"
                                ></img>
                                <img
                                    src={GirmanLogoName}
                                    alt="Girman Logo Name"
                                    className="md:w-[572.7px] md:h-[125px]"
                                ></img>
                            </div>
                        </>
                    )
                }
                <div>
                    <div 
                        className="
                            relative md:w-[800px] md:h-[50px] md:rounded-xl md:gap-4 md:mt-[0px] pl-4 pr-4 border border-[#D7D7EA] bg-white shadow-[0_4px_10px_0px_#0000000D]
                            w-[313px] h-[40px] gap-[16px] rounded-[12px] border border-[1px] 
                            mt-[40px]
                        ">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 md:h-[16px] md:w-[16px] text-gray-500 h-[14px] w-[14px]" />
                        <Input
                            placeholder="Search"
                            className="w-full md:pl-[32px] pl-[30px] placeholder:[font-family:'Sans'] placeholder:font-medium font-[Sans] text-gray-500 font-medium caret-gray-500 placeholder:text-[16px] md:placeholder:text-[18px] text-[16px] md:text-[18px] h-full border-none shadow-none !outline-none !ring-0 !border-transparent"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handlePressEnter}
                        />
                    </div>

                    <div className="mt-[40px]">
                        <UserList userList={searchResult} />
                    </div>
                    {
                        hasSearchedPerformed && searchResult.length===0 ?(
                            <>
                                <div className="w-[472.42px] h-[451.39px]">
                                    <img className="w-[472.42px] h-[402.39px] absolute top-[90px] left-[163.79px]"
                                        src={NotFoundSearch}
                                        alt="no search found"
                                    >
                                    </img>
                                    <div className="w-[204px] h-[22px] absolute top-[519.39px] left-[281.28px] font-inter font-medium text-lg leading-[21.78px] tracking-normal text-center text-[#999999]">
                                        No results found.
                                    </div>
                                </div>
                            </>
                        ):(
                            <></>
                        )
                    }
                </div>
                </div>
        </div>
    )
}

export default SearchUser