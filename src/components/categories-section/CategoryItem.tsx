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
        slideTo(index)
      }
    }>
      <Image
        src={action || active == category.text ? category?.hoverIcon : category?.icon}
        alt={category?.text}
        width={category?.width}
        height={category?.height}
      />
      <p className={`text-[12.36px] font-[600] leading-[21.08px] text-center mt-[5.51px] break-keep ${action || active == category.text ? "text-[#E9082A]": "text-black"}`}>
        {category?.text}
      </p>
      {
        active == category.text && (
          <Image
            className="mt-[4.88px]"
            src={"/assets/icons/categories/arrows/down-arrow.svg"}
            alt={"Arrow"}
            width={"24"}
            height={"24"}
          />
        )
      }
    </div>
  );
}

export default CategoryItem;