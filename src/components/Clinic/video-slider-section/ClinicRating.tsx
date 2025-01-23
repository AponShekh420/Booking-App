'use client'
import Link from 'next/link'
import {
	LocationIcon,
	StarIconFull,
	StarIconHalf,
	WatchIcon,
} from '../../common/Icons'

export default function ClinicRating() {
	return (
		<div className="flex gap-4 text-[13.84] sm:text-[12.84px] md:text-[15.84px] lg:text-[18.64px]">
			<button
				onClick={() => {
					const reviewsElement = document.getElementById('reviews')
					if (reviewsElement) {
						reviewsElement.scrollIntoView({ behavior: 'smooth' })
					}
				}}
				className="flex items-center gap-2 transition-colors duration-300 hover:text-custom-red"
			>
				<span className="flex">
					<StarIconFull className="h-auto w-[14.13px] md:w-[17px] lg:w-[21.42px]" />
					<StarIconFull className="h-auto w-[14.13px] md:w-[17px] lg:w-[21.42px]" />
					<StarIconFull className="h-auto w-[14.13px] md:w-[17px] lg:w-[21.42px]" />
					<StarIconFull className="h-auto w-[14.13px] md:w-[17px] lg:w-[21.42px]" />
					<StarIconHalf className="h-auto w-[14.13px] md:w-[17px] lg:w-[21.42px]" />
				</span>
				<span className="lg:text-[20.97px]">4.9 (292)</span>
			</button>
			<div className="hidden items-center gap-2 sm:flex">
				<LocationIcon className="h-auto w-[18px] md:w-[20px] lg:w-[27px]" />
				<p className="font-semibold">114 New Cavendish St, London W1W 6XT</p>
			</div>
			<div className="hidden items-center gap-2 font-semibold sm:flex">
				<WatchIcon className="h-auto w-[17px] md:w-[19px] lg:w-[23px]" />
				<Link className="text-custom-red" href={'/'}>
					Open Today
				</Link>
				<span>9:30 am–8:30 pm</span>
			</div>
		</div>
	)
}
