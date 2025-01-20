import Wrapper from "@/components/common/Wrapper";
import CheckOutBox from "../CheckoutBox";
import StayDatesRangeInput from "./StayDatesRangeInput";
import ClinicHeadingText from "../ClinicHeadingText";
import Image from "next/image";

const ScheduleSection = () => {
  return (
    <Wrapper className="md:my-[40px] lg:my-[79px] md:min-h-screen my-5">
      <div className="flex gap-x-8 justify-between md:flex-row flex-col-reverse">
				<div className="md:w-7/12 w-full">
          <ClinicHeadingText title='Select time'/>
          <StayDatesRangeInput/>
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

        {/* checkout box */}
        <div className="md:w-5/12 w-full mb-0 md:block hidden">
          <CheckOutBox path={"/clinic/checkout"}/>
        </div>
      </div>
    </Wrapper>
  );
}

export default ScheduleSection;