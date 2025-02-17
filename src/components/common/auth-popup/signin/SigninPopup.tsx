'use client'

import {
	closeAuthPopup,
	signupActive,
} from '@/redux-toolkit/features/clinic/authPopupSlice'
import { useAppDispatch } from '@/redux-toolkit/hooks'
import { useState } from 'react'
import {
	AppleIcon,
	CrossIcon,
	FacebookColorIcon,
	GoogleColorIcon,
} from '../../Icons'
import Subtitle from '../Subtitle'
import Title from '../Title'

const SigninPopup = () => {
	const [userRole, setUserRole] = useState<string>('user')

	const dispatch = useAppDispatch()

	return (
		<div className="flex min-h-screen w-full flex-col items-center bg-white px-8 py-4 shadow-lg sm:min-h-fit sm:w-[605.65px] sm:rounded-[33.83px] sm:p-8">
			{/* common content like title, subtitle and cross btn etc */}
			<div className="mb-5 flex w-full items-center justify-end">
				<button onClick={() => dispatch(closeAuthPopup())}>
					<CrossIcon className="w-4 cursor-pointer transition-all duration-300 hover:text-custom-red" />
				</button>
			</div>

			<div className="flex justify-center">
				<div className="relative overflow-hidden rounded-[94.89px] bg-[#EBEBEB] shadow-inner shadow-gray-400">
					<div
						className={`absolute top-0 z-0 h-full w-6/12 rounded-[94.89px] bg-custom-red transition-transform duration-300 ease-in-out`}
						style={{
							transform:
								userRole === 'user' ? 'translateX(0%)' : 'translateX(100%)',
							willChange: 'transform',
						}}
					></div>

					<button
						className={`px-7 py-1 text-lg capitalize ${userRole === 'user' ? 'text-white' : 'text-[#787878]'} relative z-10 bg-transparent transition-all duration-300 ease-in-out`}
						onClick={() => setUserRole('user')}
					>
						user
					</button>

					<button
						className={`px-7 py-1 text-lg capitalize ${userRole === 'clinic' ? 'text-white' : 'text-[#787878]'} relative z-10 bg-transparent transition-all duration-300 ease-in-out`}
						onClick={() => setUserRole('clinic')}
					>
						clinic
					</button>
				</div>
			</div>

			<Title title="Get Started" />
			<Subtitle subtitle="Create an account or log in to book and manage your appointments" />

			<div className="mt-6 flex h-[45px] w-full items-center justify-between overflow-hidden rounded-[52.33px] border border-black p-2 pl-5 xs:mt-10 xs:h-[50px]">
				<input
					type="email"
					placeholder="Enter your email"
					className="h-full w-full border-none p-0 font-semibold text-black outline-none placeholder:font-semibold focus:border-none focus:outline-none focus:ring-0"
				/>
				<button
					onClick={() => dispatch(signupActive())}
					className="h-full rounded-[54.4px] bg-custom-red px-3 text-sm text-white hover:bg-black xs:px-4 sm:text-lg"
				>
					Continue
				</button>
			</div>
			{/* common end */}

			{/* divider */}
			<div className="mt-8 flex w-full items-center gap-x-3">
				<hr className="w-full border-b border-[#9B9B9B]" />
				<p className="text-lg">Or</p>
				<hr className="w-full border-b border-[#9B9B9B]" />
			</div>
			{/* divider end */}

			{/* social login btn */}
			<button className="mt-8 flex h-[45px] w-full items-center justify-center gap-x-3 overflow-hidden rounded-[52.33px] border border-black p-2 text-lg transition-all duration-300 hover:bg-black hover:text-white xs:h-[50px] xs:text-xl">
				<FacebookColorIcon className="w-6 xs:w-7" />
				<p>Continue with Facebook</p>
			</button>
			<button className="mt-3 flex h-[45px] w-full items-center justify-center gap-x-3 overflow-hidden rounded-[52.33px] border border-black p-2 text-lg transition-all duration-300 hover:bg-black hover:text-white xs:h-[50px] xs:text-xl">
				<AppleIcon className="w-6 xs:w-7" />
				<p>Continue with Apple</p>
			</button>
			<button className="mt-3 flex h-[45px] w-full items-center justify-center gap-x-3 overflow-hidden rounded-[52.33px] border border-black p-2 text-lg transition-all duration-300 hover:bg-black hover:text-white xs:h-[50px] xs:text-xl">
				<GoogleColorIcon className="w-6 xs:w-7" />
				<p>Continue with Google</p>
			</button>
			{/* social icon end */}
		</div>
	)
}

export default SigninPopup
