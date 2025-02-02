import Wrapper from '@/components/common/Wrapper'
import CheckOutBox from '../CheckoutBox'
import ClinicHeadingText from '../ClinicHeadingText'
import TeamCardsContainer from './TeamCardsContainer'

const TeamSection = () => {
	return (
		<Wrapper className="my-5 md:my-[40px] md:min-h-screen lg:my-[79px]">
			<div className="flex flex-col-reverse justify-between gap-x-8 md:flex-row">
				<div className="w-full md:w-7/12">
					{/* title */}
					<ClinicHeadingText tag="h1" title="Team" />

					{/* here is teams */}
					<TeamCardsContainer />

					{/* cart for mobile */}
					<div className="mt-7 block md:hidden">
						<hr />
						<div className="flex items-center justify-between">
							<div className="mt-4 text-[15.56px] font-semibold sm:text-[19px]">
								<h5 className="leading-[20.1px]">£200 </h5>
								<p>PRP Hair Loss Treatment</p>
								<span>1hr</span>
							</div>
							<button className="flex h-[41.21px] items-center justify-center rounded-[68.01px] bg-custom-red px-8 text-[16.79px] text-white transition-colors duration-300 hover:bg-black">
								Confirm
							</button>
						</div>
					</div>
				</div>

				<div className="mb-0 hidden w-full md:block md:w-5/12">
					<CheckOutBox path={'/clinic/schedule'} />

					{/* outline box below of the booking card */}
					<div className="mt-3 hidden w-full items-center justify-between rounded-[10px] border border-[#9B9B9B] p-4 md:flex">
						<div>
							<p className="text-[24px] font-bold md:text-[18px] lg:text-[24px]">
								Gift Vouchers
							</p>
							<p className="md:text-[14px] lg:text-[16px]">
								Treat yourself or a friend
							</p>
						</div>
						<button className="rounded-[94.05px] bg-black px-6 py-2 text-[23.22px] font-semibold text-white transition-all duration-300 hover:bg-custom-red md:px-4 md:py-2 md:text-[18px] lg:px-6 lg:py-2 lg:text-[23.22px]">
							Buy
						</button>
					</div>
					<div className="mt-3 hidden w-full items-center justify-between rounded-[10px] border border-[#9B9B9B] p-4 md:flex">
						<div>
							<p className="text-[24px] font-bold md:text-[18px] lg:text-[24px]">
								Memberships
							</p>
							<p className="md:text-[14px] lg:text-[16px]">
								Treat yourself or a friend
							</p>
						</div>
						<button className="rounded-[94.05px] bg-black px-6 py-2 text-[23.22px] font-semibold text-white transition-all duration-300 hover:bg-custom-red md:px-4 md:py-2 md:text-[18px] lg:px-6 lg:py-2 lg:text-[23.22px]">
							Buy
						</button>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default TeamSection
