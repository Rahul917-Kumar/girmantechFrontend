import NavbarLogo from "@/assets/navbarLogo.png"
import { useState } from "react";
import { Menu } from "lucide-react"; // For the hamburger icon

function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="flex justify-center items-center h-[60px] md:h-[110px] shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
                <div className="w-4/5 flex justify-between md:justify-around items-center">
                    {/* Logo */}
                    <div>
                        <img src={NavbarLogo} alt="Logo" className="h-[30px] md:h-[60px] w-auto object-contain" />
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex justify-center items-center gap-4">
                        <p className="uppercase text-2xl">Search</p>
                        <p className="uppercase text-2xl">Website</p>
                        <p className="uppercase text-2xl">Linkedin</p>
                        <p className="uppercase text-2xl">Contact</p>
                    </div>

                    {/* Mobile Hamburger Menu - Fixed Center Alignment */}
                    <div className="md:hidden flex items-center h-full">
                        <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                            <Menu className="w-[24px] h-[24px]" />
                        </button>

                        {/* Dropdown Menu */}
                        {isOpen && (
                            <div className="absolute right-4 top-16 bg-white shadow-lg rounded-lg p-4">
                                <p className="uppercase text-sm md:text-2xl py-2 cursor-pointer">Search</p>
                                <p className="uppercase text-sm md:text-2xl py-2 cursor-pointer">Website</p>
                                <p className="uppercase text-sm md:text-2xl py-2 cursor-pointer">Linkedin</p>
                                <p className="uppercase text-sm md:text-2xl py-2 cursor-pointer">Contact</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar