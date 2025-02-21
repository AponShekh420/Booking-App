"use client"
import Image from "next/image";
import Logo from '@/images/logo/white-logo.svg'
import AvatarDropdown from "./AvatarDropdown";
import { useState } from "react";
import Link from "next/link";
import { MobileMenuIcon } from "../../Icons";
import Wrapper from "../../Wrapper";
import MobileMenu from "./MobileMenu";

const Navbar = () => {

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false)


  return (
    <nav className="w-full sm:relative">
      <div className="relative sm:static sm:mt-[39px] mt-[18px] sm:!w-full m-auto w-11/12 sm:max-w-full max-w-[1512px]">
        <Link href={"/"}>
          <Image 
            src={Logo} 
            alt="Logo" 
            width={100} 
            height={100} 
            className="mx-auto lg:w-[266px] lg:h-[57px] w-[130.5px] h-[31.89px] sm:w-[250px] sm:h-[41px] md:w-[260px] md:h-[51px]"
          />
        </Link>

        {/* desktop and tablet menu */}
        <div className="absolute right-[33px] top-[29px] hidden sm:block">
          <AvatarDropdown/>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 block sm:hidden mt-1">
          <MobileMenu/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;