import { CalendarIcon, LocationIconTwo, PenIcon, RatingGroup } from "@/components/common/Icons";
import Image from "next/image";
import propertyImg from "@/images/my-profile/property.png"
import ProfileHeading from "./ProfileHeading";

const UpcomingAppointment = () => {
  return (
    <div className="w-full">
      <ProfileHeading className="mt-10 mb-5" title="Upcoming appointment"/>

      <div className="w-11/12 m-auto border-[#000000] border rounded-[10px] flex justify-between lg:p-4 md:p-2 p-4 gap-3">

        {/* image */}
        <div className="w-[183px] h-[173.25px] relative">
          <Image src={propertyImg} alt="property image" className="w-full h-full object-cover" fill/>
        </div>

        {/* title desc and price */}
        <div className="border-r-black border-r flex min-h-full items-center px-2 lg:w-4/12 md:w-5/12 w-4/12">
          <div>
            <p className="leading-4 xl:leading-5 text-[16px] md:text-[12px] lg:text-[14px] xl:text-[16px] transition-all duration-300 hover:text-custom-red cursor-pointer">
              <span className="font-semibold"> PRP Hair Loss Treatment</span>
              <br />
              <span className="font-body">
              1hr - With Olga</span>
            </p>
            <p className="mt-1 md:mt-[2px] lg:mt-1 flex cursor-pointer items-center gap-x-3 font-bold transition-all duration-300 hover:text-custom-red text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px]">£200</p>

            <p className="mt-1 md:mt-0 lg:mt-1 flex cursor-pointer items-center gap-x-3 font-bold transition-all duration-300 hover:text-custom-red text-[18px] md:text-[14px] lg:text-[16px] xl:text-[18px]">Hanley Laser Clinic</p>

            <p className="lg:leading-5 leading-5 md:leading-3 text-[16px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-semibold">114 New Cavendish St, London </p>

            <div className="flex gap-x-1 mt-1 xl:mt-1 items-center">
              <p className="leading-7 text-[16px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-semibold">5.0</p>
              <RatingGroup className="w-16"/>
              <p className="leading-7 text-[16px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-semibold">(1223)</p>
            </div>
          
          </div>
        </div>

        
        {/* time */}
        <div className="lg:w-4/12 md:w-3/12 flex w-4/12">
          <div className="flex flex-col justify-center items-center h-full w-full">
            <p className="md:leading-6 leading-10 lg:leading-10 text-[16px] md:text-[12px] lg:text-[16px] font-semibold">DEC</p>
            <p className="md:leading-6 leading-10 lg:leading-10 text-[75.41px] md:text-[45px] lg:text-[75.41px]">23</p>
            <p className="md:leading-6 leading-10 lg:leading-10 text-[16px] md:text-[12px] lg:text-[16px] font-semibold">10:30am</p>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <CalendarIcon className="hover:text-custom-red transition-all duration-300 cursor-pointer md:w-3 lg:w-5"/>
              <LocationIconTwo className="lg:mt-4 md:mt-1 mt-4 hover:text-custom-red transition-all duration-300 cursor-pointer md:w-3 lg:w-5"/>
            </div>
            <PenIcon className="hover:text-custom-red transition-all duration-300 cursor-pointer md:w-3 lg:w-5"/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default UpcomingAppointment;