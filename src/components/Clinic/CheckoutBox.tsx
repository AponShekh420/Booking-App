'use client'

import { DownArrowIcon, LocationIcon, LocationIconTwo, RatingGroup, WatchIcon } from '@/components/common/Icons'
import { useState } from 'react'

const CheckOutBox = ({ className }: { className?: string }) => {
	const [aboutToggle, setAboutToggle] = useState<boolean>(false)
	const [timeToggle, setTimeToggle] = useState<boolean>(false)
	const [locationToggle, setLocationToggle] = useState<boolean>(false)

	return (
		<div
			className={`w-full border rounded-[10px] border-[#9B9B9B] md:p-4 md:py-4 lg:py-6 xl:py-8 p-5 ${className}`}
		>
			<div>
				{/* title, rating and time-icon */}
				<div className="hidden md:block">
					<div className="flex justify-between items-center">
						<h3 className="xl:text-[57.28px] md:text-[27px] lg:text-[35px] font-bold">Dermamina</h3>
						<div className="flex items-center gap-x-1 xl:text-[18.64px] md:text-[14px] lg:text-[16px] text-[14.7px] font-semibold cursor-pointer hover:text-custom-red transition-all duration-300">
							<WatchIcon className="md:h-3 md:w-3 lg:w-4 lg:h-4"/>
							<span className="text-custom-red">Open Today</span>
						</div>
					</div>
					<div className="xl:mt-[14px] md:mt-2 lg:mt-3">
						<div className="flex w-full justify-between">
							<div className="flex gap-x-2 lg:gap-x-1 xl:gap-x-[1px] items-center justify-start transition-all duration-300 hover:text-custom-red">
								<RatingGroup className="md:w-20 xl:w-28" />
								<span>4.9 (292)</span>
							</div>
							<div className="hidden cursor-pointer gap-1 font-semibold transition-all duration-300 hover:text-custom-red lg:flex items-center xl:text-[18.64px] md:text-[10px] lg:text-[13px] text-[14.7px]">
								<LocationIcon className="w-[20px]" />
								<p>114 New Cavendish St, London</p>
							</div>
						</div>
					</div>
				</div>
				

				<div className="my-6 flex justify-between xl:text-[18.64px] md:text-[14px] lg:text-[16px] text-[14.7px]">
					<div>
						<h5 className="font-semibold">PRP Hair Loss Treatment</h5>
						<span>1hr - With Olga</span>
					</div>
					<h5 className="font-bold">£200</h5>
				</div>
				<div className="flex items-start gap-1 font-semibold gap-x-2 xl:text-[18.64px] md:text-[14px] lg:text-[16px] text-[14.7px]">
					<WatchIcon className="md:w-6 md:h-6 w-4 h-4"/>
					<p>Thursday 28th November - 11:00-12:00pm</p>
				</div>
				<div className="flex lg:hidden gap-x-2 w-auto items-center xl:text-[18.64px] md:text-[14px] lg:text-[16px] text-[14.7px] font-semibold hover:text-custom-red transition-all duration-300 cursor-pointer mt-2">
					<LocationIconTwo className="md:w-6 md:h-6 w-4 h-4"/>
					<p>114 New Cavendish St, London W1W 6XT</p>
				</div>
			</div>
			<hr className="my-4" />
			<div className="flex justify-between text-[27px] font-semibold xl:text-[30px] md:text-[21px] lg:text-[25px]">
				<h5>Total</h5>
				<h5>£200</h5>
			</div>

			{/* continue btn */}
      <button className="hidden md:flex w-full xl:h-[57px] md:h-[40px] bg-custom-red rounded-[94.05px] font-semibold text-white xl:text-[23.22px] md:text-[20.22px] items-center justify-center xl:mt-[36px] md:mt-[30px] hover:bg-black transition-all duration-300">Continue</button>
		</div>
	)
}

export default CheckOutBox
