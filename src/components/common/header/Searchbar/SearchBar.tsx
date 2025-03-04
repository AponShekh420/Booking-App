"use client"
import Image from "next/image";
import StayDatesRangeInput from "./StayDatesRangeInput";
import { useEffect, useRef, useState } from "react";
import StayLocation from "./StayLocation";
import StaySearchDropdown from "./StaySearchDropdown";
import HeroSearchFormMobile from "./HeroSearchFormMobile";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addSearchValue } from "@/redux-toolkit/common/headerSlice";
import { useAppDispatch, useAppSelector } from "@/redux-toolkit/hooks";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const [tab, setTab] = useState<string>("");
  const [tabMobile, setTabMobile] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();
  const {searchValue} = useAppSelector(state => state.headerReducer);

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
      className="w-full xl:h-[60px] h-[40px] xs:h-[43px] sm:h-[40px] md:h-[47px] lg:h-[50px] rounded-[76px] bg-white py-2 border-[1px] border-black px-2 xl:px-5 lg:px-3"
      ref={containerRef}
    >
      <div className="w-full h-full m-auto flex items-center relative justify-center">
        <div className="xl:pr-[36px] sm:flex hidden pr-[9.16px] xs:pr-[11.16px] pl-2 xs:pl-0 lg:h-[37px] h-[20.62px] items-center border-r-[1px] border-[#D8D8D8]">
          <Image src={"/assets/icons/searchbar/aiicon.svg"} alt="AI" 
            width={100} 
            height={100}
            className="lg:w-[60px] lg:h-[60px] h-[23.41px] w-[24.52px] md:h-[27px] md:w-[39px] sm:h-[30.50px] sm:w-[42.50px]"
           />
        </div>

        <div onClick={()=> router.back()} className="lg:min-h-[37px] lg:min-w-[37px] min-h-[20.62px] min-w-[20.62px]  items-center justify-center rounded-full border-[0.92px] border-[#9B9B9B] sm:hidden flex">
          <Image
            src={'/assets/icons/categories/Arrows/left-arrow.svg'}
            alt="right arrow"
            width={6.13}
            height={11.71}
          />
        </div>

        {/* for desktop */}
        <div className="w-full items-center hidden md:flex" onClick={() => setTab("searchDropdown")}>
            <input 
            onChange={(e)=> dispatch(addSearchValue(e.target.value))}
            value={searchValue}
            type="text" 
            placeholder="Type, speak, book & search treatments" 
            className="w-full h-full outline-none border-none placeholder-black placeholder-font-normal lg:placeholder:text-[16.35px] placeholder:text-[9.11px] sm:placeholder:text-[12.11px] lg:placeholder:leading-[27.88px] placeholder:leading-[15.54px] border-gray-300 focus:outline-none focus:ring-0 focus:border-transparent py-0 lg:text-[18.35px] text-[9.11px] sm:text-[12.11px] md:text-[16.35px]"
            />
        </div>

        {/* for mobile */}
        <div className="w-full items-center flex md:hidden" onClick={() => setTabMobile(true)}>
          <input 
          onChange={(e)=> dispatch(addSearchValue(e.target.value))}
          value={searchValue}
          type="text" 
          placeholder="Type, speak, book & search treatments" 
          className="w-full h-full outline-none border-none placeholder-black placeholder-font-normal lg:placeholder:text-[16.35px] placeholder:text-[9.11px] sm:placeholder:text-[12.11px] lg:placeholder:leading-[27.88px] placeholder:leading-[15.54px] border-gray-300 focus:outline-none focus:ring-0 focus:border-transparent py-0 lg:text-[18.35px] text-[9.11px] sm:text-[12.11px] md:text-[16.35px]"
          />
        </div>

        {/* desktop */}
        <div className="lg:px-[16px] px-[7.8px] lg:h-[37px] h-[20.62px] hidden md:flex items-center border-r-[1px] border-[#D8D8D8] cursor-pointer" onClick={() => setTab((oldState) => oldState === "location" ? "" : "location")}>
          {/* should be change */}
          <Image src={"/assets/icons/searchbar/location.svg"} alt="AI" 
            width={100} 
            height={100}
            className="xl:w-[25px] xl:h-[25px] h-[17px] w-[17px] sm:h-[21px] sm:w-[21px] lg:w-[30px] lg:h-[30px]"
          />
        </div>


        {/* mobile */}
        <div className="lg:px-[16px] px-[7.8px] lg:h-[37px] h-[20.62px] flex md:hidden items-center border-r-[1px] border-[#D8D8D8] cursor-pointer" onClick={() => setTabMobile(true)}>
          {/* should be change */}
          <Image src={"/assets/icons/searchbar/location.svg"} alt="AI" 
            width={100} 
            height={100}
            className="lg:w-[25px] lg:h-[25px] h-[17px] w-[17px] sm:h-[21px] sm:w-[21px]"
          />
        </div>

        {/* desktop */}
        <div className="lg:px-[16px] px-[7.8px] lg:h-[37px] h-[20.62px] border-r-[1px] hidden md:flex items-center cursor-pointer border-[#D8D8D8]" onClick={() => setTab((oldState) => oldState === "clock" ? "" : "clock")}>
          <Image 
            src={"/assets/icons/searchbar/vector-one.svg"} 
            alt="AI" 
            width={100} 
            height={100}
            className="xl:w-[30px] xl:h-[30px] h-[21.72px] w-[21.72px] sm:h-[27.72px] sm:w-[27.72px] lg:w-[35px] lg:h-[35px]"
          />
        </div>


        {/* mobile */}
        <div className="lg:px-[16px] px-[7.8px] lg:h-[37px] h-[20.62px] border-r-[1px] flex md:hidden items-center cursor-pointer border-[#D8D8D8]" onClick={() => setTabMobile(true)}>
          <Image 
            src={"/assets/icons/searchbar/vector-one.svg"} 
            alt="AI" 
            width={100} 
            height={100}
            className="lg:w-[30px] lg:h-[30px] h-[21.72px] w-[21.72px] sm:h-[27.72px] sm:w-[27.72px]"
          />
        </div>

        <div className="lg:pl-[16px] pl-[7.8px]">
          <Link href={'/category'} className="hover:text-white h-[25.29px] hover:bg-black transition-all duration-300 leading-[30.32px] text-white xl:w-[119px] xl:h-[40px] lg:w-[105px] lg:h-[35px] w-[66.32px] sm:w-[75.32px] sm:h-[25.29px] lg:rounded-[79px] rounded-[44.03px] bg-[#E9082A] flex items-center justify-center xl:gap-x-[7px] lg:gap-x-1 gap-x-[4px] sm:gap-x-[3px] md:h-[30px]">
            <Image 
              src={"/assets/icons/searchbar/magnifier-one.svg"} alt="AI" 
              width={20} 
              height={20}
              className="xl:w-[20px] xl:h-[20px] w-[13.38px] h-[13.38px] sm:w-[13.38px] sm:h-[13.38px] md:h-[14px] md:w-[14px] lg:w-[18px] lg:h-[18px]"
            />
            <span className="text-[9.91px] xl:text-[17.78px] lg:text-[16.78px] sm:text-[12.91px] md:text-[13px]">Search</span>
          </Link>
        </div>

        {/* container of the dropdown content */}
        {tab && (
          <div className="rounded-[10px] !z-50 dark:bg-neutral-800 absolute w-full md:min-w-[700px] md:justify-center h-auto bg-white search-dropdown-custom-scrollbar top-11 sm:top-12 md:top-14 lg:top-20 p-[30px] shadow-md hidden md:flex">
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