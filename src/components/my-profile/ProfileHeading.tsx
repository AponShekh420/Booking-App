export default function ProfileHeading({ title, className}: { title: string, className?: string }) {
	return (
		<h1 className={`${className} font-body text-[30.72px] font-[700] leading-[33.08px] text-black sm:text-[30.72px] sm:leading-[43.08px] md:text-[35px] md:leading-[32.08px] lg:text-[40px] lg:leading-[50.08px] xl:text-[48px] xl:leading-[53px]`}>
			{title}
		</h1>
	)
}
