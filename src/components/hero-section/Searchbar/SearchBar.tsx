import Image from "next/image";


const SearchBar = () => {
  return (
    <div className="mt-[57px] w-[945px] h-[73px] rounded-[76px] bg-white overflow-hidden">
      <div className="w-[870px] h-full m-auto flex items-center">
        <div className="pr-[36px] border-r-[1px] border-[#D8D8D8]">
          <Image src={"assets/icons/searchbar/AI-icon.svg"} alt="AI" width={44} height={42}/>
        </div>
        <div className="w-full">
            <input 
            type="text" 
            placeholder="Type, speak, book & search treatments" 
            className="w-full outline-none border-none placeholder-black placeholder-font-normal placeholder-text-[16.35px] placeholder-leading-[27.88px] border-gray-300 focus:outline-none focus:ring-0 focus:border-transparent"
            />
        </div>
        <div className="px-[16px] h-[37px] flex items-center border-r-[1px] border-[#D8D8D8]">
          {/* should be change */}
          <Image src={"assets/icons/searchbar/AI-icon.svg"} alt="AI" width={20} height={25}/>
        </div>
        <div className="px-[16px] h-[37px] border-r-[1px] flex items-center border-[#D8D8D8]">
          <Image src={"assets/icons/searchbar/Vector.svg"} alt="AI" width={30} height={30}/>
        </div>
        <div className="pl-[16px]">
          <button className="leading-[30.32px] text-white w-[119px] h-[40px] rounded-[79px] bg-[#E9082A] flex items-center justify-center gap-x-[7px]">
            <Image src={"assets/icons/searchbar/Magnifier.svg"} alt="AI" width={20} height={20}/>
            <span className="text-[17.78px]">Seach</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;