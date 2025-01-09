import Navbar from "./navbar/Navbar";
import SearchBar from "./Searchbar/SearchBar";
import StayDatesRangeInput from "./Searchbar/StayDatesRangeInput";


const HeroSection = () => {
  return (
    <header className="bg-[url('/assets/banner.png')] bg-cover bg-center xl:h-[336px] h-[159px] sm:h-[210px] md:h-[250px] lg:h-[277px] w-full flex flex-col items-center">
      <Navbar/>
      <SearchBar/>
      <h1 className="text-center text-[22.96px] sm:text-[34.96px] md:text-[39px] xl:text-[50px] xl:leading-[60px] lg:leading-[50px] md:leading-[40px] sm:leading-[35px] leading-[27.55px] text-white xl:mt-[33px] mt-[18px] md:mt-[25px] lg:mt-[27px]">
        THE NUMBER 1 <span className="text-[#E9082A]">MEN’S SELF CARE</span> TREATMENT FINDER
      </h1>
    </header>
  );
}

export default HeroSection;