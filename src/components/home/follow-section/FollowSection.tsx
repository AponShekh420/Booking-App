"use client"
import Image from "next/image";

import followImgOne from "@/images/home/follow-1.png"
import followImgTwo from "@/images/home/follow-2.png"
import followImgThree from "@/images/home/follow-3.png"
import followImgfour from "@/images/home/follow-4.png"
import { FacebookIcon, InstagramIcon, TwiterIcon } from "@/components/common/Icons";
import Wrapper from "@/components/common/Wrapper";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Navigation } from "swiper/modules";


const FollowSection = () => {
  return (
    <Wrapper>
      <div className="mt-[103px] mb-[120px] follow-section-home">
        <div className="flex items-center lg:gap-x-[43px] gap-x-[23px] md:gap-x-[33px]">
          <h1 className="font-[700] xl:text-[80.36px] xl:leading-[96.43px] text-[43.4px] leading-[52.08px] sm:text-[53.4px] sm:leading-[62.08px] md:text-[63.4px] md:leading-[72.08px] lg:text-[73.4px] lg:leading-[82.08px] text-custom-red uppercase">Follow us</h1>
          <div className="flex items-center gap-x-[6px]">
            <div className="lg:w-[54px] lg:h-[54px] sm:w-[37.53px] sm:h-[37.53px] md:w-[41.53px] md:h-[41.53px] w-[33.53px] h-[33.53px] border-[1px] border-[#9B9B9B] rounded-full flex items-center justify-center">
              <FacebookIcon className="lg:w-[24px] xl:h-[24px] w-[8.69px] h-[13.66px] sm:w-[12.69px] sm:h-[17.66px] md:w-[16.69px] md:h-[21.66px]"/>
            </div>
            <div className="lg:w-[54px] lg:h-[54px] sm:w-[37.53px] sm:h-[37.53px] md:w-[41.53px] md:h-[41.53px] w-[33.53px] h-[33.53px] border-[1px] border-[#9B9B9B] rounded-full flex items-center justify-center">
              <TwiterIcon className="lg:w-[20px] lg:h-[17.5px] w-[14.9px] h-[14.9px] sm:w-[18.9px] sm:h-[18.9px] md-[22.9px] md:h-[22.9px]"/>
            </div>
            <div className="lg:w-[54px] lg:h-[54px] sm:w-[37.53px] sm:h-[37.53px] md:w-[41.53px] md:h-[41.53px] w-[33.53px] h-[33.53px] border-[1px] border-[#9B9B9B] rounded-full flex items-center justify-center">
              <InstagramIcon className="lg:w-[20px] lg:h-[20px] w-[14.9px] h-[14.9px] sm:w-[18.9px] sm:h-[18.9px] md:w-[22.9px] md:h-[22.9px]"/>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Swiper
            modules={[Navigation]}
            // onSwiper={setSwiperRef}
            slidesPerView={4}
            slidesPerGroup={4}
            centeredSlides={false}
            spaceBetween={20}
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
              },
            }}
          >
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div className={`nc-SectionSliderNewCategories`} key={index}>
                <div className="relative flow-root">
                  <div className="hiddenScrollbar relative -mx-2 flex snap-x snap-mandatory overflow-x-auto lg:-mx-3.5">
                    <div
                      className={`w-[17rem] shrink-0 snap-start px-2 lg:w-[25%] lg:px-3.5 xl:w-[20%] min-h-[340px] rounded-[10px]`}
                    >
                      <SwiperSlide virtualIndex={index}>
                        <div className="w-full">
                          <Image
                            alt="instagram feed image"
                            src={followImgOne || ''}
                            width={100}
                            height={100}
                            className="h-full w-full rounded-2xl object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
}

export default FollowSection;