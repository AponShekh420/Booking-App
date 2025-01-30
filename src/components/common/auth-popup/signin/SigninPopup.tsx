"use client"

import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import { AppleIcon, CrossIcon, FacebookColorIcon, GoogleColorIcon } from "../../Icons";
import Title from "../Title";
import Subtitle from "../Subtitle";
import { useState } from "react";



const SigninPopup = () => {
  const [userRole, setUserRole] = useState<string>("user");



  return (
    <div className="sm:w-[605.65px] min-h-screen sm:min-h-fit w-full bg-white sm:rounded-[33.83px] sm:p-8 px-8 py-4 flex flex-col items-center shadow-lg">

      {/* common content like title, subtitle and cross btn etc */}
      <div className="w-full flex justify-end mb-5 items-center">
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

      
      <Title title="Get Started"/>
      <Subtitle subtitle="Create an account or log in to book and manage your appointments"/>

      <div className="w-full xs:h-[50px] h-[45px] rounded-[52.33px] p-2 pl-5 border-black border flex justify-between items-center overflow-hidden xs:mt-10 mt-6">
        <input type="email" placeholder="Enter your email" className="p-0 w-full h-full focus:ring-0 focus:border-none focus:outline-none border-none outline-none placeholder:font-semibold font-semibold text-black"/>
        <button className="xs:px-4 px-3 h-full bg-custom-red hover:bg-black text-white rounded-[54.4px] sm:text-lg text-sm">
          Continue
        </button>
      </div>
      {/* common end */}


      {/* divider */}
      <div className="flex items-center mt-8 w-full gap-x-3">
        <hr className="w-full border-[#9B9B9B] border-b"/>
        <p className="text-lg">Or</p>
        <hr className="w-full border-[#9B9B9B] border-b"/>
      </div>
      {/* divider end */}


      {/* social login btn */}
      <button className="w-full xs:h-[50px] h-[45px] gap-x-3 rounded-[52.33px] p-2 border-black border flex justify-center items-center overflow-hidden mt-8 xs:text-xl text-lg hover:bg-black hover:text-white transition-all duration-300">
        <FacebookColorIcon className="xs:w-7 w-6"/>
        <p>
          Continue with facebook
        </p>
      </button>
      <button className="w-full xs:h-[50px] h-[45px] gap-x-3 rounded-[52.33px] p-2 border-black border flex justify-center items-center overflow-hidden mt-3 xs:text-xl text-lg hover:bg-black hover:text-white transition-all duration-300">
        <AppleIcon className="xs:w-7 w-6"/>
        <p>
          Continue with Apple
        </p>
      </button>
      <button className="w-full xs:h-[50px] h-[45px] gap-x-3 rounded-[52.33px] p-2 border-black border flex justify-center items-center overflow-hidden mt-3 xs:text-xl text-lg hover:bg-black hover:text-white transition-all duration-300">
        <GoogleColorIcon className="xs:w-7 w-6"/>
        <p>
          Continue with Google
        </p>
      </button>
      {/* social icon end */}


    </div>
  );
}

export default SigninPopup;