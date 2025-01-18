'use client'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import Wrapper from '@/components/common/Wrapper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ClinicHeadingText from '../ClinicHeadingText'
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
		<Wrapper className="mt-[79px]">
			<ClinicHeadingText title="Nearby " />
			<div className="mx-auto w-full">
				<div className="relative flex h-auto items-start">
					{/* Custom Navigation Buttons */}

					<Swiper
						modules={[Navigation]}
						slidesPerView="auto" // Dynamic width calculation
						spaceBetween={48} // Gap between slides
						centeredSlides={false} // Prevent centering when all slides fit
						centerInsufficientSlides={true} // Center slides if they are fewer than the available space
						loop={true}
						breakpoints={{
							0: { spaceBetween: 24 },
							240: { spaceBetween: 32 },
							340: { spaceBetween: 34 },
							640: { spaceBetween: 35 },
							768: { spaceBetween: 38 },
							1024: { spaceBetween: 43 },
							1280: { spaceBetween: 48 },
						}}
					>
						{nearbyApi.map((item, index) => (
							<SwiperSlide
								key={index}
								className="!w-auto" // Allows dynamic width calculation
							>
								<NearByCard nearby={item} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</Wrapper>
	)
}

export default NearbySection
