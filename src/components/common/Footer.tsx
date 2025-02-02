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
					className="mx-auto w-[125.5px] py-10 xs:w-[180px] lg:hidden"
				/>
				<div className="grid grid-cols-2 gap-8 pb-10 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:pt-16">
					<div className="hidden lg:block">
						<Image className="w-[70%]" src={gm_logo} alt="gm_logo" />
						<div className="mt-32 flex items-center gap-4 *:scale-90">
							<a
								className="rounded-full border border-[#9B9B9B] px-5 py-4"
								href="#"
							>
								<FacebookIcon />
							</a>
							<a
								className="rounded-full border border-[#9B9B9B] p-4 text-white"
								href="#"
							>
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
					<ul className="space-y-3 text-[13px] leading-4 sm:text-[15px] sm:leading-7 md:text-[18px] md:leading-9">
						<li className="transition-all duration-300 hover:text-custom-red">
							<Link href="/">About Gentlemend</Link>
						</li>
						<li className="transition-all duration-300 hover:text-custom-red">
							<Link href="/">Careers</Link>
						</li>
						<li className="transition-all duration-300 hover:text-custom-red">
							<Link href="/">Customer Support</Link>
						</li>
						<li className="transition-all duration-300 hover:text-custom-red">
							<Link href="/">Blog</Link>
						</li>
						<li className="transition-all duration-300 hover:text-custom-red">
							<Link href="/">Sitemap</Link>
						</li>
					</ul>
					<ul className="space-y-3 text-[13px] leading-4 sm:text-[15px] sm:leading-7 md:text-[18px] md:leading-9">
						<li className="transition-all duration-300 hover:text-custom-red">
							<Link href="/">For business</Link>
						</li>
						<li className="transition-all duration-300 hover:text-custom-red">
							<Link href="/">For partners</Link>
						</li>
						<li className="transition-all duration-300 hover:text-custom-red">
							<Link href="/">Pricing</Link>
						</li>
						<li className="transition-all duration-300 hover:text-custom-red">
							<Link href="/">Card terminals</Link>
						</li>
						<li className="transition-all duration-300 hover:text-custom-red">
							<Link href="/">Support</Link>
						</li>
						<li className="transition-all duration-300 hover:text-custom-red">
							<Link href="/">Status</Link>
						</li>
					</ul>
					<ul className="space-y-3 text-[13px] leading-4 sm:text-[15px] sm:leading-7 md:text-[18px] md:leading-9">
						<li className="transition-all duration-300 hover:text-custom-red">
							<Link href="/">Legal</Link>
						</li>
						<li className="transition-all duration-300 hover:text-custom-red">
							<Link href="/">Privacy Policy</Link>
						</li>
						<li className="transition-all duration-300 hover:text-custom-red">
							<Link href="/">Terms of service</Link>
						</li>
						<li className="transition-all duration-300 hover:text-custom-red">
							<Link href="/">Terms of use</Link>
						</li>
					</ul>
				</div>
			</Wrapper>
			<hr className="border-[#626060]" />
			<p className="py-4 text-center text-[13px] sm:text-[15px] md:text-[17px]">
				Copyright Gentlemend 2025. All Rights Reserved.
			</p>
		</footer>
	)
}
