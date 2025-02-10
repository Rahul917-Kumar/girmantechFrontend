import NotFoundSearch from "@/assets/NoSearchFound.png"

const NotFound = ()=>{
    return (
        <>
            <div className="
                    md:w-[472.42px] md:h-[451.39px]
                    w-[291.58px] h-[278.6px]
                ">
                <img className="
                        md:w-[472.42px] md:h-[402.39px] absolute md:top-[90px] md:left-[163.79px]
                        w-[291.58px] h-[248.36px]
                    "
                    src={NotFoundSearch}
                    alt="no search found"
                >
                </img>
                <div className="
                        md:w-[204px] md:h-[22px] absolute md:top-[519.39px] md:left-[281.28px]  font-inter font-medium text-lg leading-[21.78px] tracking-normal text-center text-[#999999]
                        w-[125.91px] h-[13.58px] top-[370.02px] left-[100.22px]
                    ">
                    No results found.
                </div>
            </div>
        </>
    )
}

export default NotFound