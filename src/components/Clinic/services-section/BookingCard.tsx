"use client"

import { useState } from "react";
import ClinicHeadingText from "../ClinicHeadingText";
import { CircleRightIcon, DownArrowIcon, DownloadIcon, LocationIcon, LocationIconTwo, OutlineHeartIcon, RatingGroup, WatchIcon } from "@/components/common/Icons";
import MapContainer from "./MapContainer";

const BookingCard = () => {
  const [aboutToggle, setAboutToggle] = useState<boolean>(false);
  const [timeToggle, setTimeToggle] = useState<boolean>(false);
  const [locationToggle, setLocationToggle] = useState<boolean>(false);




  return (
    <div className="w-full border rounded-[10px] border-[#9B9B9B] md:p-4 md:py-4 lg:py-6 xl:py-8 p-5">

      {/* title, rating and header-download */}
      <div className="hidden md:block">
        <div className="flex justify-between items-center">
          <h3 className="xl:text-[57.28px] md:text-[27px] lg:text-[35px] font-bold">Dermamina</h3>
          <div className="flex items-center gap-x-4">
            <OutlineHeartIcon className="xl:h-7 xl:w-7 md:h-4 md:w-4 lg:w-6 lg:h-6 cursor-pointer hover:text-custom-red transition-all duration-300"/>
            <DownloadIcon className="xl:h-7 xl:w-7 md:h-4 md:w-4 lg:w-6 lg:h-6 cursor-pointer hover:text-custom-red transition-all duration-300"/>
          </div>
        </div>
        <div className="xl:mt-[14px] md:mt-1 lg:mt-2 flex gap-x-2 items-center justify-start">
          <RatingGroup className="md:w-20 lg:w-24 xl:w-28"/>
          <p>4.9 (292)</p>
        </div>
      </div>

      {/* booking btn */}
      <button className="hidden md:flex w-full xl:h-[57px] md:h-[40px] bg-custom-red rounded-[94.05px] font-semibold text-white xl:text-[23.22px] md:text-[20.22px] items-center justify-center xl:mt-[36px] md:mt-[30px] hover:bg-black transition-all duration-300">Book now</button>

      {/* time and location */}
      <div className="md:mt-[36px] flex flex-col justify-start items-start md:gap-y-4 gap-y-2">

        {/* time */}
        <div className="w-auto relative">
          <div className="flex xl:text-[18.64px] md:text-[14px] lg:text-[16px] text-[14.7px] font-semibold hover:text-custom-red transition-all duration-300 gap-x-2 items-center cursor-pointer" onClick={()=> setTimeToggle(pre => !pre)}>
            <WatchIcon className="md:w-6 md:h-6 w-4 h-4"/>
            <p><span className="text-custom-red">Open Today</span> 9:30 am–8:30 pm</p>
            <DownArrowIcon className="!min-h-3 !min-w-3 max-w-3 max-h-3"/>
          </div>

          <div className={`pl-8 w-full transition-[max-height] ease-in-out overflow-hidden ${timeToggle ? "max-h-[999px] mb-5": "max-h-[0px]"}`}>
            <div className="xl:text-[18.64px] md:text-[14px] lg:text-[16px] text-[14.7px]  flex cursor-pointer gap-x-2 items-center justify-between mt-4 hover:text-custom-red font-semibold transition-all duration-300">
              <p>Monday</p>
              <p>9:30 am–8:30 pm</p>
            </div>
            <div className="xl:text-[18.64px] md:text-[14px] lg:text-[16px] text-[14.7px]  flex cursor-pointer gap-x-2 items-center justify-between mt-4 hover:text-custom-red font-semibold transition-all duration-300">
              <p>Tuesday</p>
              <p>9:30 am–8:30 pm</p>
            </div>
            <div className="xl:text-[18.64px] md:text-[14px] lg:text-[16px] text-[14.7px]  flex cursor-pointer gap-x-2 items-center justify-between mt-4 hover:text-custom-red font-semibold transition-all duration-300">
              <p>Wednesday</p>
              <p>9:30 am–8:30 pm</p>
            </div>
            <div className="xl:text-[18.64px] md:text-[14px] lg:text-[16px] text-[14.7px]  flex cursor-pointer gap-x-2 items-center justify-between mt-4 hover:text-custom-red font-semibold transition-all duration-300">
              <p>Thursday</p>
              <p>9:30 am–8:30 pm</p>
            </div>
            <div className="xl:text-[18.64px] md:text-[14px] lg:text-[16px] text-[14.7px]  flex cursor-pointer gap-x-2 items-center justify-between mt-4 hover:text-custom-red font-semibold transition-all duration-300">
              <p>Friday</p>
              <p>9:30 am–8:30 pm</p>
            </div>
            <div className="xl:text-[18.64px] md:text-[14px] lg:text-[16px] text-[14.7px]  flex cursor-pointer gap-x-2 items-center justify-between mt-4 hover:text-custom-red font-semibold transition-all duration-300">
              <p>Saturday</p>
              <p>9:30 am–8:30 pm</p>
            </div>
            <div className="xl:text-[18.64px] md:text-[14px] lg:text-[16px] text-[14.7px]  flex cursor-pointer gap-x-2 items-center justify-between mt-4 hover:text-custom-red font-semibold transition-all duration-300">
              <p>Sunday</p>
              <p>9:30 am–8:30 pm</p>
            </div>
          </div>
        </div>

        {/* location */}
        <div className="w-full">
          <div className="flex gap-x-2 w-auto items-center xl:text-[18.64px] md:text-[14px] lg:text-[16px] text-[14.7px] font-semibold hover:text-custom-red transition-all duration-300 cursor-pointer" onClick={()=> setLocationToggle(pre => !pre)}>
            <LocationIconTwo className="md:w-6 md:h-6 w-4 h-4"/>
            <p>114 New Cavendish St, London W1W 6XT</p>
            <DownArrowIcon className="!min-h-3 !min-w-3 max-w-3 max-h-3"/>
          </div>
          <div className={`mt-4 text-[24px] w-full transition-[max-height] ease-in-out overflow-hidden ${locationToggle ? "max-h-[999px]": "max-h-[0px]"}`}>
            <MapContainer/>
          </div>
        </div>
      </div>

      {/* about collapse */}
      <div className="xl:mt-[22px] md:mt-2 lg:mt-3 w-full">
        <div className="flex gap-x-3 items-center font-semibold cursor-pointer hover:text-custom-red transition-all duration-300" onClick={()=> setAboutToggle(pre => !pre)}>
          <h3 className="xl:text-[24px] md:text-[18px] lg:text-[20px] text-[20.35px] font-bold">About</h3>
          <DownArrowIcon className="h-3 w-3"/>
        </div>
        <div className={`px-4 xl:text-[24px] md:text-[18px] lg:text-[20px] text-[20.35px] w-full transition-[max-height] ease-in-out overflow-hidden ${aboutToggle ? "max-h-[999px]": "max-h-[0px]"}`}>
          <p className="leading-8 mt-4">
            Dermamina are committed in providing clinically advanced aesthetic  treatments and is renowned for delivering natural looking results. We make sure you are provided with advanced clinical expertise.
          </p>
          <p className="font-bold mt-7">Additional Information</p>
          <div className="flex gap-x-2 items-center mt-4">
            <CircleRightIcon/>
            <p>Instant confirmation</p>
          </div>
          <div className="flex gap-x-2 items-center mt-2">
            <CircleRightIcon/>
            <p>Pay on Gentlemend</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCard;