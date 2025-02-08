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
				<h5 className={`mt-2 text-[19.97px] lg:text-[29.25] lg:leading-[43px] leading-[25.5px] text-left font-heading ${effect && " text-custom-red"} cursor-pointer`} onMouseOver={()=> setEffect(true)} onMouseOut={()=> setEffect(false)}>{title}</h5>
				<p className="lg:mt-0 mt-2 text-[11.28px] xs:text-[15.28px] md:text-[15px] lg:text-[16.28px] xl:text-[18.68px] leading-[22px] text-left">{desc}</p>
				<button className="lg:mt-4 mt-3 rounded-[87.82px] bg-custom-red lg:w-[143.361px] lg:h-[40.023px] w-[108.77px] h-[30.36px] text-white lg:text-[17.784px] text-[13.5px] hover:text-white hover:bg-black">
					Learn more
				</button>
			</div>
		</div>
	)
}
