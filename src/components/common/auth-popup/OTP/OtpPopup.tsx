"use client";

import { BackIcon, CrossIcon } from "../../Icons";
import Title from "../Title";
import Subtitle from "../Subtitle";
import { useRef, useState } from "react";

const OtpPopup = () => {
  const [autoOtp, setAutoOtp] = useState<any>("");
  const navigationInputs = useRef<HTMLInputElement[]>([]);

  const length = 4;

  const onChange = (value: string) => {
    setAutoOtp(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const newOtp = [...autoOtp];

    // Ensure only a single digit is entered per box
    if (/^[0-9]$/.test(value) && value.length === 1) {
      newOtp[index] = value;
      onChange(newOtp.join(""));

      if (index < length - 1) {
        navigationInputs.current[index + 1]?.focus();
      }
    } else if (value === "") {
      newOtp[index] = "";
      onChange(newOtp.join(""));
    } else {
      e.target.value = value.slice(0, 1);
    }
  };

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !navigationInputs.current[index]?.value && index > 0) {
      navigationInputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="sm:w-[605.65px] min-h-screen sm:min-h-fit w-full bg-white sm:rounded-[33.83px] sm:p-8 px-8 py-4 flex flex-col items-center shadow-lg">
      {/* common content like title, subtitle and cross btn etc */}
      <div className="w-full flex justify-between mb-1 items-center">
        <BackIcon className="cursor-pointer hover:text-custom-red transition-all duration-300 w-5" />
        <CrossIcon className="cursor-pointer hover:text-custom-red transition-all duration-300 w-4" />
      </div>

      <Title title="Confirm your Number" />
      <Subtitle subtitle="Pleas enter the 4-digit code sent to you at +44888888888" className="sm:!w-10/12 sm:!mt-5 !mt-3 xs:!mt-4" />

      {/* OTP Input */}
      <div className="grid grid-cols-4 xs:gap-x-5 gap-x-2 w-full sm:w-7/12 mt-5">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            ref={(el) => {
              if (el) navigationInputs.current[index] = el;
            }}
            className="p-3 py-5 text-center border border-[#bcbcbc] rounded-md outline-none focus:border-[#3B9DF8] placeholder:font-semibold font-semibold text-black text-lg"
            placeholder="0"
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeydown(e, index)}
            type="text"
            maxLength={1} // Ensures only 1 character is entered
          />
        ))}
      </div>

      <div className="mt-7">
        <p className={`sm:text-xl xs:text-lg text-md text-center w-full leading-7`}>Resend code</p>
        <p className={`sm:text-xl xs:text-lg text-md text-center w-full leading-7 mt-5`}>Change phone number</p>
      </div>

      <button className="w-full xs-h-[50px] h-[45px] rounded-[52.33px] bg-custom-red hover:bg-black transition-all duration-300 text-white mt-10 text-xl capitalize">
        continue
      </button>
    </div>
  );
};

export default OtpPopup;
