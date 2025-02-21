import Image from "next/image";
import brandImg from "@/images/article-two/star.svg"

const SubscribeSection = () => {
  return (
    <div className="lg:min-h-[600px] xl:min-h-[691px] sm:min-h-[500px] min-h-[400px] bg-black rounded-lg bg-[url('/assets/subscribe-banner.svg')] bg-cover bg-center flex flex-col justify-between lg:mt-[79px] mt-10 xs:mt-12 sm:mt-14 md:mt-16 overflow-hidden relative">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="flex items-center w-full flex-col justify-center md:translate-y-full translate-y-2/4">
        <h4 className="font-heading text-white uppercase xl:text-8xl md:text-6xl sm:text-5xl xs:text-4xl text-3xl">Action Creates <span className="text-custom-red">Confidence</span></h4>
        <Image src={brandImg} alt="star" className="sm:w-56 lg:w-60 w-40 xs:w-44"/>
      </div>
      <div className="bg-black w-full p-4 flex md:justify-between md:items-center flex-col md:flex-row md:gap-x-2 z-10">
        <h4 className="font-heading text-white uppercase xl:text-4xl sm:text-2xl text-xl md:text-xl lg:text-3xl xl:leading-[2.7rem]">Subscribe to Our Newsletter for Expert Tips, 
        <br/>Exclusive Deals, and the Latest in Men&apos;s Treatments!</h4>

        <div className="flex justify-between md:w-[300px] xl:w-[452px] w-full lg:h-[53px] sm:h-[53px] h-[40px] md:h-[40px] rounded-[10px] bg-white overflow-hidden items-center mt-4 md:mt-0">
          <input type="text" placeholder="Please enter your email" className="placeholder:text-xs sm:placeholder:text-base text-xs sm:text-base font-medium placeholder:font-medium placeholder:uppercase outline-none border-none focus:outline-none focus:border-none ring-0 focus:ring-0 w-full h-full"/>
          <button className="bg-custom-red text-white h-full transition-all duration-300 ease-in-out sm:px-5 px-3 py-0 xl:text-3xl sm:text-3xl text-xl md:text-xl uppercase font-heading leading-0 flex items-center justify-center whitespace-nowrap hover:border-blue-600 hover:bg-blue-600">sign up</button>
        </div>
      </div>
    </div>
  );
}

export default SubscribeSection;