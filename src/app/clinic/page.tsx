import ServicesSection from '@/components/Clinic/services-section/ServicesSection'
import LatestTopicSection from '@/components/Clinic/latest-topic/LatestTopicSection'
import NearbySection from '@/components/Clinic/nearby/NearbySection'
import ReviewSection from '@/components/Clinic/review/ReviewSection'
import TeamSection from '@/components/Clinic/team/TeamSection'
import ClinicVideoSection from '@/components/Clinic/video-slider-section/ClinicVideoSection'
import Header from '@/components/common/header/Header'
import Wrapper from '@/components/common/Wrapper'

export default function ClinicPage() {
	return (
		<div>
			<Header />
			<ClinicVideoSection />
			<ServicesSection/>

			<Wrapper className="mt-[79px]">
				<div className="sm:w-4/5 lg:w-4/5 xl:w-1/2">
					<TeamSection />
					<ReviewSection />
				</div>
			</Wrapper>

			<NearbySection />
			<LatestTopicSection />
		</div>
	)
}
