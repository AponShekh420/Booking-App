'use client'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import {
	LeftArrowIcon,
	RightArrowIcon,
	VideoIndicatorIcon,
} from '@/components/common/Icons'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Video from './Video'
import { useEffect, useRef, useState } from 'react'

// interface CategorySlideProps {
//   slideTo: (index: number) => void
// }


interface clinicApiType {
	id: number,
	image: string,
	video: boolean,
	img: boolean,
}

const clinicApi: clinicApiType[] = [
	{
		id: 1,
		image: '/assets/clinic/Aesthetic-Consultation-with-Dr-Caielli at-Lucia-Clinic-Dubai.mp4',
		video: true,
		img: false,
	},
	{
		id: 2,
		image: '/assets/clinic/clinic-2.png',
		video: false,
		img: true,
	},
	{
		id: 3,
		image: '/assets/clinic/clinic-3.png',
		video: false,
		img: true,
	},
	{
		id: 4,
		image: '/assets/clinic/clinic-1.png',
		video: true,
		img: true,
	},
	{
		id: 5,
		image: '/assets/clinic/clinic-3.png',
		video: false,
		img: true,
	},
	{
		id: 6,
		image: '/assets/clinic/clinic-2.png',
		video: false,
		img: true,
	},
]
const ClinicVideoSlider = () => {
	const [isChange, setIsChange] = useState<boolean>(true);
	const swiperRef = useRef<any>(null);
	const [isBeginning, setIsBeginning] = useState(true);
	const [isEnd, setIsEnd] = useState(false);


	useEffect(() => {
    if (!swiperRef.current) return;

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

    return () => {
      swiperInstance.off("slideChange", updateNavButtons);
      swiperInstance.off("reachBeginning", updateNavButtons);
      swiperInstance.off("reachEnd", updateNavButtons);
      swiperInstance.off("fromEdge", updateNavButtons);
    };
  }, []);


	return (
		<div className="mx-auto w-full">
			<div className="relative flex h-auto items-start">
				 {/* Left Arrow */}
				<div className="hidden md:block">
					<button
						onClick={() => swiperRef.current.swiper.slidePrev()}
						className={`absolute left-4 top-1/2 z-[20] flex h-[40.42px] w-[40.42px] -translate-y-1/2 items-center justify-center rounded-full border-[0.92px] border-white text-white transition-colors duration-300 hover:border-custom-red hover:text-custom-red ${
							isBeginning ? "hidden pointer-events-none" : ""
						}`}
					>
						<LeftArrowIcon />
					</button>
				</div>

				<Swiper
          ref={swiperRef}
					modules={[Navigation]}
					slidesPerView="auto" // Dynamic width calculation
					spaceBetween={48} // Gap between slides
					centeredSlides={false} // Prevent centering when all slides fit
					centerInsufficientSlides={true} // Center slides if they are fewer than the available space
					navigation={{
						nextEl: '.custom-next-video-slider',
						prevEl: '.custom-prev-video-slider',
					}}
					
					breakpoints={{
						0: { spaceBetween: 18 },
						1024: { spaceBetween: 20 },
						1280: { spaceBetween: 25 },
					}}
					onSetTransition={() => {
						setIsChange(!isChange)
					}}
					onSlideChange={() => {
						document.querySelectorAll(".clinicSlideVideo video").forEach((vid: any) => vid?.play());
					 }}
				>
					{clinicApi.map((item, index) => (
						<SwiperSlide
							key={index}
							className="!w-auto max-w-full" // Allows dynamic width calculation
						>
							<div className="relative rounded-[11.37px] overflow-hidden clinicSlideVideo">
								{item.img ? (
									<>
										<Image
										className="h-[200px] xxs:h-[250px] md:h-[432px] w-[362px] object-cover md:w-full md:max-w-full rounded-[11.37px]"
										src={item.image}
										alt="video/image"
										width={item.video ? 777 : 410}
										height={432}
									/>
									{
										item.video && (
											<button className="absolute left-1/2 top-1/2 !z-[10] -translate-x-1/2 -translate-y-1/2 text-white transition-colors duration-300 hover:text-custom-red">
												<VideoIndicatorIcon className="w-16 sm:w-20 lg:w-28 h-auto"/>
											</button>
										)
									}
								</>
								): <Video isChange={isChange} video={item?.image}/>}
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				{/* Right Arrow */}
				<div className="hidden md:block">
					<button
						onClick={() => swiperRef.current.swiper.slideNext()}
						className={`absolute right-4 top-1/2 z-[20] flex h-[40.42px] w-[40.42px] -translate-y-1/2 items-center justify-center rounded-full border-[0.92px] border-white text-white transition-colors duration-300 hover:border-custom-red hover:text-custom-red ${
							isEnd ? "hidden pointer-events-none" : ""
						}`}
					>
						<RightArrowIcon />
					</button>
				</div>
			</div>
		</div>
	)
}

export default ClinicVideoSlider
