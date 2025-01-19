import Wrapper from '@/components/common/Wrapper'
import ClinicHeadingText from '../ClinicHeadingText'
import BookingCard from './BookingCard'
import Item from './Item'

const ServicesSection = () => {
  return (
    <Wrapper>
      <div className="flex gap-x-8 justify-between md:flex-row flex-col-reverse">
        <div className="md:w-7/12 w-full">
          {/* title */}
          <ClinicHeadingText title="Services"/>

          {/* buttons list */}
          <div className="flex flex-wrap gap-3">
            <button className="text-[13.07px] px-4 py-1 lg:py-2 lg:px-7 md:px-5 md:py-1 lg:text-[18.03px] md:text-[14px] bg-black rounded-[80.12px] text-white hover:bg-custom-red transition-all duration-300 capitalize">Skin</button>
            <button className="text-[13.07px] px-4 py-1 lg:py-2 lg:px-7 md:px-5 md:py-1 lg:text-[18.03px] md:text-[14px] bg-black rounded-[80.12px] text-white hover:bg-custom-red transition-all duration-300 capitalize">Hair</button>
            <button className="text-[13.07px] px-4 py-1 lg:py-2 lg:px-7 md:px-5 md:py-1 lg:text-[18.03px] md:text-[14px] bg-black rounded-[80.12px] text-white hover:bg-custom-red transition-all duration-300 capitalize">Health</button>
            <button className="text-[13.07px] px-4 py-1 lg:py-2 lg:px-7 md:px-5 md:py-1 lg:text-[18.03px] md:text-[14px] bg-black rounded-[80.12px] text-white hover:bg-custom-red transition-all duration-300 capitalize">Rejuvenation</button>
          </div>

					<Item title="PRP Hair Loss Treatment" price={200} time="1h" />
					<Item title="Non Surgical Nose Job" price={400} time="1h" />
					<Item
						title="Skinpen® Microneedling + Exosomes Face & Hair"
						price={850}
						time="1h"
					/>
					<Item title="Profhilo Face or Neck" price={300} time="1h" />
					<Item title="PRP Hair Loss Treatment" price={200} time="1h" />

					{/* LAST BUTTON TO SEE MORE */}
					<div className="flex justify-center">
						<button className="mt-10 rounded-[80.12px] bg-black px-7 py-2 text-[18.03px] text-white transition-all duration-300 hover:bg-custom-red">
							See all
						</button>
					</div>
				</div>
				{/* <div className="w-5/12">
					<BookingCard />

          <div className="flex justify-center">
            <button className="py-2 px-7 bg-black rounded-[80.12px] text-white text-[18.03px] hover:bg-custom-red transition-all duration-300 mt-10">See all</button>
          </div>

        </div> */}
        <div className="md:w-5/12 w-full mb-7 md:mb-0">
          <BookingCard/>
          
          {/* outline box below of the booking card */}
          <div className="w-full border rounded-[10px] border-[#9B9B9B] p-4 justify-between mt-3 items-center hidden md:flex">
            <div>
              <p className="lg:text-[24px] md:text-[18px] text-[24px] font-bold">Gift Vouchers</p>
              <p className="lg:text-[16px] md:text-[14px]">Treat yourself or a friend</p>
            </div>
            <button className="lg:text-[23.22px] text-[23.22px] md:text-[18px] md:py-2 md:px-4 lg:py-2 lg:px-6 py-2 px-6 font-semibold bg-black hover:bg-custom-red transition-all duration-300 text-white rounded-[94.05px]">Book</button>
          </div>
          <div className="w-full border rounded-[10px] border-[#9B9B9B] p-4 justify-between mt-3 items-center hidden md:flex">
            <div>
              <p className="lg:text-[24px] md:text-[18px] text-[24px] font-bold">Memberships</p>
              <p className="lg:text-[16px] md:text-[14px]">Treat yourself or a friend</p>
            </div>
            <button className="lg:text-[23.22px] text-[23.22px] md:text-[18px] md:py-2 md:px-4 lg:py-2 lg:px-6 py-2 px-6 font-semibold bg-black hover:bg-custom-red transition-all duration-300 text-white rounded-[94.05px]">Book</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ServicesSection
