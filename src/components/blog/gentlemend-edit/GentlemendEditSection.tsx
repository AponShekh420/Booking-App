import Wrapper from '@/components/common/Wrapper'
import SearchBtn from './SearchBtn'

export default function GentlemendEditSection() {
	return (
		<Wrapper>
			<div className="md:mt-[70px] mt-4 sm:mt-10 grid font-body sm:grid-cols-[210px_1fr] sm:gap-x-[20px] md:grid-cols-[250px_1fr] md:gap-x-[30px] lg:grid-cols-[295px_1fr] lg:gap-x-[40px] xl:grid-cols-[320px_1fr] xl:gap-x-[40px] 2xl:grid-cols-[330px_1fr] 2xl:gap-x-[50px]">
				<div className="border-b-[0.6px] border-black pb-[14px] sm:border-b-0 sm:border-r-[0.6px] lg:pb-[30px]">
					<h5 className="hidden sm:block font-heading text-[34.72px] font-[700] uppercase leading-[52.08px] text-custom-red sm:text-[42.72px] sm:leading-[45.08px] md:text-[50.72px] md:leading-[55.08px] lg:text-[58.72px] lg:leading-[65.08px] xl:text-[64.288px] xl:leading-[70.43px]">
						OUR <br/>GENTLEMENDLY <br/>ADVICE
					</h5>
					<h5 className="sm:hidden block font-heading text-[34.72px] font-[700] uppercase leading-[40.08px] text-custom-red sm:text-[42.72px] md:text-[50.72px] lg:text-[58.72px] xl:text-[64.288px] sm:leading-[45.08px] md:leading-[55.08px] lg:leading-[65.08px] xl:leading-[70.43px]">
						OUR GENTLEMENDLY ADVICE
					</h5>
					<h5 className="font-body mt-1 sm:hidden">
						Explore Freely, Learn Confidently!
					</h5>
					<button className="mx-auto hidden h-[35px] bg-custom-red px-8 text-white transition-colors duration-300 hover:bg-black sm:block md:text-[18px] lg:h-[45.4px] lg:w-[135.05px] rounded-[89.66px] lg:text-[20.18px] font-[400] lg:leading-[34.41px] mt-4 lg:mt-5 xl:mt-6">
						See All
					</button>
				</div>
				<div>
					<h5 className="hidden font-body text-[22px] leading-[40px] sm:block sm:text-[20.23px] md:text-[27px] xl:text-[31.23px]">
						Explore Freely, Learn Confidently!
					</h5>
					<div className="mb-[40px] mt-[26px] flex flex-wrap gap-[10px] sm:mt-[15px] lg:mt-[30px] lg:gap-[16px] xl:mt-[35px] xl:gap-[20px]">
						<SearchBtn name="Trending" />
						<SearchBtn name="Anti-Wrinkle" />
						<SearchBtn name="Non-Surgical" />
						<SearchBtn name="Sweat Therapy" />
						<SearchBtn name="Skin" />
						<SearchBtn name="Face & Jawline" />
						<SearchBtn name="Derma Fill" />
						<SearchBtn name="Anti Age" />
						<SearchBtn name="Body" />
						<SearchBtn name="Dental" />
						<SearchBtn name="Removal" />
						<SearchBtn name="PRP Treatment" />
						<SearchBtn name="Derma Filler" />
						<SearchBtn name="Hair" />
						<SearchBtn name="Fat Reduction" />
					</div>
				</div>

				<button className="mx-auto -mt-3 sm:mt-0 flex h-[32.27px] w-[121.19px] items-center justify-center rounded-[64.28px] bg-custom-red text-[14.46px] text-white transition-colors duration-300 hover:bg-black sm:hidden">
					Search Now
				</button>
			</div>
		</Wrapper>
	)
}
