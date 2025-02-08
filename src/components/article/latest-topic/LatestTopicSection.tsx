'use client'
import Wrapper from '@/components/common/Wrapper'
import topic1 from '@/images/home/topic-1.png'
import topic2 from '@/images/home/topic-2.png'
import topic3 from '@/images/home/topic-3.png'
import TopicCard from './TopicCard'

import Image from 'next/image'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

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
		id: 4,
		image: topic3,
		title: 'From Botox to Laser Hair Removal',
		desc: 'Learn why men are increasingly choosing treatments like Botox, laser hair removal, and more to enhance their appearance.',
	},
	{
		id: 5,
		image: topic1,
		title: 'Do hair loss treatments work?',
		desc: 'Curious about hair loss treatments? Explore the science behind the most effective solutions, from medications to advanced therapies...',
	},
	{
		id: 6,
		image: topic3,
		title: 'Do hair loss treatments work?',
		desc: 'Curious about hair loss treatments? Explore the science behind the most effective solutions, from medications to advanced therapies...',
	},
]
export default function LatestTopicSection() {
	return (
		<section className="mb-[79px] mt-[79px]">
			<Wrapper>
				<h5 className="font-heading text-[34.72px] font-[700] uppercase leading-[52.08px] text-custom-red sm:text-[42.72px] sm:leading-[62.08px] md:text-[50.72px] md:leading-[72.08px] lg:text-[58.72px] lg:leading-[82.08px] xl:text-[64.288px] xl:leading-[80.43px]">
					LATEST TOPICS:
				</h5>
				<div className="w-full grid-cols-2 grid gap-x-2 lg:grid-cols-3 sm:gap-y-20 sm:gap-x-4 gap-y-14 xs:gap-x-3">
					
						{topics.map(({ id, title, image, desc }, index) => (
							<TopicCard
								key={id}
								title={title}
								image={image}
								desc={desc}
							/>
						))}
				</div>
				{/* add button and custom arrow for slide*/}
				<div className="mt-[58.53px] flex w-full items-center justify-center gap-[14.7px]">
					<button className="h-[45.4px] w-[135.05px] rounded-[89.66px] bg-[#E9082A] text-[20.18px] font-[400] leading-[34.41px] text-white hover:bg-black hover:text-white">
						View more
					</button>
				</div>
			</Wrapper>
		</section>
	)
}
