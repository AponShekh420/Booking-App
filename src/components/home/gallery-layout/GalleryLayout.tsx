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
        <div className="col-span-12 md:col-span-6 lg:col-span-6 flex">
        <Link
          href={"#"}
          className={`nc-CardCategory6 group relative z-0 flex w-full overflow-hidden rounded-2xl`}
        >
          <div className="aspect-h-10 aspect-w-16 h-0 w-full sm:aspect-h-12 xl:aspect-h-9 hidden md:block"></div>
          <Image
            alt="layout-image-one"
            src={ImageTwo}
            className="rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full object-left-top"
          />
          <div className="absolute top-0 right-0 p-4 text-white sm:p-6">
            <span className="absolute"></span>
            <h2 className={`relative font-[700] xl:text-[65.57px] xl:leading-[78.69px] lg:text-[55.57px] lg:leading-[68.69px] text-[37.14px] leading-[44.56px] text-right`}>BREAK THE <span className="text-custom-red">STIGMA</span><br/> EMBRACE THE BEST YOU</h2>
            <h2 className={`relative font-[700] xl:text-[100.48px] xl:leading-[120.58px] lg:text-[90.48px] lg:leading-[110.58px] text-[56.91px] leading-[68.29px] text-right text-custom-red xl:mt-[15.28px] mt-[8.29px]`}>50% OFF</h2>
            <h3 className={`relative font-[700] xl:text-[73px] xl:leading-[79.63px] lg:text-[63px] lg:leading-[69.63px] text-[41.34px] leading-[45.1px] text-right xl:mt-[15.28px] mt-[8.29px] font-heading`}>your first <br/>
            treatment</h3>
            <div className="w-full flex justify-end">
              <button className="bg-custom-red rounded-[89.32px] xl:mt-[48.69px] lg:mt-[38.69px] mt-[8.29px] md:mt-[12.29px] w-[162.01px] h-[45.23px] text-[20.1px] font-[400] leading-[34.28px] hover:text-white hover:bg-black">
                Learn more
              </button>
            </div>
          </div>
        </Link>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-6 grid grid-rows-2 gap-6">
        <Link
          href={"#"}
          className={`nc-CardCategory6 group relative z-0 flex w-full overflow-hidden rounded-2xl`}
        >
          <div className="aspect-h-10 aspect-w-16 h-0 w-full sm:aspect-h-12 xl:aspect-h-9"></div>
          <Image
            alt="layout-image-one"
            src={ImageThree}
            className="rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full object-center"
          />
          <div className="absolute bottom-0 p-4 text-white sm:p-6">
            <span className="absolute"></span>
            <h2 className={`relative font-[700] xl:text-[65.57px] xl:leading-[78.69px] lg:text-[43.55px] lg:leading-[50.26px] sm:text-[43.55px] sm:leading-[50.26px] text-[33.55px] leading-[40.26px] md:text-[33.55px] md:leading-[40.26px]`}>TURN BACK <span className="text-custom-red">TIME</span></h2>
            <h2 className={`relative font-[700] xl:text-[36.67px] xl:leading-[44px] text-[20.77px] leading-[24.92px] lg:text-[30.77px] lg:leading-[34.92px] sm:text-[30.77px] sm:leading-[34.92px] md:text-[20.77px] md:leading-[24.92px]`}>Explore Facial Rejuvenation Treatments</h2>
            <div className="w-full">
              <button className="bg-custom-red rounded-[89.32px] mt-[18.69px] w-[162.01px] h-[45.23px] text-[20.1px] font-[400] leading-[34.28px] hover:text-white hover:bg-black">
                Learn more
              </button>
            </div>
          </div>
        </Link>
        <Link
          href={"#"}
          className={`nc-CardCategory6 group relative z-0 flex w-full overflow-hidden rounded-2xl`}
        >
          <div className="aspect-h-10 aspect-w-16 h-0 w-full sm:aspect-h-12 xl:aspect-h-9"></div>
          <Image
            alt="layout-image-one"
            src={ImageOne}
            className="rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full object-center"
          />
          <div className="absolute bottom-0 p-4 text-white sm:p-6">
            <span className="absolute"></span>
            <h2 className={`relative font-[700] xl:text-[65.57px] xl:leading-[78.69px] lg:text-[43.55px] lg:leading-[50.26px] sm:text-[43.55px] sm:leading-[50.26px] text-[33.55px] leading-[40.26px] md:text-[33.55px] md:leading-[40.26px]`}>CATCH IT <span className="text-custom-red">EARLY</span></h2>
            <h2 className={`relative font-[700] xl:text-[36.67px] xl:leading-[44px] text-[20.77px] leading-[24.92px] lg:text-[30.77px] lg:leading-[34.92px] sm:text-[30.77px] sm:leading-[34.92px] md:text-[20.77px] md:leading-[24.92px]`}>Thicker Hair Awaits!</h2>
            <div className="w-full">
              <button className="bg-custom-red rounded-[89.32px] mt-[18.69px] w-[162.01px] h-[45.23px] text-[20.1px] font-[400] leading-[34.28px] hover:text-white hover:bg-black">
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