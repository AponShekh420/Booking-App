import Header from '@/components/common/header/Header'
import HeroSection from '@/components/common/hero-section/HeroSection'
import StoreProviders from '@/redux-toolkit/providers/StoreProviders'

const layout = ({ children }: any) => {
	return (
		<div>
			<StoreProviders>
				<HeroSection/>
				{children}
			</StoreProviders>
		</div>
	)
}

export default layout
