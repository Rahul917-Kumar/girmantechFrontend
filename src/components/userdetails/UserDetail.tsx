import { searchResultInterface } from "@/types";

import {
    Dialog,
    DialogContent,
    DialogOverlay
} from "@/components/ui/dialog"

import UserProfile from "@/assets/userProfile.png"
import { Button } from "../ui/button";
import { X } from "lucide-react";

interface Props {
    userDetail: searchResultInterface,
    open: boolean;
    onClose: React.Dispatch<React.SetStateAction<boolean>>
}

function UserDetail({ userDetail, open, onClose }: Props) {
    return (
        <>
            <Dialog open={open} onOpenChange={onClose}>
                <DialogOverlay className="bg-transparent">

                    <DialogContent 
                        className="
                            !bg-white text-black md:w-[512px] md:h-[475px] md:space-y-4 md:rounded-lg md:p-6 bg-white shadow-md text-[#09090B] [&>button]:hidden
                            w-[299px] h-[447px]  rounded-[7.41px] p-[22.22px] gap-[14.81px]
                        "
                    >
                        <div className="md:w-[424px] md:m-0 w-[260px]">
                            <div className="flex justify-between items-center md:block md:gap-[10px] gap-[9.26px]">
                                <div className="md:h-[29px] font-inter font-semibold md:text-[24px] md:leading-[29.05px] md:tracking-[0px] h-[27px] text-[#09090B] text-[22.22px] leading-[26.89px] tracking-normal">
                                    Fetch Details
                                </div>
                                <X className=" md:hidden w-[22.22px] h-[22.22px]" onClick={()=>onClose(false)} />
                            </div>
                            <div className="md:gap-[10px] md:mt-2 gap-[9.26px] pt-[7.41px]">
                                <div className="md:w-[424px] md:h-[17px] font-inter font-normal md:text-[14px] md:leading-[16.94px] md:tracking-[0] text-[12.96px] leading-[15.68px] tracking-normal text-[#71717A]">
                                    Here are the details of following employee.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:gap-[10px] md:m-0 gap-[9.26px]">
                            <div className="md:w-[208px] md:h-[51px] font-inter font-medium md:text-[14px] md:leading-[16.8px] md:tracking-[0] w-[192.54px] h-[48px] text-[12.96px] leading-[15.55px] tracking-normal">
                                Name: {userDetail.first_name} {userDetail.last_name}<br />Location: {userDetail.city}<br /> Contact Number: {userDetail.contact_number}
                            </div>
                            <div className="md:w-[92px] md:h-[17px] font-inter font-medium md:text-[14px] md:leading-[16.94px] md:tracking-[0px] w-[85px] h-[16px] text-[12.96px] leading-[15.68px] tracking-[0px]">
                                Profile Image:
                            </div>
                        </div>
                        <img className="md:w-[207px] md:h-[207px] m-0 w-[191.61px] h-[191.62px]" src={UserProfile} alt=""></img>
                        <div className="hidden md:flex md:justify-end">
                            <Button className="md:w-[70px] md:h-[40px] md:min-h-[40px] md:max-h-[40px] md:gap-[10px] md:rounded-md border md:border-[1px] md:py-2 md:px-4 border-[#E4E4E7] bg-white"
                                onClick={()=>onClose(false)}    
                            >
                                Close
                            </Button>
                        </div>
                    </DialogContent>
                </DialogOverlay>
            </Dialog>
        </>
    )
}

export default UserDetail