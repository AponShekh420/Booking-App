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
        <h1 className="font-[700] xl:text-[80.36px] xl:leading-[96.43px] text-[43.4px] leading-[52.08px] sm:text-[53.4px] sm:leading-[62.08px] md:text-[63.4px] md:leading-[72.08px] lg:text-[73.4px] lg:leading-[82.08px] text-custom-red uppercase">Discover Treatments</h1>
        <div className="flex flex-col items-center mt-[43px]">
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

          {/* text section */}
          <div className='flex flex-col items-center gap-y-[16px]'>
            <p className='text-center text-[17.99px]'>
              <span className='font-[700]'>Dental Teeth Augmentation</span><br/>
              Invisalign Consultation <br/>
              <span className='leading-[40.5px]'>Cosmetic Dental - London </span>
            </p>
            <button className='text-[21.96px] font-[400] capitalize leading-[37.45px] bg-custom-red w-[184px] h-[49px] rounded-[97.59px] text-white hover:bg-black hover:text-white transition-all duration-400'>See treatment</button>
          </div>
        </div>
    </div>
    </Wrapper>
  );
}
