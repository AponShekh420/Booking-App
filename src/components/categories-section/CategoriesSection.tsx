"use client"
import Wrapper from "../common/Wrapper";
import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';


// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";



import Image from "next/image";
import CategorySlide from "./CategorySlide";
import cardDemo from "@/data/cardDemo"
import CardCategory from "./CardCategory";

// import './styles.css';


const CategoriesSection = () => {
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
    <div className="w-full categoryContainer">
      <Wrapper>
        <div className="w-full h-[73.5px]">
          <CategorySlide slideTo={slideTo}/>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Grid]}
          onSwiper={setSwiperRef}
          slidesPerView={4}
          slidesPerGroup={4}
          centeredSlides={false}
          spaceBetween={20}
          pagination={{
            type: 'fraction',
          }}
          grid={{
            rows: 1, // Define 2 rows
            fill: "row", // Fill by rows
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
                rows: 2
              }
            },
          }}
        >
          {cardDemo.map((item, index) => (
            <div className={`nc-SectionSliderNewCategories`} key={index}>
              <div className="relative flow-root">
                <div
                  className="hiddenScrollbar relative -mx-2 flex snap-x snap-mandatory overflow-x-auto lg:-mx-3.5"
                >
                  <div
                    className={`mySnapItem shrink-0 snap-start px-2 lg:px-3.5 w-[17rem] lg:w-[25%] xl:w-[20%]`}
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
        <div className="w-full flex justify-center items-center gap-[14.7px] mt-[15.79px]">
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