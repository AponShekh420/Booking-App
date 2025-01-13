import Wrapper from '@/components/common/Wrapper'
import confidence from '@/images/home/confidence.png'
import Image from 'next/image'
export default function CreateConfidenceSection() {
	return (
		<section className="mt-[84.68px]">
			<Wrapper>
				<div className="grid w-full overflow-hidden rounded-[10px] md:grid-cols-[8fr_8fr] xl:grid-cols-[7fr_8fr] md:h-[370px] lg:h-[532px] bg-black">
					<div className="w-full h-full">
						<Image
							src={confidence}
							alt="confidence"
							className="h-full w-full object-cover object-bottom"
						/>
					</div>
					<div className="relative max-h-full grid place-content-center bg-black px-4 py-10 text-white sm:px-12 sm:py-12 md:px-6 md:py-6 lg:px-12 lg:py-12 lg:-left-1 lg:rounded-[10px]">
						<h1 className="text-[2.3rem] md:text-[2.2rem] lg:text-[2.6rem] xl:text-[3.6rem] font-[700] uppercase leading-snug sm:text-[4rem]">
							Action Creates <span className="text-custom-red">Confidence</span>
						</h1>
						<h4 className="lg:py-5 py-5 md:py-3 font-heading text-[1.8rem] md:text-[1.5rem] font-[700] uppercase leading-snug sm:text-[47.44px] lg:text-[32.44px] 2xl:text-[36.44px] xl:text-[33.44px]">
							Subscribe to Our Newsletter for Expert Tips, Exclusive Deals, and
							the Latest in Men&apos;s Treatments!
						</h4>
						<form className="">
							<div className="flex h-10 w-full overflow-hidden rounded-lg sm:h-[4rem] lg:h-[3.5rem] xl:h-[4rem] md:h-[2.6rem]">
								<input
									type="text"
									className="w-full border-none text-sm font-medium outline-none placeholder:text-black focus:border-none focus:outline-none sm:text-lg lg:text-md xl:text-lg md:text-sm"
									placeholder="PLEASE ENTER YOUR EMAIL"
								/>
								<button className="hover:text-white hover:border-blue-600 hover:bg-blue-600 relative flex h-full items-center text-nowrap border-2 border-custom-red bg-custom-red px-4 pt-[1%] font-heading text-xl text-white outline-none sm:px-8 lg:px-5 xl:px-8 md:px-5 sm:text-[2.5rem] lg:text-[1.7rem] xl:text-[2.5rem] md:text-[1.5rem] whitespace-nowrap">
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
