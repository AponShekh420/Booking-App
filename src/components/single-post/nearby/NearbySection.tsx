'use client'
import { Grid, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import Wrapper from '@/components/common/Wrapper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import NearByCard from './NearByCard'

// interface CategorySlideProps {
//   slideTo: (index: number) => void
// }
const nearbyApi = [
	{
		id: 1,
		image: '/assets/category/image-1.jpg',
		video: true,
	},
	{
		id: 2,
		image: '/assets/category/image-2.jpg',
		video: false,
	},

	{
		id: 3,
		image: '/assets/category/image-3.jpg',
		video: true,
	},

	{
		id: 4,
		image: '/assets/category/image-4.jpg',
		video: false,
	},
	{
		id: 5,
		image: '/assets/category/image-5.jpg',
		video: true,
	},

	{
		id: 6,
		image: '/assets/category/image-6.jpg',
		video: false,
	},
	{
		id: 7,
		image: '/assets/category/image-7.jpg',
		video: false,
	},

	{
		id: 8,
		image: '/assets/category/image-8.jpg',
		video: true,
	},

	{
		id: 9,
		image: '/assets/category/image-9.jpg',
		video: false,
	},
	{
		id: 10,
		image: '/assets/category/image-10.jpg',
		video: true,
	},
	{
		id: 11,
		image: '/assets/category/image-11.jpg',
		video: false,
	},
	{
		id: 12,
		image: '/assets/category/image-12.jpg',
		video: false,
	},
]
const NearbySection = () => {
	return (
		<div className="lg:mt-[79px] mt-10 xs:mt-12 sm:mt-14 md:mt-16">
			<h4 className="font-heading text-[34.72px] capitalize font-[700] leading-[40.08px] text-black sm:text-[42.72px] sm:leading-[62.08px] md:text-[50.72px] md:leading-[72.08px] lg:text-[58.72px] lg:leading-[82.08px] xl:text-[64.288px] xl:leading-[80.43px]">
				Nearby Rejuvenation Treatments
			</h4>
			<div className="mx-auto w-full">
				<div className="relative flex h-auto items-start">
					{/* Custom Navigation Buttons */}

					<Swiper
						modules={[Navigation, Grid]}
						slidesPerView={4}
						slidesPerGroup={4}
						centeredSlides={false}
						spaceBetween={20}
						grid={{
							rows: 1, // Define 2 rows
							fill: 'row', // Fill by rows
						}}
						loopAddBlankSlides={true}
						breakpoints={{
							// Responsive breakpoints
							1024: {
								slidesPerView: 4,
								slidesPerGroup: 4,
							},
							768: {
								slidesPerView: 3,
								slidesPerGroup: 3,
							},
							240: {
								slidesPerView: 2,
								slidesPerGroup: 2,
							},
						}}
						className='!mt-2 !mb-0'
					>
						{nearbyApi.map((item, index) => (
							<div className={`nc-SectionSliderNewCategories`} key={index}>
								<div className="relative flow-root">
									<div className="hiddenScrollbar relative -mx-2 flex snap-x snap-mandatory overflow-x-auto lg:-mx-3.5">
										<div
											className={`mySnapItem w-[17rem] shrink-0 snap-start px-2 lg:w-[25%] lg:px-3.5 xl:w-[20%]`}
										>
											<SwiperSlide
												virtualIndex={index} // Allows dynamic width calculation
											>
												<NearByCard nearby={item} />
											</SwiperSlide>
										</div>
									</div>
								</div>
							</div>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default NearbySection
