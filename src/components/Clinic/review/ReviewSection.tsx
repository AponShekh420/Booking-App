import Amenities from './Amenities'
import Reviews from './Reviews'
import ThinkToKnow from './ThinkToKnow'

export default function ReviewSection() {
	return (
		<div className="mt-[79px]" id="reviews">
			<Reviews />
			<ThinkToKnow />
			<Amenities />
		</div>
	)
}
