import Wrapper from '@/components/common/Wrapper'
import CheckOutBox from '../CheckoutBox'
import ClinicHeadingText from '../ClinicHeadingText'
import StayDatesRangeInput from './StayDatesRangeInput'
import CartMobile from '../CartMobile'

const ScheduleSection = () => {
	return (
		<Wrapper className="my-5 md:my-[40px] md:min-h-screen lg:my-[79px]">
			<div className="flex flex-col-reverse justify-between gap-x-8 md:flex-row">
				<div className="w-full md:w-7/12">
					<ClinicHeadingText title="Select time" />
					<StayDatesRangeInput />
					<CartMobile path='/clinic/checkout'/>
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
