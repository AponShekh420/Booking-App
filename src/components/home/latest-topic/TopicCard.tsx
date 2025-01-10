import Image from 'next/image'
type TopicType = {
	image: any
	title: string
	desc: string
}
export default function TopicCard({ image, title, desc }: TopicType) {
	return (
		<div className="lg:p-6">
			<Image src={image} alt="topic" />
			<div className='flex flex-col items-start'>
				<h5 className="mt-5 text-xl lg:text-3xl text-left font-heading">{title}</h5>
				<p className="py-3 text-sm lg:text-lg text-left">{desc}</p>
				<button className="rounded-2xl bg-custom-red px-6 py-1.5 text-white hover:text-white hover:bg-black">
					Learn more
				</button>
			</div>
		</div>
	)
}
