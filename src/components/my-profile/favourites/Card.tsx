import { RatingGroup } from "@/components/common/Icons";
import Image from "next/image";
import propertyImg from "@/images/my-profile/property.png"
import { HeartIcon } from "@heroicons/react/24/outline";
import RedButton from "../RedButton";

const Card = ({title, location, rating, ratingNumber}: {title:string, location: string, rating: number, ratingNumber: number}) => {
  return (
    <div className="border-[#000000] border rounded-[10px] flex justify-between lg:p-4 md:p-2 p-4 gap-x-5">
      {/* image */}
      <div className="lg:min-w-[170px] lg:h-[160.25px] min-w-[150px] h-[140.25px] relative">
        <Image src={propertyImg} alt="property image" className="w-full h-full object-cover" fill/>
      </div>

      {/* title desc and price */}
      <div className="flex min-h-full items-center w-full">
        <div>
          <HeartIcon className="sm:w-6 sm:h-6 text-custom-red lg:w-5 lg:h-5 w-4 h-4"/>
          <p className="mt-1 md:mt-0 lg:mt-1 flex cursor-pointer items-center gap-x-3 font-bold transition-all duration-300 hover:text-custom-red sm:text-[18px] text-[15px] md:text-[14px] lg:text-[16px] xl:text-[18px]">{title}</p>
          <p className="lg:leading-5 sm:leading-5 leading-3 md:leading-3 text-[12px] sm:text-[15px] md:text-[12px] lg:text-[13px] xl:text-[15px] font-semibold">{location}</p>

          <div className="flex gap-x-1 mt-1 xl:mt-1 items-center">
            <p className="leading-7 text-[12px] sm:text-[16px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-semibold">{rating}</p>
            <RatingGroup className="w-16"/>
            <p className="leading-7 text-[12px] sm:text-[16px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-semibold">({ratingNumber})</p>
          </div>

          <button className="px-4 py-[2px] mt-1 bg-custom-red rounded-[52.36px] text-white sm:text-[16.95px] text-[11px]">
            See Services
          </button>
        
        </div>
      </div>
      
    </div>
  );
}

export default Card;