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

function SearchUser() {
    const { toast } = useToast()
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [searchResult, setSearchResult] = useState<searchResultInterface[]>([])
    const [isSearch, setIsSearch] = useState<boolean>(false)
    const handlePressEnter = async (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && searchQuery.trim() !== "") {
            setLoading(true);
            try {
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
                toast({
                    title: "Something went wrong",
                    description: "",
                    variant: "destructive",
                    className: cn(
                        'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
                    ),
                })
            } finally {
                setLoading(false);
            }
        }
    }
    return (
        <div>
            <div className={`flex flex-col absolute md:top-[260px] md:left-[560px] ${!isSearch ?"gap-[80px]":""} `}>
                {
                    isSearch?(
                        <></>
                    ):(
                        <>        
                            <div className="  flex md:w-[800px] md:h-[125px] md:gap-[39.99px]">
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
                <div className="relative md:w-[800px] md:h-[50px] rounded-xl md:gap-4 md:pl-4 md:pr-4 border border-[#D7D7EA] bg-white shadow-[0_4px_10px_0px_#0000000D]">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                    <Input
                        placeholder="Search"
                        className="w-full pl-[32px] placeholder:[font-family:'Sans'] placeholder:font-medium font-[Sans] text-gray-500 font-medium caret-gray-500 placeholder:text-[16px] md:placeholder:text-[18px] text-[16px] md:text-[18px] h-full border-none shadow-none !outline-none !ring-0 !border-transparent"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handlePressEnter}
                    />
                </div>

                <div className="mt-[40px]">
                    <UserList userList={searchResult} />
                </div>
            </div>
        </div>
    )
}

export default SearchUser