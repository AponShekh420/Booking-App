import Wrapper from '@/components/common/Wrapper'
import SearchBtn from './SearchBtn'

const SearchTag = () => {
	return (
		<Wrapper>
			<div className="mt-[70px] grid font-body sm:grid-cols-[200px_1fr] sm:gap-x-[20px] md:grid-cols-[220px_1fr] md:gap-x-[30px] lg:grid-cols-[300px_1fr] lg:gap-x-[45px] xl:grid-cols-[350px_1fr] xl:gap-x-[70px] 2xl:grid-cols-[400px_1fr] 2xl:gap-x-[120px]">
				<div className="border-b-[0.6px] border-black pb-[14px] sm:border-b-0 sm:border-r-[0.6px] lg:pb-[30px]">
					<h1 className="w-fit text-[31.43px] font-bold leading-[44px] text-custom-red sm:mx-auto sm:px-2 sm:text-[50px] sm:leading-[60px] md:px-4 md:text-[55px] md:leading-[60px] lg:text-[75px] lg:leading-[80px] xl:mr-[52px] xl:text-[94.61px] xl:leading-[100px] font-heading">
						MOST POPULAR SEARCHES
					</h1>
					<h5 className="font-body text-[17.65px] sm:hidden">
						Explore Freely, Learn Confidently!
					</h5>
					<button className="mx-auto mt-[40px] hidden h-[35px] rounded-[64.28px] bg-custom-red px-8 text-white transition-colors duration-300 hover:bg-black sm:block md:text-[18px] lg:mt-[50px] lg:h-[45px] lg:text-[20px] xl:mt-[57px] xl:h-[49px] xl:text-[21.96px]">
						Search Now
					</button>
				</div>
				<div>
					<h5 className="hidden font-body text-[22px] leading-[40px] sm:block md:text-[27px] xl:text-[31.23px]">
						Explore Freely, Learn Confidently!
					</h5>
					<div className="mb-[40px] mt-[26px] grid grid-cols-2 gap-[16px] xs:grid-cols-3 sm:mt-[40px] lg:mt-[50px] lg:gap-[20px] xl:mt-[55px] xl:gap-[24px]">
						<SearchBtn name="How to regrow my hair" />
						<SearchBtn name="What are dermal fillers" />
						<SearchBtn name="Is PRP safe" />
						<SearchBtn name="Tattoo removale" />
						<SearchBtn name="Botox in London" />
						<SearchBtn name="Fat reduction options" />
						<SearchBtn name="I want whiter teeth" />
						<SearchBtn name="Hair transplant" />
						<SearchBtn name="I’m sweating too much" />
						<SearchBtn name="Dark circles" />
						<SearchBtn name="Treatments for acne" />
						<SearchBtn name="How does botox work" />
						<SearchBtn name="Jawline contouring" />
						<SearchBtn name="Under-eye bags" />
						<SearchBtn name="Stretch marks" />
					</div>
				</div>

				<button className="mx-auto flex h-[32.27px] w-[121.19px] items-center justify-center rounded-[64.28px] bg-custom-red text-[14.46px] text-white transition-colors duration-300 hover:bg-black sm:hidden">
					Search Now
				</button>
			</div>
		</Wrapper>
	)
}

export default SearchTag
