import { searchResultInterface } from "@/types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import UserProfile from "@/assets/userProfile.png"
import Location from "@/assets/location.png"
import { Separator } from "@/components/ui/separator"
import Phone from "@/assets/phone.png"
import { Button } from "../ui/button"

function UserCard({ userDetail }: { userDetail: searchResultInterface }){
    return (
        <>
            <div className="w-[313px] h-[236.21px] md:w-[388.57px] md:h-[312.57px] rounded-[13.84px] md:rounded-[18.29px] p-[20.75px] md:p-[27.43px] bg-white shadow-md">
                <div className="h-[125.52] md:h-[166.29px] flex justify-between flex-col">
                    <Avatar className="w-[67.45px] h-[67.45px] md:w-[70.86px] md:h-[70.86px]">
                        <AvatarImage src={UserProfile} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="h-[51.6px] md:h-[68px]">
                        <p className="font-inter font-semibold text-[27.67px] md:text-[36.57px] leading-[33.49px] md:leading-[44.26px] text-gray-800">{userDetail.first_name} {userDetail.last_name}</p>
                        <p className="flex items-center gap-2">
                            <img src={Location} alt="" className="" />
                            <span className="font-inter font-medium text-[8.65px]  leading-[10.46px] tracking-[0px] md:text-[11.43px] md:leading-[13.83px]">{userDetail.city}</span>
                        </p>
                    </div>
                </div>
                <Separator className="mt-[36.56px] !bg-[#F3F3F3]"  /> 
                <div className=" h-[34.59px] md:h-[45.71px] mt-[9.15px] flex justify-between">
                    <div >
                        <div className="flex items-center gap-[6.86px] font-semibold">
                            <img src={Phone} alt=""></img>
                            <span className="font-inter font-semibold text-[10.38px] leading-[12.56px] md:text-[13.71px] md:leading-[16.6px] tracking-[0px] ">
                                {userDetail.contact_number}
                            </span>
                        </div>
                        <p className="text-[11.43px] text-font-inter font-semibold text-[10.38px] leading-[12.56px] tracking-[0px]font-inter font-semibold text-[10.38px] leading-[12.56px] tracking-[0px][#AFAFAF] text-[#AFAFAF]">
                            Available on phone
                        </p>
                    </div>
                    <div>
                        <Button className="!text-white !bg-black text-[16px]">Fetch Details</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserCard