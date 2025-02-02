import logo from '@/images/logo/white-logo.svg'
import Image from 'next/image'
import ProfileHeading from '../ProfileHeading'

const Card = () => {
	return (
		<div className="w-full">
			<ProfileHeading tag="h1" className="mb-5" title="Gift Wallet" />

			<div className="m-auto w-11/12 rounded-[10px] bg-gradient-to-t from-[#830418] to-[#E9082A] px-8 py-10 shadow-md shadow-gray-500 xl:px-10">
				<div className="mb-0 flex w-full items-center justify-between">
					<div>
						<h3 className="text-4xl font-bold text-white xs:text-5xl lg:text-[81.51px]">
							£0.00
						</h3>
					</div>
					<div className="relative h-8 w-24 xs:h-10 xs:w-36 lg:h-[33px] lg:w-[159.19px]">
						<Image src={logo} alt="logo" className="h-full w-full" fill />
					</div>
				</div>

				<div className="mt-0 w-full">
					<p className="font-body text-lg text-white sm:text-2xl lg:text-[28.68px]">
						Wallet balance
					</p>
				</div>

				<div className="mt-4 flex h-9 w-full items-center justify-between overflow-hidden rounded-[71.68px] bg-white pl-3 xs:h-10 sm:mt-11 sm:h-11 md:mt-7 md:h-10 lg:mt-11 lg:h-[47px] xl:mt-16">
					<input
						type="text"
						placeholder="Enter gift code"
						className="h-full w-full border-none py-3 text-[14.79px] font-semibold text-black outline-none placeholder:text-[14.79px] placeholder:font-semibold placeholder:text-[#9B9B9B] focus:border-none focus:outline-none focus:ring-0"
					/>
					<button className="text-md md:text-md md:text-32 h-full w-32 bg-custom-red font-body text-white sm:w-36 sm:text-lg lg:w-[191px] lg:text-[23.2px]">
						Add Code
					</button>
				</div>
			</div>
		</div>
	)
}

export default Card
