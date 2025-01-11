import Image from 'next/image'
type TopicType = {
	image: any
	title: string
	desc: string
}
export default function TopicCard({ image, title, desc }: TopicType) {
	return (
		<div>
			<Image src={image} alt="topic" className='w-full h-full'/>
			<div className='flex flex-col items-start'>
				<h5 className="mt-5 text-xl lg:text-3xl text-left font-heading">{title}</h5>
				<p className="py-3 lg:text-[18px] md:text-[16px] sm:text-[15px] text-[14px] leading-[22px] text-left">{desc}</p>
				<button className="rounded-[87.82px] bg-custom-red px-6 py-1.5 text-white hover:text-white hover:bg-black">
					Learn more
				</button>
			</div>
		</div>
	)
}
