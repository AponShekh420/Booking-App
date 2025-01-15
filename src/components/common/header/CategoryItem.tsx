import Image from "next/image";
import { SetStateAction, useState } from "react";


interface CategoryProps {
  category: {
    icon: string,
    text: string,
    width: number,
    height: number,
    hoverIcon: string,
  },
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  index: number,
}


const CategoryItem: React.FC<CategoryProps> = ({category, active, setActive, index}) => {
  const [action, setAction] = useState<boolean>(false);

  return (
    <div 
      className="flex items-center justify-center flex-col cursor-pointer" 
      onMouseOver={()=> setAction(true)} 
      onMouseLeave={() => setAction(false)} 
      onClick={()=> {
        setActive(category?.text)
      }
    }>

      {/* className={`w-[${(category?.width -10) + "px"}] h-[${(category?.height -10) + "px"}] xl:w-[${category?.width + "px"}] xl:h-[${category?.height + "px"}]`} */}
      <div className="md:h-[20px] sm:h-[18px] h-[17px]">
        <Image
          src={action || active == category.text ? category?.hoverIcon : category?.icon}
          alt={category?.text}
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
      <p className={`sm:text-[10.124px] text-[8.124px] xs:text-[9px] font-semibold md:leading-[21.08px] leading-[10.08px] text-center lg:mt-[5.51px] md:mt-[5px] sm:mt-[4.50px] mt-[3.50px] break-keep ${action || active == category.text ? "text-[#E9082A]": "text-black"}`}>
        {category?.text}
      </p>
      {
        active == category.text && (
          <Image
            className="lg:mt-[4.61px] md:mt-[3.5px] mt-[3px] sm:mt-[5px]"
            src={"/assets/icons/categories/Arrows/down-arrow.svg"}
            alt={"icon"}
            width={9.68}
            height={5.74}
          />
        )
      }
    </div>
  );
}

export default CategoryItem;