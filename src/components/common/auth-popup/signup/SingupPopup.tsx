'use client'

import {
	closeAuthPopup,
	contsentsActive,
	signinActive,
} from '@/redux-toolkit/features/clinic/authPopupSlice'
import { useAppDispatch } from '@/redux-toolkit/hooks'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { BackIcon, CrossIcon, DownArrowIcon, UkFlagIcon } from '../../Icons'
import Subtitle from '../Subtitle'
import Title from '../Title'

const SingupPopup = () => {
	const [userRole, setUserRole] = useState<string>('user')
	const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false)
	const [dropdown, setDropdown] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	// const [CountryCode, setCountryCode] = useState<string>("");
	// const [CountryFlag, setCountryFlag] = useState<any>(null);

	// const handler = ({code, flag}: {code: string, flag: any}) => {
	//   setCountryCode(code);
	//   setCountryFlag(flag);
	// };

	return (
		<div className="flex min-h-screen max-h-screen w-full flex-col items-center bg-white px-8 py-4 shadow-lg sm:!min-h-fit sm:w-[605.65px] sm:rounded-[33.83px] sm:p-8 ">
			{/* common content like title, subtitle and cross btn etc */}
			<div className="mb-5 flex w-full items-center justify-between">
				<button onClick={() => dispatch(signinActive())}>
					<BackIcon className="w-5 cursor-pointer transition-all duration-300 hover:text-custom-red" />
				</button>

				<button onClick={() => dispatch(closeAuthPopup())}>
					<CrossIcon className="w-4 cursor-pointer transition-all duration-300 hover:text-custom-red" />
				</button>
			</div>
			<div className='w-full h-full sm:w-auto sm:h-auto overflow-x-auto scrollbar-none'>
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
				<Title title="Create an account" />
				<Subtitle
					subtitle="Fill in your details to get started with Gentlemend"
					className="sm:!w-10/12"
				/>
				{/* common end */}
				{/* input */}
				<div className="mt-6 w-full xs:mt-7">
					<label htmlFor="email" className="mb-1 pl-5">
						Email
					</label>
					<div className="flex h-[45px] w-full items-center justify-between overflow-hidden rounded-[52.33px] border border-black p-2 px-5 xs:h-[50px]">
						<input
							type="email"
							id="email"
							placeholder="Enter your email"
							className="h-full w-full border-none p-0 font-semibold text-black outline-none placeholder:font-semibold focus:border-none focus:outline-none focus:ring-0"
						/>
					</div>
				</div>
				<div className="mt-3 flex h-[45px] w-full items-center justify-between overflow-hidden rounded-[52.33px] border border-black p-2 px-5 xs:mt-4 xs:h-[50px]">
					<input
						type="text"
						id="fullname"
						placeholder="First and Last Name"
						className="h-full w-full border-none p-0 font-semibold text-black outline-none placeholder:font-semibold focus:border-none focus:outline-none focus:ring-0"
					/>
				</div>
				<div className="mt-3 w-full xs:mt-4">
					<div className="flex h-[45px] w-full items-center justify-between gap-x-4 rounded-[52.33px] border border-black p-2 px-5 xs:h-[50px]">
						<div className="relative">
							<div
								className="flex cursor-pointer items-center gap-x-2 font-semibold transition-all duration-300 hover:text-custom-red"
								onClick={() => setDropdown((pre) => !pre)}
							>
								<UkFlagIcon className="w-6" />
								<span>+44</span>
								<DownArrowIcon className="w-3" />
							</div>

							<ul
								className={`absolute top-6 overflow-hidden rounded-md bg-gray-300 font-semibold shadow-lg ${dropdown ? 'block' : 'hidden'}`}
							>
								<li className="flex cursor-pointer items-center gap-x-2 border-b border-b-gray-500 px-5 py-2 transition-all hover:bg-custom-red hover:text-white">
									<UkFlagIcon className="w-6" />
									<span>+44</span>
								</li>
								<li className="flex cursor-pointer items-center gap-x-2 border-b border-b-gray-500 px-5 py-2 transition-all hover:bg-custom-red hover:text-white">
									<UkFlagIcon className="w-6" />
									<span>+44</span>
								</li>
								<li className="flex cursor-pointer items-center gap-x-2 border-b border-b-gray-500 px-5 py-2 transition-all hover:bg-custom-red hover:text-white">
									<UkFlagIcon className="w-6" />
									<span>+44</span>
								</li>
								<li className="flex cursor-pointer items-center gap-x-2 px-5 py-2 transition-all hover:bg-custom-red hover:text-white">
									<UkFlagIcon className="w-6" />
									<span>+44</span>
								</li>
							</ul>
						</div>
						<input
							type="number"
							id="phone"
							placeholder="Phone Number"
							className="h-full w-full border-none p-0 font-semibold text-black outline-none placeholder:font-semibold focus:border-none focus:outline-none focus:ring-0"
						/>
					</div>
					<p className="mt-1 pl-5">
						We will send a confirmation code to your phone number.
					</p>
				</div>
				<div className="mt-4 w-full xs:mt-5">
					<label htmlFor="email" className="mb-1 pl-5">
						Password
					</label>
					<div className="flex h-[45px] w-full items-center justify-between overflow-hidden rounded-[52.33px] border border-black p-2 px-5 xs:h-[50px]">
						<input
							type={isEyeOpen ? 'text' : 'password'}
							id="password"
							placeholder="Set Password"
							className="h-full w-full border-none p-0 font-semibold text-black outline-none placeholder:font-semibold focus:border-none focus:outline-none focus:ring-0"
						/>
						{isEyeOpen ? (
							<EyeIcon
								className="w-7 cursor-pointer text-[1.5rem] text-black transition-all duration-300 hover:text-custom-red"
								onClick={() => setIsEyeOpen(false)}
							/>
						) : (
							<EyeSlashIcon
								className="w-7 cursor-pointer text-[1.5rem] text-black transition-all duration-300 hover:text-custom-red"
								onClick={() => setIsEyeOpen(true)}
							/>
						)}
					</div>
					<p className="mt-1 pl-5">
						Password must be at least 8 characters long
						and must contain at least one number and one letter.
					</p>
				</div>
				{/* input end */}
				<button
					onClick={() => dispatch(contsentsActive())}
					className="xs-h-[50px] mt-10 h-[45px] w-full rounded-[52.33px] bg-custom-red text-xl capitalize text-white transition-all duration-300 hover:bg-black"
				>
					continue
				</button>
			</div>
		</div>
	)
}

export default SingupPopup
