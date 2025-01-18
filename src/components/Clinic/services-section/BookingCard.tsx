"use client"

import { useState } from "react";
import ClinicHeadingText from "../ClinicHeadingText";
import { CircleRightIcon, DownArrowIcon, DownloadIcon, LocationIcon, OutlineHeartIcon, RatingGroup, WatchIcon } from "@/components/common/Icons";
import MapContainer from "./MapContainer";

const BookingCard = () => {
  const [aboutToggle, setAboutToggle] = useState<boolean>(false);
  const [timeToggle, setTimeToggle] = useState<boolean>(false);
  const [locationToggle, setLocationToggle] = useState<boolean>(false);




  return (
    <div className="w-full border rounded-[10px] border-[#9B9B9B] p-4">

      {/* title, rating and header-download */}
      <div>
        <div className="flex justify-between items-center">
          <ClinicHeadingText title="Dermamina"/>
          <div className="flex items-center gap-x-4">
            <OutlineHeartIcon className="h-7 w-7 cursor-pointer hover:text-custom-red transition-all duration-300"/>
            <DownloadIcon className="h-7 w-7 cursor-pointer hover:text-custom-red transition-all duration-300"/>
          </div>
        </div>
        <div className="mt-[14px]">
          <RatingGroup/>
        </div>
      </div>

      {/* booking btn */}
      <button className="w-full h-[57px] bg-custom-red rounded-[94.05px] font-semibold text-white text-[23.22px] flex items-center justify-center mt-[36px] hover:bg-black transition-all duration-300">Book now</button>

      {/* time and location */}
      <div className="mt-[36px] flex flex-col justify-start items-start gap-y-2">

        {/* time */}
        <div className="w-auto relative">
          <div className="flex text-[18.64px] font-semibold hover:text-custom-red transition-all duration-300 gap-x-2 items-center cursor-pointer" onClick={()=> setTimeToggle(pre => !pre)}>
            <WatchIcon/>
            <p><span className="text-custom-red">Open Today</span> 9:30 am–8:30 pm</p>
            <DownArrowIcon className="h-3 w-3"/>
          </div>

          <div className={`pl-8 w-full transition-[max-height] ease-in-out overflow-hidden ${timeToggle ? "max-h-[999px] mb-5": "max-h-[0px]"}`}>
            <div className="flex cursor-pointer gap-x-2 items-center justify-between mt-4 hover:text-custom-red text-[18.64px] font-semibold transition-all duration-300">
              <p>Monday</p>
              <p>9:30 am–8:30 pm</p>
            </div>
            <div className="flex cursor-pointer gap-x-2 items-center justify-between mt-4 hover:text-custom-red text-[18.64px] font-semibold transition-all duration-300">
              <p>Tuesday</p>
              <p>9:30 am–8:30 pm</p>
            </div>
            <div className="flex cursor-pointer gap-x-2 items-center justify-between mt-4 hover:text-custom-red text-[18.64px] font-semibold transition-all duration-300">
              <p>Wednesday</p>
              <p>9:30 am–8:30 pm</p>
            </div>
            <div className="flex cursor-pointer gap-x-2 items-center justify-between mt-4 hover:text-custom-red text-[18.64px] font-semibold transition-all duration-300">
              <p>Thursday</p>
              <p>9:30 am–8:30 pm</p>
            </div>
            <div className="flex cursor-pointer gap-x-2 items-center justify-between mt-4 hover:text-custom-red text-[18.64px] font-semibold transition-all duration-300">
              <p>Friday</p>
              <p>9:30 am–8:30 pm</p>
            </div>
            <div className="flex cursor-pointer gap-x-2 items-center justify-between mt-4 hover:text-custom-red text-[18.64px] font-semibold transition-all duration-300">
              <p>Saturday</p>
              <p>9:30 am–8:30 pm</p>
            </div>
            <div className="flex cursor-pointer gap-x-2 items-center justify-between mt-4 hover:text-custom-red text-[18.64px] font-semibold transition-all duration-300">
              <p>Sunday</p>
              <p>9:30 am–8:30 pm</p>
            </div>
          </div>
        </div>

        {/* location */}
        <div className="w-full">
          <div className="flex gap-x-2 w-full items-center text-[18.64px] font-semibold ml-[-3px] hover:text-custom-red transition-all duration-300 cursor-pointer" onClick={()=> setLocationToggle(pre => !pre)}>
            <LocationIcon/>
            <p>114 New Cavendish St, London W1W 6XT</p>
            <DownArrowIcon className="h-3 w-3"/>
          </div>
          <div className={`mt-4 text-[24px] w-full transition-[max-height] ease-in-out overflow-hidden ${locationToggle ? "max-h-[999px]": "max-h-[0px]"}`}>
            <MapContainer/>
          </div>
        </div>
      </div>

      {/* about collapse */}
      <div className="mt-[22px] w-full pb-5">
        <div className="flex gap-x-3 items-center font-semibold cursor-pointer hover:text-custom-red transition-all duration-300" onClick={()=> setAboutToggle(pre => !pre)}>
          <h3 className="text-[24px] font-bold">About</h3>
          <DownArrowIcon className="h-3 w-3"/>
        </div>
        <div className={`px-4 text-[24px] w-full transition-[max-height] ease-in-out overflow-hidden ${aboutToggle ? "max-h-[999px]": "max-h-[0px]"}`}>
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