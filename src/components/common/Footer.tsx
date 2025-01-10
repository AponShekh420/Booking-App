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
				<div className="xs:grid-cols-3 grid grid-cols-2 gap-8 pb-10 md:grid-cols-[2fr_1fr_1fr_1fr] lg:pt-16">
					<div className="hidden lg:block">
						<Image src={gm_logo} alt="gm_logo" />
						<div className="mt-32 flex items-center gap-4">
							<a
								className="rounded-full border border-[#9B9B9B] px-5 py-4"
								href="#"
							>
								<FacebookIcon />
							</a>
							<a className="rounded-full border border-[#9B9B9B] p-4" href="#">
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
					<ul className="space-y-3 text-sm sm:text-xl">
						<li>
							<Link href="/">About Gentlemend</Link>
						</li>
						<li>
							<Link href="/">Careers</Link>
						</li>
						<li>
							<Link href="/">Customer Support</Link>
						</li>
						<li>
							<Link href="/">Blog</Link>
						</li>
						<li>
							<Link href="/">Sitemap</Link>
						</li>
					</ul>
					<ul className="space-y-3 text-sm sm:text-xl">
						<li>
							<Link href="/">For business</Link>
						</li>
						<li>
							<Link href="/">For partners</Link>
						</li>
						<li>
							<Link href="/">Pricing</Link>
						</li>
						<li>
							<Link href="/">Card terminals</Link>
						</li>
						<li>
							<Link href="/">Support</Link>
						</li>
						<li>
							<Link href="/">Status</Link>
						</li>
					</ul>
					<ul className="space-y-3 text-sm sm:text-xl">
						<li>
							<Link href="/">Legal</Link>
						</li>
						<li>
							<Link href="/">Privacy Policy</Link>
						</li>
						<li>
							<Link href="/">Terms of service</Link>
						</li>
						<li>
							<Link href="/">Terms of use</Link>
						</li>
					</ul>
				</div>
			</Wrapper>
			<hr className="border-[#626060]" />
			<p className="py-4 text-center text-sm sm:text-xl">
				Copyright Gentlemend 2025. All Rights Reserved.
			</p>
		</footer>
	)
}
