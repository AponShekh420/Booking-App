'use client'
import {
	closeAuthPopup,
	otpActive,
	signupActive,
} from '@/redux-toolkit/features/clinic/authPopupSlice'
import { useAppDispatch } from '@/redux-toolkit/hooks'
import { useState } from 'react'
import {
	BackIcon,
	CrossIcon,
	RightArrowIcon,
	RightCircleIcon,
} from '../../Icons'
import Title from '../Title'

const Consents = () => {
	const [userRole, setUserRole] = useState<string>('user')
	const dispatch = useAppDispatch()

	return (
		<div className="flex min-h-screen w-full flex-col items-center bg-white px-8 py-4 shadow-lg sm:min-h-fit sm:w-[605.65px] sm:rounded-[33.83px] sm:p-8">
			{/* common content like title, subtitle and cross btn etc */}
			<div className="mb-2 flex w-full items-center justify-between">
				<button onClick={() => dispatch(signupActive())}>
					<BackIcon className="h-5 w-5 cursor-pointer transition-all duration-300 hover:text-custom-red" />
				</button>
				<button onClick={() => dispatch(closeAuthPopup())}>
					<CrossIcon className="h-4 w-4 cursor-pointer transition-all duration-300 hover:text-custom-red" />
				</button>
			</div>

			<Title title="Consents" className="!mt-2" />
			{/* common end */}

			{/* content */}
			<div className="mt-6 w-full xs:mt-7">
				<div className="flex items-center justify-between gap-x-2 xs:gap-x-7">
					<div className="flex gap-x-4">
						<RightCircleIcon className="min-w-5 max-w-5 xs:min-w-7 xs:max-w-7" />
						<p className="text-md xs:text-lg sm:text-xl">Select All</p>
					</div>
				</div>

				<div className="mt-6 flex items-center justify-between gap-x-2 xs:gap-x-7">
					<div className="flex gap-x-2 xs:gap-x-4">
						<RightCircleIcon className="min-w-5 max-w-5 xs:min-w-7 xs:max-w-7" />
						<p className="text-md xs:text-lg sm:text-xl">
							Acceptance of the Terms of Service and confirmation of having read
							the privacy Policy{' '}
							<span className="font-extrabold text-custom-red">Required</span>
						</p>
					</div>
					<RightArrowIcon className="max-h-3 min-h-3 min-w-3 max-w-3 xs:max-h-5 xs:min-h-5 xs:min-w-5 xs:max-w-5" />
				</div>

				<div className="mt-6 flex items-center justify-between gap-x-2 xs:gap-x-7">
					<div className="flex gap-x-2 xs:gap-x-4">
						<RightCircleIcon className="min-w-5 max-w-5 xs:min-w-7 xs:max-w-7" />
						<p className="text-md xs:text-lg sm:text-xl">
							Consent to receiving Gentlemend offers{' '}
						</p>
					</div>
					<RightArrowIcon className="max-h-3 min-h-3 min-w-3 max-w-3 xs:max-h-5 xs:min-h-5 xs:min-w-5 xs:max-w-5" />
				</div>

				<div className="mt-6 flex items-center justify-between gap-x-2 xs:gap-x-7">
					<div className="flex gap-x-2 xs:gap-x-4">
						<RightCircleIcon className="min-w-5 max-w-5 xs:min-w-7 xs:max-w-7" />
						<p className="text-md xs:text-lg sm:text-xl">
							Consent to receiving offers of parties cooperating with Gentlemend
						</p>
					</div>
					<RightArrowIcon className="max-h-3 min-h-3 min-w-3 max-w-3 xs:max-h-5 xs:min-h-5 xs:min-w-5 xs:max-w-5" />
				</div>
			</div>

			{/* content end */}

			<button
				onClick={() => dispatch(otpActive())}
				className="xs-h-[50px] mt-10 h-[45px] w-full rounded-[52.33px] bg-custom-red text-xl capitalize text-white transition-all duration-300 hover:bg-black"
			>
				continue
			</button>
		</div>
	)
}

export default Consents
