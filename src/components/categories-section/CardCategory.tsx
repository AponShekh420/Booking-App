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
				<div className="absolute top-0 w-11/12 m-auto flex justify-between z-50">
					{/* rating icons */}
					<div className='mt-[23.89px]'>
						<div className='flex'>
							<Image src={"/assets/icons/star.svg"} alt="star" 
								width={100} 
								height={100}
								className="lg:w-[18.37px] lg:h-[18.37px] h-[16.72px] w-[16.72px] sm:h-[20.72px] sm:w-[20.72px]"
							/>
							<Image src={"/assets/icons/star.svg"} alt="star" 
								width={100} 
								height={100}
								className="lg:w-[18.37px] lg:h-[18.37px] h-[16.72px] w-[16.72px] sm:h-[20.72px] sm:w-[20.72px]"
							/>
							<Image src={"/assets/icons/star.svg"} alt="star" 
								width={100} 
								height={100}
								className="lg:w-[18.37px] lg:h-[18.37px] h-[16.72px] w-[16.72px] sm:h-[20.72px] sm:w-[20.72px]"
							/>
							<Image src={"/assets/icons/star.svg"} alt="star" 
								width={100} 
								height={100}
								className="lg:w-[18.37px] lg:h-[18.37px] h-[16.72px] w-[16.72px] sm:h-[20.72px] sm:w-[20.72px]"
							/>
							<Image src={"/assets/icons/star-half.svg"} alt="star" 
								width={100} 
								height={100}
								className="lg:w-[18.37px] lg:h-[18.37px] h-[16.72px] w-[16.72px] sm:h-[20.72px] sm:w-[20.72px]"
							/>
						</div>

						<div className='mt-[1px]'>
							<p className='font-[400] md:text-[17.99px] text-[14.99px] leading-[40.5px] text-white text-left'>4.9 (292)</p>
						</div>
					</div>

					{/* category download icons */}
					<div className='bg-[#F3F3F3] w-[30.32px] h-[30.32px] rounded-full flex items-center justify-center mt-[13.78px]'>
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
					className={`lg:text-[17.99px] font-[700] lg:leading-[29.28px] text-left md:text-[16.99px] md:leading-[26.28px]`}
				>
					Anti Wrinkle Treatment
					<br/>
					<span className='font-[400] text-[16.2px] leading-[20.25px]'>Botox injections</span>
					<br/>
					<div className='mt-1'>
						<span className='text-[11.03px] font-[700] leading-[21.67px] md:text-[16.99px] md:leading-[26.28px] lg:text-[17.99px] lg:leading-[29.28px]'>From</span> £150 - <span className='font-[400] text-[16.2px] leading-[20.25px]'>Face Clinic - London</span>
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
