'use client'

import {
	CircleRightIcon,
	DownArrowIcon,
	DownloadIcon,
	LocationIconTwo,
	OutlineHeartIcon,
	RatingGroup,
	WatchIcon,
} from '@/components/common/Icons'
import Link from 'next/link'
import { useState } from 'react'
import MapContainer from './MapContainer'

const BookingCard = () => {
	const [aboutToggle, setAboutToggle] = useState<boolean>(false)
	const [timeToggle, setTimeToggle] = useState<boolean>(false)
	const [locationToggle, setLocationToggle] = useState<boolean>(false)

	return (
		<div className="w-full rounded-[10px] border border-[#9B9B9B] p-5 md:p-4 md:py-4 lg:py-6 xl:py-8">
			{/* title, rating and header-download */}
			<div className="hidden md:block">
				<div className="flex items-center justify-between">
					<h3 className="font-heading font-bold md:text-[27px] lg:text-[35px] xl:text-[50px]">
						Dermamina
					</h3>
					<div className="flex items-center gap-x-4">
						<OutlineHeartIcon className="cursor-pointer transition-all duration-300 hover:text-custom-red md:h-4 md:w-4 lg:h-6 lg:w-6 xl:h-7 xl:w-7" />
						<DownloadIcon className="cursor-pointer transition-all duration-300 hover:text-custom-red md:h-4 md:w-4 lg:h-6 lg:w-6 xl:h-7 xl:w-7" />
					</div>
				</div>
				<div className="flex items-center justify-start gap-x-2 md:mt-1 lg:mt-2 xl:mt-[14px]">
					<RatingGroup className="md:w-20 lg:w-24 xl:w-28" />
					<p>4.9 (292)</p>
				</div>
			</div>

			{/* booking btn */}
			<Link
				href={'/clinic/booking'}
				className="hidden w-full items-center justify-center rounded-[94.05px] bg-custom-red font-semibold text-white transition-all duration-300 hover:bg-black md:mt-[30px] md:flex md:h-[40px] md:text-[20.22px] xl:mt-[36px] xl:h-[44px] xl:text-md"
			>
				Book now
			</Link>

			{/* time and location */}
			<div className="flex flex-col items-start justify-start gap-y-2 md:mt-[36px] md:gap-y-2">
				{/* time */}
				<div className="relative w-auto">
					<div
						className="flex cursor-pointer items-center gap-x-2 text-[14.7px] font-semibold transition-all duration-300 hover:text-custom-red md:text-[14px] lg:text-[16px] xl:text-md"
						onClick={() => setTimeToggle((pre) => !pre)}
					>
						<WatchIcon className="h-4 w-4" />
						<p>
							<span className="text-custom-red">Open Today</span>{' '}
							9:30 am–8:30 pm
						</p>
						<DownArrowIcon className="max-h-3 !min-h-3 !min-w-3 max-w-3" />
					</div>

					<div
						className={`md:text-[14px] lg:text-[16px] text-[14.7px] xl:text-md w-full overflow-hidden pl-8 transition-[max-height] ease-in-out ${timeToggle ? 'mb-5 max-h-[999px]' : 'max-h-[0px]'}`}
					>
						<div className="mt-1 flex cursor-pointer items-center justify-between gap-x-2 text-[14.7px] font-semibold transition-all duration-300 hover:text-custom-red">
							<p>Monday</p>
							<p>9:30 am–8:30 pm</p>
						</div>
						<div className="mt-1 flex cursor-pointer items-center justify-between gap-x-2 text-[14.7px] font-semibold transition-all duration-300 hover:text-custom-red">
							<p>Tuesday</p>
							<p>9:30 am–8:30 pm</p>
						</div>
						<div className="mt-1 flex cursor-pointer items-center justify-between gap-x-2 text-[14.7px] font-semibold transition-all duration-300 hover:text-custom-red">
							<p>Wednesday</p>
							<p>9:30 am–8:30 pm</p>
						</div>
						<div className="mt-1 flex cursor-pointer items-center justify-between gap-x-2 text-[14.7px] font-semibold transition-all duration-300 hover:text-custom-red">
							<p>Thursday</p>
							<p>9:30 am–8:30 pm</p>
						</div>
						<div className="mt-1 flex cursor-pointer items-center justify-between gap-x-2 text-[14.7px] font-semibold transition-all duration-300 hover:text-custom-red">
							<p>Friday</p>
							<p>9:30 am–8:30 pm</p>
						</div>
						<div className="mt-1 flex cursor-pointer items-center justify-between gap-x-2 text-[14.7px] font-semibold transition-all duration-300 hover:text-custom-red">
							<p>Saturday</p>
							<p>9:30 am–8:30 pm</p>
						</div>
						<div className="mt-1 flex cursor-pointer items-center justify-between gap-x-2 text-[14.7px] font-semibold transition-all duration-300 hover:text-custom-red">
							<p>Sunday</p>
							<p>9:30 am–8:30 pm</p>
						</div>
					</div>
				</div>

				{/* location */}
				<div className="w-full">
					<div
						className="flex w-auto cursor-pointer items-center gap-x-2 text-[14.7px] font-semibold transition-all duration-300 hover:text-custom-red md:text-[14px] lg:text-[16px] xl:text-md"
						onClick={() => setLocationToggle((pre) => !pre)}
					>
						<LocationIconTwo className="h-4 w-4" />
						<p>114 New Cavendish St, London W1W 6XT</p>
						<DownArrowIcon className="max-h-3 !min-h-3 !min-w-3 max-w-3" />
					</div>
					<div
						className={`mt-4 w-full overflow-hidden text-[24px] transition-[max-height] ease-in-out ${locationToggle ? 'max-h-[999px]' : 'max-h-[0px]'}`}
					>
						<MapContainer />
					</div>
				</div>
			</div>

			{/* about collapse */}
			<div className="w-full md:mt-2 lg:mt-3 xl:mt-2">
				<div
					className="flex cursor-pointer items-center gap-x-3 font-semibold transition-all duration-300 hover:text-custom-red"
					onClick={() => setAboutToggle((pre) => !pre)}
				>
					<h3 className="text-[20.35px] font-bold md:text-[18px] lg:text-[20px] xl:text-md">
						About
					</h3>
					<DownArrowIcon className="h-3 w-3" />
				</div>
				<div
					className={`w-full overflow-hidden px-4 transition-[max-height] ease-in-out ${aboutToggle ? 'max-h-[999px]' : 'max-h-[0px]'}`}
				>
					<p className="mt-2 leading-6">
						Dermamina are committed in providing clinically advanced aesthetic
						treatments and is renowned for delivering natural looking results.
						We make sure you are provided with advanced clinical expertise.
					</p>
					<p className="mt-4 font-bold md:text-[18px] lg:text-[20px] xl:text-md text-[20.35px]">Additional Information</p>
					<div className="mt-2 flex items-center gap-x-2">
						<CircleRightIcon />
						<p>Instant confirmation</p>
					</div>
					<div className="mt-2 flex items-center gap-x-2">
						<CircleRightIcon />
						<p>Pay on Gentlemend</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookingCard
