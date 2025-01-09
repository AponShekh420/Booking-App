import Wrapper from '@/components/common/Wrapper'
import ResultCard from './ResultCard'

export default function ResultSection() {
	return (
		<section className="mt-10">
			<Wrapper>
				<h1 className="text-custom-red mb-8 mt-14 text-4xl xl:text-6xl">
					RESULTS THAT SPEAK FOR THEMSELVES
				</h1>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<ResultCard />
					<ResultCard />
					<ResultCard />
				</div>
				<p className="mt-4 text-sm">
					Disclaimer: Before and after images are provided by customers who have
					booked treatments. These results are not independently verified, and
					individual outcomes may vary.
				</p>
			</Wrapper>
		</section>
	)
}
