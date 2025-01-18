import ClinicHeadingText from "../ClinicHeadingText";
import { DownArrowIcon, DownloadIcon, LocationIcon, OutlineHeartIcon, RatingGroup, WatchIcon } from "@/components/common/Icons";

const BookingCard = () => {
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
        <div className="flex gap-x-2 items-center font-semibold">
          <WatchIcon/>
          <p><span className="text-custom-red">Open Today</span> 9:30 am–8:30 pm</p>
          <DownArrowIcon className="h-3 w-3"/>
        </div>
        <div className="flex gap-x-2 items-center font-semibold ml-[-3px]">
          <LocationIcon/>
          <p>114 New Cavendish St, London W1W 6XT</p>
          <DownArrowIcon className="h-3 w-3"/>
        </div>
      </div>

      {/* about collapse */}
      <div className="mt-[36px] flex gap-x-3 items-center font-semibold cursor-pointer">
        <h3 className="text-[24px] font-bold">About</h3>
        <DownArrowIcon className="h-3 w-3"/>
      </div>
    </div>
  );
}

export default BookingCard;