import Wrapper from '@/components/common/Wrapper'
import confidence from '@/images/home/confidence.png'
import Image from 'next/image'
export default function CreateConfidenceSection() {
	return (
		<section className='mt-[48.68px]'>
			<Wrapper>
				<div className='flex h-[532px] w-full rounded-[10px] overflow-hidden'>
					<div className='w-5/12 overflow-hidden'>
						<Image src={confidence} alt="confidence" className='h-full w-full object-cover object-top' />
					</div>
					<div className='bg-black p-[57px] w-7/12 rounded-r-[10px]'>
						<h1 className='font-[700] text-[69.78px] leading-[83.73px] text-white uppercase'>Action Creates <span className='text-custom-red'>Confidence</span></h1>
						<h4 className='font-[700] font-heading text-[47.44px] leading-[56.93px] text-white uppercase mt-[22px]'>
							Subscribe to Our Newsletter for Expert Tips, Exclusive Deals, and
							the Latest in Men&apos;s Treatments!
						</h4>
						<form className='mt-[44px]'>
							<div className='h-[68.34px] w-full flex'>
								<input type="text" className='w-full outline-none border-none focus:outline-none focus:border-none rounded-tl-[13.14px] rounded-bl-[13.14px]' placeholder='PLEASE ENTER YOUR EMAIL'/>
								<button className='outline-none border-none h-full w-[300.3px] rounded-tr-[13.14px] rounded-br-[13.14px] bg-custom-red font-[700] text-white text-[40.52px] leading-[48.62px]'>SIGN UP</button>
							</div>
						</form>
					</div>
				</div>
			</Wrapper>
		</section>
	)
}
