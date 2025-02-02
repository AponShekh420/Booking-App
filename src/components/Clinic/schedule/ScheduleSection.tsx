import Wrapper from '@/components/common/Wrapper'
import CheckOutBox from '../CheckoutBox'
import ClinicHeadingText from '../ClinicHeadingText'
import StayDatesRangeInput from './StayDatesRangeInput'

const ScheduleSection = () => {
	return (
		<Wrapper className="my-5 md:my-[40px] md:min-h-screen lg:my-[79px]">
			<div className="flex flex-col-reverse justify-between gap-x-8 md:flex-row">
				<div className="w-full md:w-7/12">
					<ClinicHeadingText title="Select time" />
					<StayDatesRangeInput />
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

				{/* checkout box */}
				<div className="mb-0 hidden w-full md:block md:w-5/12">
					<CheckOutBox path={'/clinic/checkout'} />
				</div>
			</div>
		</Wrapper>
	)
}

export default ScheduleSection
