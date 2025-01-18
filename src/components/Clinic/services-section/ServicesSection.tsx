import Wrapper from "@/components/common/Wrapper";
import ClinicHeadingText from "../ClinicHeadingText";
import { HeartIcon } from "@heroicons/react/24/solid";
import { DownArrowIcon, DownloadIcon, RatingGroup, VideoIndicatorIcon, WatchIcon } from "@/components/common/Icons";
import BookingCard from "./BookingCard";
import Image from "next/image";
import video from "@/images/home/video-2.png"
import ReviewSlider from "./ReviewSlider";
import Item from "./Item";

const ServicesSection = () => {
  return (
    <Wrapper>
      <div className="flex gap-x-8 justify-between">
        <div className="w-7/12">
          {/* title */}
          <ClinicHeadingText title="Services"/>

          {/* buttons list */}
          <div className="flex flex-wrap gap-3">
            <button className="py-2 px-7 bg-black rounded-[80.12px] text-white text-[18.03px] hover:bg-custom-red transition-all duration-300 capitalize">Skin</button>
            <button className="py-2 px-7 bg-black rounded-[80.12px] text-white text-[18.03px] hover:bg-custom-red transition-all duration-300 capitalize">Hair</button>
            <button className="py-2 px-7 bg-black rounded-[80.12px] text-white text-[18.03px] hover:bg-custom-red transition-all duration-300 capitalize">Health</button>
            <button className="py-2 px-7 bg-black rounded-[80.12px] text-white text-[18.03px] hover:bg-custom-red transition-all duration-300 capitalize">Rejuvenation</button>
          </div>

          <Item title="PRP Hair Loss Treatment" price={200} time="1h"/>
          <Item title="Non Surgical Nose Job" price={400} time="1h"/>
          <Item title="Skinpen® Microneedling + Exosomes Face & Hair" price={850} time="1h"/>
          <Item title="Profhilo Face or Neck" price={300} time="1h"/>
          <Item title="PRP Hair Loss Treatment" price={200} time="1h"/>


          {/* LAST BUTTON TO SEE MORE */}
          <div className="flex justify-center">
            <button className="py-2 px-7 bg-black rounded-[80.12px] text-white text-[18.03px] hover:bg-custom-red transition-all duration-300 mt-10">See all</button>
          </div>

        </div>
        <div className="w-5/12">
          <BookingCard/>
          
          {/* outline box below of the booking card */}
          <div className="w-full border rounded-[10px] border-[#9B9B9B] p-4 flex justify-between mt-3">
            <div>
              <p className="text-[24px] font-bold">Gift Vouchers</p>
              <p className="text-[16px]">Treat yourself or a friend</p>
            </div>
            <button className="text-[23.22px] font-semibold bg-black hover:bg-custom-red transition-all duration-300 py-2 px-6 text-white rounded-[94.05px]">Book</button>
          </div>
          <div className="w-full border rounded-[10px] border-[#9B9B9B] p-4 flex justify-between mt-3">
            <div>
              <p className="text-[24px] font-bold">Memberships</p>
              <p className="text-[16px]">Buy a bundle of appointments</p>
            </div>
            <button className="text-[23.22px] font-semibold bg-black hover:bg-custom-red transition-all duration-300 py-2 px-6 text-white rounded-[94.05px]">Book</button>
          </div>

        </div>
      </div>
    </Wrapper>
  );
}

export default ServicesSection;