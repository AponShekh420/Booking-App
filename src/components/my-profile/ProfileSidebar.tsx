'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import profileAvatar from '../../images/avatars/Image-16.png'
const sidebar_links = [
	{
		id: 1,
		title: 'My Profile',
		href: '/my-profile',
	},
	{
		id: 2,
		title: 'Appointments',
		href: '/my-profile/appointments',
	},
	{
		id: 3,
		title: 'Gift Wallet',
		href: '/my-profile/gift-wallet',
	},
	{ id: 4, title: 'Favorites', href: '/my-profile/favorites' },
	{ id: 5, title: 'Account Settings', href: '/my-profile/account-settings' },
	{ id: 6, title: 'Reviews', href: '/my-profile/reviews' },
	{ id: 7, title: 'Payment', href: '/my-profile/payment' },
	{ id: 8, title: 'Custom Forms', href: '/my-profile/custom-forms' },
	{ id: 9, title: 'Terms of Service', href: '/my-profile/termsofservice' },
	{ id: 10, title: 'Privacy Policy', href: '/my-profile/privacy-policy' },
	{ id: 11, title: 'Log out', href: '/my-profile/logout' },
]
export default function ProfileSidebar({
	children,
}: {
	children: React.ReactNode
}) {
	const pathname = usePathname()

	return (
		<div className="relative my-8 flex min-h-screen">
			<div className="fixed left-0 top-0 z-[999] hidden h-full w-[280px] flex-shrink-0 overflow-y-auto bg-[#EBEBEB] p-8 md:sticky md:block sm:min-h-[calc(100vh)] lg:w-[350px] xl:w-[400px] 2xl:w-[450px]">
				<div className="mb-8 flex items-center space-x-4">
					<Image
						className="h-auto w-[50px] rounded-full object-cover lg:w-[60px]"
						width={79}
						height={79}
						src={profileAvatar}
						alt="Profile Picture"
					/>
					<div className="text-[16px] lg:text-[18px] 2xl:text-[19.09px]">
						<h5 className="">Jeff Smith</h5>
						<p className="mt-1 font-semibold">4 Treatments booked</p>
					</div>
				</div>
				<ul className="space-y-[25px] text-[18px] lg:space-y-[30px] lg:text-[20px] xl:space-y-[35px] xl:text-[23px] 2xl:text-[25.89px]">
					{sidebar_links.map((link) => (
						<li
							key={link.id}
							className={`border-b border-black pb-3 transition-colors duration-300 hover:border-custom-red hover:text-custom-red ${sidebar_links.length === link.id ? '!border-[#9B9B9B] text-[#9B9B9B] hover:!border-custom-red' : ''} ${pathname === link.href ? 'border-custom-red font-semibold text-custom-red' : ''}`}
						>
							<Link className="block w-full" href={{ pathname: link.href }}>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="min-h-screen w-full sm:px-[30px] lg:px-[50px] xl:px-[70px] 2xl:px-[100px]">
				{children}
			</div>
		</div>
	)
}
