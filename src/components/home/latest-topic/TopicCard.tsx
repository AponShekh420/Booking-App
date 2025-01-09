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
			<div>
				<h5 className="mt-5 text-xl lg:text-3xl">{title}</h5>
				<p className="py-3 text-sm lg:text-lg">{desc}</p>
				<button className="rounded-2xl bg-custom-red px-6 py-1.5 capitalize text-white">
					learn more
				</button>
			</div>
		</div>
	)
}
