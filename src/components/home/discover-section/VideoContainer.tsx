import { MuteSoundIcon, SoundIcon } from '@/components/common/Icons'
import { useEffect, useRef, useState } from 'react'
const Video = ({ video, isChange }: { video: string; isChange: boolean }) => {
	const videoRef = useRef<HTMLVideoElement | null>(null)
	const [isMuted, setIsMuted] = useState<boolean>(false)

	// Toggle Mute
	const toggleMute = () => {
		if (videoRef.current) {
			if (isMuted) {
				videoRef.current.muted = false
				setIsMuted(false)
			} else {
				videoRef.current.muted = true
				setIsMuted(true)
			}
		}
	}

	//center video auto play funtionality
	useEffect(() => {
		if (videoRef.current) {
			const videotag = videoRef.current
			const upParent = videotag?.parentElement?.parentElement
			const swiperSlide = upParent?.parentElement?.parentElement
			if (swiperSlide?.classList.contains('swiper-slide-active')) {
				videotag.play()
				videotag.muted = true
				setIsMuted(true)
			} else {
				videotag.pause()
			}
		}
	}, [videoRef, isChange])

	return (
		<div className="relative mx-auto w-full h-full discoverVideo overflow-hidden rounded-[5.37px]">
			<video 
			  playsInline
				className="w-full h-full object-cover" 
				muted
				ref={videoRef} 
				loop
				preload="auto"
				onLoadedMetadata={(e) => e.currentTarget.play()}
				>
				<source src={video} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className='flex w-full justify-center absolute bottom-10 z-10'>
				<button
					onClick={() => toggleMute()}
					className="rounded-full bg-white p-2.5 shadow-sm shadow-black"
				>
					{isMuted ? (
						<MuteSoundIcon className="size-[16px]" />
					) : (
						<SoundIcon className="size-[16px]" />
					)}
				</button>
			</div>
		</div>
	)
}

export default Video
