import ServicesSection from '@/components/Clinic/services-section/ServicesSection'
import ClinicVideoSection from '@/components/Clinic/video-slider-section/ClinicVideoSection'
import Header from '@/components/common/header/Header'

export default function ClinicPage() {
	return (
		<div>
			<Header />
			<ClinicVideoSection />
			<ServicesSection/>
		</div>
	)
}
