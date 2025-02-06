'use client'
import Image from 'next/image'

import {
	FacebookIcon,
	InstagramIcon,
	TwiterIcon,
} from '@/components/common/Icons'
import Wrapper from '@/components/common/Wrapper'
import followImgOne from '@/images/home/follow-1.png'
import followImgTwo from '@/images/home/follow-2.png'
import followImgThree from '@/images/home/follow-3.png'
import followImgfour from '@/images/home/follow-4.png'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const FollowSection = () => {
	return (
		<>
			<div className="follow-section-home mb-[50px] mt-[103px] xs:mb-[70px] sm:mb-[120px]">
				<div className="flex items-center gap-x-[23px] md:gap-x-[33px] lg:gap-x-[43px]">
					<h4 className="font-heading text-[34.72px] font-[700] uppercase leading-[52.08px] text-custom-red sm:text-[42.72px] sm:leading-[62.08px] md:text-[50.72px] md:leading-[72.08px] lg:text-[58.72px] lg:leading-[82.08px] xl:text-[64.288px] xl:leading-[80.43px]">
						Follow us
					</h4>
					<div className="flex items-center gap-x-[6px]">
						<div className="flex h-[28.53px] w-[28.53px] items-center justify-center rounded-full border-[1px] border-[#9B9B9B] sm:h-[34.53px] sm:w-[34.53px] md:h-[36.53px] md:w-[36.53px] lg:h-[40px] lg:w-[40px]">
							<FacebookIcon className="h-[13.66px] w-[8.69px] sm:h-[15.66px] sm:w-[10.69px] md:h-[16.69px] md:w-[16.69px] lg:w-[16px] xl:h-[16px]" />
						</div>
						<div className="flex h-[28.53px] w-[28.53px] items-center justify-center rounded-full border-[1px] border-[#9B9B9B] sm:h-[34.53px] sm:w-[34.53px] md:h-[36.53px] md:w-[36.53px] lg:h-[40px] lg:w-[40px]">
							<TwiterIcon className="md-[18.9px] h-[9.9px] w-[10.9px] sm:h-[14.9px] sm:w-[13.9px] md:h-[18.9px] lg:h-[13.5px] lg:w-[16px]" />
						</div>
						<div className="flex h-[28.53px] w-[28.53px] items-center justify-center rounded-full border-[1px] border-[#9B9B9B] sm:h-[34.53px] sm:w-[34.53px] md:h-[36.53px] md:w-[36.53px] lg:h-[40px] lg:w-[40px]">
							<InstagramIcon className="h-[12.9px] w-[12.9px] sm:h-[16.9px] sm:w-[16.9px] md:h-[20.9px] md:w-[20.9px] lg:h-[20px] lg:w-[20px]" />
						</div>
					</div>
				</div>

				<div className="w-full">
					<Swiper
						modules={[Navigation]}
						// onSwiper={setSwiperRef}
						grabCursor={true}
						slidesPerView={4}
						slidesPerGroup={4}
						centeredSlides={false}
						spaceBetween={20}
						// virtual
						navigation={{
							nextEl: '.custom-next',
							prevEl: '.custom-prev',
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
								slidesPerGroup: 4,
							},
						}}
					>
						{[followImgOne, followImgThree, followImgTwo, followImgfour].map(
							(item, index) => (
								<div className={`nc-SectionSliderNewCategories`} key={index}>
									<div className="relative flow-root">
										<div className="hiddenScrollbar relative -mx-2 flex snap-x snap-mandatory overflow-x-auto lg:-mx-3.5">
											<div
												className={`min-h-[340px] w-[17rem] shrink-0 snap-start rounded-[10px] px-2 lg:w-[25%] lg:px-3.5 xl:w-[20%]`}
											>
												<SwiperSlide virtualIndex={index}>
													<div className="w-full">
														<Image
															alt="instagram feed image"
															src={item}
															className="h-full w-full rounded-[10px]"
														/>
													</div>
												</SwiperSlide>
											</div>
										</div>
									</div>
								</div>
							),
						)}
					</Swiper>
				</div>
			</div>
		</>
	)
}

export default FollowSection
