"use client"

import { VideoIndicatorIcon } from "@/components/common/Icons";
import { useEffect, useRef, useState } from "react";

let pauseEvent: any;


const Video = ({video, isChange}: {video: string, isChange: boolean}) => {
  const [playPause, setPlayPause] = useState<boolean>(false);
  const [playBtn, setPlayBtn] = useState<boolean>(true)

  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(()=> {
		const videotag = videoRef.current

    if (videotag) { // Check if videoRef is not null
      if (playPause) {
        videotag.play();
        videotag.muted = false;
        setPlayBtn(false);
        clearTimeout(pauseEvent);
      } else {
        videotag.pause();
        videotag.muted = true;
        setPlayBtn(true);
        clearTimeout(pauseEvent);
      }
    }
    
    // slider change
    if (videoRef.current) {
			const videotag = videoRef.current
			const swiperSlide = videotag?.parentElement?.parentElement?.parentElement
      // alert(swiperSlide)
			if (swiperSlide?.classList.contains('swiper-slide-active')) {
        // nothing
			} else {
				videotag.pause()
        setPlayBtn(true);
        setPlayPause(false);
			}
		}

  }, [playPause, videoRef, isChange])
  


  const playBtnFunc = (e: any) => {
    e.preventDefault()
    setPlayBtn(true);
    if(playPause) {
      pauseEvent = setTimeout(()=> {
        setPlayBtn(false)
      }, 4000)
    }
  }




  return (
    <>
      <div 
        className="h-[200px] xxs:h-[250px] md:h-[432px] w-[362px] object-cover md:w-full md:max-w-full overflow-hidden rounded-[11.37px]"
        onClick={playBtnFunc}
      >
        <video 
          playsInline
          className="w-full h-full object-cover pointer-events-none" 
          muted={false}
          ref={videoRef} 
          loop
          preload="auto"
          onLoadedMetadata={(e) => e.currentTarget.play()}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
        
      {playBtn && (
        <button className="absolute left-1/2 top-1/2 !z-[1000] -translate-x-1/2 -translate-y-1/2 text-white transition-colors duration-300 hover:text-custom-red" onClick={()=> setPlayPause((pre)=> !pre)}>
          <VideoIndicatorIcon className="w-16 sm:w-20 lg:w-28 h-auto"/>
        </button>
      )}
    </>
  );
}

export default Video;