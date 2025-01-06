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
import CategoryItem from './CategoryItem';

interface CategorySlideProps {
  slideTo: (index: number) => void
}


const CategorySlide: React.FC<CategorySlideProps> = ({slideTo}) => {
  const [active, setActive] = useState<string>("Trending");
    
  return (
    <div className="w-full mx-auto categoriesSlide">
      <div className="flex items-center">
        <div className="z-40 pr-3 md:block hidden">
          <button className="custom-prev-category w-[40.42px] h-[40.42px] border-[0.92px] border-[#9B9B9B] rounded-full flex items-center justify-center swiper-button-disabled">
            <Image
              src={"/assets/icons/categories/Arrows/left-arrow.svg"}
              alt="left arrow"
              width={8.13}
              height={13.71}
            />
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          slidesPerView="auto" // Dynamic width calculation
          spaceBetween={46.85} // Gap between slides
          centeredSlides={false} // Prevent centering when all slides fit
          centerInsufficientSlides={true} // Center slides if they are fewer than the available space
          navigation={{
            nextEl: ".custom-next-category",
            prevEl: ".custom-prev-category",
          }}
          onReachBeginning={() => {
            document?.querySelector(".custom-prev-category")?.classList.add("swiper-button-disabled");
          }}
          onReachEnd={() => {
            document?.querySelector(".custom-next-category")?.classList.add("swiper-button-disabled");
          }}
          onFromEdge={() => {
            document?.querySelector(".custom-prev-category")?.classList.remove("swiper-button-disabled");
            document?.querySelector(".custom-next-category")?.classList.remove("swiper-button-disabled");
          }}
          breakpoints={{
            640: {
              spaceBetween: 20, // Gap for smaller screens
            },
            768: {
              spaceBetween: 30, // Medium gap for tablets
            },
            1024: {
              spaceBetween: 40, // Adjust gap for desktops
            },
            1280: {
              spaceBetween: 46.85, // Exact gap for large screens
            },
          }}
        >
          {categoriesList.map((category, index) => (
            <SwiperSlide
              key={index}
              className="!w-auto" // Allows dynamic width calculation
            >
              <CategoryItem category={category} active={active} setActive={setActive} slideTo={slideTo} index={index}/>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="z-40 pl-3 md:block hidden">
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