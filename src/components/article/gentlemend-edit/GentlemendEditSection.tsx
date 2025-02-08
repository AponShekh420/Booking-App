import Wrapper from '@/components/common/Wrapper'
import SearchBtn from './SearchBtn'

export default function GentlemendEditSection() {
	return (
		<Wrapper>
			<div className="mt-[70px] grid font-body sm:grid-cols-[175px_1fr] sm:gap-x-[20px] md:grid-cols-[220px_1fr] md:gap-x-[30px] lg:grid-cols-[250px_1fr] lg:gap-x-[45px] xl:grid-cols-[280px_1fr] xl:gap-x-[50px] 2xl:grid-cols-[290px_1fr] 2xl:gap-x-[70px]">
				<div className="border-b-[0.6px] border-black pb-[14px] sm:border-b-0 sm:border-r-[0.6px] lg:pb-[30px]">
					<h5 className="hidden sm:block font-heading text-[34.72px] font-[700] uppercase leading-[52.08px] text-custom-red sm:text-[42.72px] sm:leading-[62.08px] md:text-[50.72px] md:leading-[72.08px] lg:text-[58.72px] lg:leading-[82.08px] xl:text-[64.288px] xl:leading-[80.43px]">
						THE <br/>GENTLEMEND <br/>EDIT
					</h5>
					<h5 className="sm:hidden block font-heading text-[34.72px] font-[700] uppercase leading-[52.08px] text-custom-red sm:text-[42.72px] sm:leading-[62.08px] md:text-[50.72px] md:leading-[72.08px] lg:text-[58.72px] lg:leading-[82.08px] xl:text-[64.288px] xl:leading-[80.43px]">
						THE GENTLEMEND EDIT
					</h5>
					<h5 className="font-body text-[17.65px] font-medium xs:text-[24.23px] sm:hidden">
						Explore Freely, Learn Confidently!
					</h5>
					<button className="mx-auto mt-[40px] hidden h-[35px] bg-custom-red px-8 text-white transition-colors duration-300 hover:bg-black sm:block md:text-[18px] lg:mt-[50px] xl:mt-[57px] lg:h-[45.4px] lg:w-[135.05px] rounded-[89.66px] lg:text-[20.18px] font-[400] lg:leading-[34.41px]">
						See All
					</button>
				</div>
				<div>
					<h5 className="hidden font-body text-[22px] font-medium leading-[40px] sm:block sm:text-[27.23px] md:text-[27px] xl:text-[31.23px]">
						Explore Freely, Learn Confidently!
					</h5>
					<div className="mb-[40px] mt-[26px] grid grid-cols-2 gap-[16px] xs:grid-cols-3 sm:mt-[40px] lg:mt-[50px] lg:gap-[20px] xl:mt-[55px] xl:gap-[24px]">
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

				<button className="mx-auto flex h-[32.27px] w-[121.19px] items-center justify-center rounded-[64.28px] bg-custom-red text-[14.46px] text-white transition-colors duration-300 hover:bg-black sm:hidden">
					Search Now
				</button>
			</div>
		</Wrapper>
	)
}
