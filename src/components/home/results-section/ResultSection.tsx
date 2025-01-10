"use client"
import Wrapper from '@/components/common/Wrapper'
import ResultCard from './ResultCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { Navigation } from 'swiper/modules'

export default function ResultSection() {
	return (
		<section className="mt-[48.68px]">
			<Wrapper>
				<h1 className="font-[700] xl:text-[80.36px] xl:leading-[96.43px] text-[43.4px] leading-[52.08px] sm:text-[53.4px] sm:leading-[62.08px] md:text-[63.4px] md:leading-[72.08px] lg:text-[73.4px] lg:leading-[82.08px] text-custom-red">
					RESULTS THAT SPEAK FOR THEMSELVES
				</h1>
				<div className="w-full">
					<Swiper
						modules={[Navigation]}
						// onSwiper={setSwiperRef}
						slidesPerView={3}
						slidesPerGroup={3}
						centeredSlides={false}
						spaceBetween={22}
						// virtual
						navigation={{
							nextEl: '.custom-next-result',
							prevEl: '.custom-prev-result',
						}}
						loopAddBlankSlides={true}
						breakpoints={{
							// Responsive breakpoints
							791: {
								slidesPerView: 2,
								slidesPerGroup: 2,
							},
							1280: {
								slidesPerView: 3,
								slidesPerGroup: 3,
							},
							390: {
								slidesPerView: 1,
								slidesPerGroup: 1,
							},
						}}
					>
						{[1, 2, 3, 4].map((item, index) => (
							<div className={`nc-SectionSliderNewCategories`} key={index}>
								<div className="relative flow-root">
									<div className="hiddenScrollbar relative -mx-2 flex snap-x snap-mandatory overflow-x-auto lg:-mx-3.5">
										<div
											className={`w-[17rem] shrink-0 snap-start px-2 lg:w-[25%] lg:px-3.5 xl:w-[20%] min-h-[340px] rounded-[10px]`}
										>
											<SwiperSlide virtualIndex={index}>
												<ResultCard />
											</SwiperSlide>
										</div>
									</div>
								</div>
							</div>
						))}

						{/* add button and custom arrow for slide*/}
						<div className="mt-[15.79px] flex w-full items-center justify-between xl:gap-x-[14.7px]">
							<button className="custom-prev-result flex h-[40.42px] w-[40.42px] items-center justify-center rounded-full border-[0.92px] border-[#9B9B9B]">
								<Image
									src={'/assets/icons/categories/Arrows/left-arrow.svg'}
									alt="right arrow"
									width={8.13}
									height={13.71}
								/>
							</button>
							<p className="mt-4 text-sm">
								<span className='text-custom-red font-[700]'>Disclaimer:</span> Before and after images are provided by customers who have
								booked treatments. These results are not independently verified, and
								individual outcomes may vary.
							</p>
							<button className="custom-next-result flex h-[40.42px] w-[40.42px] items-center justify-center rounded-full border-[0.92px] border-[#9B9B9B]">
								<Image
									src={'/assets/icons/categories/Arrows/right-arrow.svg'}
									alt="right arrow"
									width={8.13}
									height={13.71}
								/>
							</button>
						</div>
					</Swiper>
				</div>
			</Wrapper>
		</section>
	)
}
