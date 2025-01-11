import React, { FC } from 'react'
import { TaxonomyType } from '@/data/types'
import convertNumbThousand from '@/utils/convertNumbThousand'
import Link from 'next/link'
import Image from 'next/image'


export interface Taxonomy {
  id: string;
	href?: any;
  name: string;
  taxonomy: string;
  count: number;
  thumbnail: string;
}
export interface CardCategory5Props {
  className?: string;
  taxonomy: Taxonomy;
}

const CardCategory: FC<CardCategory5Props> = ({
	className = '',
	taxonomy,
}) => {
	const { count, name, href = '/', thumbnail } = taxonomy
	return (
		<Link href={href} className={`nc-CardCategory5 flex flex-col ${className}`}>
			<div
				className={`group aspect-h-3 aspect-w-4 relative h-0 w-full flex-shrink-0 overflow-hidden rounded-2xl`}
			>
				<div className="absolute top-0 w-11/12 m-auto flex justify-between z-50 mt-[19.89px]">
					{/* rating icons */}
					<div className='mr-[23px]'>
						<div className='flex'>
							<Image src={"/assets/icons/categories/heart.svg"} alt="star" 
								width={100} 
								height={100}
								className="lg:w-[22.37px] lg:h-[22.37px] h-[18.72px] w-[18.72px] sm:h-[21.72px] sm:w-[21.72px]"
							/>
						</div>
					</div>

					{/* category download icons */}
					<div className='bg-[#00000040] bg-opacity-[25px] w-[30.32px] h-[30.32px] rounded-full flex items-center justify-center'>
						<Image src={"/assets/icons/download-category.svg"} alt="download" 
							width={100} 
							height={100}
							className="w-[16.54px] h-[16.54px]"
						/>
					</div>
				</div>

				<Image
					fill
					alt=""
					src={thumbnail || ''}
					className="h-full w-full rounded-2xl object-cover"
					sizes="(max-width: 400px) 100vw, 400px"
				/>
				<span className="absolute inset-0 bg-black bg-opacity-10 opacity-0 transition-opacity group-hover:opacity-100"></span>
			</div>
			<div className="mt-[9.9px]">
				<h5
					className={`sm:text-[17.99px] font-[700] lg:leading-[23.28px] text-left text-[13.27px] xs:text-[16.90px] sm:leading-[26.25px] xs:leading-[20.25px] leading-[19.25px]`}
				>
					<span className={"hover:text-custom-red transition-all duration-300"}>Hair Regrowth Treatment</span>
					<br/>
					<span className='font-[400] text-[11.99px] sm:text-[15.99px] xs:text-[13.99px] lg:text-[16.2px]'>PRP - platelet-rich plasma therapy</span>
					<p className='font-[400] text-[11.99px] sm:text-[15.99px] xs:text-[13.99px] lg:text-[16.2px] sm:mt-[10px] xs:mt-[8px] mt-[5px]'>Dermamina - London</p>
					<div className='flex justify-between items-center sm:mt-[10px] xs:mt-[8px] mt-[5px]'>
						<div className='font-[700] text-[13.99px] xs:text-[16.99px] lg:text-[17.99px] lg:leading-[29.28px] md:mt-[2.8px] mt-[2.5px]'>
							<span className='text-[10.03px] xs:text-[14.03px] font-[700] md:text-[16.99px] lg:text-[17.99px]'>From</span> £150
						</div>
						<div className='flex items-center gap-x-[2px] xs:gap-x-2 md:mt-[-3px] mt-[-2px] flex-nowrap'>
							<div className='flex items-center lg:w-[16.37px] lg:h-[16.37px] md:w-[15.37px] md:h-[15.37px] h-[12.72px] w-[12.72px] xs:h-[14.72px] xs:w-[14.72px] sm:h-[14.72px] sm:w-[14.72px] mt-[2px] xs:mt-0'>
								<Image src={"/assets/icons/categories/star-color.svg"} alt="star" 
									width={100} 
									height={100}
								/>
							</div>
							<p className='font-[700] text-[13.99px] xs:text-[16.99px] leading-[26.28px] lg:text-[17.99px] lg:leading-[29.28px] md:mt-[2.8px] mt-[2.5px]'>4.9 (292)</p>
						</div>
					</div>
				</h5>
				<span
					className={`mt-1.5 block text-sm text-neutral-600 dark:text-neutral-400`}
				>
				</span>
			</div>
		</Link>
	)
}

export default CardCategory;
