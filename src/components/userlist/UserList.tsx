import { searchResultInterface } from "@/types"
import UserCard from "../usercard/userCard";

interface UserListProps {
    userList: searchResultInterface[];
}

function UserList({ userList }: UserListProps){
    return (
        <>
        {
            userList.length>0 &&(
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
                        {
                            userList.map((item:searchResultInterface)=>{
                                return (
                                    <>
                                        <UserCard userDetail={item} />
                                    </>
                                )
                            })
                        }
                    </div>
                </>
            )
        }
        </>
    )
}

export default UserList