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
            <div 
                className="
                    md:w-[388.57px] md:h-[312.57px] md:rounded-[18.29px] md:p-[27.43px] bg-white
                    w-[313px] h-[236.21px] gap-[8.65px] rounded-[13.84px] border border-[#E3E3E3] p-[20.75px]
                ">
                <div 
                    className="
                        flex flex-col md:w-[333.71px] md:h-[257.71px] md:gap-[36.57px]
                        w-[252.49px] h-[194.7px] gap-[27.67px]
                    ">
                    <div 
                        className="
                            flex flex-col md:h-[166.29px] md:gap-[9.14px]
                            h-[125.52px] gap-[6.92px]
                        ">
                        <div 
                            className="
                                md:w-[89.14px] md:h-[89.14px] rounded-full border md:border-[1.14px] border-[#F3F3F3] flex justify-center items-center
                                w-[67.45px] h-[67.45px] border-[0.86px]
                            ">
                            <img 
                                src={UserProfile}
                                className="
                                    md:w-[70.86px] md:h-[70.86px] rounded-full
                                    w-[53.61px] h-[53.61px]
                                "
                            ></img>
                        </div>
                        <div 
                            className="
                                flex flex-col  md:h-[68px] md:gap-[9.14px]
                                h-[51.16px] gap-[6.92px]
                            ">
                            <div 
                                className="
                                    md:h-[44px] font-inter font-semibold md:text-[36.57px] md:leading-[44.26px] tracking-normal
                                    h-[33px] text-[27.67px] leading-[33.49px]
                                ">
                                {userDetail.first_name} {userDetail.last_name}
                            </div>
                            <div 
                                className="
                                    flex items-center md:gap-[9.14px] md:h-[14.86px]
                                    h-[11.24px] gap-[6.92px]
                                ">
                                <img
                                    src={Location}
                                    className="md:w-[11.43px] md:h-[14.86px] w-[8.65px] h-[11.24px]"
                                >
                                </img>
                                <div 
                                    className="
                                        md:w-[44px] md:h-[14px] font-inter font-medium md:text-[11.43px] md:leading-[13.83px] tracking-normal text-[#425763]
                                        w-[34px] h-[10px] text-[8.65px] leading-[10.46px]
                                    ">
                                    {userDetail.city}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div 
                        className="
                            flex flex-col md:h-[54.86px] md:gap-[9.14px]
                            h-[41.51px] gap-[6.92px]
                        ">
                        <Separator className=" !bg-[#F3F3F3]" /> 
                        <div 
                            className="
                                flex items-center md:h-[45.71px] md:gap-[81.14px]
                                h-[34.59px] gap-[61.39px]
                            ">
                            <div 
                                className="
                                    flex flex-col md:w-[115.43px] md:h-[36.71px] md:gap-[5.71px]
                                    w-[87.34px] h-[27.32px] gap-[4.32px]
                                ">
                                <div 
                                    className="
                                        flex flex-row md:h-[17px] md:gap-[6.86px]
                                        h-[13px] gap-[5.19px]
                                    ">
                                    <img 
                                        className="
                                            md:h-[14.86px] md:w-[14.86px]
                                            h-[11.24px] w-[11.24px]
                                        " 
                                        src={Phone} alt="Phone Logo">
                                    </img>
                                    <div className="
                                        md:w-[93px] md:h-[17px] font-inter font-semibold md:text-[13.71px] md:leading-[16.6px] tracking-normal
                                        w-[71px] h-[13px] text-[10.38px] leading-[12.56px]
                                        ">
                                        {userDetail.contact_number}
                                    </div>
                                </div>
                                <div 
                                    className="
                                        md:h-[14px] font-inter font-medium md:text-[11.43px] md:leading-[13.83px] tracking-normal text-[#AFAFAF]
                                        h-[10px] text-[8.65px] leading-[18.46px]
                                    "> 
                                    Available on phone
                                </div>
                            </div>
                            <div 
                                className="
                                    flex items-center justify-center md:w-[136.57px] md:h-[45.71px] md:min-h-[45.71px] md:max-h-[45.71px] md:gap-[11.43px] md:rounded-[9.14px] pl-[4px] pr-[4px] pt-[2px] pb-[2px] !bg-[#18181B]
                                    w-[103.67px] h-[34.59px] min-h-[34.59px] max-h-[34.59px] gap-[8.65px] rounded-[6.92px]
                                "
                                onClick={() => setOpen(true)}
                                >
                                <div className="
                                    flex flex-col md:w-[100px] md:h-[19px] md:gap-[11.43px]
                                    w-[76px] h-[15px] gap-[8.65px]
                                ">
                                    <div className="
                                        font-inter font-medium md:text-base md:leading-[19.36px] tracking-normal text-[#FAFAFA]
                                        text-[12.11px] leading-[14.65px]
                                    "
                                    >
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