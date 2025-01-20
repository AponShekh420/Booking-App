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
    <div className="w-full">
			<div className="relative flex h-auto items-start">
				{/* Custom Navigation Buttons */}

				<Swiper
					modules={[Navigation]}
					slidesPerView={1.5} // Dynamic width calculation
					spaceBetween={4} // Gap between slides
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
						0: {
							 spaceBetween: 4, 
							 slidesPerView: 1,
						},
						424: {
							spaceBetween: 4, 
							slidesPerView: 1.2,
						},
						586: { 
							spaceBetween: 4,
							slidesPerView: 2
						},
						640: {
							spaceBetween: 4, 
							slidesPerView: 1.2,
						},
						1024: { 
							spaceBetween: 20,
							slidesPerView: 2,
						 },
					}}
				>
					{clinicApi.map((item, index) => (
						<SwiperSlide
							key={index}
							// className="lg:!w-6/12 w-full" // Allows dynamic width calculation
						>
              <div className="flex items-center gap-x-4">
                <div className="xl:min-w-[160.32px] xl:min-h-[160.32px] md:min-w-[110.32px] md:min-h-[110.32px] lg:min-w-[100.32px] lg:min-h-[100.32px] min-w-[110.32px] min-h-[110.32px] sm:min-w-[140.32px] sm:min-h-[140.32px] relative rounded-[8.37px] overflow-hidden">
                  <Image src={item?.image} alt="image" className="w-full h-full object-cover" fill/>
                </div>
                <div>
                  <RatingGroup className='md:w-20 lg:w-16 xl:w-24 w-16 sm:w-20'/>
                  <p className="xl:text-[20.08px] sm:text-[20.08px] md:text-[16.08px] mt-2 lg:text-[17.08px] font-semibold lg:leading-[15.7px] leading-3 xl:leading-[21.7px] sm:leading-[21.7px] md:leading-[15.7px] xl:mt-2 md:mt-1 text-left text-[12.69px]">Great care &<br/>
                  Service</p>
                  <p className="xl:text-[13.38px] md:text-[11px] sm:text-[13.38px] lg:text-[12px] md:leading-[21px] leading-[10px] xl:mt-1 md:mt-1 mt-2 text-left text-[13px] font-light">Treatment by Jess</p>
                  <p className="xl:text-[13.38px] md:text-[11px] sm:text-[13.38px] lg:text-[12px] md:leading-[21px] leading-[10px] xl:mt-4 md:mt-0 mt-4 text-left text-[13px] font-light">Dave - 5 months ago</p>
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