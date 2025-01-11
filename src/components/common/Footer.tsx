import gm_logo from '@/images/home/gm-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { FacebookIcon, InstagramIcon, TwiterIcon } from './Icons'
import Wrapper from './Wrapper'

export default function Footer() {
	return (
		<footer className="bg-black text-white">
			<Wrapper>
				<Image
					src={gm_logo}
					alt="gm_logo"
					className="xs:w-[180px] mx-auto w-[125.5px] py-10 lg:hidden"
				/>
				<div className="md:grid-cols-3 grid grid-cols-2 gap-8 pb-10 xl:grid-cols-[2fr_1fr_1fr_1fr] lg:pt-16">
					<div className="hidden lg:block">
						<Image src={gm_logo} alt="gm_logo" />
						<div className="mt-32 flex items-center gap-4">
							<a
								className="rounded-full border border-[#9B9B9B] px-5 py-4"
								href="#"
							>
								<FacebookIcon />
							</a>
							<a className="rounded-full border border-[#9B9B9B] text-white p-4" href="#">
								<TwiterIcon />
							</a>
							<a
								className="rounded-full border border-[#9B9B9B] p-3.5"
								href="#"
							>
								<InstagramIcon />
							</a>
						</div>
					</div>
					<ul className="space-y-3 text-[13px] sm:text-[15px] md:text-[23.7px] md:leading-9 sm:leading-7 leading-4">
						<li className='hover:text-custom-red transition-all duration-300'>
							<Link href="/">About Gentlemend</Link>
						</li>
						<li className='hover:text-custom-red transition-all duration-300'>
							<Link href="/">Careers</Link>
						</li>
						<li className='hover:text-custom-red transition-all duration-300'>
							<Link href="/">Customer Support</Link>
						</li>
						<li className='hover:text-custom-red transition-all duration-300'>
							<Link href="/">Blog</Link>
						</li>
						<li className='hover:text-custom-red transition-all duration-300'>
							<Link href="/">Sitemap</Link>
						</li>
					</ul>
					<ul className="space-y-3 text-[13px] sm:text-[15px] md:text-[23.7px] md:leading-9 sm:leading-7 leading-4">
						<li className='hover:text-custom-red transition-all duration-300'>
							<Link href="/">For business</Link>
						</li>
						<li className='hover:text-custom-red transition-all duration-300'>
							<Link href="/">For partners</Link>
						</li>
						<li className='hover:text-custom-red transition-all duration-300'>
							<Link href="/">Pricing</Link>
						</li>
						<li className='hover:text-custom-red transition-all duration-300'>
							<Link href="/">Card terminals</Link>
						</li>
						<li className='hover:text-custom-red transition-all duration-300'>
							<Link href="/">Support</Link>
						</li>
						<li className='hover:text-custom-red transition-all duration-300'>
							<Link href="/">Status</Link>
						</li>
					</ul>
					<ul className="space-y-3 text-[13px] sm:text-[15px] md:text-[23.7px] md:leading-9 sm:leading-7 leading-4">
						<li className='hover:text-custom-red transition-all duration-300'>
							<Link href="/">Legal</Link>
						</li>
						<li className='hover:text-custom-red transition-all duration-300'>
							<Link href="/">Privacy Policy</Link>
						</li>
						<li className='hover:text-custom-red transition-all duration-300'>
							<Link href="/">Terms of service</Link>
						</li>
						<li className='hover:text-custom-red transition-all duration-300'>
							<Link href="/">Terms of use</Link>
						</li>
					</ul>
				</div>
			</Wrapper>
			<hr className="border-[#626060]" />
			<p className="py-4 text-center text-[13px] sm:text-[15px] md:text-[20.7px] ">
				Copyright Gentlemend 2025. All Rights Reserved.
			</p>
		</footer>
	)
}
