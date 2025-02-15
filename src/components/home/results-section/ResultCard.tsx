import {
	StarIconFull,
	StarIconHalf,
	SuccessIcon,
} from '@/components/common/Icons'
import card_left from '@/images/home/result-card-1.png'
import card_right from '@/images/home/result-card-2.png'
import card_profile from '@/images/home/card-profile.png'
import Image from 'next/image'
import { FC } from 'react'


interface ResultCardProps {
	item: number,
}



const ResultCard: FC<ResultCardProps> = ({item}) => {
	return (
		<div className="rounded-xl bg-[#F0F0F0] p-[22px]">
			<div className="flex gap-x-4">
				{/* Image Wrapper */}
				<div className="relative w-1/2 aspect-square">
					<Image
						className="w-full h-full rounded-xl object-cover"
						src={card_left}
						alt="card-image"
					/>
					{/* Badge */}
					{/* <span className="absolute top-4 left-4 bg-white text-gray-600 text-xs font-bold px-2 py-1 rounded-xl">
						Month 0
					</span> */}
				</div>

				<div className="relative w-1/2 aspect-square">
					<Image
						className="w-full h-full rounded-xl object-cover"
						src={card_right}
						alt="card-image"
					/>
					{/* Badge */}
					{/* <span className="absolute top-4 left-4 bg-white text-gray-600 text-xs font-bold px-2 py-1 rounded-xl">
						Month 8
					</span> */}
				</div>
			</div>

			<h3 className="lg:mt-[10px] xs:mt-[20px] xl:mt-[13px] sm:mt-[10px] mt-[9.28px] lg:text-[27px] xl:text-[32px] sm:text-[26px] xs:text-[30px] text-[25px] font-bold text-custom-red text-left font-heading leading-7 md:leading-8 lg:leading-10">
				“I’m lost for words why didn’t know this existed!”
			</h3>
			<p className="mt-[20px] xs:mt-[10px] xl:mt-[22px] text-[15.85px] sm:text-[15px] xl:text-[18px] xs:text-[17px] text-left">
				&quot;The PRP hair treatment has been a game-changer. I didn’t think
				regrowth was possible, but the results speak for themselves. I only wish
				I’d started sooner!&quot;
			</p>
			<div className="flex justify-between items-center gap-x-2 mt-[30px] md:mt-[20px] lg:mt-[25px] xl:mt-[39px] xs:mt-[17px]">
				<div className="flex items-center 2xl:gap-x-4 lg:gap-x-3 gap-x-2 md:gap-x-2 font-bold">
					<Image
						className="2xl:h-[50px] 2xl:w-[50px] w-[33.84px] h-[33.84px] xs:w-[40px] xs:h-[40px] sm:w-[40.84px] sm:h-[40.84px] md:w-[30.84px] md:h-[30.84px] lg:w-[30.84px] lg:h-[30.84px] rounded-full xl:w-[40px] xl:h-[40px]"
						src={card_profile}
						alt="card-profile"
					/>
					<div className='flex flex-col items-start'>
						<p className='2xl:text-[18px] text-[12.85px] sm:text-[16px] lg:text-[13px] xl:text-[17px] xs:text-[16px] lg:leading-3'>Daniel L.</p>
						<small className='font-body font-[400] text-[12px] xxs:text-[13px] sm:text-md leading-3 xs:text-sm md:text-[11.7px] lg:text-[12px] xl:text-[15px]'>PRP Treatment - Dermamina</small>
					</div>
				</div>

				<SuccessIcon className='xl:w-7 h-auto w-4 xs:w-6 lg:w-5'/>
				
			</div>
		</div>
	)
}


export default ResultCard;