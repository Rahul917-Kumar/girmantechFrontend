import { searchResultInterface } from "@/types"
import UserProfile from "@/assets/userProfile.png"
import Location from "@/assets/location.png"
import { Separator } from "@/components/ui/separator"
import Phone from "@/assets/phone.png"
import UserDetail from "../userdetails/UserDetail"
import { useState } from "react"
import { userCardCss } from "./userCard-css"

function UserCard({ userDetail }: { userDetail: searchResultInterface }){
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
            <div className={userCardCss.parentContainer}>
                <div className={userCardCss.parentFirstChild}>
                    <div className={userCardCss.userImageNameContainer}>
                        <div className={userCardCss.profileContainer}>
                            <img  src={UserProfile} className={userCardCss.profileImage} alt="profile image"></img>
                        </div>
                        <div className={userCardCss.userNameContainer}>
                            <div className={userCardCss.userName}>
                                {userDetail.first_name} {userDetail.last_name}
                            </div>
                            <div className={userCardCss.locationContainer}>
                                <img
                                    src={Location}
                                    className={userCardCss.locationIcon}
                                    alt="location logo"
                                >
                                </img>
                                <div className={userCardCss.cityDetail}>
                                    {userDetail.city}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={userCardCss.userPhoneFetchDetailParentContainer}>
                        <Separator className=" !bg-[#F3F3F3]" /> 
                        <div className={userCardCss.userPhoneFetchDetailChild}>
                            <div className={userCardCss.phoneParentContainer}>
                                <div className={userCardCss.phoneContainer}>
                                    <img className={userCardCss.phoneIcon} src={Phone} alt="Phone Logo">
                                    </img>
                                    <div className={userCardCss.contactDetails}>
                                        {userDetail.contact_number}
                                    </div>
                                </div>
                                <div  className={userCardCss.availableOnPhone}> 
                                    Available on phone
                                </div>
                            </div>
                            <div  className={userCardCss.fetchDetailsContainer} onClick={() => setOpen(true)} >
                                <div className={userCardCss.fetchDetailsChildContainer}>
                                    <div className={userCardCss.fetchDetailText}>
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