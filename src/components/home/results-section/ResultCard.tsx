import {
	StarIconFull,
	StarIconHalf,
	SuccessIcon,
} from '@/components/common/Icons'
import card_left from '@/images/home/card-left.png'
import card_profile from '@/images/home/card-profile.png'
import { imageOptimizer } from 'next/dist/server/image-optimizer'
import Image from 'next/image'
import { FC } from 'react'


interface ResultCardProps {
	item: {
		authName: string,
		authImg: string,
		clinicName: string,
		clinicType: string,
		title: string,
		desc: string,
		img: string,
	}
}



const ResultCard: FC<ResultCardProps> = ({item}) => {

	const {authName, authImg, clinicName, clinicType, title, desc, img} = item;

	return (
		<div className="rounded-xl bg-[#F0F0F0] p-[22px]">
			<div className="flex gap-x-4">
				<Image
					className="2xl:h-[177px] 2xl:w-[177px] xl:h-[150px] xl:w-[150px] md:h-[100.36px] md:w-[100.36px] xs:w-[140px] xs:h-[140px] sm:h-[105.36px] sm:w-[105.36px] lg:h-[120.36px] lg:w-[120.36px] w-[126.36px] h-[126.36px] rounded-xl object-cover"
					src={img}
					alt="card-image"
					width={100}
					height={100}
				/>
				<div>
					<div className="xl:mt-4 lg:mt-1 mt-0 xs:mt-2 sm:mt-2 md:mt-1 flex items-center 2xl:gap-x-4 lg:gap-x-3 gap-x-2 md:gap-x-2 font-bold">
						<Image
							className="2xl:h-[50px] 2xl:w-[50px] w-[37.84px] h-[37.84px] xs:w-[35px] xs:h-[35px] sm:w-[25.84px] sm:h-[25.84px] md:w-[30.84px] md:h-[30.84px] lg:w-[35.84px] lg:h-[35.84px] rounded-full"
							src={authImg}
							alt="card-profile"
							width={100}
							height={100}
						/>
						<span className='2xl:text-[18px] text-[12.85px] sm:text-[12px] lg:text-[13px] xl:text-[17px] xs:text-[16px]'>{authName}</span>
					</div>
					<div className="2xl:mt-[22px] xl:mt-[14px] lg:mt-[10px] sm:mt-[6px] mt-[15.71px] flex flex-col items-start">
						<p className="xl:text-[20px] text-[14.28px] xl:leading-[22px] lg:leading-[17px] leading-[22px] sm:leading-[15px] lg:text-[13px] md:text-[13px] xs:text-[19px] sm:text-[14px] font-bold">{clinicType}</p>
						<small className='text-left leading-5 xs:leading-8 sm:leading-7 md:leading-6 text-[11px] xxs:text-[12px] xs:text-[14px] sm:text-[13px] xl:text-[15px]'>{clinicName}</small>
						<div className="flex xl:gap-x-4 lg:gap-x-2 gap-x-2 sm:gap-x-1 lg:mt-[10.37px] 2xl:mt-[17.37px] xl:mt-[10.37px] mt-[6.84px] sm:mt-[1px] md:mt-[0.5px]">
							<div className="flex items-center">
								<StarIconFull />
								<StarIconFull />
								<StarIconFull />
								<StarIconFull />
								<StarIconHalf />
							</div>
							<p className='md:text-[14px] lg:text-[14px] xl:text-[17px] sm:text-[12px] xs:text-[16px] text-[14px]'>4.9</p>
						</div>
					</div>
				{/* Image Wrapper */}
					</div>
				</div>
				<h3 className="lg:mt-[10px] xs:mt-[20px] xl:mt-[13px] sm:mt-[10px] mt-[9.28px] lg:text-[27px] xl:text-[32px] sm:text-[26px] xs:text-[30px] text-[25px] font-bold text-custom-red text-left font-heading leading-7 md:leading-8 lg:leading-10">
				{title}
			</h3>
			<p className="mt-[20px] xs:mt-[10px] xl:mt-[22px] text-[15.85px] sm:text-[15px] xl:text-[18px] xs:text-[17px] text-left">
				{desc}
			</p>
			<div className="flex items-center gap-x-2 mt-[30px] md:mt-[20px] lg:mt-[25px] xl:mt-[39px] xs:mt-[17px]">
				<SuccessIcon />
				<p className='lg:text-[18px] text-[12.85px]'>2 weeks ago</p>
				</div>
		</div>
	)
}


export default ResultCard;