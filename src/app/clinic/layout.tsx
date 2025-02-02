import AuthContainer from '@/components/common/auth-popup/AuthContainer'
import Header from '@/components/common/header/Header'
import StoreProviders from '@/redux-toolkit/providers/StoreProviders'

const layout = ({ children }: any) => {
	return (
		<div>
			<StoreProviders>
				<AuthContainer />
				<Header />
				{children}
			</StoreProviders>
		</div>
	)
}

export default layout
