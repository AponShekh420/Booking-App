import Image from "next/image";

import followImgOne from "@/images/home/follow-1.png"
import followImgTwo from "@/images/home/follow-2.png"
import followImgThree from "@/images/home/follow-3.png"
import followImgfour from "@/images/home/follow-4.png"
import { FacebookIcon, InstagramIcon, TwiterIcon } from "@/components/common/Icons";
import Wrapper from "@/components/common/Wrapper";


const FollowSection = () => {
  return (
    <Wrapper>
      <div className="mt-[48.68px]">
        <div className="flex items-center gap-x-[43px]">
          <h1 className="font-[700] text-[80.36px] leading-[96.43px] text-custom-red uppercase">Follow us</h1>
          <div className="flex items-center gap-x-[6px]">
            <div className="w-[54px] h-[54px] border-[1px] border-[#9B9B9B] rounded-full flex items-center justify-center">
              <FacebookIcon className="w-[24px] h-[24px]"/>
            </div>
            <div className="w-[54px] h-[54px] border-[1px] border-[#9B9B9B] rounded-full flex items-center justify-center">
              <TwiterIcon className="w-[20px] h-[17.5px]"/>
            </div>
            <div className="w-[54px] h-[54px] border-[1px] border-[#9B9B9B] rounded-full flex items-center justify-center">
              <InstagramIcon className="w-[20px] h-[20px]"/>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-[10px] mt-[43px]">
          <div className="w-[340px] h-[340px] rounded-[10px]">
            <Image
              alt="instagram feed image"
              src={followImgOne || ''}
              width={100}
              height={100}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="w-[340px] h-[340px] rounded-[10px]">
            <Image
              alt="instagram feed image"
              src={followImgOne || ''}
              width={100}
              height={100}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="w-[340px] h-[340px] rounded-[10px]">
            <Image
              alt="instagram feed image"
              src={followImgOne || ''}
              width={100}
              height={100}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="w-[340px] h-[340px] rounded-[10px]">
            <Image
              alt="instagram feed image"
              src={followImgOne || ''}
              width={100}
              height={100}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default FollowSection;