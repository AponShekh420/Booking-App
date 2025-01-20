import Wrapper from '@/components/common/Wrapper'
import ClinicHeadingText from '../ClinicHeadingText'
import CheckOutBox from '../CheckoutBox'
import TeamCardsContainer from './TeamCardsContainer';

const TeamSection = () => {
  return (
    <Wrapper className="md:my-[40px] lg:my-[79px] md:min-h-screen my-5">
      <div className="flex gap-x-8 justify-between md:flex-row flex-col-reverse">
        <div className="md:w-7/12 w-full">
          {/* title */}
          <ClinicHeadingText title="Team"/>

          {/* here is teams */}
          <TeamCardsContainer/>

          {/* cart for mobile */}
          <div className="md:hidden block mt-7">
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

        <div className="md:w-5/12 w-full mb-0 md:block hidden">
          <CheckOutBox path={"/clinic/schedule"}/>
          
          {/* outline box below of the booking card */}
          <div className="w-full border rounded-[10px] border-[#9B9B9B] p-4 justify-between mt-3 items-center hidden md:flex">
            <div>
              <p className="lg:text-[24px] md:text-[18px] text-[24px] font-bold">Gift Vouchers</p>
              <p className="lg:text-[16px] md:text-[14px]">Treat yourself or a friend</p>
            </div>
            <button className="lg:text-[23.22px] text-[23.22px] md:text-[18px] md:py-2 md:px-4 lg:py-2 lg:px-6 py-2 px-6 font-semibold bg-black hover:bg-custom-red transition-all duration-300 text-white rounded-[94.05px]">Buy</button>
          </div>
          <div className="w-full border rounded-[10px] border-[#9B9B9B] p-4 justify-between mt-3 items-center hidden md:flex">
            <div>
              <p className="lg:text-[24px] md:text-[18px] text-[24px] font-bold">Memberships</p>
              <p className="lg:text-[16px] md:text-[14px]">Treat yourself or a friend</p>
            </div>
            <button className="lg:text-[23.22px] text-[23.22px] md:text-[18px] md:py-2 md:px-4 lg:py-2 lg:px-6 py-2 px-6 font-semibold bg-black hover:bg-custom-red transition-all duration-300 text-white rounded-[94.05px]">Buy</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default TeamSection
