import Wrapper from '@/components/common/Wrapper'
import confidence from '@/images/home/confidence.png'
import Image from 'next/image'
export default function CreateConfidenceSection() {
	return (
<<<<<<< HEAD
		<section className='mt-[48.68px]'>
			<Wrapper>
				<div className='flex h-[532px] w-full rounded-[10px] overflow-hidden'>
					<div className='w-5/12 overflow-hidden'>
						<Image src={confidence} alt="confidence" className='h-full w-full object-cover object-top' />
					</div>
					<div className='bg-black p-[57px] w-7/12 rounded-[10px]'>
						<h1 className='font-[700] text-[69.78px] leading-[83.73px] text-white uppercase'>Action Creates <span className='text-custom-red'>Confidence</span></h1>
						<h4 className='font-[700] font-heading text-[47.44px] leading-[56.93px] text-white uppercase mt-[22px]'>
							Subscribe to Our Newsletter for Expert Tips, Exclusive Deals, and
							the Latest in Men&apos;s Treatments!
						</h4>
						<form className='mt-[44px]'>
							<div className='h-[68.34px] w-full flex'>
								<input type="text" className='w-full outline-none border-none focus:outline-none focus:border-none rounded-tl-[13.14px] rounded-bl-[13.14px]' placeholder='PLEASE ENTER YOUR EMAIL'/>
								<button className='outline-none border-none h-full w-[300.3px] rounded-tr-[13.14px] rounded-br-[13.14px] bg-custom-red font-[700] text-white text-[40.52px] leading-[48.62px]'>SIGN UP</button>
=======
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
>>>>>>> 99087aeaaa31ccadcaa6cec1898cffc373d5d46d
							</div>
						</form>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}
