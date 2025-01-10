'use client'
import { useState } from 'react'
import { Swiper as SwiperType } from 'swiper'
import { Grid, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Wrapper from '../../common/Wrapper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import cardDemo from '@/data/cardDemo'
import Image from 'next/image'
import CardCategory from './CardCategory'
import CategorySlide from './CategorySlide'

// import './styles.css';

const CategoriesSection = () => {
	const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null)

	const [slides, setSlides] = useState<string[]>(
		Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`),
	)

	const slideTo = (index: number) => {
		if (swiperRef) {
			swiperRef.slideTo(index - 1, 0)
		}
	}

	return (
		<div className="categoryContainer w-full">
			<Wrapper>
				<div className="h-[73.5px] w-full">
					<CategorySlide slideTo={slideTo} />
				</div>
				<Swiper
					modules={[Navigation, Grid]}
					onSwiper={setSwiperRef}
					slidesPerView={4}
					slidesPerGroup={4}
					centeredSlides={false}
					spaceBetween={20}
					grid={{
						rows: 1, // Define 2 rows
						fill: 'row', // Fill by rows
					}}
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
							grid: {
								rows: 2,
							},
						},
					}}
				>
					{cardDemo.map((item, index) => (
						<div className={`nc-SectionSliderNewCategories`} key={index}>
							<div className="relative flow-root">
								<div className="hiddenScrollbar relative -mx-2 flex snap-x snap-mandatory overflow-x-auto lg:-mx-3.5">
									<div
										className={`mySnapItem w-[17rem] shrink-0 snap-start px-2 lg:w-[25%] lg:px-3.5 xl:w-[20%]`}
									>
										<SwiperSlide virtualIndex={index}>
											<CardCategory taxonomy={item} />
										</SwiperSlide>
									</div>
								</div>
							</div>
						</div>
					))}
				</Swiper>

				{/* add button and custom arrow for slide*/}
				<div className="mt-[15.79px] flex w-full items-center justify-center gap-[14.7px]">
					<button className="custom-prev flex h-[40.42px] w-[40.42px] items-center justify-center rounded-full border-[0.92px] border-[#9B9B9B]">
						<Image
							src={'/assets/icons/categories/Arrows/left-arrow.svg'}
							alt="right arrow"
							width={8.13}
							height={13.71}
						/>
					</button>
					<button className="h-[45.4px] w-[135.05px] rounded-[89.66px] bg-[#E9082A] text-[20.18px] font-[400] leading-[34.41px] text-white capitalize">
						view more
					</button>
					<button className="custom-next flex h-[40.42px] w-[40.42px] items-center justify-center rounded-full border-[0.92px] border-[#9B9B9B]">
						<Image
							src={'/assets/icons/categories/Arrows/right-arrow.svg'}
							alt="right arrow"
							width={8.13}
							height={13.71}
						/>
					</button>
				</div>
			</Wrapper>
		</div>
	)
}

export default CategoriesSection
