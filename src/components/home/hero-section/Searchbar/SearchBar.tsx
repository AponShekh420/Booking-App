"use client"
import Image from "next/image";
import StayDatesRangeInput from "./StayDatesRangeInput";
import { useEffect, useRef, useState } from "react";
import StayLocation from "./StayLocation";
import StaySearchDropdown from "./StaySearchDropdown";
import HeroSearchFormMobile from "./HeroSearchFormMobile";


const SearchBar = () => {

  const [tab, setTab] = useState<string>("");
  const [tabMobile, setTabMobile] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setTab("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div 
      className="xl:mt-[57px] mt-[16.58px] md:mt-[23.58px] lg:mt-[27.58px] xl:w-[945px] lg:w-[800px] md:w-[600px] sm:w-[500px] w-[310px] xs:w-[369px] xl:h-[73px] h-[35px] xs:h-[35px] sm:h-[40px] md:h-[50px] lg:h-[65px] rounded-[41px] bg-white py-2"
      ref={containerRef}
    >
      <div className="xl:w-[870px] lg:w-[730px] sm:w-[465px] w-[300px] xs:w-[340px] md:w-[550px] h-full m-auto flex items-center relative">
        <div className="lg:pr-[36px] pr-[9.16px] xs:pr-[11.16px] pl-2 xs:pl-0 lg:h-[37px] h-[20.62px] flex items-center border-r-[1px] border-[#D8D8D8]">
          <Image src={"assets/icons/searchbar/aiicon.svg"} alt="AI" 
            width={100} 
            height={100}
            className="lg:w-[44px] lg:h-[42px] h-[23.41px] w-[24.52px] md:h-[38px] md:w-[40] sm:h-[30.50px] sm:w-[42.50px]"
           />
        </div>

        {/* for desktop */}
        <div className="w-full items-center hidden md:flex" onClick={() => setTab("searchDropdown")}>
            <input 
            type="text" 
            placeholder="Type, speak, book & search treatments" 
            className="w-full h-full outline-none border-none placeholder-black placeholder-font-normal lg:placeholder:text-[16.35px] placeholder:text-[9.11px] sm:placeholder:text-[12.11px] lg:placeholder:leading-[27.88px] placeholder:leading-[15.54px] border-gray-300 focus:outline-none focus:ring-0 focus:border-transparent py-0 lg:text-[18.35px] text-[9.11px] sm:text-[12.11px] md:text-[16.35px]"
            />
        </div>

        {/* for mobile */}
        <div className="w-full items-center flex md:hidden" onClick={() => setTabMobile(true)}>
            <input 
            type="text" 
            placeholder="Type, speak, book & search treatments" 
            className="w-full h-full outline-none border-none placeholder-black placeholder-font-normal lg:placeholder:text-[16.35px] placeholder:text-[9.11px] sm:placeholder:text-[12.11px] lg:placeholder:leading-[27.88px] placeholder:leading-[15.54px] border-gray-300 focus:outline-none focus:ring-0 focus:border-transparent py-0 lg:text-[18.35px] text-[9.11px] sm:text-[12.11px] md:text-[16.35px]"
            />
        </div>

        {/* desktop */}
        <div className="lg:px-[16px] px-[7.8px] lg:h-[37px] h-[20.62px] hidden md:flex items-center border-r-[1px] border-[#D8D8D8] cursor-pointer" onClick={() => setTab((oldState) => oldState === "location" ? "" : "location")}>
          {/* should be change */}
          <Image src={"assets/icons/searchbar/location.svg"} alt="AI" 
            width={100} 
            height={100}
            className="lg:w-[25px] lg:h-[25px] h-[17px] w-[17px] sm:h-[21px] sm:w-[21px]"
          />
        </div>


        {/* mobile */}
        <div className="lg:px-[16px] px-[7.8px] lg:h-[37px] h-[20.62px] flex md:hidden items-center border-r-[1px] border-[#D8D8D8] cursor-pointer" onClick={() => setTabMobile(true)}>
          {/* should be change */}
          <Image src={"assets/icons/searchbar/location.svg"} alt="AI" 
            width={100} 
            height={100}
            className="lg:w-[25px] lg:h-[25px] h-[17px] w-[17px] sm:h-[21px] sm:w-[21px]"
          />
        </div>

        {/* desktop */}
        <div className="lg:px-[16px] px-[7.8px] lg:h-[37px] h-[20.62px] border-r-[1px] hidden md:flex items-center cursor-pointer border-[#D8D8D8]" onClick={() => setTab((oldState) => oldState === "clock" ? "" : "clock")}>
          <Image 
            src={"assets/icons/searchbar/vector-one.svg"} 
            alt="AI" 
            width={100} 
            height={100}
            className="lg:w-[30px] lg:h-[30px] h-[21.72px] w-[21.72px] sm:h-[27.72px] sm:w-[27.72px]"
          />
        </div>


        {/* mobile */}
        <div className="lg:px-[16px] px-[7.8px] lg:h-[37px] h-[20.62px] border-r-[1px] flex md:hidden items-center cursor-pointer border-[#D8D8D8]" onClick={() => setTabMobile(true)}>
          <Image 
            src={"assets/icons/searchbar/vector-one.svg"} 
            alt="AI" 
            width={100} 
            height={100}
            className="lg:w-[30px] lg:h-[30px] h-[21.72px] w-[21.72px] sm:h-[27.72px] sm:w-[27.72px]"
          />
        </div>

        <div className="lg:pl-[16px] pl-[7.8px]">
          <button className="hover:text-white h-[25.29px] hover:bg-black transition-all duration-300 leading-[30.32px] text-white lg:w-[119px] lg:h-[40px] w-[66.32px] sm:w-[85.32px] sm:h-[30.29px] lg:rounded-[79px] rounded-[44.03px] bg-[#E9082A] flex items-center justify-center lg:gap-x-[7px] gap-x-[4px] sm:gap-x-[5px]">
            <Image 
              src={"assets/icons/searchbar/magnifier-one.svg"} alt="AI" 
              width={20} 
              height={20}
              className="lg:w-[20px] lg:h-[20px] w-[13.38px] h-[13.38px] sm:w-[15.38px] sm:h-[15.38px]"
            />
            <span className="text-[9.91px] lg:text-[17.78px] sm:text-[12.91px]">Search</span>
          </button>
        </div>

        {/* container of the dropdown content */}
        {tab && (
          <div className="rounded-[10px] dark:bg-neutral-800 absolute w-full h-auto bg-white z-40 search-dropdown-custom-scrollbar top-11 sm:top-12 md:top-14 lg:top-20 p-[30px] shadow-md hidden md:flex">
            {tab == "clock" && (<StayDatesRangeInput/>)}
            {tab == "location" && (<StayLocation/>)}
            {tab == "searchDropdown" && (<StaySearchDropdown/>)}
          </div>
        )}
      </div>
      
      <HeroSearchFormMobile tabMobile={tabMobile} setTabMobile={setTabMobile}/>
    </div>
  );
}

export default SearchBar;