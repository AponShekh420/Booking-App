"use client"
import Image from "next/image";
import Logo from '@/images/logo/gm-logo.png'
import AvatarDropdown from "./AvatarDropdown";
import { useState } from "react";

const Navbar = () => {

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false)


  return (
    <nav className="w-full relative">
      <Image 
        src={Logo} 
        alt="Logo" 
        width={100} 
        height={100} 
        className="sm:mt-[39px] mt-[18px] mx-auto lg:w-[266px] lg:h-[57px] w-[130.5px] h-[31.89px] sm:w-[250px] sm:h-[41px] md:w-[260px] md:h-[51px]"
      />

      {/* desktop and tablet menu */}
      <div className="absolute right-[33px] top-[29px] hidden sm:block">
        <AvatarDropdown/>
      </div>

      {/* mobile menu */}

      <div className="absolute right-[33px] top-[29px] cursor-pointer sm:hidden block">
        <Image 
          src={"/assets/icons/mobile-menu.svg"} 
          alt="menu" 
          className="w-[32px] h-[18.7px]" 
          width={100} 
          height={100}
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      <aside
        className={` ${mobileSidebarOpen ? "translate-x-0 opacity-100 z-50" : "translate-x-[200px] opacity-0 z-[-1]"} lg:hidden bg-white boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}>
        <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
            <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">home</li>
            <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-poin ter capitalize">Features
            </li>
            <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">Blogs</li>
            <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-500 cursor-pointer capitalize">Shop</li>
        </ul>
      </aside>
    </nav>
  );
}

export default Navbar;