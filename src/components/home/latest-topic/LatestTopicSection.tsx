"use client"
import Wrapper from '@/components/common/Wrapper'
import topic1 from '@/images/home/topic-1.png'
import topic2 from '@/images/home/topic-2.png'
import topic3 from '@/images/home/topic-3.png'
import TopicCard from './TopicCard'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Navigation } from "swiper/modules";
import Image from 'next/image'


const topics = [
	{
		id: 1,
		image: topic1,
		title: 'Do hair loss treatments work?',
		desc: 'Curious about hair loss treatments? Explore the science behind the most effective solutions, from medications to advanced therapies...',
	},
	{
		id: 2,
		image: topic2,
		title: 'Top Aesthetic Treatments for Men',
		desc: 'Discover the most popular aesthetic treatments designed for men, from tackling hair loss to achieving youthful, rejuvenated skin.',
	},
	{
		id: 3,
		image: topic3,
		title: 'From Botox to Laser Hair Removal',
		desc: 'Learn why men are increasingly choosing treatments like Botox, laser hair removal, and more to enhance their appearance.',
	},
	{
		id: 3,
		image: topic3,
		title: 'From Botox to Laser Hair Removal',
		desc: 'Learn why men are increasingly choosing treatments like Botox, laser hair removal, and more to enhance their appearance.',
	},
]
export default function LatestTopicSection() {
	return (
		<section className="mt-[79px]">
			<Wrapper>
				<h1 className="font-[700] xl:text-[80.36px] xl:leading-[96.43px] text-[43.4px] leading-[52.08px] sm:text-[53.4px] sm:leading-[62.08px] md:text-[63.4px] md:leading-[72.08px] lg:text-[73.4px] lg:leading-[82.08px] text-custom-red">
					LATEST TOPICS:
				</h1>
				<div className="w-full">
					<Swiper
						modules={[Navigation]}
						// onSwiper={setSwiperRef}
						slidesPerView={3}
						slidesPerGroup={3}
						centeredSlides={false}
						spaceBetween={17}
						// virtual
						navigation={{
							nextEl: '.custom-next-topic',
							prevEl: '.custom-prev-topic',
						}}
						loopAddBlankSlides={true}
						breakpoints={{
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
						{topics.map(({ id, title, image, desc }, index) => (
							<div className={`nc-SectionSliderNewCategories`} key={index}>
								<div className="relative flow-root">
									<div className="hiddenScrollbar relative -mx-2 flex snap-x snap-mandatory overflow-x-auto lg:-mx-3.5">
										<div
											className={`w-[17rem] shrink-0 snap-start px-2 lg:w-[25%] lg:px-3.5 xl:w-[20%] min-h-[340px] rounded-[10px]`}
										>
											<SwiperSlide virtualIndex={index}>
												<TopicCard key={id} title={title} image={image} desc={desc} />
											</SwiperSlide>
										</div>
									</div>
								</div>
							</div>
						))}

						{/* add button and custom arrow for slide*/}
							<div className="mt-[58.53px] flex w-full items-center justify-center gap-[14.7px]">
								<button className="custom-prev-topic flex h-[40.42px] w-[40.42px] items-center justify-center rounded-full border-[0.92px] border-[#9B9B9B]">
									<Image
										src={'/assets/icons/categories/Arrows/left-arrow.svg'}
										alt="right arrow"
										width={8.13}
										height={13.71}
									/>
								</button>
								<button className="hover:text-white hover:bg-black h-[45.4px] w-[135.05px] rounded-[89.66px] bg-[#E9082A] text-[20.18px] font-[400] leading-[34.41px] text-white">
									View more
								</button>
								<button className="custom-next-topic flex h-[40.42px] w-[40.42px] items-center justify-center rounded-full border-[0.92px] border-[#9B9B9B]">
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
