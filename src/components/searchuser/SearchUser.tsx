import GirmanSearchLogo from "@/assets/Girman search logo.svg"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"; // Import the search icon
import axios from "axios";
import { searchResultInterface } from "@/types";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import UserList from "../userlist/UserList";

function SearchUser(){
    const { toast } = useToast()
    const [searchQuery, setSearchQuery] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [searchResult, setSearchResult] = useState<searchResultInterface[]>([])

    const handlePressEnter = async(event: React.KeyboardEvent<HTMLInputElement>)=>{
        if (event.key === "Enter" && searchQuery.trim() !== "") {
            setLoading(true);
            try {
                console.log("search Query", searchQuery)
                const payload = {
                    search: searchQuery
                }
                const response = await axios.post("http://localhost:8000/users/search-user/", payload,{
                    headers: {"Content-Type":"application/json"}
                })
                console.log("response", response.data.data)
                if(response.status !==200){
                    console.log("not able to fetch result")
                }
                setSearchResult(response.data.data)
                
            } catch (error) {
                toast({
                    title: "Something went wrong",
                    description: "",
                    variant:"destructive",
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
        <>
            <div className="flex flex-col items-center justify-center gap-12 mt-[40px] md:mt-16">
                <div className="hidden md:flex items-center gap-4">
                    <img
                        src={GirmanSearchLogo}
                        alt="Girman Logo"
                        className="object-contain"
                    />
                </div>

                <div className="w-[313px] md:w-[800px] items-center">
                    <div className="relative w-full">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                            <Search className="h-5 w-5" />
                        </div>
                        <Input
                            id="search"
                            type="search"
                            placeholder="Search"
                            value={searchQuery}
                            // className="w-full rounded-lg bg-background pl-12 text-base md:w-full placeholder:text-[16px] md:placeholder:text-[18px]"
                            className="h-[40px] pl-12 md:h-[50px] text-[16px] md:text-[18px] rounded-xl border-gray-200 bg-white"
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={handlePressEnter}
                        />
                    </div>
                </div>
                <div className="mt-[40px]">
                    <UserList userList = {searchResult} />
                </div>
                
            </div>
        </>
    )
}

export default SearchUser


{/* <div className="grid w-full max-w-sm items-center gap-1.5">
                            <div className="relative w-full">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                    <Search className="h-5 w-5" />
                                </div>
                                <Input
                                    id="search"
                                    type="search"
                                    placeholder="Search"
                                    value={searchQuery}
                                    className="w-full rounded-lg bg-background pl-12 text-base md:w-full placeholder:text-[16px] md:placeholder:text-[18px]"
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={handlePressEnter}
                                />
                            </div>
                </div> */}
