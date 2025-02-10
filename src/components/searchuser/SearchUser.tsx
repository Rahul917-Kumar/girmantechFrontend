import GirmanLogo from "@/assets/grimam-logo.png"
import GirmanLogoName from "@/assets/griman-name.png"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"; // Import the search icon
import axios, { AxiosError } from "axios";
import { searchResultInterface } from "@/types";
import { useToast } from "@/hooks/use-toast";
import UserList from "../userlist/UserList";
import UserCardShimmer from "../shimmer/UserCardShimmer"
import { cn } from "@/lib/utils"
import NotFound from "../notfound/NotFound";

const apiEndPoint = import.meta.env.VITE_API_API_ENDPOINT;

function SearchUser() {
    const { toast } = useToast()
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [searchResult, setSearchResult] = useState<searchResultInterface[]>([])
    const [isSearch, setIsSearch] = useState<boolean>(false)
    const [hasSearchedPerformed, setHasSearchedPerformed] = useState<boolean>(false)

    const handlePressEnter = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && searchQuery.trim() !== "") {
            try {
                setHasSearchedPerformed(false)
                setLoading(true);
                setIsSearch(true)
                const payload = {
                    search: searchQuery
                }
                const response = await axios.post(`${apiEndPoint}/users/search-user/`, payload, {
                    headers: { "Content-Type": "application/json" }
                })
                setSearchResult(response.data.data)

            } catch (error) {
                const err = error as AxiosError;
                if (err.status ===500){
                    toast({
                        className: cn(
                            'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
                        ),
                        variant: 'default',
                        title: 'Uh oh! Something went wrong.',
                        description: 'Please try again later.',
                    })
                }
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
                            <div 
                                className={`hidden md:flex md:w-[800px] md:h-[125px] md:gap-[39.99px] transition-all duration-5000 ease-in-out ${isSearch ? "opacity-0 -translate-y-5 pointer-events-none" : "opacity-100 translate-y-0"
                                    }`}
                                >
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
                <div
                    className="flex flex-col md:top-[260px] md:left-[590px] gap-[40px] items-center justify-center"
                >
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
                    {
                        loading&&(
                            <>
                                <UserCardShimmer/>
                            </>
                        )
                    }
                        <UserList userList={searchResult} />
                         
                    {
                        hasSearchedPerformed && searchResult.length===0 ?(
                                <NotFound />
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
