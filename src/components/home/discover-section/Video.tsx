"use client"
import Image from "next/image";
// image import
import imageOne from '@/images/home/video-1.png'
import imageTwo from '@/images/home/video-2.png'
import imageThree from '@/images/home/video-3.png'
import { useEffect, useState } from "react";

const Video = () => {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; 
  }


  return (
    <div className="w-full h-full">
      <div className="max-h-[520px] w-full">
        <Image src={imageTwo} alt='slideone' fill className='w-full h-full'/>
      </div>
      <div>
        <p className='text-center text-[17.99px]'>
          <span className='font-bold'>Dental Teeth Augmentation</span><br/>
          Invisalign Consultation <br/>
          <span className='leading-[40.5px]'>Cosmetic Dental - London </span>
        </p>
      </div>
    </div>
  );
}

export default Video;