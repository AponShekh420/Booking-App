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
      <div className="rounded-[10px] border border-[#9B9B9B] p-6 mt-[32px]">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[24px] font-semibold">{title}<br/>
            <span className="font-bold">£{price}</span> - <span className="font-body font-[400]">{time}</span>
            </p>
            <p className="flex gap-x-3 font-bold text-[24px] items-center mt-3 cursor-pointer hover:text-custom-red transition-all duration-300" onClick={() => setToggle((pre => !pre))}>
              Show details
              <DownArrowIcon/>
            </p>
          </div>
          <button className="text-[23.22px] font-semibold bg-black hover:bg-custom-red transition-all duration-300 py-3 px-6 text-white rounded-[94.05px]">Book</button>
        </div>

        <div className={`transition-[max-height] duration-300 delay-0 ease-in-out overflow-hidden ${toggle ? "max-h-[9999px]" : "max-h-[0px]"}`}>
          {/* video column*/}
          <div className="flex gap-x-8 justify-between mt-[31px]">
            <p className="text-[24px] whitespace-normal leading-8 mt-2">PRP treatment can help support wound healing in trauma and joint injury. The technique can address male pattern baldness, stimulate the growth  of hair transplants and enhance other cosmetic procedures.</p>
            <div className="min-w-[319px] min-h-[270px] rounded-[10px] relative overflow-hidden">
              <Image src={video} alt="video" className="object-cover w-full h-full object-top" fill/>
              <VideoIndicatorIcon className="absolute left-1/2 top-1/2 !z-[10] -translate-x-1/2 -translate-y-1/2 text-white hover:text-custom-red h-20 w-20 cursor-pointer"/>
              <p className="text-[17.65px] leading-[25px] absolute bottom-2 z-30 text-white left-3">Dr. Van Der Press  - Dermamina</p>
            </div>
          </div>

          {/* service review */}
          <div>
            <p className="text-[24px] font-semibold mt-8">Service Review</p>
            
            {/* box container or slider container */}
            <div className="flex gap-x-10 mt-7">
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