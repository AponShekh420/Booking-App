import Header from '@/components/common/header/Header'
import StoreProviders from '@/redux-toolkit/providers/StoreProviders'

const layout = ({ children }: any) => {
	return (
		<div>
			<StoreProviders>
				<Header />
				{children}
			</StoreProviders>
		</div>
	)
}

export default layout
