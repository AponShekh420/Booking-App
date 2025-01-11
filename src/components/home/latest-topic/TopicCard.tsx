import Image from 'next/image'
import { useState } from 'react'
type TopicType = {
	image: any
	title: string
	desc: string
}
export default function TopicCard({ image, title, desc }: TopicType) {

	const [effect, setEffect] = useState<boolean>(false);


	return (
		<div>
			<div className='cursor-pointer relative' onMouseOver={()=> setEffect(true)} onMouseOut={()=> setEffect(false)}>
				<Image src={image} alt="topic" className='w-full h-full'/>
				<span className={`absolute inset-0 bg-black transition-opacity duration-300 rounded-[10px] ${effect ? "opacity-50": "opacity-0 bg-opacity-10"}`}></span>
			</div>
			<div className='flex flex-col items-start'>
				<h5 className={`mt-5 text-xl lg:text-3xl text-left font-heading ${effect && " text-custom-red"} cursor-pointer`} onMouseOver={()=> setEffect(true)} onMouseOut={()=> setEffect(false)}>{title}</h5>
				<p className="py-3 lg:text-[18px] md:text-[16px] sm:text-[15px] text-[14px] leading-[22px] text-left">{desc}</p>
				<button className="rounded-[87.82px] bg-custom-red px-6 py-1.5 text-white hover:text-white hover:bg-black">
					Learn more
				</button>
			</div>
		</div>
	)
}
