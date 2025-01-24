export default function ProfileHeading({ title }: { title: string }) {
	return (
		<h1 className="font-body text-[34.72px] font-[700] capitalize leading-[33.08px] text-black sm:text-[42.72px] sm:leading-[43.08px] md:text-[35px] md:leading-[32.08px] lg:text-[40px] lg:leading-[50.08px] xl:text-[48px] xl:leading-[53px]">
			{title}
		</h1>
	)
}
