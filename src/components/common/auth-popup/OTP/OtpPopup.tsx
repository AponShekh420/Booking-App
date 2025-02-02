'use client'

import {
	closeAuthPopup,
	contsentsActive,
} from '@/redux-toolkit/features/clinic/authPopupSlice'
import { useAppDispatch } from '@/redux-toolkit/hooks'
import { useRouter } from 'next/navigation'
import { useRef, useState } from 'react'
import { BackIcon, CrossIcon } from '../../Icons'
import Subtitle from '../Subtitle'
import Title from '../Title'
const OtpPopup = () => {
	const [autoOtp, setAutoOtp] = useState<any>('')
	const navigationInputs = useRef<HTMLInputElement[]>([])
	const dispatch = useAppDispatch()
	const router = useRouter()
	const length = 4

	const onChange = (value: string) => {
		setAutoOtp(value)
	}

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		index: number,
	) => {
		const { value } = e.target
		const newOtp = [...autoOtp]

		// Ensure only a single digit is entered per box
		if (/^[0-9]$/.test(value) && value.length === 1) {
			newOtp[index] = value
			onChange(newOtp.join(''))

			if (index < length - 1) {
				navigationInputs.current[index + 1]?.focus()
			}
		} else if (value === '') {
			newOtp[index] = ''
			onChange(newOtp.join(''))
		} else {
			e.target.value = value.slice(0, 1)
		}
	}

	const handleKeydown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		index: number,
	) => {
		if (
			e.key === 'Backspace' &&
			!navigationInputs.current[index]?.value &&
			index > 0
		) {
			navigationInputs.current[index - 1]?.focus()
		}
	}

	return (
		<div className="flex min-h-screen w-full flex-col items-center bg-white px-8 py-4 shadow-lg sm:min-h-fit sm:w-[605.65px] sm:rounded-[33.83px] sm:p-8">
			{/* common content like title, subtitle and cross btn etc */}
			<div className="mb-1 flex w-full items-center justify-between">
				<button onClick={() => dispatch(contsentsActive())}>
					<BackIcon className="w-5 cursor-pointer transition-all duration-300 hover:text-custom-red" />
				</button>
				<button onClick={() => dispatch(closeAuthPopup())}>
					<CrossIcon className="w-4 cursor-pointer transition-all duration-300 hover:text-custom-red" />
				</button>
			</div>

			<Title title="Confirm your Number" />
			<Subtitle
				subtitle="Pleas enter the 4-digit code sent to you at +44888888888"
				className="!mt-3 xs:!mt-4 sm:!mt-5 sm:!w-10/12"
			/>

			{/* OTP Input */}
			<div className="mt-5 grid w-full grid-cols-4 gap-x-2 xs:gap-x-5 sm:w-7/12">
				{Array.from({ length }).map((_, index) => (
					<input
						key={index}
						ref={(el) => {
							if (el) navigationInputs.current[index] = el
						}}
						className="rounded-md border border-[#bcbcbc] p-3 py-5 text-center text-lg font-semibold text-black outline-none placeholder:font-semibold focus:border-[#3B9DF8]"
						placeholder="0"
						onChange={(e) => handleInputChange(e, index)}
						onKeyDown={(e) => handleKeydown(e, index)}
						type="text"
						maxLength={1} // Ensures only 1 character is entered
					/>
				))}
			</div>

			<div className="mt-7">
				<p
					className={`text-md w-full text-center leading-7 xs:text-lg sm:text-xl`}
				>
					Resend code
				</p>
				<p
					className={`text-md mt-5 w-full text-center leading-7 xs:text-lg sm:text-xl`}
				>
					Change phone number
				</p>
			</div>

			<button
				onClick={() => {
					router.push('/clinic/checkout')
					dispatch(closeAuthPopup())
				}}
				className="xs-h-[50px] mt-10 h-[45px] w-full rounded-[52.33px] bg-custom-red text-xl capitalize text-white transition-all duration-300 hover:bg-black"
			>
				continue
			</button>
		</div>
	)
}

export default OtpPopup
