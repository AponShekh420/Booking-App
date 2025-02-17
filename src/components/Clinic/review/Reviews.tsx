'use client'
import { StarIconFull, StarIconHalf } from '@/components/common/Icons'
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from '@headlessui/react'
import { useState } from 'react'
import ClinicHeadingText from '../ClinicHeadingText'
import ButtonClose from './ButtonClose'
import CommentListing from './CommentListing'



interface demoDataReviewsType {
	id: number,
	name: string,
	date: string,
	comment: string,
	starPoint: number,
}


const DEMO_DATA_REVIEWS: demoDataReviewsType[] = [
	{
		id: 1,
		name: 'Cody Fisher',
		date: 'May 20, 2021',
		comment:
			'I had a great experience at this clinic. They put me at ease and explained everything very well. Highly recommend them.',
		starPoint: 5,
	},
	{
		id: 1,
		name: 'Cody Fisher',
		date: 'May 20, 2021',
		comment:
			"Many thanks to all the team at Hanley Laser Clinic. I wasn't sure what to expect but the entire process was very smooth from booking to going to the clinic itself.",
		starPoint: 5,
	},
	{
		id: 1,
		name: 'Cody Fisher',
		date: 'May 20, 2021',
		comment:
			`Very impressed by this clinic. I have suffered for years with poor skin so thanks to them I've regained by confidence and feel younger and healthier too.`,
		starPoint: 5,
	},
]


const Reviews = () => {
	const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
	function closeModalReviews() {
		setIsReviewModalOpen(false)
	}

	function openModalAmenities() {
		setIsReviewModalOpen(true)
	}
	const renderModalReviews = () => {
		return (
			<Dialog
				open={isReviewModalOpen}
				onClose={closeModalReviews}
				className="relative z-50"
			>
				<DialogBackdrop
					transition
					className="fixed inset-0 bg-black/50 duration-200 ease-out data-[closed]:opacity-0"
				/>
				<div className="fixed inset-0 flex max-h-screen w-screen items-center justify-center p-4">
					<DialogPanel
						className="flex max-h-full w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl duration-200 ease-out data-[closed]:translate-y-16 data-[closed]:opacity-0 dark:border dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
						transition
					>
						<div className="relative flex-shrink-0 border-b border-neutral-200 px-6 py-4 text-center dark:border-neutral-800">
							<DialogTitle
								as="h3"
								className="text-lg font-medium leading-6 text-gray-900"
							>
								Reviews
							</DialogTitle>
							<span className="absolute start-3 top-3">
								<ButtonClose onClick={closeModalReviews} />
							</span>
						</div>

						<div className="hiddenScrollbar flex-1 divide-y divide-neutral-200 overflow-y-auto px-8 text-neutral-700 dark:divide-neutral-700 dark:text-neutral-300">
							{DEMO_DATA_REVIEWS?.map((item, index) => (
								<div
									key={index}
									className="flex items-center gap-x-5 py-2.5 sm:py-4 lg:gap-x-8 lg:py-5"
								>
									<CommentListing data={item} />
								</div>
							))}
						</div>
					</DialogPanel>
				</div>
			</Dialog>
		)
	}
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
				{DEMO_DATA_REVIEWS?.map((item, index) => (
					<div key={index}>
						<CommentListing data={item} className="py-8" />
					</div>
				))}

				<div className="pt-8">
					<button
						onClick={openModalAmenities}
						className="rounded-3xl bg-black px-8 py-2 text-white transition-colors duration-300 hover:bg-custom-red"
					>
						See all 20 reviews
					</button>
				</div>
			</div>
			{renderModalReviews()}
		</div>
	)
}

export default Reviews
