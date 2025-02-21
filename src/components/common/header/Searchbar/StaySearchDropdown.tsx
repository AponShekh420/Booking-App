import Image from "next/image";
import img from "@/images/search-dropdown/search-dropdown.png"
const StaySearchDropdown = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-3 gap-5 justify-between w-full overflow-y-auto h-[217px]">
      <div>
        <p className="font-[700] text-[17.12px] leading-[33.63px]">Top Treatments</p>
        <ul className="font-[400] text-[17.12px] capitalize">
          <li className="leading-[26px] cursor-pointer hover:text-[#E9082A] text-black">PRP</li>
          <li className="leading-[26px] cursor-pointer hover:text-[#E9082A] text-black">Botox</li>
          <li className="leading-[26px] cursor-pointer hover:text-[#E9082A] text-black">Dermal fillers</li>
          <li className="leading-[26px] cursor-pointer hover:text-[#E9082A] text-black">Teeth Whitening</li>
          <li className="leading-[26px] cursor-pointer hover:text-[#E9082A] text-black">Dermal Fillers</li>
        </ul>
      </div>
      <div>
        <p className="font-[700] text-[17.12px] leading-[33.63px]">Top Articles</p>
        <ul className="font-[400] text-[17.12px] capitalize">
          <li className="leading-[26px] cursor-pointer hover:text-[#E9082A] text-black">Skin</li>
          <li className="leading-[26px] cursor-pointer hover:text-[#E9082A] text-black">Face & Jawline</li>
          <li className="leading-[26px] cursor-pointer hover:text-[#E9082A] text-black">Hair</li>
          <li className="leading-[26px] cursor-pointer hover:text-[#E9082A] text-black">Fillers</li>
          <li className="leading-[26px] cursor-pointer hover:text-[#E9082A] text-black">Body Lift</li>
        </ul>
      </div>
      <div className="col-span-2 md:col-span-1">

        {/* title */}
        <p className="font-[700] text-[17.12px] leading-[33.63px]">Clinics</p>

        {/* box one */}
        <div className="flex gap-x-[14px] items-center mb-[11.9px]">
          <div className="min-w-[50px] min-h-[54.1px] max-w-[50px] max-h-[54.1px] rounded-[5px] overflow-hidden">
            <Image src={img} alt="Hanley Laser Clinic Image" 
              width={100} 
              height={100}
            />
          </div>
          <div>
            <p className="font-[700] text-[15.27px] leading-[29.97px]">Hanley Laser Clinic</p>
            <p className="font-[400] text-[11.03px] capitalize leading-[14px]">Aesthetics Clinic<br/>
            114 New Cavendish St, London W1W 6XT</p>
          </div>
        </div>

        {/* box 2 */}
        {/* box one */}
        <div className="flex gap-x-[14px] items-center">
          <div className="min-w-[50px] min-h-[54.1px] max-w-[50px] max-h-[54.1px] rounded-[5px] overflow-hidden">
            <Image src={img} alt="Hanley Laser Clinic Image" 
              width={100} 
              height={100}
            />
          </div>
          <div>
            <p className="font-[700] text-[15.27px] leading-[29.97px]">Hanley Laser Clinic</p>
            <p className="font-[400] text-[11.03px] capitalize leading-[14px]">Aesthetics Clinic<br/>
            114 New Cavendish St, London W1W 6XT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaySearchDropdown;