import {
	StarIconFull,
	StarIconHalf,
	SuccessIcon,
} from '@/components/common/Icons'
import card_left from '@/images/home/card-left.png'
import card_profile from '@/images/home/card-profile.png'
import Image from 'next/image'

export default function ResultCard() {
	return (
		<div className="rounded-xl bg-[#F0F0F0] p-[22px]">
			<div className="flex gap-x-4">
				<Image
					className="xl:h-[177px] xl:w-[177px] md:h-[136.36px] md:w-[136.36px] lg:h-[146.36px] lg:w-[146.36px] w-[126.36px] h-[126.36px] rounded-xl object-cover"
					src={card_left}
					alt="card-image"
				/>
				<div>
					<div className="lg:mt-4 mt-0 flex items-center 2xl:gap-x-4 lg:gap-x-3 gap-x-2 md:gap-x-2 font-bold">
						<Image
							className="2xl:h-[50px] 2xl:w-[50px] w-[37.84px] h-[37.84px] md:w-[40.84px] md:h-[40.84px] rounded-full"
							src={card_profile}
							alt="card-profile"
						/>
						<span className='2xl:text-[18px] text-[12.85px] md:text-[14px]'>Daniel L.</span>
					</div>
					<div className="lg:mt-[22px] mt-[15.71px] flex flex-col items-start">
						<p className="2xl:text-[20px] text-[14.28px] leading-[22px] lg:text-[15px] xl:text-[16px] font-bold">PRP Treatment</p>
						<small>Dermamina</small>
						<div className="flex gap-x-4 lg:mt-[17.37px] mt-[6.84px]">
							<div className="flex items-center">
								<StarIconFull />
								<StarIconFull />
								<StarIconFull />
								<StarIconFull />
								<StarIconHalf />
							</div>
							<p>4.9</p>
						</div>
					</div>
				</div>
			</div>
			<h3 className="lg:mt-[13px] md:mt-[10px] mt-[9.28px] lg:text-[32px] md:text-[26px] text-[23px] font-bold text-custom-red text-left font-heading leading-7 md:leading-8 lg:leading-10">
				“I’m lost for words why didn’t know this existed!”
			</h3>
			<p className="mt-[22px] text-[12.85px] lg:text-[18px] text-left">
				&quot;The PRP hair treatment has been a game-changer. I didn’t think
				regrowth was possible, but the results speak for themselves. I only wish
				I’d started sooner!&quot;
			</p>
			<div className="flex items-center gap-x-2 mt-[39px]">
				<SuccessIcon />
				<p className='lg:text-[18px] text-[12.85px]'>2 weeks ago</p>
			</div>
		</div>
	)
}
