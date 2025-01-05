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
    <div className="w-full mx-auto categoriesSlide">
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          onSwiper={setSwiperRef}
          slidesPerView={14} // Default for large screens
          spaceBetween={46.85} // Default gap for large screens
          navigation={{
            nextEl: ".custom-next-category",
            prevEl: ".custom-prev-category",
            disabledClass: "swiper-button-disabled", // Optional styling for disabled arrows
          }}
          breakpoints={{
            640: {
              slidesPerView: 7,
              spaceBetween: 20, // For mobile screens
            },
            768: {
              slidesPerView: 10,
              spaceBetween: 30, // For tablets
            },
            1024: {
              slidesPerView: 12,
              spaceBetween: 40, // For medium desktops
            },
            1280: {
              slidesPerView: 14, // Full icons for large screens
              spaceBetween: 46.85,
            },
          }}
        >
          {categoriesList.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center flex-col w-full">
                <Image
                  src={category?.icon}
                  alt={category?.text}
                  width={category?.width}
                  height={category?.height}
                />
                <p className="text-[12.36px] font-[600] leading-[21.08px] text-center mt-[5.51px]">{category?.text}</p>
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