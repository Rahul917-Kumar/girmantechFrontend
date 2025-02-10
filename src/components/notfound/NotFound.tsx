import NotFoundSearch from "@/assets/NoSearchFound.png"
import { notFoundCss } from "./notFound-css"
const NotFound = ()=>{
    return (
        <>
            <div className={notFoundCss.container}>
                <img className={notFoundCss.image} src={NotFoundSearch} alt="no search found">
                </img>
                <div className={notFoundCss.message}> No results found.</div>
            </div>
        </>
    )
}

export default NotFound