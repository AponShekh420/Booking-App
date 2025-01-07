import Image from "next/image";

const StayLocation = () => {
  return (
    <div className="w-full flex-col md:flex-row overflow-y-auto">
      <div className="flex w-full gap-x-[6px] items-center">
        <Image src={"assets/icons/searchbar/location.svg"} alt="AI" 
          width={100} 
          height={100}
          className="lg:w-[25px] lg:h-[25px] h-[17px] w-[17px] sm:h-[21px] sm:w-[21px]"
        />
        <p className="text-[17.12px] font-[700] leading-[33.63px]">Current location</p>
      </div>
    </div>
  );
}

export default StayLocation;