import Image from 'next/image'
import Link from 'next/link'
import BtnLikeIcon from './BtnLikeIcon'
import DownloadBtn from './DownloadBtn'
type NearbyT = {
	className?: string
	nearby: {
		id: number
		image: string
	}
}
export default function NearByCard({ nearby, className }: NearbyT) {
	return (
		<div className={`nc-CardCategory5 flex flex-col relative bg-white ${className} `}>
			<div
				className={`group aspect-h-3 aspect-w-3 relative h-0 w-full flex-shrink-0 overflow-hidden rounded-2xl`}
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
					src={nearby?.image || ''}
					className="h-full w-full rounded-2xl object-cover"
					sizes="(max-width: 400px) 100vw, 400px"
				/>
				<span className="absolute inset-0 bg-black bg-opacity-10 opacity-0 transition-opacity group-hover:opacity-100"></span>
			</div>

			<div
				className={`xl:mt-[10px] mt-2 xxs:mt-3 flex items-center justify-between text-[13.68px] xxs:text-[13.68px] xs:text-[15.28px] md:text-[16.28px] lg:text-[17px] xl:text-[20px]`}
			>
				<h3 className="xl:leading-[24px] leading-3 text-left">Hanley Laser Clinic - London</h3>
			</div>
			<div className="flex flex-wrap gap-y-0 items-center gap-x-2 text-[12.68px] xxs:text-[13.68px] font-semibold xs:text-[15.68px] md:text-[16.68px] lg:text-[17px] mt-2 xxs:mt-2 xs:mt-4">
				<Link className="text-custom-red xs:leading-3 leading-4" href={'/'}>
					Open Today
				</Link>
				<span className='xs:leading-4 leading-5'>9:30 am–8:30 pm</span>
			</div>
		</div>
	)
}
