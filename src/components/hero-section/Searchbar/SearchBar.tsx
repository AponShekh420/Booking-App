"use client"
import Image from "next/image";
import StayDatesRangeInput from "./StayDatesRangeInput";
import { useState } from "react";


const SearchBar = () => {

  const [tab, setTab] = useState<string>("");


  return (
    <div className="xl:mt-[57px] mt-[16.58px] md:mt-[23.58px] lg:mt-[27.58px] xl:w-[945px] lg:w-[800px] md:w-[600px] sm:w-[500px] w-[369px] xl:h-[73px] h-[35px] sm:h-[40px] md:h-[50px] lg:h-[65px] rounded-[41px] bg-white">
      <div className="xl:w-[870px] lg:w-[730px] sm:w-[465px] w-[340px] md:w-[550px] h-full m-auto flex items-center relative">
        <div className="lg:pr-[36px] pr-[11.16px] lg:h-[37px] h-[20.62px] flex items-center border-r-[1px] border-[#D8D8D8]">
          <Image src={"assets/icons/searchbar/AI-icon.svg"} alt="AI" 
            width={100} 
            height={100}
            className="lg:w-[44px] lg:h-[42px] h-[23.41px] w-[24.52px] md:h-[38px] md:w-[40] sm:h-[30.50px] sm:w-[42.50px]"
           />
        </div>
        <div className="w-full flex items-center">
            <input 
            type="text" 
            placeholder="Type, speak, book & search treatments" 
            className="w-full h-full outline-none border-none placeholder-black placeholder-font-normal lg:placeholder:text-[16.35px] placeholder:text-[9.11px] sm:placeholder:text-[12.11px] lg:placeholder:leading-[27.88px] placeholder:leading-[15.54px] border-gray-300 focus:outline-none focus:ring-0 focus:border-transparent py-0 lg:text-[18.35px] text-[9.11px] sm:text-[12.11px] md:text-[16.35px]"
            />
        </div>
        <div className="lg:px-[16px] px-[7.8px] lg:h-[37px] h-[20.62px] flex items-center border-r-[1px] border-[#D8D8D8] cursor-pointer">
          {/* should be change */}
          <Image src={"assets/icons/searchbar/AI-icon.svg"} alt="AI" 
            width={100} 
            height={100}
            className="lg:w-[44px] lg:h-[42px] h-[16.72px] w-[16.72px] sm:h-[24.72px] sm:w-[24.72px]"
          />
        </div>
        <div className="lg:px-[16px] px-[7.8px] lg:h-[37px] h-[20.62px] border-r-[1px] flex items-center cursor-pointer border-[#D8D8D8]" onClick={() => setTab((oldState) => oldState === "clock" ? "" : "clock")}>
          <Image 
            src={"assets/icons/searchbar/Vector.svg"} 
            alt="AI" 
            width={100} 
            height={100}
            className="lg:w-[30px] lg:h-[30px] h-[16.72px] w-[16.72px] sm:h-[27.72px] sm:w-[27.72px]"
          />
        </div>
        <div className="lg:pl-[16px] pl-[7.8px]">
          <button className="leading-[30.32px] text-white lg:w-[119px] lg:h-[40px] w-[66.32px] h-[22.29px] sm:w-[74.32px] sm:h-[30.29px] lg:rounded-[79px] rounded-[44.03px] bg-[#E9082A] flex items-center justify-center lg:gap-x-[7px] gap-x-[4px] sm:gap-x-[5px]">
            <Image 
              src={"assets/icons/searchbar/Magnifier.svg"} alt="AI" 
              width={20} 
              height={20}
              className="lg:w-[20px] lg:h-[20px] w-[13.38px] h-[13.38px] sm:w-[15.38px] sm:h-[15.38px]"
            />
            <span className="text-[9.91px] lg:text-[17.78px] sm:text-[12.91px]">Seach</span>
          </button>
        </div>

        {/* container of the dropdown content */}
        {tab && (
          <div className="flex rounded-3xl dark:bg-neutral-800 absolute w-full h-[376px] bg-white z-40 overflow-y-auto search-dropdown-custom-scrollbar top-11 sm:top-12 md:top-14 lg:top-20">
            {tab == "clock" && (<StayDatesRangeInput/>)}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;