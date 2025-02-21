export default function SearchBtn({ name }: { name: string }) {
	return (
		<button className="inline-flex h-[27.89px] w-fit items-center text-nowrap rounded-[56.71px] bg-black px-[16px] text-[12px] text-white transition-colors duration-300 hover:bg-custom-red xs:text-[11px] sm:px-[10px] sm:text-[10px] md:px-[16px] md:text-[12px] lg:h-[42.26px] lg:text-[16px] xl:px-[25px] xl:text-[19.33px]">
			{name}
		</button>
	)
}
