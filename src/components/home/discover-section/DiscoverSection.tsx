'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

// import './styles.css';

// import required modules
import Image from 'next/image'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'

// image import
import Wrapper from '@/components/common/Wrapper'
import { useState } from 'react'
import Video from './VideoContainer'

const videosApi = [
	{ video: '/assets/home/video/video-1.mp4' },
	{ video: '/assets/home/video/video-2.mp4' },
	{ video: '/assets/home/video/video-3.mp4' },
	{ video: '/assets/home/video/video-2.mp4' },
]

export default function DiscoverSection() {
	const [isChange, setIsChange] = useState(true)
	return (
		<Wrapper>
			<section className="mx-auto mt-[69.68px] w-full">
				<h4 className="font-heading text-[34.72px] font-[700] uppercase leading-[40.08px] text-custom-red sm:text-[42.72px] sm:leading-[62.08px] md:text-[50.72px] md:leading-[72.08px] lg:text-[58.72px] lg:leading-[82.08px] xl:text-[64.288px] xl:leading-[80.43px]">
					Discover Treatments
				</h4>
				<h4 className="text-[17.65px] font-medium leading-8 xs:text-[24.23px] sm:text-[27.23px] md:text-[31.23px]">
					Explore Freely, Learn Confidently!
				</h4>
				<div className="relative mt-[5px] flex flex-col items-center pb-10 xs:mt-[15px] sm:mt-[20px]">
					{/* slide section */}
					<div className="relative flex items-center">
						<div className="absolute bottom-32 left-72 z-40 hidden pr-3 md:block lg:left-48 xl:left-44">
							<button className="custom-prev-video swiper-button-disabled flex h-[40.42px] w-[40.42px] items-center justify-center rounded-full border-[0.92px] border-[#9B9B9B]">
								<Image
									src={'/assets/icons/categories/Arrows/left-arrow.svg'}
									alt="left arrow"
									width={8.13}
									height={13.71}
								/>
							</button>
						</div>

						<div className="home-video-slider w-full max-w-[1200px]">
						<Swiper
								effect={"coverflow"}
								grabCursor={true}
								centeredSlides={true}
								slidesPerView={"auto"}
								loop={true}
								coverflowEffect={{
									rotate: 0,
									stretch: -100, // Reduce stretch to avoid slides overlapping
									depth: 350,
									modifier: 1,
									slideShadows: false, // Add shadow effect for depth
								}}
								navigation={{
									nextEl: '.custom-next-video',
									prevEl: '.custom-prev-video',
								}}
								modules={[EffectCoverflow, Navigation]}
								className="mySwiper"
								onSetTransition={() => {
									setIsChange(!isChange)
								}}
								onInit={(swiper) => {
									swiper.slideToLoop(1) // Ensure the active slide is centered
								}}
								onSlideChange={(swiper: any) => {
									if (swiper.isEnd) {
										setTimeout(() => {
											if (swiper.loopFix) swiper.loopFix(); // 🔥 Ensures the next slides are visible before looping
										}, 10);
									}
								}}
								breakpoints={{
									0: {
										slidesPerView: "auto", // Mobile: 1 slide
										spaceBetween: 10,
										coverflowEffect: {
											stretch: -50, // Adjust stretch for smaller screens
											depth: 200,
										},
									},
									641: {
										slidesPerView: 3, // Mobile: 1 slide
										spaceBetween: 10, // Reduced space between slides
									},
									768: {
										slidesPerView: 3, // Tablet: 2 slides
										spaceBetween: 20,
									},
									1024: {
										slidesPerView: 3, // Desktop: 3 slides
										spaceBetween: 30,
									},
								}}
							>
								{videosApi.map((item, index) => (
									<SwiperSlide key={index}>
										<div className="h-full w-full">
											<div className="relative h-[329.17px] w-full overflow-hidden rounded-[5.37px] xxs:h-[460px] sm:h-[520px]">
												<Video isChange={isChange} video={item.video} />
											</div>
											<div className="title mt-2">
												<p className="text-center text-[17.99px]">
													<span className="font-bold">
														Dental Teeth Augmentation
													</span>
													<br />
													Invisalign Consultation <br />
													<span className="leading-[40.5px]">
														Cosmetic Dental - London{' '}
													</span>
												</p>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>

						{/* Custom Navigation Buttons */}
						<div className="absolute bottom-32 right-72 z-40 hidden pl-3 md:block lg:right-48 xl:right-44">
							<button className="custom-next-video flex h-[40.42px] w-[40.42px] items-center justify-center rounded-full border-[0.92px] border-[#9B9B9B]">
								<Image
									src={'/assets/icons/categories/Arrows/right-arrow.svg'}
									alt="right arrow"
									width={8.13}
									height={13.71}
								/>
							</button>
						</div>
					</div>

					{/* text section */}
					<div className="flex flex-col items-center gap-y-[16px]">
						{/* <p className='text-center text-[17.99px]'>
              <span className='font-[700]'>Dental Teeth Augmentation</span><br/>
              Invisalign Consultation <br/>
              <span className='leading-[40.5px]'>Cosmetic Dental - London </span>
            </p> */}
						<button className="duration-400 h-[49px] w-[184px] rounded-[97.59px] bg-custom-red text-[21.96px] font-[400] leading-[37.45px] text-white transition-all hover:bg-black hover:text-white">
							See treatment
						</button>
					</div>
					<div className="absolute bottom-0 -z-10 h-[346px] w-full rounded-[10px] bg-[#F3F3F3]"></div>
				</div>
			</section>
		</Wrapper>
	)
}
