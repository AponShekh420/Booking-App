import Wrapper from '@/components/common/Wrapper'
import confidence from '@/images/home/confidence.png'
import Image from 'next/image'
export default function CreateConfidenceSection() {
	return (
		<section className="mt-10">
			<Wrapper>
				<div className="grid overflow-hidden rounded-lg lg:grid-cols-[9fr_10fr]">
					<div>
						<Image className="object-cover" src={confidence} alt="confidence" />
					</div>
					<div className="relative grid place-content-center rounded-lg bg-black p-5 text-white lg:-left-4 lg:p-8">
						<h1 className="text-3xl lg:text-6xl 2xl:text-[5rem]">
							Action Creates <span className="text-custom-red">Confidence</span>
						</h1>
						<h4 className="my-14 text-xl lg:text-4xl 2xl:text-5xl">
							Subscribe to Our Newsletter for Expert Tips, Exclusive Deals, and
							the Latest in Men&apos;s Treatments!
						</h4>
						<form>
							<div className="flex h-12 overflow-hidden rounded-md bg-white md:h-16">
								<input
									placeholder="Please enter your email"
									className="block h-full w-full border-none text-black placeholder:text-black focus:border-none focus:outline-none"
									type="text"
								/>
								<button className="black text-nowrap border border-custom-red bg-custom-red px-5 font-heading text-xl lg:text-3xl">
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
