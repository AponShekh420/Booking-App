'use client'
import {
	AppleIcon,
	FacebookColorIcon,
	GoogleColorIcon,
} from '@/components/common/Icons'
import { useState } from 'react'
import ProfileHeading from '../ProfileHeading'
import RedButton from '../RedButton'
import TextInput from '../TextInput'
import IconButton from './IconButton'

export default function AccountSection() {
	const [toggler, setToggler] = useState(true)
	return (
		<div className="">
			<div className="mt-[54px]">
				<ProfileHeading title="Account Details" />
				<form className="ml-4 mt-[50px] grid grid-cols-1 gap-x-[44px] gap-y-[41px] lg:grid-cols-2">
					<TextInput label="First and Last Name" />
					<TextInput label="Email" />
					<TextInput label="Phone Number" />
					<TextInput label="Birthday" type="date" />
				</form>
				<div className="ml-4 mt-[100px] grid gap-x-[44px] gap-y-[41px] lg:grid-cols-2">
					<IconButton Icon={FacebookColorIcon} title="Connect with Facebook" />
					<IconButton Icon={AppleIcon} title="Connect with Apple" />
					<IconButton Icon={GoogleColorIcon} title="Connect with Google" />
				</div>
			</div>
			<div className="mt-[54px]">
				<ProfileHeading title="Address" />
				<form className="ml-4 mt-[54px] grid grid-cols-1 gap-x-[44px] gap-y-[41px] lg:grid-cols-2">
					<TextInput label="Street & Number" />
					<TextInput label="Road & Street" />
					<TextInput label="City" />
					<TextInput label="Zip Code" />
				</form>
				<div className="ml-4 mt-[54px] flex flex-col-reverse items-center gap-[46px] lg:flex-row">
					<RedButton title="Update" />
					<p>
						Your address is collected for booking purposes only and will remain
						confidential. It will not be shared publicly or with third parties
						without your consent.
					</p>
				</div>
			</div>
			<div className="my-[54px]">
				<ProfileHeading title="Notifications" />
				<div className="ml-4 mt-[54px] space-y-4">
					<p className="text-[20px] font-bold">
						Notify me if there are any changes to my appointment status via
					</p>
					<label className="me-5 inline-flex cursor-pointer items-center">
						<span className="mr-10 inline-block text-[23.2px]">Email</span>
						<input
							type="checkbox"
							value=""
							className="peer sr-only"
							checked={toggler}
						/>
						<div
							onClick={() => setToggler((prev) => !prev)}
							className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-red-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-checked:bg-red-600 dark:peer-focus:ring-red-800 rtl:peer-checked:after:-translate-x-full"
						></div>
					</label>
				</div>
			</div>
		</div>
	)
}
