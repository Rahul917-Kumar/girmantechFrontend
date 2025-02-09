import { searchResultInterface } from "@/types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import UserProfile from "@/assets/userProfile.png"
import Location from "@/assets/location.png"
import { Separator } from "@/components/ui/separator"
import Phone from "@/assets/phone.png"
import { Button } from "../ui/button"
import UserDetail from "../userdetails/UserDetail"
import { useState } from "react"

function UserCard({ userDetail }: { userDetail: searchResultInterface }){
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
            <div className="w-[388.57px] h-[312.57px] rounded-[18.29px] p-[27.43px] bg-white shadow-md">
                <div className="h-[166.29px] flex justify-between flex-col">
                    <Avatar className="w-[70.86px] h-[70.86px]">
                        <AvatarImage src={UserProfile} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className=" h-[68px]">
                        <p className="font-inter font-semibold text-[36.57px] leading-[44.26px] text-gray-800">{userDetail.first_name} {userDetail.last_name}</p>
                        <p className="flex items-center gap-2">
                            <img src={Location} alt="" className="" />
                            {userDetail.city}
                        </p>
                    </div>
                </div>
                <Separator className="mt-[36.56px] !bg-[#F3F3F3]"  /> 
                <div className="h-[45.71px] mt-[9.15px] flex justify-between">
                    <div>
                        <div className="flex items-center gap-[6.86px] font-semibold">
                            <img src={Phone} alt=""></img>
                            {userDetail.contact_number}
                        </div>
                        <p className="text-[11.43px] text-[#AFAFAF]">
                            Available on phone
                        </p>
                    </div>
                    <div>
                        <Button className="!text-white !bg-black text-[16px]" onClick={()=>setOpen(!open)}>Fetch Details</Button>
                    </div>
                </div>
            </div>
            <UserDetail userDetail={userDetail} open={open} onClose={setOpen}/>
        </>
    )
}

export default UserCard