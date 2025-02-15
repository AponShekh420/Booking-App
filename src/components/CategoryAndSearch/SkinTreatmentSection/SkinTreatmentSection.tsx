'use client'
import Wrapper from '@/components/common/Wrapper'
import { DEMO_CATEGORY_LISTINGS } from '@/data/listings'
import categoryListData from '@/data/categoryPageData'
import T from '@/utils/getT'
import { MapIcon } from '@heroicons/react/24/outline'
import { CSSProperties, FC, useState } from 'react'
import { MoonLoader } from 'react-spinners'
import ButtonClose from './ButtonClose'
import MapContainer from './MapContainer'
import StayCard2 from './StayCard2'
import TabFilters from './TabFilters'

const override: CSSProperties = {
	display: 'block',
	margin: '0 auto',
	borderColor: 'black',
}

const DEMO_STAYS = DEMO_CATEGORY_LISTINGS.filter((_, i) => i < 12)
export interface SectionGridHasMapProps {}

const SkinTreatmentSection: FC<SectionGridHasMapProps> = () => {
	const [currentHoverID, setCurrentHoverID] = useState<string | number>(-1)
	const [showFullMapFixed, setShowFullMapFixed] = useState(false)
	const [loading, setLoading] = useState<boolean>(true)

	return (
		<Wrapper className="md:w-full">
			<div className="relative my-8 flex min-h-screen">
				{/* CARDSSSS */}
				<div className="min-h-screen w-full max-w-[1184px] flex-shrink-0 md:w-[60%] md:px-4 xl:w-[60%] xl:px-8 2xl:w-[60%] 2xl:pl-0">
					<div className="flex justify-between gap-x-2">
						<h1 className="font-heading text-[34.72px] font-[700] uppercase leading-[33.08px] text-black sm:text-[42.72px] sm:leading-[43.08px] md:text-[35px] md:leading-[32.08px] lg:text-[40px] lg:leading-[50.08px] xl:text-[50px] xl:leading-[53.43px]">
							skin treatment
						</h1>
						<TabFilters />
					</div>
					<div className="mb-4 flex gap-x-2 md:gap-x-3">
						<h4 className="font-heading text-[21px] uppercase sm:text-[25px] md:text-[21px] lg:text-[29px]">
							for men in{' '}
							<span className="text-custom-red">BATTERSEA LONDON</span>
						</h4>
						<p className="block font-body text-[10.52px] font-semibold text-neutral-500 xs:text-[13.52px] sm:text-[16.85px] md:text-[14.85px] lg:text-[16.85px]">
							268 Clinics Within map area
						</p>
					</div>
					<div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 2xl:grid-cols-3 2xl:gap-x-6">
						{categoryListData?.map((item) => (
							<div
								key={item.id}
								onMouseEnter={() => setCurrentHoverID((_) => item.id)}
								onMouseLeave={() => setCurrentHoverID((_) => -1)}
							>
								<StayCard2 data={item} />
							</div>
						))}

						{/* loader */}
						<div className="mt-5 flex w-full justify-center">
							<MoonLoader
								color={'#E9082A'}
								loading={loading}
								cssOverride={override}
								size={30}
								aria-label="Loading Spinner"
								data-testid="loader"
							/>
						</div>
						<div className="mt-5 hidden w-full justify-center sm:flex">
							<MoonLoader
								color={'#E9082A'}
								loading={loading}
								cssOverride={override}
								size={30}
								aria-label="Loading Spinner"
								data-testid="loader"
							/>
						</div>
						<div className="mt-5 hidden w-full justify-center 2xl:flex">
							<MoonLoader
								color={'#E9082A'}
								loading={loading}
								cssOverride={override}
								size={30}
								aria-label="Loading Spinner"
								data-testid="loader"
							/>
						</div>
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

					<div className="fixed left-0 top-0 h-full w-full overflow-hidden rounded-md md:sticky md:h-[calc(100vh)]">
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
