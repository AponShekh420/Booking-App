import Wrapper from '@/components/common/Wrapper'
import handMobile from '@/images/home/mobile-hand.png'
import Image from 'next/image'

export default function GentlemendSection() {
	return (
		<Wrapper className="w-full">
			<section className="mt-[65.59px] w-full">
				<div className="grid items-center md:grid-cols-[2fr_3fr]">
					<div className="relative mb-7 h-full py-8 pl-5 pr-0 sm:pl-0 md:mb-2 md:py-2 md:pt-9 xl:mb-16 xl:py-8 xl:pt-28">
						<h5 className="font-heading text-5xl uppercase text-custom-red xs:text-5xl sm:text-6xl md:text-4xl lg:text-5xl 2xl:text-7xl">
							WHY GENTLEMEND?
						</h5>
						<div className="mt-8 sm:mt-9 md:mt-4 lg:mt-10 xl:mt-11 2xl:mt-12">
							<h4 className="font-heading text-3xl uppercase xs:text-4xl sm:text-5xl md:text-3xl lg:text-4xl 2xl:text-6xl">
								STREAMLINED BOOKING
							</h4>
							<p className="text-xl md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
								Find and book treatments in just a few clicks.
							</p>
						</div>
						<div className="my-4 sm:my-5 md:my-3 lg:my-4 xl:my-5 2xl:my-6">
							<h4 className="font-heading text-3xl uppercase xs:text-4xl sm:text-5xl md:text-3xl lg:text-4xl 2xl:text-6xl">
								Trusted Experts
							</h4>
							<p className="text-xl md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
								Find and book treatments in just a few clicks.
							</p>
						</div>
						<div>
							<h4 className="font-heading text-3xl uppercase xs:text-4xl sm:text-5xl md:text-3xl lg:text-4xl 2xl:text-6xl">
								Tailored for Men
							</h4>
							<p className="text-xl md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
								Find and book treatments in just a few clicks.
							</p>
						</div>
						<button className="mt-9 w-auto rounded-3xl bg-custom-red px-8 py-3 text-xl font-medium text-white hover:bg-black hover:text-white md:mt-3 md:px-5 md:py-2 md:text-sm lg:mt-8 lg:px-6 lg:py-2 lg:text-lg xl:mt-9 xl:px-8 xl:py-3 xl:text-xl">
							Search for treatments
						</button>
					</div>
					<div className="relative h-fit overflow-hidden px-2 pt-10 sm:px-0">
						<Image
							className="h-[25rem] w-[80%] max-w-[549px] object-cover object-left-top xs:h-[30rem] sm:h-[35rem] md:h-[22rem] md:w-7/12 lg:h-[32rem] lg:w-8/12 xl:h-[40rem] xl:w-full"
							src={handMobile}
							alt="mobile-hand"
						/>
						<div className="md:-translate-y-6/12 absolute right-10 top-5 xs:top-6 sm:top-7 md:top-24 lg:right-6 lg:top-1/2 lg:-translate-y-1/2 xl:right-10">
							<h4 className="flex flex-col font-heading text-3xl uppercase xs:text-5xl sm:text-6xl md:text-[2.7rem] lg:text-6xl xl:text-7xl xl:text-[65px] 2xl:text-[4.9rem]">
								<span>
									Find the Right <br /> Treatment
								</span>
								<span className="text-custom-red">
									in Minutes,
									<br /> Not Hours.
								</span>
							</h4>
						</div>
						<div className="absolute right-0 top-0 z-[-1] h-full w-4/5 bg-[#F3F3F3]"></div>
					</div>
				</div>
			</section>
		</Wrapper>
	)
}
