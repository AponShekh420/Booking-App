import '@/app/globals.css'
import Footer2 from '@/components/Footer2'
import FooterNav from '@/components/FooterNav'
import '@/styles/index.scss'
import { Metadata } from 'next'
import 'rc-slider/assets/index.css'
import ClientCommons from './ClientCommons'
import ThemeProvider from './theme-provider'

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
				<body className="bg-white text-base text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200">
					<div>
						{/* <SiteHeader /> */}
						{children}
						<FooterNav />

						{/* Chose footer style here!!!! */}
						{/* <Footer /> */}
						<Footer2 />
						{/* <Footer3 /> */}
						{/* <Footer4 /> */}
					</div>

					<ClientCommons />
				</body>
			</ThemeProvider>
		</html>
	)
}
