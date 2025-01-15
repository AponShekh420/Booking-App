'use client'
import Wrapper from '@/components/common/Wrapper'
import { DEMO_STAY_LISTINGS } from '@/data/listings'
import T from '@/utils/getT'
import { MapIcon } from '@heroicons/react/24/outline'
import { FC, useState } from 'react'
import ButtonClose from './ButtonClose'
import MapContainer from './MapContainer'
import StayCard2 from './StayCard2'
import TabFilters from './TabFilters'

const DEMO_STAYS = DEMO_STAY_LISTINGS.filter((_, i) => i < 12)
export interface SectionGridHasMapProps {}

const SkinTreatmentSection: FC<SectionGridHasMapProps> = () => {
	const [currentHoverID, setCurrentHoverID] = useState<string | number>(-1)
	const [showFullMapFixed, setShowFullMapFixed] = useState(false)

	return (
		<Wrapper>
			<div className="relative my-8 flex min-h-screen">
				{/* CARDSSSS */}
				<div className="min-h-screen w-full max-w-[1184px] flex-shrink-0 md:w-[60%] md:px-4 xl:w-[60%] xl:px-8 2xl:w-[60%] 2xl:pl-0">
					<h1 className="text-[34.72px] font-[700] uppercase leading-[40.08px] text-black sm:text-[42.72px] sm:leading-[62.08px] md:text-[35px] md:leading-[60.08px] lg:text-[47px] lg:leading-[72.08px] xl:text-[55px] xl:leading-[80.43px]">
						skin treatment for men in london
					</h1>
					<h2 className="block font-body font-semibold text-[18.85px] text-neutral-500">
						268 Clinics Within map area
					</h2>
					<div className="mb-8 mt-6 lg:mb-11">
						<TabFilters />
					</div>
					<div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 2xl:grid-cols-3 2xl:gap-x-6">
						{DEMO_STAYS.map((item) => (
							<div
								key={item.id}
								onMouseEnter={() => setCurrentHoverID((_) => item.id)}
								onMouseLeave={() => setCurrentHoverID((_) => -1)}
							>
								<StayCard2 data={item} />
							</div>
						))}
					</div>
				</div>

				{!showFullMapFixed && (
					<div
						className="fixed bottom-16 left-1/2 z-30 flex -translate-x-1/2 cursor-pointer items-center justify-center gap-x-3 rounded-full bg-neutral-900 px-6 py-2 text-sm text-white shadow-2xl md:bottom-8 xl:hidden"
						onClick={() => setShowFullMapFixed(true)}
					>
						<MapIcon className="h-5 w-5" />
						<span>{T['common']['Show map']}</span>
					</div>
				)}

				{/* MAPPPPP */}
				<div
					className={`md:static md:block md:flex-1 ${
						showFullMapFixed ? 'fixed inset-0 z-50' : 'hidden'
					}`}
				>
					{showFullMapFixed && (
						<ButtonClose
							onClick={() => setShowFullMapFixed(false)}
							className="absolute left-3 top-3 z-50 h-10 w-10 rounded-xl bg-white shadow-lg"
						/>
					)}

					<div className="fixed left-0 top-0 h-full w-full overflow-hidden rounded-md md:sticky xl:h-[calc(100vh-65px)]">
						<MapContainer
							currentHoverID={currentHoverID}
							DEMO_DATA={DEMO_STAYS}
							listingType="stay"
						/>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default SkinTreatmentSection
