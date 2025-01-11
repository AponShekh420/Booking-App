import Wrapper from '@/components/common/Wrapper'
import handMobile from '@/images/home/mobile-hand.png'
import Image from 'next/image'

export default function GentlemendSection() {
	return (
		<Wrapper className="w-full">
			<section className="mt-[65.59px] w-full">
				<div className="grid items-center xl:grid-cols-[2fr_3fr]">
					<div className="relative mb-16 py-8 pl-5 pr-20 sm:pr-0">
						<h1 className="font-bold text-custom-red 2xl:text-7xl xs:text-5xl text-5xl sm:text-6xl uppercase">
							WHY GENTLEMEND?
						</h1>
						<div className="2xl:mt-12 xl:mt-11 sm:mt-9 mt-8 md:mt-10">
							<h1 className="sm:text-5xl xs:text-4xl text-3xl font-bold 2xl:text-6xl uppercase">
								STREAMLINED BOOKING
							</h1>
							<p className="text-xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-md">
								Find and book treatments in just a few clicks.
							</p>
						</div>
						<div className="2xl:my-6 xl:my-5 lg:my-4 sm:my-5 my-4 ">
							<h1 className="sm:text-5xl xs:text-4xl text-3xl font-bold 2xl:text-6xl uppercase">
								Trusted Experts
							</h1>
							<p className="text-xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-md">
								Find and book treatments in just a few clicks.
							</p>
						</div>
						<div>
							<h1 className="sm:text-5xl xs:text-4xl text-3xl font-bold 2xl:text-6xl uppercase">
								Tailored for Men
							</h1>
							<p className="text-xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-md">
								Find and book treatments in just a few clicks.
							</p>
						</div>
						<button className="mt-9 rounded-3xl bg-custom-red px-8 py-3 text-xl font-medium text-white hover:bg-black hover:text-white">
							Search for treatments
						</button>
						<div className="absolute left-0 top-0 z-[-1] h-full w-[90%] bg-[#F3F3F3] xl:hidden"></div>
					</div>
					<div className="relative h-fit overflow-hidden px-2 pt-10 sm:px-0">
						<Image
							className="xs:h-[30rem] h-[25rem] w-[80%] max-w-[549px] object-cover object-left-top sm:h-[35rem] lg:h-[40rem] lg:w-full"
							src={handMobile}
							alt="mobile-hand"
						/>
						<div className="absolute right-10 md:top-12 top-5 lg:right-32 lg:top-1/2 sm:top-7 lg:-translate-y-1/2 xl:right-10 xs:top-6">
							<h1 className="xs:text-5xl flex flex-col text-3xl font-bold uppercase sm:text-6xl md:text-7xl lg:text-8xl xl:text-[65px] 2xl:text-[4.9rem]">
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
