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
      <div className="w-full mx-auto mt-[69.68px]">
        <h1 className="font-[700] xl:text-[80.36px] xl:leading-[96.43px] text-[43.4px] leading-[52.08px] sm:text-[53.4px] sm:leading-[62.08px] md:text-[63.4px] md:leading-[72.08px] lg:text-[73.4px] lg:leading-[82.08px] text-custom-red uppercase">Discover Treatments</h1>
        <h4 className='md:text-[31.23px] sm:text-[27.23px] xs:text-[24.23px] text-[20.23px] font-bold leading-8'>Uncover the Top-Rated Treatments for Men</h4>
        <div className="flex flex-col items-center sm:mt-[20px] xs:mt-[15px] mt-[5px] relative pb-10">
          {/* slide section */}
          <div className="flex items-center">
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

            <div className='home-video-slider w-full max-w-[1200px]'>
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3} // Set to 3 slides per view
                loop={true}
                spaceBetween={30} // Adjust space between slides
                coverflowEffect={{
                  rotate: 0,
                  stretch: -100, // Reduce stretch to avoid slides overlapping
                  depth: 350,
                  modifier: 1,
                  slideShadows: true, // Add shadow effect for depth
                }}
                navigation={{
                  nextEl: ".custom-next-video",
                  prevEl: ".custom-prev-video",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1, // Mobile: 1 slide
                  },
                  768: {
                    slidesPerView: 2, // Tablet: 2 slides
                  },
                  1024: {
                    slidesPerView: 3, // Desktop: 3 slides
                  },
                }}
                modules={[EffectCoverflow, Navigation, Pagination]}
                className="mySwiper"
                onInit={(swiper) => {
                  swiper.slideToLoop(1); // Ensure the active slide is centered
                }}
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
                <SwiperSlide>
                  <Image src={imageThree} alt='slideone' fill className='w-full h-full'/>
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

          {/* text section */}
          <div className='flex flex-col items-center gap-y-[16px]'>
            <p className='text-center text-[17.99px]'>
              <span className='font-[700]'>Dental Teeth Augmentation</span><br/>
              Invisalign Consultation <br/>
              <span className='leading-[40.5px]'>Cosmetic Dental - London </span>
            </p>
            <button className='text-[21.96px] font-[400] leading-[37.45px] bg-custom-red w-[184px] h-[49px] rounded-[97.59px] text-white hover:bg-black hover:text-white transition-all duration-400'>See treatment</button>
          </div>
          <div className='h-[346px] bg-[#F3F3F3] w-full bottom-0 absolute rounded-[10px] -z-10'></div>
        </div>
      </div>
    </Wrapper>
  );
}
