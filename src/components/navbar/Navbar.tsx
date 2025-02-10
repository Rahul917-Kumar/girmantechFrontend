import { useState } from "react";
import { Menu } from "lucide-react";
import NavbarLogo2 from "@/assets/navbarLogo2.png"
import {navbarCss} from "./navbar-css";

const linkedinUrl = "https://www.linkedin.com/company/girmantech/"
const websiteUrl ="https://girmantech.com/"
const mailToUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=contact@girmantech.com"

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className={navbarCss.container}>
                <div className={navbarCss.innerContainer}>
                    <div className={navbarCss.iconsContainer}>
                        <img src={NavbarLogo2} className={navbarCss.iconImage}></img>
                        <div className={navbarCss.iconNameContainer}>
                            <div className={navbarCss.iconNameHeading}>Girman</div>
                            <div className={navbarCss.iconNameSubheading}>Technologies</div>
                        </div>
                    </div>
                    <div className={navbarCss.menuContainer}>
                        <div className={navbarCss.menuSearch}>SEARCH</div>
                        <div className={navbarCss.otherMenuChild} onClick={() => window.open(websiteUrl)}>WEBSITE</div>
                        <div className={navbarCss.otherMenuChild} onClick={() => window.open(linkedinUrl, "_blank")}
                        >LINKEDIN</div>
                        <div className={navbarCss.otherMenuChild} onClick={() => window.open(mailToUrl, "_blank")}>CONTACT</div>
                    </div>
                    <Menu 
                        className={navbarCss.hamburderIcon}
                        onClick={() => setIsOpen(!isOpen)} />
                    {
                        isOpen && (
                            <>
                                <div className={navbarCss.menuContainerMobile}>
                                    <div className={navbarCss.menuContainerMobileChild}>
                                        <div className={navbarCss.menuSearchMobile}>SEARCH</div>
                                        <div className={navbarCss.otherMenuChildMobile} onClick={() => window.open(websiteUrl)}>WEBSITE</div>
                                        <div className={navbarCss.otherMenuChildMobile} onClick={() => window.open(linkedinUrl, "_blank")}>LINKEDIN</div>
                                        <div className={navbarCss.otherMenuChildMobile} onClick={() => window.open(mailToUrl, "_blank")}
                                        >CONTACT</div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default Navbar