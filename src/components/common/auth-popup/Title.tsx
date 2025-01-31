const Title = ({title, className}: {title: string, className?: string}) => {
  return (
      <h3 className={`${className} xs:text-4xl text-3xl font-bold text-center mt-5`}>{title}</h3>
  );
}

export default Title;