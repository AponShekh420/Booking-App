import handMobile from '@/images/home/mobile-hand.png'
import Image from 'next/image'

export default function GentlemendSection() {
	return (
		<section className="m-auto mt-24 w-11/12 max-w-[1345px] sm:w-10/12">
			<div className="grid lg:grid-cols-[2fr_3fr]">
				<div className="mb-16">
					<h1 className="text-custom-red text-5xl lg:text-6xl">
						WHY GENTLEMEND?
					</h1>
					<div className="mt-8">
						<h5 className="text-3xl lg:text-5xl">STREAMLINED BOOKING</h5>
						<p>Find and book treatments in just a few clicks.</p>
					</div>
					<div className="my-6">
						<h5 className="text-3xl lg:text-5xl">Trusted Experts</h5>
						<p>Find and book treatments in just a few clicks.</p>
					</div>
					<div>
						<h5 className="text-3xl lg:text-5xl">Tailored for Men</h5>
						<p>Find and book treatments in just a few clicks.</p>
					</div>
					<button>Search for treatments</button>
				</div>
				<div className="relative h-[27rem] overflow-hidden lg:h-[42rem]">
					<Image className="object-cover" src={handMobile} alt="mobile-hand" />
					<div className="absolute right-1 top-5 lg:top-32">
						<h1 className="flex flex-col text-4xl font-extrabold lg:text-6xl">
							<span>
								Find the Right <br /> Treatment
							</span>
							<span className="text-custom-red">
								in Minutes,
								<br /> Not Hours.
							</span>
						</h1>
					</div>
				</div>
			</div>
		</section>
	)
}
