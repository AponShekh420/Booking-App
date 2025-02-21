'use client'
import { Navigation } from 'swiper/modules'
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
		image: '/assets/clinic/nearby-1.png',
		video: true,
	},
	{
		id: 2,
		image: '/assets/clinic/nearby-2.png',
		video: false,
	},

	{
		id: 4,
		image: '/assets/clinic/nearby-1.png',
		video: true,
	},

	{
		id: 6,
		image: '/assets/clinic/nearby-2.png',
		video: false,
	},
	{
		id: 7,
		image: '/assets/clinic/nearby-1.png',
		video: true,
	},

	{
		id: 8,
		image: '/assets/clinic/nearby-2.png',
		video: false,
	},
]
const NearbySection = () => {
	return (
		<div className="mt-[79px] w-full">
			<h4 className="font-heading text-[34.72px] capitalize font-[700] leading-[40.08px] text-black sm:text-[42.72px] sm:leading-[62.08px] md:text-[50.72px] md:leading-[72.08px] lg:text-[58.72px] lg:leading-[82.08px] xl:text-[64.288px] xl:leading-[80.43px]">
				Nearby Rejuvenation Treatments
			</h4>


			<div className="mx-auto w-full">
				<div className="relative flex h-auto items-start">
					{/* Custom Navigation Buttons */}

					<Swiper
						modules={[Navigation]}
						slidesPerView={4}
						slidesPerGroup={4}
						centeredSlides={false}
						spaceBetween={21}
						breakpoints={{
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
					>
						{nearbyApi.map((item, index) => (
							<SwiperSlide
								key={index}
								// className="!w-auto" // Allows dynamic width calculation
							>
								<NearByCard nearby={item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default NearbySection
