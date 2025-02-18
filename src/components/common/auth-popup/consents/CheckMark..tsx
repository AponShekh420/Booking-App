"use client"
import { FC, useEffect, useState } from "react";
import { RightArrowIcon, RightCircleIcon } from "../../Icons";


interface CheckMarkType {
  text: string,
  defaultSelect: boolean,
  highLightText?: string,
}

const CheckMark:FC<CheckMarkType> = ({text, defaultSelect, highLightText}) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultSelect);


  useEffect(()=> {
    setIsChecked(defaultSelect)
  }, [defaultSelect])

  return (
    <div className="mt-6 flex justify-between gap-x-2 xs:gap-x-7">
      <div className="flex gap-x-3 items-start">
        {/* <RightCircleIcon className="min-w-5 max-w-5 xs:min-w-7 xs:max-w-7" /> */}
        <label className="flex flex-col items-center justify-center cursor-pointer relative">
            {/* Hidden Checkbox */}
            <input
                type="checkbox"
                className="hidden"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />

            {/* Circle */}
            <div className="w-5 h-5 xs:w-[27px] xs:h-[27px] xs:border-[3px] border-2 border-black rounded-full flex items-center justify-center"></div>

            {/* Checkmark */}
            {isChecked && (
                <span className="text-black xs:text-[15px] text-xs font-bold absolute mt-[0.1rem] select-none">✔</span>
            )}
        </label>
        <p className="text-md xs:text-lg sm:text-xl -mt-[1px] xs:mt-0">
          {text}{' '}
          <span className="font-extrabold text-custom-red">{highLightText}</span>
        </p>
      </div>
      <RightArrowIcon className="max-h-3 min-h-3 min-w-3 max-w-3 xs:max-h-5 xs:min-h-5 xs:min-w-5 xs:max-w-5 mt-1" />
    </div>
  );
}

export default CheckMark;