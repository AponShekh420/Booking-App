"use client"
import Wrapper from "../common/wrapper";
import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import CategorySlide from "./categorySlide";

// import './styles.css';


const CategoriesSection = () => {
  const [swiperRef, setSwiperRef] = useState<Swiper | null>(null);


  const [slides, setSlides] = useState<string[]>(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const slideTo = (index: number) => {
    if (swiperRef) {
      swiperRef.slideTo(index - 1, 0);
    }
  };
  


  return (
    <div className="w-full">
      <Wrapper>
        <div className="append-buttons">
          <CategorySlide/>
        </div>
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          onSwiper={setSwiperRef}
          slidesPerView={4}
          slidesPerGroup={4}
          centeredSlides={false}
          spaceBetween={20}
          pagination={{
            type: 'fraction',
          }}
          virtual
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
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
            },
          }}
        >
          {slides.map((slideContent, index) => (
            <SwiperSlide key={slideContent} virtualIndex={index}>
              <div className="bg-red-400">
                <h1>hello man {index}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* add button and custom arrow for slide*/}
        <div className="w-full flex justify-center items-center gap-[14.7px]">
          <button className="custom-prev w-[40.42px] h-[40.42px] border-[0.92px] border-[#9B9B9B] rounded-full flex items-center justify-center">
            <Image src={"/assets/icons/categories/Arrows/left-arrow.svg"} alt="right arrow" width={8.13} height={13.71}/>
          </button>
          <button className="w-[135.05px] h-[45.4px] rounded-[89.66px] bg-[#E9082A] text-[20.18px] font-[400] leading-[34.41px] text-white">
            view more
          </button>
          <button className="custom-next w-[40.42px] h-[40.42px] border-[0.92px] border-[#9B9B9B] rounded-full flex items-center justify-center">
            <Image src={"/assets/icons/categories/Arrows/right-arrow.svg"} alt="right arrow" width={8.13} height={13.71}/>
          </button>
        </div>
      </Wrapper>
    </div>
  );
}

export default CategoriesSection;