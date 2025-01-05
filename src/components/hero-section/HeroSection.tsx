import Navbar from "./navbar/Navbar";
import SearchBar from "./Searchbar/SearchBar";


const HeroSection = () => {
  return (
    <header className="bg-[url('/assets/hero-banner.png')] bg-cover bg-center h-[336px] w-full flex flex-col items-center">
      <Navbar/>
      <SearchBar/>
      <h1 className="text-center text-[50px] leading-[60px] text-white mt-[33px]">
        THE NUMBER 1 <span className="text-[#E9082A]">MEN’S SELF CARE</span> TREATMENT FINDER
      </h1>
    </header>
  );
}

export default HeroSection;