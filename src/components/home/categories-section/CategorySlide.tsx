import React, { useRef, useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import categoriesList from "@/data/categorieslist";
import CategoryItem from "./CategoryItem";

interface CategorySlideProps {
  slideTo: (index: number) => void;
}

const CategorySlide: React.FC<CategorySlideProps> = ({ slideTo }) => {
  const [active, setActive] = useState<string>("Trending");
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      const updateNavButtons = () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      };

      swiperInstance.on("slideChange", updateNavButtons);
      swiperInstance.on("reachBeginning", updateNavButtons);
      swiperInstance.on("reachEnd", updateNavButtons);
      swiperInstance.on("fromEdge", updateNavButtons);

      updateNavButtons(); // Set initial state
    }
  }, []);

  return (
    <div className="w-full mx-auto categoriesSlide">
      <div className="flex items-center">
        {/* Custom Prev Button */}
        <div className="z-40 pr-3 md:block hidden">
          <button
            className={`custom-prev-category w-[40.42px] h-[40.42px] border-[0.92px] border-[#9B9B9B] rounded-full flex items-center justify-center ${
              isBeginning ? "swiper-button-disabled" : ""
            }`}
          >
            <Image
              src="/assets/icons/categories/Arrows/left-arrow.svg"
              alt="left arrow"
              width={8.13}
              height={13.71}
            />
          </button>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          slidesPerView="auto"
          spaceBetween={48}
          centeredSlides={false}
          centerInsufficientSlides={true}
          navigation={{
            nextEl: ".custom-next-category",
            prevEl: ".custom-prev-category",
          }}
          breakpoints={{
            0: { spaceBetween: 24 },
            240: { spaceBetween: 32 },
            340: { spaceBetween: 34 },
            640: { spaceBetween: 35 },
            768: { spaceBetween: 38 },
            1024: { spaceBetween: 43 },
            1280: { spaceBetween: 48 },
          }}
        >
          {categoriesList.map((category, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <CategoryItem
                category={category}
                active={active}
                setActive={setActive}
                slideTo={slideTo}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Next Button */}
        <div className="z-40 pl-3 md:block hidden">
          <button
            className={`custom-next-category w-[40.42px] h-[40.42px] border-[0.92px] border-[#9B9B9B] rounded-full flex items-center justify-center ${
              isEnd ? "swiper-button-disabled" : ""
            }`}
          >
            <Image
              src="/assets/icons/categories/Arrows/right-arrow.svg"
              alt="right arrow"
              width={8.13}
              height={13.71}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySlide;
