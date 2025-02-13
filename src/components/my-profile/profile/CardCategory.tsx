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
				className={`group aspect-h-3 aspect-w-3 relative h-0 w-full flex-shrink-0 overflow-hidden rounded-[10px]`}
			>
				{/* <div className="absolute top-0 w-11/12 m-auto flex justify-between z-50 mt-[19.89px]">
					<div className='mr-[23px]'>
						<div className='flex'>
							<Image src={"/assets/icons/categories/heart.svg"} alt="star" 
								width={100} 
								height={100}
								className="lg:w-[22.37px] lg:h-[22.37px] h-[18.72px] w-[18.72px] sm:h-[21.72px] sm:w-[21.72px]"
							/>
						</div>
					</div>

					<div className='bg-[#00000040] bg-opacity-[25px] w-[30.32px] h-[30.32px] rounded-full flex items-center justify-center'>
						<Image src={"/assets/icons/download-category.svg"} alt="download" 
							width={100} 
							height={100}
							className="w-[16.54px] h-[16.54px]"
						/>
					</div>
				</div> */}

				<Image
					fill
					alt=""
					src={thumbnail || ''}
					className="h-full w-full rounded-[10px] object-cover"
					sizes="(max-width: 400px) 100vw, 400px"
				/>
				<span className="absolute inset-0 bg-black bg-opacity-10 opacity-0 transition-opacity group-hover:opacity-100"></span>
			</div>
			<div className="mt-[9.9px]">
				<h3
					className={`sm:text-[15.27px] xs:text-[14px] font-bold text-left text-[15.27px] leading-4 hover:text-custom-red transition-all duration-300`}
				>
					Hair Regrowth Treatment
					<br/>
					<span className='font-body font-[400] text-[11.99px] leading-3 mt-2'>PRP - platelet-rich plasma therapy</span>
				</h3>
				<p className='sm:text-[15.27px] xs:text-[14px] font-bold text-left text-[15.27px] mt-2 leading-3'> 
					<span className='text-[13.03px] font-bold'>From</span> £150
					<br/>
					<span className='font-body font-[400] text-[11.99px]'>Hanley Laser Clinic - London</span>
				</p> 
			</div>
		</Link>
	)
}

export default CardCategory;
