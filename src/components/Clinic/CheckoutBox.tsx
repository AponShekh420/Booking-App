'use client'

import { LocationIcon, RatingGroup, WatchIcon } from '@/components/common/Icons'
import { useState } from 'react'

const CheckOutBox = ({ className }: { className?: string }) => {
	const [aboutToggle, setAboutToggle] = useState<boolean>(false)
	const [timeToggle, setTimeToggle] = useState<boolean>(false)
	const [locationToggle, setLocationToggle] = useState<boolean>(false)

	return (
		<div
			className={`w-full rounded-[10px] border border-[#9B9B9B] p-4 ${className}`}
		>
			{/* title, rating and header-download */}
			<div>
				<div className="flex items-center justify-between">
					<h3 className="text-[16px] font-bold leading-[40.08px] text-black sm:text-[20px] sm:leading-[62.08px] md:text-[30px] md:leading-[72.08px] lg:text-[35.72px] lg:leading-[82.08px] xl:text-[54.28px] xl:leading-[80.43px] 2xl:text-[57.28px]">
						Dermamina
					</h3>
					<div className="flex cursor-pointer items-center gap-x-2 text-[18.64px] font-semibold transition-all duration-300 hover:text-custom-red">
						<WatchIcon className="h-auto w-[20px]" />
						<span className="text-custom-red">Open Today</span>
					</div>
				</div>
				<div className="flex w-full justify-between">
					<div className="flex gap-1 xl:gap-2">
						<RatingGroup className="w-[90px] xl:w-auto" />
						<span>4.9 (292)</span>
					</div>
					<div className="hidden cursor-pointer items-center gap-1 text-[14.64px] font-semibold transition-all duration-300 hover:text-custom-red lg:flex lg:text-[16.64px] xl:gap-2 2xl:text-[18.64px]">
						<LocationIcon className="w-[20px]" />
						<p>114 New Cavendish St, London</p>
					</div>
				</div>

				<div className="my-6 flex justify-between text-[20px] xl:text-[24px]">
					<div>
						<h5 className="font-semibold">PRP Hair Loss Treatment</h5>
						<span>1hr - With Olga</span>
					</div>
					<h5 className="font-bold">£200</h5>
				</div>
				<div className="flex items-start gap-1 text-[20px] font-semibold xl:gap-3 xl:text-[22px] 2xl:gap-4 2xl:text-[24px]">
					<WatchIcon className="h-auto w-[26px] lg:w-[22px]" />
					<p>Thursday 28th November - 11:00-12:00pm</p>
				</div>
			</div>
			<hr className="my-4" />
			<div className="flex justify-between text-[30px] font-semibold 2xl:text-[40px]">
				<h5>Total</h5>
				<h5>£200</h5>
			</div>

			{/* booking btn */}
			<button className="mb-8 mt-[200px] flex h-[50px] w-full items-center justify-center rounded-[94.05px] bg-custom-red text-[20px] font-semibold text-white transition-all duration-300 hover:bg-black lg:mt-[250px] lg:h-[57px] lg:text-[23.22px]">
				Continue
			</button>
		</div>
	)
}

export default CheckOutBox
