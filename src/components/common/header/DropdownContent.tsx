'use client'

import {
	closeAuthPopup,
	signupActive,
} from '@/redux-toolkit/features/clinic/authPopupSlice'
import { useAppDispatch } from '@/redux-toolkit/hooks'
import { useState } from 'react'
import { CrossIcon } from '../Icons'

const DropdownContent = () => {
	const [userRole, setUserRole] = useState<string>('user')

	const dispatch = useAppDispatch()

	return (
		<>
			<div className="flex justify-center">
				<div className="relative overflow-hidden rounded-[94.89px] bg-[#EBEBEB] shadow-inner shadow-gray-400 w-[80%]">
					<div
						className={`absolute top-0 z-0 h-full w-6/12 rounded-[94.89px] bg-custom-red transition-transform duration-300 ease-in-out`}
						style={{
							transform:
								userRole === 'user' ? 'translateX(0%)' : 'translateX(100%)',
							willChange: 'transform',
						}}
					></div>

					<button
						className={`px-7 py-1 w-6/12 capitalize ${userRole === 'user' ? 'text-white' : 'text-[#787878]'} relative z-10 bg-transparent transition-all duration-300 ease-in-out`}
						onClick={() => setUserRole('user')}
					>
						user
					</button>

					<button
						className={`px-7 py-1 w-6/12 capitalize ${userRole === 'clinic' ? 'text-white' : 'text-[#787878]'} relative z-10 bg-transparent transition-all duration-300 ease-in-out`}
						onClick={() => setUserRole('clinic')}
					>
						clinic
					</button>
				</div>
			</div>


			{/* divider */}
			<div className="mt-4 text-black w-[80%] gap-x-3 mx-auto">
				<ul>
					<li className='font-bold text-black hover:text-custom-red transition-all duration-300 cursor-pointer'>Sign Up</li>
					<li className='text-black hover:text-custom-red mt-1 transition-all duration-300 cursor-pointer'>Log in</li>
					<li className='text-black hover:text-custom-red mt-1 transition-all duration-300 cursor-pointer'>Download the app</li>
					<li className='text-black hover:text-custom-red mt-1 transition-all duration-300 cursor-pointer'>Customer support</li>
				</ul>
			</div>
			{/* divider end */}
		</>
	)
}

export default DropdownContent
