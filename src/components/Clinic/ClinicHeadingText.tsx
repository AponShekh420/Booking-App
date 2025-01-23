export default function ClinicHeadingText({ title }: { title: string }) {
	return (
		<h1 className="text-[34.72px] font-[700] uppercase leading-[40.08px] text-custom-red sm:text-[42.72px] sm:leading-[62.08px] md:text-[50.72px] md:leading-[72.08px] lg:text-[58.72px] lg:leading-[82.08px] xl:text-[64.288px] xl:leading-[80.43px]">
			{title}
		</h1>
	)
}
