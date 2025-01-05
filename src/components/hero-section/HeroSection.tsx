import Navbar from "./navbar/Navbar";
import SearchBar from "./Searchbar/SearchBar";


const HeroSection = () => {
  return (
    <header className="bg-[url('/assets/hero-banner.png')] bg-cover bg-center h-[336px] w-full flex flex-col items-center">
      <Navbar/>
      <SearchBar/>
      <h1 className="text-center text-[22.96px] sm:text-[34.96px] md:text-[39px] xl:text-[50px] xl:leading-[60px] lg:leading-[50px] md:leading-[40px] sm:leading-[35px] leading-[27.55px] text-white mt-[33px]">
        THE NUMBER 1 <span className="text-[#E9082A]">MEN’S SELF CARE</span> TREATMENT FINDER
      </h1>
    </header>
  );
}

export default HeroSection;