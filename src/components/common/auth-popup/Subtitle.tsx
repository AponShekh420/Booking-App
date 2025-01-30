const Subtitle = ({subtitle, className}: {subtitle: string, className?: string}) => {
  return (
      <p className={`${className} sm:text-xl xs:text-lg text-md text-center sm:w-7/12 w-full xs:w-10/12 mt-1 leading-7`}>{subtitle}</p>
  );
}

export default Subtitle;