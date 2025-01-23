'use client'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import {
	LeftArrowIcon,
	RightArrowIcon,
	VideoIndicatorIcon,
} from '@/components/common/Icons'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// interface CategorySlideProps {
//   slideTo: (index: number) => void
// }
const clinicApi = [
	{
		id: 1,
		image: '/assets/clinic/clinic-1.png',
		video: true,
	},
	{
		id: 2,
		image: '/assets/clinic/clinic-2.png',
		video: false,
	},
	{
		id: 3,
		image: '/assets/clinic/clinic-3.png',
		video: false,
	},
	{
		id: 4,
		image: '/assets/clinic/clinic-1.png',
		video: true,
	},
	{
		id: 5,
		image: '/assets/clinic/clinic-3.png',
		video: false,
	},
	{
		id: 6,
		image: '/assets/clinic/clinic-2.png',
		video: false,
	},
]
const ClinicVideoSlider = () => {
	return (
		<div className="mx-auto w-full">
			<div className="relative flex h-auto items-start">
				{/* Custom Navigation Buttons */}

				<Swiper
					modules={[Navigation]}
					slidesPerView="auto" // Dynamic width calculation
					spaceBetween={48} // Gap between slides
					centeredSlides={false} // Prevent centering when all slides fit
					centerInsufficientSlides={true} // Center slides if they are fewer than the available space
					navigation={{
						nextEl: '.custom-next-video-slider',
						prevEl: '.custom-prev-video-slider',
					}}
					onReachBeginning={() => {
						document
							?.querySelector('.custom-prev-video-slider')
							?.classList.add('swiper-button-disabled')
					}}
					onReachEnd={() => {
						document
							?.querySelector('.custom-next-video-slider')
							?.classList.add('swiper-button-disabled')
					}}
					onFromEdge={() => {
						document
							?.querySelector('.custom-prev-video-slider')
							?.classList.remove('swiper-button-disabled')
						document
							?.querySelector('.custom-next-video-slider')
							?.classList.remove('swiper-button-disabled')
					}}
					breakpoints={{
						0: { spaceBetween: 18 },
						1024: { spaceBetween: 20 },
						1280: { spaceBetween: 25 },
					}}
				>
					{clinicApi.map((item, index) => (
						<SwiperSlide
							key={index}
							className="!w-auto" // Allows dynamic width calculation
						>
							<div className="relative">
								<Image
									className="h-[432px] w-[362px] object-cover md:w-full"
									src={item.image}
									alt="video/image"
									width={item.video ? 777 : 410}
									height={432}
								/>
								{item.video && (
									<button className="absolute left-1/2 top-1/2 !z-[10] -translate-x-1/2 -translate-y-1/2 text-white transition-colors duration-300 hover:text-custom-red">
										<VideoIndicatorIcon />
									</button>
								)}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="hidden md:block">
					<button className="custom-prev-video-slider swiper-button-disabled absolute left-4 top-1/2 z-[20] flex h-[40.42px] w-[40.42px] -translate-y-1/2 items-center justify-center rounded-full border-[0.92px] border-white text-white transition-colors duration-300 hover:border-custom-red hover:text-custom-red disabled:hidden">
						<LeftArrowIcon />
					</button>
					<button className="custom-next-video-slider absolute right-4 top-1/2 z-[20] flex h-[40.42px] w-[40.42px] -translate-y-1/2 items-center justify-center rounded-full border-[0.92px] border-white text-white transition-colors duration-300 hover:border-custom-red hover:text-custom-red disabled:hidden">
						<RightArrowIcon />
					</button>
				</div>
			</div>
		</div>
	)
}

export default ClinicVideoSlider
