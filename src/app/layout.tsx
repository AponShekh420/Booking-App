import '@/app/globals.css'
import Footer from '@/components/common/Footer'
import FooterNav from '@/components/FooterNav'
import '@/styles/index.scss'
import { Metadata } from 'next'
import 'rc-slider/assets/index.css'
import ClientCommons from './ClientCommons'
import ThemeProvider from './theme-provider'
import AuthContainer from '@/components/common/auth-popup/AuthContainer'
import ChatBar from '@/components/common/ChatBar'

export const metadata: Metadata = {
	title: 'Chisfis - Booking online React Next Template',
	description: 'Booking online & rental online React Next Template',
	keywords: 'Chisfis, Booking online, React Next Template',
	// viewport:
	// 	'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
}

export default function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: any
}) {
	return (
		<html lang="en" className="font-body">
			<ThemeProvider>
				<body className="bg-white text-base text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200 min-h-screen min-w-screen relative">

					{/* popup */}
					{/* <AuthContainer/> */}

					<div>
						{/* <SiteHeader /> */}
						{children}
						<FooterNav />

						{/* Chose footer style here!!!! */}
						{/* <Footer /> */}
						<Footer />
						{/* <Footer3 /> */}
						{/* <Footer4 /> */}
						<ChatBar/>
					</div>

					<ClientCommons />
				</body>
			</ThemeProvider>
		</html>
	)
}
