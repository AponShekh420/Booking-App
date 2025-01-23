export default function ClinicHeadingText({ title }: { title: string }) {
	return (
		<h1 className="font-heading text-[34.72px] font-[700] capitalize leading-[33.08px] text-black sm:text-[42.72px] sm:leading-[43.08px] md:text-[35px] md:leading-[32.08px] lg:text-[40px] lg:leading-[50.08px] xl:text-[50px] xl:leading-[53.43px]">
			{title}
		</h1>
	)
}
