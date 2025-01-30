"use client"
import { BackIcon, CircleRightIcon, CrossIcon, DownArrowIcon, RightArrowIcon, RightCircleIcon, UkFlagIcon } from "../../Icons";
import Title from "../Title";
import Subtitle from "../Subtitle";
import { useState } from "react";

const Consents = () => {
  const [userRole, setUserRole] = useState<string>("user");

  return (
    <div className="sm:w-[605.65px] min-h-screen sm:min-h-fit w-full bg-white sm:rounded-[33.83px] sm:p-8 px-8 py-4 flex flex-col items-center shadow-lg">

      {/* common content like title, subtitle and cross btn etc */}
      <div className="w-full flex justify-between mb-2 items-center">
        <BackIcon className="cursor-pointer hover:text-custom-red transition-all duration-300 w-5 h-5"/>
        <CrossIcon className="cursor-pointer hover:text-custom-red transition-all duration-300 w-4 h-4"/>
      </div>

      <Title title="Consents" className="!mt-2"/>
      {/* common end */}

      {/* content */}
      <div className="w-full xs:mt-7 mt-6">
        
        <div className="flex xs:gap-x-7 gap-x-2 items-center justify-between">
          <div className="flex gap-x-4">
            <RightCircleIcon className="xs:min-w-7 min-w-5 max-w-5 xs:max-w-7"/>
            <p className="xs:text-lg sm:text-xl text-md">Select All</p>
          </div>
        </div>

        <div className="flex xs:gap-x-7 gap-x-2 items-center justify-between mt-6">
          <div className="flex xs:gap-x-4 gap-x-2">
            <RightCircleIcon className="xs:min-w-7 min-w-5 max-w-5 xs:max-w-7"/>
            <p className="xs:text-lg sm:text-xl text-md">Acceptance of the Terms of Service and
            confirmation of having read the privacy
            Policy <span className="font-extrabold text-custom-red">Required</span>
            </p>
          </div>
          <RightArrowIcon className="xs:min-w-5 xs:max-w-5 xs:min-h-5 xs:max-h-5 max-w-3 max-h-3 min-h-3 min-w-3"/>
        </div>

        <div className="flex xs:gap-x-7 gap-x-2 items-center justify-between mt-6">
          <div className="flex xs:gap-x-4 gap-x-2">
            <RightCircleIcon className="xs:min-w-7 min-w-5 max-w-5 xs:max-w-7"/>
            <p className="xs:text-lg sm:text-xl text-md">Consent to receiving Gentlemend offers </p>
          </div>
          <RightArrowIcon className="xs:min-w-5 xs:max-w-5 xs:min-h-5 xs:max-h-5 max-w-3 max-h-3 min-h-3 min-w-3"/>
        </div>

        <div className="flex xs:gap-x-7 gap-x-2 items-center justify-between mt-6">
          <div className="flex xs:gap-x-4 gap-x-2">
            <RightCircleIcon className="xs:min-w-7 min-w-5 max-w-5 xs:max-w-7"/>
            <p className="xs:text-lg sm:text-xl text-md">Consent to receiving offers of parties
            cooperating with Gentlemend</p>
          </div>
          <RightArrowIcon className="xs:min-w-5 xs:max-w-5 xs:min-h-5 xs:max-h-5 max-w-3 max-h-3 min-h-3 min-w-3"/>
        </div>


      </div>

      {/* content end */}

      <button className="w-full xs-h-[50px] h-[45px] rounded-[52.33px] bg-custom-red hover:bg-black transition-all duration-300 text-white mt-10 text-xl capitalize">continue</button>


    </div>
  );
}

export default Consents;