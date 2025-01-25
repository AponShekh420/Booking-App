'use client'
import { DownArrowIcon, VideoIndicatorIcon } from '@/components/common/Icons'
import video from '@/images/home/video-2.png'
import Image from 'next/image'
import { FC, useState } from 'react'
import ReviewSlider from './ReviewSlider'

interface ServiceItemProps {
	title: string
	price: number
	time: string
}

const Item: FC<ServiceItemProps> = ({ title, price, time }) => {
	const [toggle, setToggle] = useState<boolean>(false)

	return (
		<>
			<div className="mt-3 rounded-[10px] border border-[#9B9B9B] p-4 md:mt-[32px]">
				<div className="flex items-center justify-between">
					<div>
						<p className="font-semibold leading-7 text-[16px] md:text-[12px] lg:text-[16px]">
							{title}
							<br />
							<span className="font-bold">£{price}</span> -{' '}
							<span className="font-body font-[400]">{time}</span>
						</p>
						<p
							className="mt-1 flex cursor-pointer items-center gap-x-3 font-bold transition-all duration-300 hover:text-custom-red text-[16px] md:text-[12px] lg:text-[16px]"
							onClick={() => setToggle((pre) => !pre)}
						>
							Show details
							<DownArrowIcon />
						</p>
					</div>
					<button className="rounded-[80.12px] px-4 py-1 text-[13.07px] md:px-5 md:py-1 md:text-[14px] lg:px-7 lg:py-2 lg:text-[18.03px] capitalize bg-black font-semibold text-white transition-all duration-300 hover:bg-custom-red">
						Book
					</button>
				</div>

				<div
					className={`overflow-hidden transition-[max-height] delay-0 duration-300 ease-in-out ${toggle ? 'max-h-[9999px]' : 'max-h-[0px]'}`}
				>
					{/* video column*/}
					<div className="mt-3 flex flex-col justify-between gap-x-8 md:mt-[31px] lg:flex-row">
						<p className="mb-2 mt-1 whitespace-normal leading-8 lg:mb-0 lg:mt-2 text-[16px] md:text-[12px] lg:text-[16px]">
							PRP treatment can help support wound healing in trauma and joint
							injury. The technique can address male pattern baldness, stimulate
							the growth of hair transplants and enhance other cosmetic
							procedures.
						</p>
						<div className="relative h-60 max-h-[270px] w-full overflow-hidden rounded-[10px] xs:min-h-[380px] sm:min-h-[400px] lg:max-h-[180px] lg:min-h-[180px] lg:min-w-[240px] xl:min-h-[270px] xl:min-w-[319px]">
							<Image
								src={video}
								alt="video"
								className="h-full w-full object-cover object-top"
								fill
							/>
							<VideoIndicatorIcon className="absolute left-1/2 top-1/2 !z-[10] h-20 w-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white hover:text-custom-red lg:h-10 lg:w-10 xl:h-20 xl:w-20" />
							<p className="absolute bottom-2 left-3 z-30 text-[17.65px] leading-[25px] text-white lg:text-[15px] xl:text-[17.65px]">
								Dr. Van Der Press - Dermamina
							</p>
						</div>
					</div>

					{/* service review */}
					<div>
						<p className="mt-10 text-[16.74px] font-semibold md:mt-8 md:text-[18px] lg:text-[24px]">
							Service Review
						</p>

						{/* box container or slider container */}
						<div className="flex gap-x-10 md:mt-1">
							{/* review box slider */}
							<ReviewSlider />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Item
