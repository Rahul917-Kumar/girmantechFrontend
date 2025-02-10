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
import { searchUserCss } from "./searchUser-css";

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
            <div className={`${searchUserCss.container} ${!isSearch ? "gap-[80px]" : ""}`}>
                {
                    isSearch?(
                        <></>
                    ):(
                        <>        
                            <div className={searchUserCss.girmanSearchImageContainer}>
                                <img
                                    src={GirmanLogo}
                                    alt="Girman Logo"
                                    className={searchUserCss.girmanSearchImageLogo}
                                ></img>
                                <img
                                    src={GirmanLogoName}
                                    alt="Girman Logo Name"
                                    className={searchUserCss.girmanSearchImage}
                                ></img>
                            </div>
                        </>
                    )
                }
                <div className={searchUserCss.inputListParentContainer}>
                    <div className={searchUserCss.inputParentContainer}>
                        <Search  className={searchUserCss.searchIcon}/>
                        <Input
                            placeholder="Search"
                            className={searchUserCss.input}
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
