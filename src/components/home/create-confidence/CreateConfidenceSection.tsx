import Wrapper from '@/components/common/Wrapper'
import confidence from '@/images/home/confidence.png'
import Image from 'next/image'
export default function CreateConfidenceSection() {
	return (
		<section className="mt-[84.68px]">
			<Wrapper>
				<div className="grid w-full overflow-hidden rounded-[10px] bg-black md:h-[370px] md:grid-cols-[8fr_8fr] lg:h-[532px] xl:grid-cols-[7fr_8fr]">
					<div className="h-full w-full">
						<Image
							src={confidence}
							alt="confidence"
							className="h-full w-full object-cover object-bottom"
						/>
					</div>
					<div className="relative grid max-h-full place-content-center bg-black px-4 py-10 text-white sm:px-12 sm:py-12 md:px-6 md:py-6 lg:-left-1 lg:rounded-[10px] lg:px-12 lg:py-12">
						<h5 className="font-heading text-[2.3rem] font-[700] uppercase leading-snug sm:text-[4rem] md:text-[2.2rem] lg:text-[2.6rem] xl:text-[3.6rem]">
							Action Creates <span className="text-custom-red">Confidence</span>
						</h5>
						<h4 className="py-5 font-heading text-[1.8rem] font-[700] uppercase leading-snug sm:text-[47.44px] md:py-3 md:text-[1.5rem] lg:py-5 lg:text-[32.44px] xl:text-[33.44px] 2xl:text-[36.44px]">
							Subscribe to Our Newsletter for Expert Tips, Exclusive Deals, and
							the Latest in Men&apos;s Treatments!
						</h4>
						<form className="">
							<div className="flex h-10 w-full overflow-hidden rounded-lg sm:h-[4rem] md:h-[2.6rem] lg:h-[3.5rem] xl:h-[4rem]">
								<input
									type="text"
									className="lg:text-md w-full border-none text-sm font-medium outline-none placeholder:text-black focus:border-none focus:outline-none sm:text-lg md:text-sm xl:text-lg"
									placeholder="PLEASE ENTER YOUR EMAIL"
								/>
								<button className="relative flex h-full items-center whitespace-nowrap text-nowrap border-2 border-custom-red bg-custom-red px-4 pt-[1%] font-heading text-xl text-white outline-none hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:px-8 sm:text-[2.5rem] md:px-5 md:text-[1.5rem] lg:px-5 lg:text-[1.7rem] xl:px-8 xl:text-[2.5rem]">
									SIGN UP
								</button>
							</div>
						</form>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}
