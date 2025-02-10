
import { Skeleton } from "@/components/ui/skeleton"

const UserCardShimmer = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
                {Array.from({ length:4 }).map((_, index) => (
                    <Skeleton key={index} className="!bg-gray-300 animate-pulse md:w-[388.57px] md:h-[312.57px] md:rounded-[18.29px] md:p-[27.43px] w-[313px] h-[236.21px] gap-[8.65px] rounded-[13.84px] p-[20.75px]" />
                ))}
            </div>
        </>
    )
}

export default UserCardShimmer