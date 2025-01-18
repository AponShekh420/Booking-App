'use client'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import {
	LeftArrowIcon,
	RatingGroup,
	RightArrowIcon,
	VideoIndicatorIcon,
} from '@/components/common/Icons'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'




const clinicApi = [
	{
		id: 1,
		image: '/assets/clinic/image-1.png',
		video: true,
	},
	{
		id: 1,
		image: '/assets/clinic/image-2.png',
		video: false,
	},
	{
		id: 1,
		image: '/assets/clinic/image-1.png',
		video: false,
	},
]

const ReviewSlider = () => {
  return (
    <div className="mx-auto w-full">
			<div className="relative flex h-auto items-start">
				{/* Custom Navigation Buttons */}

				<Swiper
					modules={[Navigation]}
					slidesPerView={2} // Dynamic width calculation
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
						0: { spaceBetween: 24 },
						240: { spaceBetween: 32 },
						340: { spaceBetween: 34 },
						640: { spaceBetween: 35 },
						768: { spaceBetween: 38 },
						1024: { spaceBetween: 43 },
						1280: { spaceBetween: 48 },
					}}
				>
					{clinicApi.map((item, index) => (
						<SwiperSlide
							key={index}
							className="!w-6/12" // Allows dynamic width calculation
						>
              <div className="flex items-center gap-x-4">
                <div className="w-[172.32px] h-[172.32px] relative rounded-[8.37px] overflow-hidden">
                  <Image src={item?.image} alt="image" className="w-full h-full object-cover" fill/>
                </div>
                <div>
                  <RatingGroup/>
                  <p className="text-[20.08px] font-semibold leading-[21.7px] mt-2 text-left">Great care &<br/>
                  Service</p>
                  <p className="text-[13.38px] leading-[21px mt-1 text-left">Treatment by Jess</p>
                  <p className="text-[13.38px] leading-[21px] mt-4 text-left">Dave - 5 months ago</p>
                </div>
              </div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className="hidden md:block">
					<button className="custom-prev-video-slider swiper-button-disabled absolute left-4 top-1/2 z-[20] flex h-[40.42px] w-[40.42px] -translate-y-1/2 items-center justify-center rounded-full border-[0.92px] border-[#9B9B9B] text-black transition-colors duration-300 hover:border-custom-red hover:text-custom-red disabled:hidden">
						<LeftArrowIcon />
					</button>
					<button className="custom-next-video-slider absolute right-4 top-1/2 z-[20] flex h-[40.42px] w-[40.42px] -translate-y-1/2 items-center justify-center rounded-full border-[0.92px] border-[#9B9B9B] text-black transition-colors duration-300 hover:border-custom-red hover:text-custom-red disabled:hidden">
						<RightArrowIcon />
					</button>
				</div>
			</div>
		</div>
  );
}

export default ReviewSlider;