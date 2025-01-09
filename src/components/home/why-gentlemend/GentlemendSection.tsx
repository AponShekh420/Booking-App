import Wrapper from '@/components/common/Wrapper'
import handMobile from '@/images/home/mobile-hand.png'
import Image from 'next/image'

export default function GentlemendSection() {
	return (
<<<<<<< HEAD
		<Wrapper>
			<section className="mt-[48.68px] w-full">
				<div className="grid items-center lg:grid-cols-[2fr_3fr]">
					<div className="mb-16">
						<h1 className="text-5xl text-custom-red lg:text-6xl">
							WHY GENTLEMEND?
=======
		<section className="m-auto mt-24 w-11/12 max-w-[1512px] sm:w-10/12">
			<div className="grid items-center lg:grid-cols-[2fr_3fr]">
				<div className="mb-16">
					<h1 className="text-5xl text-custom-red lg:text-6xl">
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
					<button className="mt-24 rounded-3xl bg-custom-red px-8 py-3 text-white">
						Search for treatments
					</button>
				</div>
				<div className="relative h-[27rem] overflow-hidden py-10 sm:h-[42rem]">
					<Image
						className="w-[19rem] max-w-[549px] object-cover sm:w-full"
						src={handMobile}
						alt="mobile-hand"
					/>
					<div className="absolute right-2 top-[28%] -translate-y-1/2 sm:right-[10%] sm:top-1/2 2xl:right-[15%]">
						<h1 className="flex flex-col text-4xl font-extrabold md:text-6xl 2xl:text-[5rem]">
							<span>
								Find the Right <br /> Treatment
							</span>
							<span className="text-custom-red">
								in Minutes,
								<br /> Not Hours.
							</span>
>>>>>>> 99087aeaaa31ccadcaa6cec1898cffc373d5d46d
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
					<div className="relative h-[27rem] overflow-hidden py-10 lg:h-[42rem]">
						<Image
							className="max-w-[549px] object-cover"
							src={handMobile}
							alt="mobile-hand"
						/>
						<div className="absolute right-10 top-1/2 -translate-y-1/2">
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
						<div className="absolute right-0 top-0 z-[-1] h-full w-4/5 bg-[#F3F3F3]"></div>
					</div>
				</div>
			</section>
		</Wrapper>
	)
}
