"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';


// image import
import imageOne from '@/images/home/video-1.png'
import imageTwo from '@/images/home/video-2.png'
import imageThree from '@/images/home/video-3.png'
import Wrapper from '@/components/common/Wrapper';

export default function DiscoverSection() {
  return (
    <Wrapper>
      <div className="w-full mx-auto mt-[48.68px]">
        <h1 className="font-[700] text-[80.36px] leading-[96.43px] text-custom-red uppercase">Discover Treatments</h1>
        <div className="flex items-center mt-[43px]">
          <div className="z-40 pr-3 md:block hidden">
            <button className="custom-prev-video w-[40.42px] h-[40.42px] border-[0.92px] border-[#9B9B9B] rounded-full flex items-center justify-center swiper-button-disabled">
              <Image
                src={"/assets/icons/categories/Arrows/left-arrow.svg"}
                alt="left arrow"
                width={8.13}
                height={13.71}
              />
            </button>
          </div>

          <div className='home-video-slider w-full'>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: -100,
                depth: 350,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              navigation={{
                nextEl: ".custom-next-video",
                prevEl: ".custom-prev-video",
              }}
              modules={[EffectCoverflow, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image src={imageTwo} alt='slideone' fill className='w-full h-full'/>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={imageOne} alt='slideone' fill className='w-full h-full'/>
              </SwiperSlide>
              <SwiperSlide>
                <Image src={imageThree} alt='slideone' fill className='w-full h-full'/>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="z-40 pl-3 md:block hidden">
            <button className="custom-next-video w-[40.42px] h-[40.42px] border-[0.92px] border-[#9B9B9B] rounded-full flex items-center justify-center">
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
    </Wrapper>
  );
}
