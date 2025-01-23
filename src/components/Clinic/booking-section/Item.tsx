"use client"
import { DownArrowIcon, VideoIndicatorIcon } from "@/components/common/Icons"
import ReviewSlider from "./ReviewSlider"
import Image from "next/image"
import video from "@/images/home/video-2.png"
import { FC, useState } from "react"

interface ServiceItemProps {
  title: string,
  price: number,
  time: string,
}

const Item:FC<ServiceItemProps> = ({title, price, time}) => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <div className="rounded-[10px] border border-[#9B9B9B] p-4 md:mt-[32px] mt-3">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold leading-7 text-[16px] md:text-[12px] lg:text-[16px]">{title}<br/>
            <span className="font-bold">£{price}</span> - <span className="font-body font-[400]">{time}</span>
            </p>
            <p className="mt-1 flex cursor-pointer items-center gap-x-3 font-bold transition-all duration-300 hover:text-custom-red text-[16px] md:text-[12px] lg:text-[16px]" onClick={() => setToggle((pre => !pre))}>
              Show details
              <DownArrowIcon/>
            </p>
          </div>
          <button className="lg:text-[23.22px] text-[23.22px] md:text-[18px] md:py-2 md:px-4 lg:py-2 lg:px-6 py-2 px-6 font-semibold bg-black hover:bg-custom-red transition-all duration-300 text-white rounded-[94.05px]">Add</button>
        </div>

        <div className={`transition-[max-height] duration-300 delay-0 ease-in-out overflow-hidden ${toggle ? "max-h-[9999px]" : "max-h-[0px]"}`}>
          {/* video column*/}
          <div className="flex gap-x-8 justify-between md:mt-[31px] mt-3 lg:flex-row flex-col">
            <p className="mb-2 mt-1 whitespace-normal leading-8 lg:mb-0 lg:mt-2 text-[16px] md:text-[12px] lg:text-[16px]">PRP treatment can help support wound healing in trauma and joint injury. The technique can address male pattern baldness, stimulate the growth  of hair transplants and enhance other cosmetic procedures.</p>
            <div className="xl:min-w-[319px] xl:min-h-[270px] lg:min-w-[240px] lg:min-h-[180px] lg:max-h-[180px] rounded-[10px] w-full h-60 relative overflow-hidden sm:min-h-[400px] max-h-[270px] xs:min-h-[380px]">
              <Image src={video} alt="video" className="object-cover w-full h-full object-top" fill/>
              <VideoIndicatorIcon className="absolute left-1/2 top-1/2 !z-[10] -translate-x-1/2 -translate-y-1/2 text-white hover:text-custom-red xl:h-20 xl:w-20 lg:h-10 lg:w-10 w-20 h-20 cursor-pointer"/>
              <p className="xl:text-[17.65px] lg:text-[15px] text-[17.65px] leading-[25px] absolute bottom-2 z-30 text-white left-3">Dr. Van Der Press  - Dermamina</p>
            </div>
          </div>

          {/* service review */}
          <div>
            <p className="lg:text-[24px] text-[16.74px] md:text-[18px] font-semibold md:mt-8 mt-10">Service Review</p>
            
            {/* box container or slider container */}
            <div className="flex gap-x-10 md:mt-1">
              {/* review box slider */}
              <ReviewSlider/>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Item;