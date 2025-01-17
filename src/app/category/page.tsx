import SkinTreatmentSection from '@/components/CategoryAndSearch/SkinTreatmentSection/SkinTreatmentSection'
import Header from '@/components/common/header/Header'
import { FC } from 'react'

export interface ListingCarMapPageProps {}

const ListingCarMapPage: FC<ListingCarMapPageProps> = () => {
	return (
		<div>
			<Header />
			<SkinTreatmentSection />
		</div>
	)
}

export default ListingCarMapPage
