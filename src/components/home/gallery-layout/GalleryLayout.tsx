import CardCategory from "./CardCategory";
import ImageTwo from "@/images/home/box-layout-2.png"
import ImageOne from "@/images/home/box-layout-1.png"
import ImageThree from "@/images/home/box-layout-3.png"
import Link from "next/link";
import Image from "next/image";
import Wrapper from "@/components/common/Wrapper";
const GalleryLayout = () => {
  return (
    <Wrapper>
      <div className="grid grid-cols-12 gap-6 mt-[48.68px]">
        <div className="col-span-12 sm:col-span-6 lg:col-span-6 flex">
        <Link
          href={"#"}
          className={`nc-CardCategory6 group relative z-0 flex w-full overflow-hidden rounded-2xl`}
        >
          <div className="aspect-h-8 aspect-w-16 h-0 w-full sm:aspect-h-10 xl:aspect-h-6 hidden md:block"></div>
          <Image
            alt="layout-image-one"
            src={ImageTwo}
            className="rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full object-left-top sm:object-bottom sm:absolute sm:inset-0"
          />
          <div className="absolute top-0 right-0 sm:p-3 p-4 text-white md:p-6">
            <span className="absolute"></span>
            <h2 className={`relative font-[700] 2xl:text-[58.57px] xl:text-[47.14px] lg:text-[40.14px] md:text-[32.14px] sm:text-[27.14px] xs:text-[37.14px] text-[28.14px] leading-[32.56px] xs:leading-[44.56px] sm:leading-[35.56px] md:leading-[38.56px] lg:leading-[45.56px] xl:leading-[55.56px] 2xl:leading-[68.69px] text-right`}>BREAK THE <span className="text-custom-red">STIGMA</span><br/> EMBRACE THE BEST YOU</h2>
            <h2 className={`relative font-[700] 2xl:text-[71.57px] xl:text-[63.14px] lg:text-[50.14px] md:text-[39.14px] sm:text-[35.14px] xs:text-[49.14px] text-[37.14px] leading-[32.56px] xs:leading-[44.56px] sm:leading-[35.56px] md:leading-[38.56px] lg:leading-[45.56px] xl:leading-[55.56px] 2xl:leading-[68.69px] text-right text-custom-red lg:mt-[17.28px] xl:mt-[20.28px] mt-[10.29px]`}>50% OFF</h2>
            <h3 className={`relative font-[700] 2xl:text-[58.57px] xl:text-[47.14px] lg:text-[40.14px] md:text-[32.14px] sm:text-[27.14px] xs:text-[37.14px] text-[28.14px] leading-[32.56px] xs:leading-[44.56px] sm:leading-[35.56px] md:leading-[38.56px] lg:leading-[45.56px] xl:leading-[55.56px] 2xl:leading-[68.69px] text-right lg:mt-[15.28px] xl:mt-[18.28px] md:mt-[8.29px] sm:mt-[3px] mt-[8.29px] font-heading`}>your first <br/>
            treatment</h3>
            <div className="w-full flex justify-end">
              <button className="bg-custom-red rounded-[89.32px] sm:mt-[3px] xs:mt-[40px] lg:mt-[35.69px] xl:mt-[45.69px] mt-[25.29px] md:mt-[12.29px] flex items-center justify-center 2xl:w-[162.01px] xl:h-[45.23px] xs:w-[120.01px] xs:h-[37.23px] md:w-[120.01px] md:h-[37.23px] lg:w-[145.01px] lg:h-[43.23px] w-[100.01px] h-[30.23px] sm:w-[100.01px] sm:h-[30.23px] xl:text-[20.1px] xs:text-[17.1px] sm:text-[14.1px] md:text-[17.1px] lg:text-[20.1px] text-[14.1px] font-[400] leading-[34.28px] hover:text-white hover:bg-black">
                Learn more
              </button>
            </div>
          </div>
        </Link>
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-6 grid grid-rows-2 gap-6">
        <Link
          href={"#"}
          className={`nc-CardCategory6 group relative z-0 flex w-full overflow-hidden rounded-2xl`}
        >
          <div className="relative w-full h-0 pb-[40%]"></div>
          <Image
            alt="layout-image-one"
            src={ImageThree}
            className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 p-4 text-white sm:p-6 flex flex-col justify-center h-full xs:gap-y-2 sm:gap-y-0">
            <span className="absolute"></span>
            <h2 className={`relative font-[700] 2xl:text-[65.57px] 2xl:leading-[78.69px] xl:text-[48.57px] xl:leading-[56.69px] lg:text-[35.55px] lg:leading-[42.26px] text-[26.55px] leading-[35.26px] xs:text-[33.55px] xsleading-[40.26px] sm:text-[22.55px] sm:leading-[32.26px] md:text-[29.55px] md:leading-[37.26px]`}>TURN BACK <span className="text-custom-red">TIME</span></h2>
            <h2 className={`relative font-[700] 2xl:text-[36.67px] 2xl:leading-[44px] xl:text-[28.67px] xl:leading-[40px] text-[16.77px] leading-[22.92px] xs:text-[20.77px] xs:leading-[24.92px] lg:text-[22.77px] lg:leading-[31.92px] sm:text-[15.77px] sm:leading-[16.92px] md:text-[20.77px] md:leading-[24.92px]`}>Explore Facial Rejuvenation Treatments</h2>
            <div className="w-full">
              <button className="bg-custom-red rounded-[89.32px] sm:mt-[10px] xl:mt-[15.69px] lg:mt-[10.69px] mt-[8.29px] md:mt-[12.29px] flex items-center justify-center 2xl:w-[162.01px] xl:h-[45.23px] xs:w-[120.01px] xs:h-[37.23px] md:w-[120.01px] md:h-[37.23px] lg:w-[145.01px] lg:h-[43.23px] w-[100.01px] h-[30.23px] sm:w-[100.01px] sm:h-[30.23px] xl:text-[20.1px] xs:text-[17.1px] sm:text-[14.1px] md:text-[17.1px] lg:text-[20.1px] text- [14.1px] font-[400] leading-[34.28px] hover:text-white hover:bg-black">
                Learn more
              </button>
            </div>
          </div>
        </Link>
        <Link
          href={"#"}
          className={`nc-CardCategory6 group relative z-0 flex w-full overflow-hidden rounded-2xl`}
        >
          <div className="relative w-full h-0 pb-[40%]"></div>
          <Image
            alt="layout-image-one"
            src={ImageOne}
            className="absolute inset-0 h-full w-full rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 p-4 text-white sm:p-6 flex flex-col justify-center h-full xs:gap-y-2 sm:gap-y-0">
            <span className="absolute"></span>
            <h2 className={`relative font-[700] 2xl:text-[65.57px] 2xl:leading-[78.69px] xl:text-[48.57px] xl:leading-[56.69px] lg:text-[35.55px] lg:leading-[42.26px] text-[26.55px] leading-[35.26px] xs:text-[33.55px] xsleading-[40.26px] sm:text-[22.55px] sm:leading-[32.26px] md:text-[29.55px] md:leading-[37.26px]`}>CATCH IT <span className="text-custom-red">EARLY</span></h2>
            <h2 className={`relative font-[700] 2xl:text-[36.67px] 2xl:leading-[44px] xl:text-[28.67px] xl:leading-[40px] text-[16.77px] leading-[22.92px] xs:text-[20.77px] xs:leading-[24.92px] lg:text-[22.77px] lg:leading-[31.92px] sm:text-[15.77px] sm:leading-[16.92px] md:text-[20.77px] md:leading-[24.92px]`}>Thicker Hair Awaits!</h2>
            <div className="w-full">
              <button className="bg-custom-red rounded-[89.32px] sm:mt-[10px] xl:mt-[15.69px] lg:mt-[10.69px] mt-[8.29px] md:mt-[12.29px] flex items-center justify-center 2xl:w-[162.01px] xl:h-[45.23px] xs:w-[120.01px] xs:h-[37.23px] md:w-[120.01px] md:h-[37.23px] lg:w-[145.01px] lg:h-[43.23px] w-[100.01px] h-[30.23px] sm:w-[100.01px] sm:h-[30.23px] xl:text-[20.1px] xs:text-[17.1px] sm:text-[14.1px] md:text-[17.1px] lg:text-[20.1px] text- [14.1px] font-[400] leading-[34.28px] hover:text-white hover:bg-black">
                Learn more
              </button>
            </div>
          </div>
        </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default GalleryLayout;