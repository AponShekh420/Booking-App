import React, { FC } from 'react'
import facebookSvg from '@/images/Facebook.svg'
import twitterSvg from '@/images/Twitter.svg'
import googleSvg from '@/images/Google.svg'
import Input from '@/shared/Input'
import ButtonPrimary from '@/shared/ButtonPrimary'
import Image from 'next/image'
import Link from 'next/link'
import T from '@/utils/getT'

export interface PageLoginProps {}

const loginSocials = [
	{
		name: 'Continue with Facebook',
		href: '#',
		icon: facebookSvg,
	},
	{
		name: 'Continue with Twitter',
		href: '#',
		icon: twitterSvg,
	},
	{
		name: 'Continue with Google',
		href: '#',
		icon: googleSvg,
	},
]

const PageLogin: FC<PageLoginProps> = ({}) => {
	return (
		<div className="nc-PageLogin">
			<div className="container mb-24 lg:mb-32">
				<h2 className="my-20 flex items-center justify-center text-3xl font-semibold leading-[115%] text-neutral-900 dark:text-neutral-100 md:text-5xl md:leading-[115%]">
					{T['login']['Login']}
				</h2>
				<div className="mx-auto max-w-md space-y-6">
					<div className="grid gap-3">
						{loginSocials.map((item, index) => (
							<a
								key={index}
								href={item.href}
								className="flex w-full rounded-lg bg-primary-50 px-4 py-3 transition-transform hover:translate-y-[-2px] dark:bg-neutral-800 sm:px-6"
							>
								<Image
									className="flex-shrink-0"
									src={item.icon}
									alt={item.name}
								/>
								<h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
									{item.name}
								</h3>
							</a>
						))}
					</div>
					{/* OR */}
					<div className="relative text-center">
						<span className="relative z-10 inline-block bg-white px-4 text-sm font-medium dark:bg-neutral-900 dark:text-neutral-400">
							OR
						</span>
						<div className="absolute left-0 top-1/2 w-full -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
					</div>
					{/* FORM */}
					<form className="grid grid-cols-1 gap-6" action="#" method="post">
						<label className="block">
							<span className="text-neutral-800 dark:text-neutral-200">
								{T['login']['Email address']}
							</span>
							<Input
								type="email"
								placeholder="example@example.com"
								className="mt-1"
							/>
						</label>
						<label className="block">
							<span className="flex items-center justify-between text-neutral-800 dark:text-neutral-200">
								<span>{T['login']['Password']}</span>
								<Link href="/login" className="text-sm font-medium underline">
									{T['login']['Forgot password?']}
								</Link>
							</span>
							<Input type="password" className="mt-1" />
						</label>
						<ButtonPrimary type="submit">
							{T['common']['Continue']}
						</ButtonPrimary>
					</form>

					{/* ==== */}
					<span className="block text-center text-neutral-700 dark:text-neutral-300">
						{T['login']['New user?']} {` `}
						<Link href="/signup" className="font-semibold underline">
							{T['login']['Create an account']}
						</Link>
					</span>
				</div>
			</div>
		</div>
	)
}

export default PageLogin
