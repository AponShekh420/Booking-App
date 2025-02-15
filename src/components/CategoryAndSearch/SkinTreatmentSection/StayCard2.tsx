import { StarIconFull } from '@/components/common/Icons'
import { DEMO_CATEGORY_LISTINGS } from '@/data/listings'
import { StayDataType } from '@/data/types'
import { FC } from 'react'
import BtnLikeIcon from './BtnLikeIcon'
import DownloadBtn from './DownloadBtn'
import GallerySlider from './GallerySlider'

export interface StayCard2Props {
	className?: string
	data?: {
		galleryImgs: string[],
		href: any,
		like: boolean,
		id: string,
	}
	childclass?: string
	hiddenExtra?: boolean
	size?: 'default' | 'small'
}

const DEMO_DATA = DEMO_CATEGORY_LISTINGS[0]

const StayCard2: FC<StayCard2Props> = ({
	size = 'default',
	className = '',
	childclass = '',
	hiddenExtra = false,
	data = DEMO_DATA,
}) => {
	const {
		galleryImgs,
		href,
		like,
		id,
	} = data

	const renderSliderGallery = () => {
		return (
			<div className="group relative w-full cursor-pointer">
				<GallerySlider
					uniqueID={`StayCard2_${id}`}
					ratioClass="aspect-w-12 aspect-h-8 sm:aspect-w-12 sm:aspect-h-12"
					galleryImgs={galleryImgs}
					imageClass="rounded-lg"
					href={href}
				/>
				<BtnLikeIcon isLiked={like} className="absolute start-3 top-3" />
				<DownloadBtn className="absolute end-3 top-3 z-[1]" />
				<span className="absolute inset-0 rounded-xl bg-black bg-opacity-10 opacity-0 transition-opacity group-hover:opacity-100"></span>
			</div>
		)
	}

	return (
		<div className={`nc-StayCard2 relative bg-white ${className}`}>
			{renderSliderGallery()}
			{hiddenExtra ? (
				<div className={`flex items-end justify-between ${childclass}`}>
					<h3 className="mt-0.5 text-[16px]">
						<span className="block text-[16.27px] font-semibold">
							Hanley Laser Clinic
						</span>
						<span className="text-sm">Battersea, London</span>
					</h3>
					<div className="flex items-center gap-x-1 text-[16px] font-bold leading-[40.5px]">
						<StarIconFull className="h-[19px] w-[19px] text-custom-red" />
						<span>4.9 (292)</span>
					</div>
				</div>
			) : (
				<div className={`mt-[15px] px-1 ${childclass}`}>
					<div className="space-y-1.5">
						<div className="flex justify-between">
							<h3 className="text-[16px] font-semibold leading-[16px] md:text-[12px] lg:text-[16px]">
								Hanley Laser Clinic <br />
								Battersea, London
							</h3>
							<div className="flex items-center gap-x-1 text-[17px] font-bold leading-[40.5px] md:text-[12px] lg:text-[17px]">
								<StarIconFull className="h-[19px] w-[19px] text-custom-red md:h-[14px] md:w-[14px] lg:h-[19px] lg:w-[19px]" />
								<p>4.9 (292)</p>
							</div>
						</div>
						<hr />
						<div className="space-x-0.1 space-y-0.5">
							<div className="flex items-center justify-between">
								<p className="search-card-regular">Profhilo face or neck</p>
								<p className="search-card-bold">From £250</p>
							</div>
							<div className="flex items-center justify-between">
								<p className="search-card-regular">Laser hair removal</p>
								<p className="search-card-bold">From £340</p>
							</div>
							<div className="flex items-center justify-between">
								<p className="search-card-regular">Masseter (wide set jaw)</p>
								<p className="search-card-bold">From £200</p>
							</div>
						</div>
					</div>

					<button className="mt-[5px] text-[18.09px] font-bold capitalize text-custom-red transition-all duration-300 hover:text-black md:text-[15.09px] lg:text-[17.09px] xl:text-[18.09px]">
						see more
					</button>
				</div>
			)}
		</div>
	)
}

export default StayCard2
