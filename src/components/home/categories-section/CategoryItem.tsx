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
  slideTo: (index: number) => void;
  index: number,
}


const CategoryItem: React.FC<CategoryProps> = ({category, active, setActive, slideTo, index}) => {
  const [action, setAction] = useState<boolean>(false);

  return (
    <div 
      className="flex items-center justify-center flex-col cursor-pointer" 
      onMouseOver={()=> setAction(true)} 
      onMouseLeave={() => setAction(false)} 
      onClick={()=> {
        setActive(category?.text)
        slideTo(index * 4)
      }
    }>

      {/* className={`w-[${(category?.width -10) + "px"}] h-[${(category?.height -10) + "px"}] xl:w-[${category?.width + "px"}] xl:h-[${category?.height + "px"}]`} */}
      <div className="sm:h-[27px] h-[24px]">
        <Image
          src={action || active == category.text ? category?.hoverIcon : category?.icon}
          alt={category?.text}
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
      <p className={`sm:text-[11.124px] text-[9.124px] font-semibold leading-[21.08px] text-center mt-[5.51px] break-keep ${action || active == category.text ? "text-[#E9082A]": "text-black"}`}>
        {category?.text}
      </p>
      {
        active == category.text && (
          <Image
            className="mt-[4.61px]"
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