"use client"

import { BackIcon, CrossIcon, DownArrowIcon, UkFlagIcon } from "../../Icons";
import Title from "../Title";
import Subtitle from "../Subtitle";
import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";


const SingupPopup = () => {
  const [userRole, setUserRole] = useState<string>("user");
  const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<boolean>(false);
  // const [CountryCode, setCountryCode] = useState<string>("");
  // const [CountryFlag, setCountryFlag] = useState<any>(null);

  // const handler = ({code, flag}: {code: string, flag: any}) => {
  //   setCountryCode(code);
  //   setCountryFlag(flag);
  // };
  

  return (
    <div className="sm:w-[605.65px] min-h-screen sm:min-h-fit w-full bg-white sm:rounded-[33.83px] sm:p-8 px-8 py-4 flex flex-col items-center shadow-lg">

      {/* common content like title, subtitle and cross btn etc */}
      <div className="w-full flex justify-between mb-5 items-center">
        <BackIcon className="cursor-pointer hover:text-custom-red transition-all duration-300 w-5"/>
        <CrossIcon className="cursor-pointer hover:text-custom-red transition-all duration-300 w-4"/>
      </div>


      <div className="flex justify-center">
        <div className="bg-[#EBEBEB] shadow-inner shadow-gray-400 rounded-[94.89px] relative overflow-hidden">
          <div 
            className={`w-6/12 h-full absolute bg-custom-red rounded-[94.89px] transition-transform duration-300 ease-in-out top-0 z-0`}
            style={{ transform: userRole === "user" ? "translateX(0%)" : "translateX(100%)", willChange: "transform" }}
          ></div>
          
          <button 
            className={`py-1 px-7 text-lg capitalize ${userRole === "user" ? "text-white" : "text-[#787878]"} z-10 bg-transparent relative transition-all duration-300 ease-in-out`}
            onClick={() => setUserRole("user")}
          >
            user
          </button>
          
          <button 
            className={`py-1 px-7 text-lg capitalize ${userRole === "clinic" ? "text-white" : "text-[#787878]"} z-10 bg-transparent relative transition-all duration-300 ease-in-out`}
            onClick={() => setUserRole("clinic")}
          >
            clinic
          </button>
        </div>
      </div>

      
      <Title title="Create an account"/>
      <Subtitle subtitle="Fill in your details to get started with Gentlemend" className="sm:!w-10/12"/>
      {/* common end */}

      {/* input */}
      <div className="w-full xs:mt-7 mt-6">
        <label htmlFor="email" className="pl-5 mb-1">Email</label>
        <div className="w-full xs:h-[50px] h-[45px] rounded-[52.33px] p-2 px-5 border-black border flex justify-between items-center overflow-hidden">
          <input type="email" id="email" placeholder="Enter your email" className="p-0 w-full h-full focus:ring-0 focus:border-none focus:outline-none border-none outline-none placeholder:font-semibold font-semibold text-black"/>
        </div>
      </div>

      <div className="w-full xs:h-[50px] h-[45px] rounded-[52.33px] p-2 px-5 border-black border flex justify-between items-center overflow-hidden mt-3 xs:mt-4">
        <input type="text" id="fullname" placeholder="First and Last Name" className="p-0 w-full h-full focus:ring-0 focus:border-none focus:outline-none border-none outline-none placeholder:font-semibold font-semibold text-black"/>
      </div>

      <div className="w-full mt-3 xs:mt-4">
        <div className="w-full xs:h-[50px] h-[45px] rounded-[52.33px] p-2 px-5 gap-x-4 border-black border flex justify-between items-center">
          <div className="relative">
            <div className="flex gap-x-2 items-center font-semibold cursor-pointer hover:text-custom-red transition-all duration-300" onClick={()=> setDropdown(pre => !pre)}>
              <UkFlagIcon className="w-6"/>
              <span>+44</span>
              <DownArrowIcon className="w-3"/>
            </div>

            <ul className={`absolute bg-gray-300 shadow-lg top-6 rounded-md overflow-hidden font-semibold ${dropdown ? "block" : "hidden"}`}>
              <li className="flex gap-x-2 items-center py-2 px-5 hover:bg-custom-red hover:text-white transition-all cursor-pointer border-b-gray-500 border-b">
                <UkFlagIcon className="w-6"/>
                <span>+44</span>
              </li>
              <li className="flex gap-x-2 items-center py-2 px-5 hover:bg-custom-red hover:text-white transition-all cursor-pointer border-b-gray-500 border-b">
                <UkFlagIcon className="w-6"/>
                <span>+44</span>
              </li>
              <li className="flex gap-x-2 items-center py-2 px-5 hover:bg-custom-red hover:text-white transition-all cursor-pointer border-b-gray-500 border-b">
                <UkFlagIcon className="w-6"/>
                <span>+44</span>
              </li>
              <li className="flex gap-x-2 items-center py-2 px-5 hover:bg-custom-red hover:text-white transition-all cursor-pointer">
                <UkFlagIcon className="w-6"/>
                <span>+44</span>
              </li>
            </ul>
            
          </div>
          <input type="number" id="phone" placeholder="Phone Number" className="p-0 w-full h-full focus:ring-0 focus:border-none focus:outline-none border-none outline-none placeholder:font-semibold font-semibold text-black"/>
        </div>
        <p className="pl-5 mt-1">We will send a confirmation code to your phone number.</p>
      </div>

      <div className="w-full mt-4 xs:mt-5">
        <label htmlFor="email" className="pl-5 mb-1">Password</label>
        <div className="w-full xs:h-[50px] h-[45px] rounded-[52.33px] p-2 px-5 border-black border flex justify-between items-center overflow-hidden">
          <input type={isEyeOpen ? "text" : "password"} id="password" placeholder="Set Password" className="p-0 w-full h-full focus:ring-0 focus:border-none focus:outline-none border-none outline-none placeholder:font-semibold font-semibold text-black"/>
          {isEyeOpen ? (
            <EyeIcon
                className="text-[1.5rem] text-black transition-all duration-300 hover:text-custom-red cursor-pointer w-7"
                onClick={() => setIsEyeOpen(false)}
            />
          ) : (
            <EyeSlashIcon
                className="text-[1.5rem] text-black hover:text-custom-red transition-all duration-300 cursor-pointer w-7"
                onClick={() => setIsEyeOpen(true)}
            />
          )}
        </div>
        <p className="pl-5 mt-1">Password must at 8 characters long<br/>
        and must contain at least one number and one letter</p>
      </div>
      {/* input end */}

      <button className="w-full xs-h-[50px] h-[45px] rounded-[52.33px] bg-custom-red hover:bg-black transition-all duration-300 text-white mt-10 text-xl capitalize">continue</button>


    </div>
  );
}

export default SingupPopup;