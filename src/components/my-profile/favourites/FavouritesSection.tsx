import ProfileHeading from '../ProfileHeading'
import Card from './Card'

const FavouritesSection = () => {
	return (
		<div>
			<div className="mt-[54px]">
				<ProfileHeading title="Your Favourite Clinics " tag="h1" />
				<div className="mt-10 grid grid-cols-1 gap-3 lg:mt-12 xl:grid-cols-2">
					{[1, 2, 3, 4].map((item, index) => (
						<Card
							key={index}
							title="Dermamina"
							location="114 New Cavendish St, London"
							rating={5.0}
							ratingNumber={1328}
						/>
					))}
				</div>

				<ProfileHeading
					title="Your Favourite Articles"
					className="mt-10 lg:mt-16"
				/>

				<div className="m-auto mt-3 w-11/12 sm:mt-1 lg:mt-6">
					<div className="mb-7 border-b border-b-[#9B9B9B] py-4">
						<h2 className="text-2xl font-bold sm:text-[28px] lg:text-[32px]">
							Turn back time
						</h2>
						<div className="mt-0 flex items-center justify-between gap-x-5 sm:mt-1 lg:mt-3">
							<p className="text-md sm:text-lg lg:text-[23.2px]">
								Turn back time Explore facial rejuvenation treatments
							</p>
							<p className="whitespace-nowrap text-sm font-bold lg:text-[16px]">
								jan 2025
							</p>
						</div>
					</div>

					<div className="mb-7 border-b border-b-[#9B9B9B] py-4">
						<h2 className="text-2xl font-bold sm:text-[28px] lg:text-[32px]">
							Turn back time
						</h2>
						<div className="mt-0 flex items-center justify-between gap-x-5 sm:mt-1 lg:mt-3">
							<p className="text-md sm:text-lg lg:text-[23.2px]">
								Turn back time Explore facial rejuvenation treatments
							</p>
							<p className="whitespace-nowrap text-sm font-bold lg:text-[16px]">
								jan 2025
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FavouritesSection
