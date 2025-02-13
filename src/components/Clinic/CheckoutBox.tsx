'use client'

import {
	LocationIcon,
	LocationIconTwo,
	RatingGroup,
	WatchIcon,
} from '@/components/common/Icons'
import { signinActive } from '@/redux-toolkit/features/clinic/authPopupSlice'
import { useAppDispatch } from '@/redux-toolkit/hooks'
import Link from 'next/link'
import { FC, useState } from 'react'

interface CheckOutBoxProps {
	path: any
	className?: string
}

const CheckOutBox: FC<CheckOutBoxProps> = ({ className, path }) => {
	const [aboutToggle, setAboutToggle] = useState<boolean>(false)
	const [timeToggle, setTimeToggle] = useState<boolean>(false)
	const [locationToggle, setLocationToggle] = useState<boolean>(false)
	const dispatch = useAppDispatch()

	return (
		<div
			className={`w-full rounded-[10px] border border-[#9B9B9B] p-5 md:p-4 md:py-4 lg:py-6 lg:!pt-8 xl:py-8 xl:!pt-11 ${className}`}
		>
			<div>
				{/* title, rating and time-icon */}
				<div className="hidden md:block">
					<div className="flex items-center justify-between">
						<h3 className="font-heading font-bold md:text-[27px] lg:text-[35px] xl:text-[50px]">
							Hanley Laser Clinic
						</h3>
						<div className="xl:text-md flex cursor-pointer items-center gap-x-1 text-[14.7px] font-semibold transition-all duration-300 hover:text-custom-red md:text-[12px] lg:text-[15px]">
							<WatchIcon className="md:h-3 md:w-3 lg:h-4 lg:w-4" />
							<span className="text-custom-red">Open Today</span>
						</div>
					</div>
					<div className="md:mt-2 lg:mt-2 xl:mt-[14px]">
						<div className="flex w-full justify-between">
							<div className="flex items-center justify-start gap-x-2 transition-all duration-300 hover:text-custom-red lg:gap-x-1 xl:gap-x-[1px]">
								<RatingGroup className="md:w-20 xl:w-28" />
								<span>4.9 (292)</span>
							</div>
							<div className="hidden cursor-pointer items-center gap-1 text-[14.7px] font-semibold transition-all duration-300 hover:text-custom-red md:text-[10px] lg:flex lg:text-[12px] xl:text-[14px]">
								<LocationIcon className="w-[20px]" />
								<p>114 New Cavendish St, London</p>
							</div>
						</div>
					</div>
				</div>

				<div className="xl:text-md my-3 flex justify-between text-[14.7px] md:text-[14px] lg:my-6 lg:text-[16px]">
					<div>
						<h5 className="font-semibold">PRP Hair Loss Treatment</h5>
						<span>1hr - With Olga</span>
					</div>
					<h5 className="font-bold">£200</h5>
				</div>
				<div className="xl:text-md flex w-auto cursor-pointer items-center gap-x-2 text-[14.7px] font-semibold transition-all duration-300 hover:text-custom-red md:text-[14px] lg:hidden lg:text-[16px]">
					<WatchIcon className="h-4 w-4" />
					<p>Thursday 28th November - 11:00-12:00pm</p>
				</div>
				<div className="xl:text-md mt-2 flex w-auto cursor-pointer items-center gap-x-2 text-[14.7px] font-semibold transition-all duration-300 hover:text-custom-red md:text-[14px] lg:hidden lg:text-[16px]">
					<LocationIconTwo className="h-4 w-4" />
					<p>114 New Cavendish St, London W1W 6XT</p>
				</div>
			</div>
			<hr className="my-4" />
			<div className="flex justify-between text-[27px] font-semibold md:text-[21px] lg:text-[25px] xl:text-xl">
				<h5>Total</h5>
				<h5>£200</h5>
			</div>

			{/* continue btn */}
			{path === '/clinic/checkout' ? (
				<button
					onClick={() => dispatch(signinActive())}
					className="xl:text-md hidden w-full items-center justify-center rounded-[94.05px] bg-custom-red font-semibold text-white transition-all duration-300 hover:bg-black md:mt-[30px] md:flex md:h-[40px] md:text-[20.22px] xl:mt-[36px] xl:h-[44px]"
				>
					Continue
				</button>
			) : (
				<Link
					href={path}
					className="xl:text-md hidden w-full items-center justify-center rounded-[94.05px] bg-custom-red font-semibold text-white transition-all duration-300 hover:bg-black md:mt-[30px] md:flex md:h-[40px] md:text-[20.22px] xl:mt-[36px] xl:h-[44px]"
				>
					Continue
				</Link>
			)}
		</div>
	)
}

export default CheckOutBox
