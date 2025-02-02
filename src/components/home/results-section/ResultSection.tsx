'use client'
import Wrapper from '@/components/common/Wrapper'
import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ResultCard from './ResultCard'

export default function ResultSection() {
	return (
		<section className="mt-[101px]">
			<Wrapper>
				<h5 className="font-heading text-[34.72px] font-[700] uppercase leading-[52.08px] text-custom-red sm:text-[42.72px] sm:leading-[62.08px] md:text-[50.72px] md:leading-[72.08px] lg:text-[58.72px] lg:leading-[82.08px] xl:text-[64.288px] xl:leading-[80.43px]">
					RESULTS THAT SPEAK FOR THEMSELVES
				</h5>
				<div className="w-full">
					<Swiper
						modules={[Navigation]}
						// onSwiper={setSwiperRef}
						grabCursor={true}
						slidesPerView={3.5}
						spaceBetween={22}
						loop={true}
						navigation={{
							nextEl: '.custom-next-result',
							prevEl: '.custom-prev-result',
						}}
						loopAddBlankSlides={true}
						// loopPreventsSliding={true}
						// loopAdditionalSlides={3}
						breakpoints={{
							// Responsive breakpoints
							646: {
								slidesPerView: 2.2,
							},
							950: {
								slidesPerView: 3.2,
							},
							380: {
								slidesPerView: 1.2,
							},
							0: {
								slidesPerView: 1,
							},
						}}
					>
						{[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
							<div className={`nc-SectionSliderNewCategories`} key={index}>
								<div className="relative flow-root">
									<div className="hiddenScrollbar relative -mx-2 flex snap-x snap-mandatory overflow-x-auto lg:-mx-3.5">
										<div
											className={`min-h-[340px] w-[17rem] shrink-0 snap-start rounded-[10px] px-2 lg:w-[25%] lg:px-3.5 xl:w-[20%]`}
										>
											<SwiperSlide virtualIndex={index}>
												<ResultCard item={item} />
											</SwiperSlide>
										</div>
									</div>
								</div>
							</div>
						))}

						{/* add button and custom arrow for slide*/}
						<div className="mt-[15.79px] flex w-full items-center justify-between gap-x-[5px] xl:gap-x-[14.7px]">
							{/* <button className="custom-prev-result flex min-h-[40.42px] min-w-[40px] items-center justify-center rounded-full border-[0.92px] border-[#9B9B9B]">
								<Image
									src={'/assets/icons/categories/Arrows/left-arrow.svg'}
									alt="right arrow"
									width={8.13}
									height={13.71}
								/>
							</button> */}
							<div className="w-full">
								<p className="whitespace-normal break-words text-[11.26px]">
									Disclaimer: Before and after images are provided by customers
									who have booked treatments. These results are not
									independently verified, and individual outcomes may vary.
								</p>
							</div>
							<button className="custom-next-result flex min-h-[40.42px] min-w-[40px] items-center justify-center rounded-full border-[0.92px] border-[#9B9B9B]">
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
