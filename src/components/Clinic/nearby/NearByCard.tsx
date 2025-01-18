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
		<div className={`relative w-fit bg-white ${className} `}>
			<div className="group relative w-full cursor-pointer">
				<Image
					src={nearby?.image}
					alt="listing card gallery"
					className="rounded-lg"
					width={338}
					height={320}
				/>
				<BtnLikeIcon isLiked={false} className="absolute start-3 top-3" />
				<DownloadBtn isLiked={true} className="absolute end-3 top-3 z-[1]" />
				<span className="absolute inset-0 rounded-xl bg-black bg-opacity-10 opacity-0 transition-opacity group-hover:opacity-100"></span>
			</div>
			<div
				className={`mt-[15px] flex items-center justify-between text-[13.28px] xs:text-[15.28px] md:text-[17.28px] lg:text-[18.28px] xl:text-[20px]`}
			>
				<h3 className="leading-[30px]">Dermamina - London</h3>

				{/* <div className="flex items-center gap-x-1 font-semibold">
					<StarIconFull className="h-auto w-[15px] text-custom-red sm:w-[19px]" />
					<span>4.9 (292)</span>
				</div> */}
			</div>
			<div className="flex items-center gap-2 text-[13.68px] font-semibold xs:text-[15.68px] md:text-[17.68px] lg:text-[18.68px]">
				<Link className="text-custom-red" href={'/'}>
					Open Today
				</Link>
				<span>9:30 am–8:30 pm</span>
			</div>
		</div>
	)
}
