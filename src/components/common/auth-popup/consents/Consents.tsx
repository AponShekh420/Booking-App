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
import CheckMark from './CheckMark.'

const Consents = () => {
	const [userRole, setUserRole] = useState<string>('user')
	const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState<boolean>(false);


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
					<div className="flex gap-x-3 items-center">
						<label className="flex flex-col items-center justify-center cursor-pointer relative">
							{/* Hidden Checkbox */}
							<input
									type="checkbox"
									className="hidden"
									checked={isChecked}
									onChange={() => setIsChecked(!isChecked)}
							/>

							{/* Circle */}
							<div className="w-5 h-5 xs:w-[27px] xs:h-[27px] xs:border-[3px] border-2 border-black rounded-full flex items-center justify-center"></div>

							{/* Checkmark */}
							{isChecked && (
									<span className="text-black xs:text-[15px] text-xs font-bold absolute mt-[0.1rem] select-none">✔</span>
							)}
						</label>
						<p className="text-md xs:text-lg sm:text-xl mt-1">Select All</p>
					</div>
				</div>

				<CheckMark text="Acceptance of the Terms of Service and confirmation of having read
          the privacy Policy" defaultSelect={isChecked} highLightText="Required"/>

				<CheckMark text="Consent to receiving Gentlemend offers" defaultSelect={isChecked} highLightText=""/>

				<CheckMark text="Consent to receiving offers of parties cooperating with Gentlemend" defaultSelect={isChecked} highLightText=""/>

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
