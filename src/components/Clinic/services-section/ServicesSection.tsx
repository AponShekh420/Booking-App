import Wrapper from '@/components/common/Wrapper'
import ClinicHeadingText from '../ClinicHeadingText'
import BookingCard from './BookingCard'
import Item from './Item'

const ServicesSection = () => {
	return (
		<Wrapper>
			<div className="flex justify-between gap-x-8">
				<div className="w-7/12">
					{/* title */}
					<ClinicHeadingText title="Services" />

					{/* buttons list */}
					<div className="flex flex-wrap gap-3">
						<button className="rounded-[80.12px] bg-black px-7 py-2 text-[18.03px] capitalize text-white transition-all duration-300 hover:bg-custom-red">
							Skin
						</button>
						<button className="rounded-[80.12px] bg-black px-7 py-2 text-[18.03px] capitalize text-white transition-all duration-300 hover:bg-custom-red">
							Hair
						</button>
						<button className="rounded-[80.12px] bg-black px-7 py-2 text-[18.03px] capitalize text-white transition-all duration-300 hover:bg-custom-red">
							Health
						</button>
						<button className="rounded-[80.12px] bg-black px-7 py-2 text-[18.03px] capitalize text-white transition-all duration-300 hover:bg-custom-red">
							Rejuvenation
						</button>
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
				<div className="w-5/12">
					<BookingCard />

					{/* outline box below of the booking card */}
					<div className="mt-3 flex w-full justify-between rounded-[10px] border border-[#9B9B9B] p-4">
						<div>
							<p className="text-[24px] font-bold">Gift Vouchers</p>
							<p className="text-[16px]">Treat yourself or a friend</p>
						</div>
						<button className="rounded-[94.05px] bg-black px-6 py-2 text-[23.22px] font-semibold text-white transition-all duration-300 hover:bg-custom-red">
							Book
						</button>
					</div>
					<div className="mt-3 flex w-full justify-between rounded-[10px] border border-[#9B9B9B] p-4">
						<div>
							<p className="text-[24px] font-bold">Memberships</p>
							<p className="text-[16px]">Buy a bundle of appointments</p>
						</div>
						<button className="rounded-[94.05px] bg-black px-6 py-2 text-[23.22px] font-semibold text-white transition-all duration-300 hover:bg-custom-red">
							Book
						</button>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default ServicesSection
