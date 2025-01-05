"use client"
import Image from "next/image";
import Logo from '@/images/logo/gm-logo.png'
import AvatarDropdown from "./AvatarDropdown";

const Navbar = () => {
  return (
    <nav className="w-full relative">
      <Image src={Logo} alt="Logo" width={266} height={57} className="mt-[39px] mx-auto"/>
      <div className="absolute right-[33px] top-[29px]">
        <AvatarDropdown/>
      </div>
    </nav>
  );
}

export default Navbar;