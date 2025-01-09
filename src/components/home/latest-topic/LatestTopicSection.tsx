import Wrapper from '@/components/common/Wrapper'
import topic1 from '@/images/home/topic-1.png'
import topic2 from '@/images/home/topic-2.png'
import topic3 from '@/images/home/topic-3.png'
import TopicCard from './TopicCard'
const topics = [
	{
		id: 1,
		image: topic1,
		title: 'Do hair loss treatments work?',
		desc: 'Curious about hair loss treatments? Explore the science behind the most effective solutions, from medications to advanced therapies...',
	},
	{
		id: 2,
		image: topic2,
		title: 'Top Aesthetic Treatments for Men',
		desc: 'Discover the most popular aesthetic treatments designed for men, from tackling hair loss to achieving youthful, rejuvenated skin.',
	},
	{
		id: 3,
		image: topic3,
		title: 'From Botox to Laser Hair Removal',
		desc: 'Learn why men are increasingly choosing treatments like Botox, laser hair removal, and more to enhance their appearance.',
	},
]
export default function LatestTopicSection() {
	return (
		<section className="mt-[48.68px]">
			<Wrapper>
				<h1 className="text-custom-red mb-8 mt-14 text-4xl xl:text-6xl">
					LATEST TOPICS:
				</h1>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{topics.map(({ id, title, image, desc }) => (
						<TopicCard key={id} title={title} image={image} desc={desc} />
					))}
				</div>
			</Wrapper>
		</section>
	)
}
