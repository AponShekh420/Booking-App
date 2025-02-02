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
		<div className="relative mx-auto w-full">
			<video className="w-full" ref={videoRef} loop>
				<source src={video} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<button
				onClick={() => toggleMute()}
				className="absolute bottom-48 right-1/2 z-10 translate-x-[-4%] rounded-full bg-white p-2.5 shadow-sm shadow-black"
			>
				{isMuted ? (
					<MuteSoundIcon className="size-[16px]" />
				) : (
					<SoundIcon className="size-[16px]" />
				)}
			</button>
		</div>
	)
}

export default Video
