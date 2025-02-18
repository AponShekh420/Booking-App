'use client'
import Link from 'next/link'
import {
	LocationIconTwo,
	StarIconFull,
	StarIconHalf,
	WatchIcon,
} from '../../common/Icons'

export default function ClinicRating() {
	return (
		<div className="flex gap-4 md:mt-4 mt-3">
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
					<StarIconFull className="h-5 w-5 sm:h-4 sm:w-4" />
					<StarIconFull className="h-5 w-5 sm:h-4 sm:w-4" />
					<StarIconFull className="h-5 w-5 sm:h-4 sm:w-4" />
					<StarIconFull className="h-5 w-5 sm:h-4 sm:w-4" />
					<StarIconHalf className="h-5 w-5 sm:h-4 sm:w-4" />
				</span>
				<span className='text-[16px] sm:text-[12px] lg:text-[16px]'>4.9 (292)</span>
			</button>
			<div className="hidden items-center gap-2 sm:flex">
				<LocationIconTwo className="h-4 w-4" />
				<p className="font-semibold text-[16px] sm:text-[12px] lg:text-[16px]">114 New Cavendish St, London W1W 6XT</p>
			</div>
			<div className="hidden items-center gap-2 font-semibold sm:flex text-[16px] sm:text-[12px] lg:text-[16px]">
				<WatchIcon className="h-4 w-4" />
				<Link className="text-custom-red" href={'/'}>
					Open Today
				</Link>
				<span>9:30 am–8:30 pm</span>
			</div>
		</div>
	)
}
