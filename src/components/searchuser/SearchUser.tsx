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
            <div>
                <div>
                    <div>
                        {/* place image here */}
                        {/* <img src={GirmanSearchLogo} alt=""></img> */}
                    </div>
                    <div>
                        {/* search bar */}
                        {/* <Input 
                            value={searchQuery} 
                            onChange={(e) => setSearchQuery(e.target.value)} 
                            onKeyDown={handlePressEnter}
                            className="bg-white text-[#71717A] border border-[#D7D7EA] focus:border-[#D7D7EA] focus:ring-0 focus:outline-none dark:bg-white dark:text-[#71717A]"
                        /> */}
                        {/* <Input
                            
                            type="search"
                            placeholder="Search"
                            className="!bg-white text-[#71717A] placeholder-gray-500 border border-gray-300 focus:ring-2 focus:border-[#D7D7EA]  focus:outline-none"
                        /> */}
                        {/* <div className="grid w-full max-w-sm items-center gap-1.5">
                            <div className="relative">
                                <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
                                    <Search className="h-4 w-4" />
                                </div>
                                <Input id="search" type="search" placeholder="Search..." 
                                className="w-full rounded-lg bg-background pl-8 md:w-800px"
                                 />
                            </div>
                        </div> */}
                        {/* <div className="grid w-full max-w-sm items-center gap-1.5">
                            <div className="relative w-full">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                                    <Search className="h-5 w-5" />
                                </div>
                                <Input
                                    id="search"
                                    type="search"
                                    placeholder="Search"
                                    className="w-full rounded-lg bg-background pl-12 text-base md:w-full placeholder:text-[16px] md:placeholder:text-[18px]"
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onKeyDown={handlePressEnter}
                                />
                            </div>
                        </div> */}
                    </div>
                    <div>
                        {/* iterate matching cards components */}
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-12 mt-16">
                {/* Main logo */}
                <div className="flex items-center gap-4">
                    <img
                        src={GirmanSearchLogo}
                        alt="Girman Logo"
                        className="object-contain"
                    />
                    {/* <h1 className="text-6xl font-bold">Girman</h1> */}
                </div>

                {/* Search input */}
                {/* <div className="w-full max-w-[800px]">
                    <Input type="search" placeholder="Search" className="h-[50px] text-[18px] rounded-md border-gray-200" />
                </div> */}

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

                <div className="w-full max-w-[800px]">
                    <Input
                        type="search"
                        placeholder="Search"
                        className="h-[40px] md:h-[50px] text-[16px] md:text-[18px] rounded-md border-gray-200"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handlePressEnter}
                    />
                </div>
                <div>
                    <UserList userList = {searchResult} />
                </div>
                
            </div>
        </>
    )
}

export default SearchUser