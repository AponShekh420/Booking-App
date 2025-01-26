import Image from "next/image";
import ProfileHeading from "../ProfileHeading";
import logo from '@/images/logo/white-logo.svg'

const Card = () => {
  return (
    <div className="w-full">
      <ProfileHeading className="mb-5" title="Gift Wallet"/>

      <div className="w-11/12 m-auto rounded-[10px] xl:px-10 py-10 px-8 bg-gradient-to-t from-[#830418] to-[#E9082A] shadow-md shadow-gray-500">
        <div className="flex w-full justify-between items-center mb-0">
          <div>
            <h3 className="lg:text-[81.51px] text-4xl xs:text-5xl text-white font-bold">£0.00</h3>
          </div>
          <div className="lg:w-[159.19px] lg:h-[33px] w-24 h-8 xs:w-36 xs:h-10 relative">
            <Image src={logo} alt="logo" className="w-full h-full" fill/>
          </div>
        </div>
        
        <div className="w-full mt-0">
          <p className="lg:text-[28.68px] text-lg sm:text-2xl font-body text-white">Wallet balance</p>
        </div>

        <div className="w-full pl-3 overflow-hidden bg-white rounded-[71.68px] flex justify-between items-center xl:mt-16 mt-4 sm:mt-11 md:mt-7 lg:mt-11 lg:h-[47px] h-9 xs:h-10 sm:h-11 md:h-10">
          <input type="text" placeholder="Enter gift code" className="py-3 placeholder:text-[#9B9B9B] placeholder:font-semibold w-full h-full placeholder:text-[14.79px] outline-none border-none focus:outline-none focus:border-none focus:ring-0 text-black font-semibold text-[14.79px]"/>
          <button className="lg:text-[23.2px] text-md sm:text-lg md:text-md font-body bg-custom-red lg:w-[191px] w-32 md:text-32 sm:w-36 h-full text-white">Add Code</button>
        </div>
      </div>
    </div>
  );
}

export default Card;