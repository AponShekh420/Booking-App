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
          <div className="aspect-h-10 aspect-w-16 h-0 w-full sm:aspect-h-12 xl:aspect-h-9"></div>
          <Image
            alt="layout-image-one"
            src={ImageTwo}
            className="rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full object-left-top"
          />
          <div className="absolute top-0 right-0 p-4 text-white sm:p-6">
            <span className="absolute"></span>
            <h2 className={`relative font-[700] text-[65.57px] leading-[78.69px] text-right`}>BREAK THE <span className="text-custom-red">STIGMA</span><br/> EMBRACE THE BEST YOU</h2>
            <h2 className={`relative font-[700] text-[100.48px] leading-[120.58px] text-right text-custom-red mt-[15.28px]`}>50% OFF</h2>
            <h3 className={`relative font-[700] text-[73px] leading-[79.63px] text-right mt-[15.28px]`}>your first <br/>
            treatment</h3>
            <div className="w-full flex justify-end">
              <button className="bg-custom-red rounded-[89.32px] mt-[48.69px] w-[162.01px] h-[45.23px] text-[20.1px] font-[400] leading-[34.28px]">
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
          <div className="aspect-h-10 aspect-w-16 h-0 w-full sm:aspect-h-12 xl:aspect-h-9"></div>
          <Image
            alt="layout-image-one"
            src={ImageThree}
            className="rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full object-center"
          />
          <div className="absolute bottom-0 p-4 text-white sm:p-6">
            <span className="absolute"></span>
            <h2 className={`relative font-[700] text-[65.57px] leading-[78.69px]`}>TURN BACK <span className="text-custom-red">TIME</span></h2>
            <h2 className={`relative font-[700] text-[36.67px] leading-[44px]`}>Explore Facial Rejuvenation Treatments</h2>
            <div className="w-full">
              <button className="bg-custom-red rounded-[89.32px] mt-[18.69px] w-[162.01px] h-[45.23px] text-[20.1px] font-[400] leading-[34.28px]">
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
            <h2 className={`relative font-[700] text-[65.57px] leading-[78.69px]`}>CATCH IT <span className="text-custom-red">EARLY</span></h2>
            <h2 className={`relative font-[700] text-[36.67px] leading-[44px]`}>Thicker Hair Awaits!</h2>
            <div className="w-full">
              <button className="bg-custom-red rounded-[89.32px] mt-[18.69px] w-[162.01px] h-[45.23px] text-[20.1px] font-[400] leading-[34.28px]">
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