import { StarIconFull, StarIconHalf } from '@/components/common/Icons'
import ClinicHeadingText from '../ClinicHeadingText'
import CommentListing from './CommentListing'

const Reviews = () => {
	return (
		<div className="">
			<div className="flex gap-x-8">
				<ClinicHeadingText title="Reviews" />
				<div className="flex items-center gap-2">
					<span className="flex">
						<StarIconFull className="h-auto w-[14.13px] md:w-[17px] lg:w-[21.42px]" />
						<StarIconFull className="h-auto w-[14.13px] md:w-[17px] lg:w-[21.42px]" />
						<StarIconFull className="h-auto w-[14.13px] md:w-[17px] lg:w-[21.42px]" />
						<StarIconFull className="h-auto w-[14.13px] md:w-[17px] lg:w-[21.42px]" />
						<StarIconHalf className="h-auto w-[14.13px] md:w-[17px] lg:w-[21.42px]" />
					</span>
					<span className="lg:text-[20.97px]">4.9 (292)</span>
				</div>
			</div>
			{/* comment */}
			<div className="divide-y divide-neutral-100">
				<CommentListing className="py-8" />
				<CommentListing className="py-8" />
				<CommentListing className="py-8" />
				<CommentListing className="py-8" />
				<div className="pt-8">
					<button className="rounded-3xl bg-black px-8 py-2 text-white transition-colors duration-300 hover:bg-custom-red">
						See all 20 reviews
					</button>
				</div>
			</div>
		</div>
	)
}

export default Reviews
