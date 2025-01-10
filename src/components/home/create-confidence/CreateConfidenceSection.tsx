import Wrapper from '@/components/common/Wrapper'
import confidence from '@/images/home/confidence.png'
import Image from 'next/image'
export default function CreateConfidenceSection() {
	return (
		<section className="mt-[84.68px]">
			<Wrapper>
				<div className="grid w-full overflow-hidden rounded-lg lg:grid-cols-[7fr_8fr]">
					<div className="">
						<Image
							src={confidence}
							alt="confidence"
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="relative grid place-content-center bg-black px-4 py-10 text-white sm:px-12 sm:py-12 lg:-left-1 lg:rounded-lg">
						<h1 className="text-[2.3rem] font-[700] uppercase leading-snug sm:text-[4rem]">
							Action Creates <span className="text-custom-red">Confidence</span>
						</h1>
						<h4 className="py-5 font-heading text-[1.8rem] font-[700] uppercase leading-snug sm:text-[47.44px]">
							Subscribe to Our Newsletter for Expert Tips, Exclusive Deals, and
							the Latest in Men&apos;s Treatments!
						</h4>
						<form className="">
							<div className="flex h-10 w-full overflow-hidden rounded-lg sm:h-[4rem]">
								<input
									type="text"
									className="w-full border-none text-sm font-medium outline-none placeholder:text-black focus:border-none focus:outline-none sm:text-lg"
									placeholder="PLEASE ENTER YOUR EMAIL"
								/>
								<button className="hover:text-white hover:border-blue-600 hover:bg-blue-600 relative flex h-full items-center text-nowrap border-2 border-custom-red bg-custom-red px-4 pt-[1%] font-heading text-xl text-white outline-none sm:px-8 sm:text-[2.5rem]">
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
