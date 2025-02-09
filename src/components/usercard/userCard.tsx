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
            <div className="w-[388.57px] h-[312.57px] rounded-[18.29px] p-[27.43px] bg-white">
                <div className="flex flex-col w-[333.71px] h-[257.71px] gap-[36.57px]">
                    <div className=" flex flex-col h-[166.29px] gap-[9.14px] ">
                        <div className="w-[89.14px] h-[89.14px] rounded-full border border-[1.14px] border-[#F3F3F3] flex justify-center items-center">
                            <img 
                                src={UserProfile}
                                className="w-[70.86px] h-[70.86px] rounded-full"
                            ></img>
                        </div>
                        <div className="flex flex-col  h-[68px] gap-[9.14px]">
                            <div className="h-[44px] font-inter font-semibold text-[36.57px] leading-[44.26px] tracking-normal ">
                                {userDetail.first_name} {userDetail.last_name}
                            </div>
                            <div className="flex items-center gap-[9.14px] h-[14.86px]">
                                <img
                                    src={Location}
                                    className="w-[11.43px] h-[14.86px]"
                                >
                                </img>
                                <div className="w-[44px] h-[14px] font-inter font-medium text-[11.43px] leading-[13.83px] tracking-normal text-[#425763]">
                                    {userDetail.city}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col h-[54.86px] gap-[9.14px]">
                        <Separator className=" !bg-[#F3F3F3]" /> 
                        <div className="flex items-center h-[45.71px] gap-[81.14px]">
                            <div className="flex flex-col w-[115.43px] h-[36.71px] gap-[5.71px]">
                                <div className="flex flex-row h-[17px] gap-[6.86px]">
                                    <img className="h-[14.86px] w-[14.86px] " src={Phone} alt="Phone Logo">
                                    </img>
                                    <div className="w-[93px] h-[17px] font-inter font-semibold text-[13.71px] leading-[16.6px] tracking-normal">
                                        {userDetail.contact_number}
                                    </div>
                                </div>
                                <div className="h-[14px] font-inter font-medium text-[11.43px] leading-[13.83px] tracking-normal text-[#AFAFAF]"> 
                                    Available on phone
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-[136.57px] h-[45.71px] min-h-[45.71px] max-h-[45.71px] gap-[11.43px] rounded-[9.14px] pl-[4px] pr-[4px] pt-[2px] pb-[2px] !bg-[#18181B]">
                                <div className="flex flex-col w-[100px] h-[19px] gap-[11.43px]">
                                    <div className="font-inter font-medium text-base leading-[19.36px] tracking-normal text-[#FAFAFA]">
                                        Fetch Details
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <UserDetail userDetail={userDetail} open={open} onClose={setOpen}/>
        </>
    )
}

export default UserCard