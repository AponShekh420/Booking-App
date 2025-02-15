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
import CategoryCardDemo from '@/data/categoryCardDemo'

// import './styles.css';

const CategoriesSection = () => {
	const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
	const [slideIndex, setSlideIndex] = useState<number>(0);

	const [slides, setSlides] = useState<string[]>(
		cardDemo.map((_, index) => `Slide ${index}`),
	)

	const slideTo = (index: number) => {
		if (swiperRef) {
			setSlideIndex(index);
			swiperRef.slideTo(0, 0)
		}

	}

	return (
		<div className="categoryContainer w-full">
			<Wrapper>
				<div className="h-[73.5px] w-full sm:mb-[34.77px] md:mb-[35.77px] lg:mb-[39.77px] xs:mb-[27.77px] mb-20.77px]">
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
						nextEl: '.custom-next-card-category',
						prevEl: '.custom-prev-card-category',
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
							slidesPerGroup: 2,
							grid: {
								rows: 2,
							},
						},
					}}
				>
					{/* have to be remove condition and keep only (slideIndex) for real data*/}
					{CategoryCardDemo[(slideIndex >= CategoryCardDemo.length) ? 0 : slideIndex]?.map((item: any, index: number) => (
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
					<button className="custom-prev-card-category flex h-[40.42px] w-[40.42px] items-center justify-center rounded-full border-[0.92px] border-[#9B9B9B]">
						<Image
							src={'/assets/icons/categories/Arrows/left-arrow.svg'}
							alt="right arrow"
							width={8.13}
							height={13.71}
						/>
					</button>
					<button className="h-[45.4px] w-[135.05px] rounded-[89.66px] bg-[#E9082A] text-[20.18px] font-[400] leading-[34.41px] text-white hover:text-white hover:bg-black">
						View more
					</button>
					<button className="custom-next-card-category flex h-[40.42px] w-[40.42px] items-center justify-center rounded-full border-[0.92px] border-[#9B9B9B]">
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
