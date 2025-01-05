"use client"
import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import categoriesList from '@/data/categorieslist';
import { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";

const CategorySlide = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);
  const [slides, setSlides] = useState<string[]>(
    Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
  );

  const slideTo = (index: number) => {
    if (swiperRef) {
      swiperRef.slideTo(index - 1, 0);
    }
  };
    
  return (
    <div className="w-full max-w-4xl mx-auto categoriesSlide">
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperRef}
          slidesPerView={15} // Number of icons visible at once
          spaceBetween={10} // Tight space between icons
          navigation={{
            nextEl: ".custom-next-category",
            prevEl: ".custom-prev-category",
          }}
          breakpoints={{
            640: {
              slidesPerView: 7,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 10,
              spaceBetween: 8,
            },
            1024: {
              slidesPerView: 14,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 14,
              spaceBetween: 15, // Slightly more space on larger screens
            },
          }}
        >
          {categoriesList.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center w-[64.31px] h-[55.12px]">
                <Image
                  src={category?.icon}
                  alt={category?.text}
                  width={category?.width}
                  height={category?.height}
                />
                <p className="text-xs mt-2">{category?.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-50">
          <button className="custom-prev-category w-[40.42px] h-[40.42px] border-[0.92px] border-[#9B9B9B] rounded-full flex items-center justify-center">
            <Image
              src={"/assets/icons/categories/Arrows/left-arrow.svg"}
              alt="left arrow"
              width={8.13}
              height={13.71}
            />
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-50">
          <button className="custom-next-category w-[40.42px] h-[40.42px] border-[0.92px] border-[#9B9B9B] rounded-full flex items-center justify-center">
            <Image
              src={"/assets/icons/categories/Arrows/right-arrow.svg"}
              alt="right arrow"
              width={8.13}
              height={13.71}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategorySlide;