"use client"
import Image from "next/image";
import Wrapper from "../Wrapper";
import logo from "@/images/logo/black-logo.svg"
import SearchBar from "./Searchbar/SearchBar";
import AvatarDropdown from "./AvatarDropdown";
import { useState } from "react";
import CategorySlide from "./CategorySlide";

const Header = () => {

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false)
  
  return (
    <div className="w-full bg-white">
      <Wrapper>
        <div className="w-full flex justify-between items-center py-[24px] sm:gap-x-5 md:gap-x-7 lg:gap-x-10 xl:gap-x-12">
          <div className="xl:w-[266px] xl:h-[57px] w-[236px] h-[27px] md:w-[246px] md:h-[37px] lg:w-[256px] lg:h-[47px] hidden sm:flex items-center">
            <Image src={logo} alt="Logo" width={100} height={100} className="w-full h-full"/>
          </div>
          <div className="sm:w-8/12 w-full lg:pr-16 xl:pr-28 2xl:pr-52 flex items-center">
            <SearchBar/>
          </div>
          <div className="hidden sm:block">
            <AvatarDropdown className="hidden sm:block"/>
      
            {/* mobile menu */}
      
            {/* <div className="cursor-pointer sm:hidden block">
              <Image 
                src={"/assets/icons/mobile-menu.svg"} 
                alt="menu" 
                className="w-[32px] h-[18.7px]" 
                width={100} 
                height={100}
                onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              />
            </div> */}

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
          </div>
        </div>
      </Wrapper>
      
      <Wrapper>
        <div className="w-full">
          <CategorySlide/>
        </div>
      </Wrapper>
    </div>
  );
}

export default Header;