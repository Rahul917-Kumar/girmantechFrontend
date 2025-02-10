import { searchResultInterface } from "@/types";

import {
    Dialog,
    DialogContent,
    DialogOverlay
} from "@/components/ui/dialog"

import UserProfile from "@/assets/userProfile.png"
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { userDetailCss } from "./userDetail-css";
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

                    <DialogContent className={userDetailCss.dialogContent}>
                        <div className={userDetailCss.detailsHeadingContainer}>
                            <div className={userDetailCss.detailsHeadingChildContainer}>
                                <div className={userDetailCss.fetchDetails}>
                                    Fetch Details
                                </div>
                                <X className={userDetailCss.xIcon} onClick={()=>onClose(false)} />
                            </div>
                            <div className={userDetailCss.detailsHeading}>
                                <div className={userDetailCss.detailsText}>
                                    Here are the details of following employee.
                                </div>
                            </div>
                        </div>
                        <div className={userDetailCss.detailsContainer}>
                            <div className={userDetailCss.details}>
                                Name: {userDetail.first_name} {userDetail.last_name}<br />Location: {userDetail.city}<br /> Contact Number: {userDetail.contact_number}
                            </div>
                            <div className={userDetailCss.profileImageHeading}>
                                Profile Image:
                            </div>
                        </div>
                        <img  className={userDetailCss.profileImage} src={UserProfile} alt="profileImage"></img>
                        <div className={userDetailCss.closeContainer}>
                            <Button className={userDetailCss.button} onClick={()=>onClose(false)}>
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